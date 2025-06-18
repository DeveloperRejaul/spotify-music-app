import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';
import 'package:flutter_online_music_app/core/utils/navigation.dart';
import 'package:flutter_online_music_app/features/home/view/pages/music.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:page_transition/page_transition.dart';

class BottomBar extends ConsumerStatefulWidget {
  final String id;
  final String img;
  final String name;
  final String title;
  final bool isFavorite;
  final void Function()? onFavorite;

  const BottomBar({
    super.key,
    this.onFavorite,
    required this.img,
    required this.name,
    required this.title,
    required this.isFavorite,
    required this.id,
  });

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _BottomBarState();
}

class _BottomBarState extends ConsumerState<BottomBar>
    with SingleTickerProviderStateMixin {
  late AnimationController controller;
  late Animation<double> animation;
  late AnimationStatusListener statusListener;

  bool isPlaying = false;

  @override
  void initState() {
    super.initState();
    controller = AnimationController(
        duration: const Duration(milliseconds: 2000), vsync: this);
    animation = Tween(begin: 0.0, end: 1.0).animate(controller)
      ..addListener(() {
        setState(() {});
      });

    // Define the status listener
    statusListener = (status) {
      if (status == AnimationStatus.completed) {
        setState(() => isPlaying = false);
      }
    };

    // Add the status listener to the controller
    controller.addStatusListener(statusListener);
  }

  void handlePlay() async {
    setState(() => isPlaying = !isPlaying);
    if (controller.status == AnimationStatus.completed) controller.reset();
    if (isPlaying) {
      controller.forward();
    } else {
      controller.stop();
    }
  }

  void handleMusic(BuildContext context) {
    Nav.push(
        context,
        Music(
          img: widget.img,
          name: widget.name,
          title: widget.title,
        ),
        PageTransitionType.bottomToTop);
  }

  @override
  void dispose() {
    // Remove the status listener when the widget is disposed
    controller.removeStatusListener(statusListener);
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    const double bottomBarHeight = 80;
    return Positioned(
      bottom: 10,
      left: 0,
      right: 0,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10),
        child: Container(
          height: bottomBarHeight,
          decoration: const BoxDecoration(
            color: AppColors.light700,
            borderRadius: BorderRadius.all(Radius.circular(10)),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  GestureDetector(
                    onTap: () => handleMusic(context),
                    child: Row(
                      children: [
                        const SizedBox(width: 10),
                        ClipRRect(
                          borderRadius: BorderRadius.circular(10),
                          child: Image.asset(
                            widget.img,
                            height: bottomBarHeight - 20,
                            width: bottomBarHeight - 20,
                          ),
                        ),
                        const SizedBox(width: 10),
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            const SizedBox(height: 10),
                            Text(
                              widget.name,
                              style: Theme.of(context).textTheme.labelMedium,
                            ),
                            Text(
                              widget.title,
                              style:const TextStyle(
                                color: AppColors.light400,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                  Row(
                    children: [
                      IconButton(
                        onPressed: widget.onFavorite,
                        icon: Icon(
                          widget.isFavorite
                              ? Icons.favorite
                              : Icons.favorite_outline,
                          size: 30,
                          color: AppColors.light100,
                        ),
                      ),
                      IconButton(
                        icon: Icon(
                          isPlaying ? Icons.pause : Icons.play_arrow_rounded,
                          size: 40,
                          color: AppColors.light100,
                        ),
                        onPressed: handlePlay,
                      ),
                    ],
                  )
                ],
              ),
              Padding(
                padding: const EdgeInsets.only(right: 10, left: 10, top: 5),
                child: LinearProgressIndicator(
                  value: animation.value,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
