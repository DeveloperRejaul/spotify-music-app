import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';

final theme = ThemeData(
  colorScheme:
      ColorScheme.fromSeed(seedColor: const Color.fromRGBO(103, 58, 183, 1)),
  useMaterial3: true,
  textTheme: const TextTheme(
    titleLarge: TextStyle(
      fontWeight: FontWeight.bold,
      color: AppColors.light200,
      fontSize: 35,
    ),
    labelMedium: TextStyle(
      color: AppColors.light200,
      fontWeight: FontWeight.w700,
      fontSize: 15,
    ),
  ),
);
