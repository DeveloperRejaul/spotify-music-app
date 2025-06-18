import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';
import 'package:flutter_online_music_app/core/utils/navigation.dart';
import 'package:flutter_online_music_app/core/widgets/logo.dart';
import 'package:flutter_online_music_app/features/auth/view/pages/login.dart';
import 'package:flutter_online_music_app/features/auth/view/pages/signup.dart';
import 'package:flutter_online_music_app/features/auth/view/widgets/button.dart';

class RootPage extends StatefulWidget {
  const RootPage({super.key});

  @override
  State<RootPage> createState() => _RootPageState();
}

class _RootPageState extends State<RootPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.dark700,
      body: Container(
        padding: const EdgeInsets.symmetric(horizontal: 15.0),
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment(0.8, 1),
            colors: <Color>[
              Color(0xff2c2c2c),
              Color(0xff000000),
            ],
            tileMode: TileMode.mirror,
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            logo2,
            Text(
              "Millions of songs \n Free on Spotify.",
              style: Theme.of(context).textTheme.titleLarge,
            ),
            Column(
              children: [
                Button(
                  radius: 50,
                  text: "Sign up for free",
                  onPressed: () {
                    Nav.push(context, const SignUp());
                  },
                ),
                const SizedBox(height: 10),
                Button(
                  radius: 50,
                  bg: AppColors.transparent,
                  text: "Login",
                  onPressed: () {
                    Nav.push(context, const Login());
                  },
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
