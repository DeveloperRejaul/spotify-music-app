import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';

class TextInput extends StatelessWidget {
  final String label;
  final String hint;
  final String? error;
  final TextEditingController controller;

  const TextInput({
    super.key,
    required this.label,
    required this.hint,
    this.error,
    required this.controller,
  });

  @override
  Widget build(BuildContext context) {
    final border = OutlineInputBorder(
      borderSide: const BorderSide(color: AppColors.light600),
      borderRadius: BorderRadius.circular(10.0),
    );
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: Theme.of(context).textTheme.labelMedium,
        ),
        const SizedBox(height: 5),
        TextFormField(
          controller: controller,
          style: const TextStyle(color: AppColors.light200),
          cursorColor: AppColors.dark700,
          decoration: InputDecoration(
            hintText: hint,
            fillColor: AppColors.light600,
            filled: true,
            border: border,
            focusedBorder: border,
            enabledBorder: border,
            errorText: error,
            errorBorder: border,
          ),
          obscureText: label.toLowerCase().contains("password") ? true : false,
          obscuringCharacter: "*",
          validator: (String? value) {
            if (value != null && value.trim().isEmpty) {
              return "$label must be required";
            }
            return null;
          },
        ),
      ],
    );
  }
}
