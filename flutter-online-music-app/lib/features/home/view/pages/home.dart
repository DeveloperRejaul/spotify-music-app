import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';
import 'package:flutter_online_music_app/core/provider/user_notifier.dart';
import 'package:flutter_online_music_app/core/widgets/Button.dart';
import 'package:flutter_online_music_app/core/widgets/Card.dart';
import 'package:flutter_online_music_app/features/home/repositoris/music_repository.dart';
import 'package:flutter_online_music_app/features/home/view/widgets/bottom_bar.dart';
import 'package:flutter_online_music_app/features/home/viewmodel/music_viewmodel.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:fpdart/fpdart.dart';

class HomePage extends ConsumerStatefulWidget {
  const HomePage({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _HomePageState();
}

class _HomePageState extends ConsumerState<HomePage> {
  bool isBottomMusic = false;
  bool isFavorite = false;
  String name = "";
  String title = "";
  String img = "";
  late String id;

  @override
  Widget build(BuildContext context) {
    final musicRepo = ref.read(musicRepositoryProvider);
    final myUserId = ref.watch(userNotifierProvider)?.id;

    return Scaffold(
      appBar: AppBar(backgroundColor: AppColors.dark600),
      backgroundColor: AppColors.dark600,
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10),
        child: Stack(
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Button(
                      text: "M",
                      onPressed: () {},
                      bg: AppColors.error400,
                      shape: const CircleBorder(),
                    ),
                    const SizedBox(width: 5),
                    Button(
                      text: "All",
                      onPressed: () {},
                      bg: AppColors.success500,
                    ),
                    const SizedBox(width: 10),
                    Button(
                      text: "Music",
                      onPressed: () {},
                      bg: AppColors.dark300,
                      px: 20,
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                Text(
                  "To get you started",
                  style: Theme.of(context)
                      .textTheme
                      .titleLarge
                      ?.copyWith(fontSize: 30),
                ),
                const SizedBox(height: 10),
                // list of music display
                ref.watch(getMusicsProvider).when(
                  data: (data) {
                    return SizedBox(
                      height: 250,
                      child: ListView.builder(
                        scrollDirection: Axis.horizontal,
                        itemCount: data.length,
                        itemBuilder: (BuildContext context, int index) {
                          final song = data[index];
                          return MusicCard(
                            color: song.color,
                            img: "assets/images/demo.jpg",
                            name: song.name,
                            title: song.title,
                            onPressed: () async {
                              final res =
                                  await musicRepo.getFavorite(id: song.id);

                              final val = switch (res) {
                                Right(value: final r) => r,
                                Left() => null,
                              };

                              if (val != null && myUserId != null) {
                                if (myUserId == val.userId) {
                                  setState(() {
                                    id = song.id;
                                    name = song.name;
                                    isBottomMusic = true;
                                    title = song.title;
                                    img = "assets/images/demo.jpg";
                                    isFavorite = true;
                                  });
                                }
                              } else {
                                setState(() {
                                  id = song.id;
                                  name = song.name;
                                  isBottomMusic = true;
                                  title = song.title;
                                  img = "assets/images/demo.jpg";
                                  isFavorite = false;
                                });
                              }
                            },
                          );
                        },
                      ),
                    );
                  },
                  error: (error, stackTrace) {
                    return const  Text(
                      "Something went wrong ",
                      style: TextStyle(
                        color: AppColors.light100,
                      ),
                    );
                  },
                  loading: () {
                    return const CircularProgressIndicator();
                  },
                )
              ],
            ),
            isBottomMusic
                ? BottomBar(
                    img: img,
                    name: name,
                    title: title,
                    isFavorite: isFavorite,
                    id: id,
                    onFavorite: () async {
                      if (isFavorite) {
                        final res = await musicRepo.removeFavorite(id: id);
                        return switch (res) {
                          Right() => setState(() {
                              isFavorite = false;
                            }),
                          Left() => setState(() {
                              isFavorite = true;
                            }),
                        };
                      } else {
                        // add favorite
                        if (myUserId != null) {
                          print("add favorite");
                          final res = await musicRepo.addFavorite(
                            userId: myUserId,
                            musicId: id,
                          );
                          return switch (res) {
                            Right() => setState(() {
                                isFavorite = true;
                              }),
                            Left() => setState(() {
                                isFavorite = false;
                              })
                          };
                        }
                      }
                      ref.invalidate(getFavoritesProvider);
                    },
                  )
                : const SizedBox(),
          ],
        ),
      ),
    );
  }
}
