import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';

class Button extends StatelessWidget {
  final String text;
  final void Function() onPressed;
  final Color? bg;
  final bool isLoading;
  final OutlinedBorder? shape;
  final double? px;
  final double? py;
  final double? width;
  final double? height;
  const Button({
    Key? key,
    required this.text,
    required this.onPressed,
    this.bg,
    this.isLoading = false,
    this.shape,
    this.px,
    this.py,
    this.width,
    this.height,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: bg ?? AppColors.success700,
        minimumSize: Size(width ?? 0, height ?? 0),
        padding: EdgeInsets.symmetric(horizontal: px ?? 10, vertical: py ?? 10),
        shape: shape,
      ),
      onPressed: onPressed,
      child: Text(
        isLoading ? "Loading..." : text,
        style: const TextStyle(
          fontWeight: FontWeight.bold,
          color: AppColors.light100,
          fontSize: 18,
        ),
      ),
    );
  }
}
