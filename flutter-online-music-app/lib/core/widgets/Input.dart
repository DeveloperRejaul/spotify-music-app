import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';

class Input extends StatefulWidget {
  final String hint;
  final bool passwordSuffixIcon;
  final TextEditingController? controller;
  final String label;

  const Input({
    super.key,
    required this.hint,
    this.passwordSuffixIcon = false,
    this.controller,
    required this.label,
  });

  @override
  State<Input> createState() => _InputState();
}

class _InputState extends State<Input> {
  bool isPasswordVisible = false;

  @override
  Widget build(BuildContext context) {
    final border = OutlineInputBorder(
      borderRadius: BorderRadius.circular(10),
      borderSide: BorderSide(color: AppColors.light100),
    );

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Text(
          widget.label,
          style: Theme.of(context).textTheme.labelMedium,
        ),
        TextFormField(
          decoration: InputDecoration(
            hintText: widget.hint,
            hintStyle: const TextStyle(color: Colors.grey),
            border: border,
            enabledBorder: border,
            focusedBorder: border,
            suffixIcon: widget.passwordSuffixIcon
                ? IconButton(
                    onPressed: () {
                      setState(() {
                        isPasswordVisible = !isPasswordVisible;
                      });
                    },
                    icon: Icon(
                      isPasswordVisible
                          ? Icons.visibility
                          : Icons.visibility_off,
                    ),
                  )
                : null,
          ),
          obscureText: widget.passwordSuffixIcon ? !isPasswordVisible : false,
          obscuringCharacter: "*",
          controller: widget.controller,
          validator: (value) {
            if (value == null || value.trim().isEmpty) {
              return "Input is required";
            }
            return null;
          },
          style: const TextStyle(
            fontSize: 15,
            fontWeight: FontWeight.w500,
            color: Colors.black,
          ),
        ),
        SizedBox(height: 10),
      ],
    );
  }
}
