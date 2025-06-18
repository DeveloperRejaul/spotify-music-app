import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';
import 'package:flutter_online_music_app/features/home/viewmodel/music_viewmodel.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class FavoritePage extends ConsumerWidget {
  const FavoritePage({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Scaffold(
      appBar: AppBar(backgroundColor: AppColors.dark600),
      backgroundColor: AppColors.dark600,
      body: ref.watch(getFavoritesProvider).when(
        data: (data) {
          return ListView.builder(
            itemCount: data.length,
            itemBuilder: (ctx, index) {
              final song = data[index];
              return ListTile(
                leading: ClipRRect(
                  borderRadius: BorderRadius.circular(100),
                  child: Image.asset(
                    'assets/images/demo.jpg',
                    height: 50,
                    width: 50,
                  ),
                ),
                title: Text(
                  song.title,
                  maxLines: 2,
                  style:const TextStyle(color: AppColors.light100),
                ),
                subtitle: Text(
                  song.name,
                  style:const TextStyle(color: AppColors.light500),
                ),
              );
            },
          );
        },
        error: (error, stackTrace) {
          return const Text(
            "Something went wrong ",
            style: TextStyle(
              color: AppColors.light100,
            ),
          );
        },
        loading: () {
          return const CircularProgressIndicator();
        },
      ),
    );
  }
}
