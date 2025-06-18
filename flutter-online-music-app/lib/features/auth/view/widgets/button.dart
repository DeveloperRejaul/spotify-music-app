import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';

class Button extends StatelessWidget {
  final String text;
  final void Function() onPressed;
  final Color? bg;
  final double? radius;
  final bool isLoading;
  const Button({
    Key? key,
    required this.text,
    required this.onPressed,
    this.bg,
    this.radius,
    this.isLoading = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: bg ?? AppColors.success700,
        minimumSize: const Size(double.infinity, 50),
        padding: const EdgeInsets.symmetric(horizontal: 16),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(radius ?? 10)),
        ),
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
