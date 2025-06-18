import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';
import 'package:flutter_online_music_app/core/utils/navigation.dart';
import 'package:flutter_online_music_app/core/widgets/Button.dart';
import 'package:flutter_online_music_app/features/home/view/pages/create_music.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(backgroundColor: AppColors.dark600),
      backgroundColor: AppColors.dark600,
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            ClipRRect(
              borderRadius: BorderRadius.circular(100),
              child: Image.asset('assets/images/demo.jpg'),
            ),
            const SizedBox(width: 20),
            Column(
              children: <Widget>[
                const Text(
                  "Jhon Deo",
                  style: TextStyle(
                    color: AppColors.light100,
                    fontWeight: FontWeight.bold,
                    fontSize: 25,
                  ),
                ),
                Button(
                  text: "Create Music",
                  onPressed: () {
                    Nav.push(context, const CreateMusic());
                  },
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
