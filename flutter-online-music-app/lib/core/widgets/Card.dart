import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';
import 'package:flutter_online_music_app/core/utils/color.dart';

class MusicCard extends StatelessWidget {
  final String img;
  final String name;
  final String title;
  final String color;
  final void Function()? onPressed;
  const MusicCard({
    super.key,
    required this.img,
    required this.name,
    required this.title,
    required this.color,
    this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    final double imageHeight = 170;

    return Padding(
      padding: const EdgeInsets.only(right: 10),
      child: GestureDetector(
        onTap: onPressed,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              height: imageHeight,
              width: imageHeight,
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage(img),
                  fit: BoxFit.cover,
                ),
              ),
              child: Stack(
                children: [
                  Positioned(
                    bottom: 8,
                    left: 0,
                    child: Row(
                      children: [
                        Container(
                          color: hexToColor(color),
                          height: 20,
                          width: 10,
                        ),
                        SizedBox(width: 10),
                        Text(
                          name,
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: AppColors.light400,
                            fontSize: 15,
                          ),
                        )
                      ],
                    ),
                  )
                ],
              ),
            ),
            Container(
              height: 15,
              width: imageHeight,
              color: hexToColor(color),
            ),
            SizedBox(
              width: imageHeight,
              child: Text(
                title,
                maxLines: 2,
                style: TextStyle(
                  color: AppColors.light800,
                  fontSize: 15,
                  fontWeight: FontWeight.w700,
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
