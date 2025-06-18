// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'package:flutter/material.dart';

import 'package:flutter_online_music_app/core/constants/colors.dart';
import 'package:flutter_online_music_app/core/utils/navigation.dart';

class Music extends StatefulWidget {
  final String img;
  final String name;
  final String title;
  const Music({
    super.key,
    required this.img,
    required this.name,
    required this.title,
  });

  @override
  State<Music> createState() => _MusicState();
}

class _MusicState extends State<Music> {
  double _sliderValue = 0.5;
  bool isPlaying = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.dark600,
      body: Padding(
        padding: const EdgeInsets.only(
          left: 10,
          right: 10,
          top: 40,
          bottom: 20,
        ),
        child: Column(
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                GestureDetector(
                  onTap: () => Nav.pop(context),
                  child: const Icon(
                    Icons.keyboard_arrow_down_rounded,
                    color: AppColors.light100,
                    size: 35,
                  ),
                ),
                SizedBox(
                  width: 200,
                  child: Center(
                    child: Text(
                      widget.title,
                      style: const TextStyle(color: AppColors.light100),
                      maxLines: 2,
                    ),
                  ),
                ),
                const Icon(
                  Icons.more_vert,
                  color: AppColors.light100,
                  size: 35,
                ),
              ],
            ),
            const SizedBox(height: 70),
            ClipRRect(
              borderRadius: BorderRadius.circular(10),
              child: Image.asset(
                widget.img,
                width: double.infinity,
                height: 350,
                fit: BoxFit.cover,
              ),
            ),
            const SizedBox(height: 50),
            Column(
              children: <Widget>[
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Text(
                          widget.title,
                          style: const TextStyle(
                            color: AppColors.light200,
                            fontSize: 20,
                          ),
                          maxLines: 1,
                        ),
                        Text(
                          widget.name,
                          style: const TextStyle(color: AppColors.light700),
                          maxLines: 1,
                        )
                      ],
                    ),
                    Row(
                      children: <Widget>[
                        GestureDetector(
                          child: const Icon(
                            Icons.add_circle_outline_sharp,
                            color: AppColors.light100,
                            size: 30,
                          ),
                        ),
                        const SizedBox(width: 10),
                        GestureDetector(
                          child:const Icon(
                            Icons.remove_circle_outline,
                            color: AppColors.light100,
                            size: 30,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
                // Slider part
                Slider.adaptive(
                  value: _sliderValue,
                  min: 0,
                  max: 1,
                  divisions: 10,
                  onChanged: (value) {
                    setState(() {
                      _sliderValue = value;
                    });
                  },
                ),

                // Play buttons
                Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    IconButton(
                      onPressed: () {},
                      icon:const Icon(
                        Icons.play_arrow,
                        color: AppColors.light100,
                        size: 30,
                      ),
                    ),
                    const SizedBox(width: 20),
                    Container(
                      padding:const EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        color: AppColors.dark200,
                        borderRadius: BorderRadius.circular(100),
                      ),
                      child: IconButton(
                        onPressed: () {
                          setState(() {
                            isPlaying = !isPlaying;
                          });
                        },
                        icon: Icon(
                          isPlaying ? Icons.pause : Icons.play_arrow,
                          color: AppColors.light100,
                          size: 30,
                        ),
                      ),
                    ),
                    const SizedBox(width: 20),
                    IconButton(
                      onPressed: () {},
                      icon:const Icon(
                        Icons.play_arrow,
                        color: AppColors.light100,
                        size: 30,
                      ),
                    ),
                  ],
                )
              ],
            ),
          ],
        ),
      ),
    );
  }
}
