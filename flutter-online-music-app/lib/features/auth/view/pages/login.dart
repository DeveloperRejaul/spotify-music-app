import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';
import 'package:flutter_online_music_app/core/utils/navigation.dart';
import 'package:flutter_online_music_app/core/utils/toast.dart';
import 'package:flutter_online_music_app/core/widgets/logo.dart';
import 'package:flutter_online_music_app/features/auth/view/widgets/button.dart';
import 'package:flutter_online_music_app/features/auth/view/widgets/text_input.dart';
import 'package:flutter_online_music_app/features/auth/viewmodel/auth_view_model.dart';
import 'package:flutter_online_music_app/features/home/view/pages/index.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class Login extends ConsumerStatefulWidget {
  const Login({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _LoginState();
}

class _LoginState extends ConsumerState<Login> {
  final _formKey = GlobalKey<FormState>();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  Future<void> handleFrom() async {
    if (_formKey.currentState!.validate()) {
      await ref
          .read(authViewModelProvider.notifier)
          .loginUser(emailController.text, passwordController.text);
    } else {
      showSnackBar(context, 'Something went wrong');
    }
  }

  @override
  void dispose() {
    passwordController.dispose();
    emailController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isLoading = ref.watch(
      authViewModelProvider.select((value) => value?.isLoading == true),
    );

    ref.listen(authViewModelProvider, (_, next) {
      next?.when(
        data: (data) {
          Nav.replace(context, const Home());
        },
        error: (error, st) => showSnackBar(context, "Something went wrong"),
        loading: () {},
      );
    });

    return Scaffold(
      backgroundColor: AppColors.dark700,
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10),
        child: Center(
          child: Form(
            key: _formKey,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                logo,
                const SizedBox(height: 10),
                Text(
                  "Welcome to Spotify",
                  style: Theme.of(context).textTheme.titleLarge,
                ),
                const SizedBox(height: 35),
                TextInput(
                  label: "Email",
                  hint: "example@gmail.com",
                  controller: emailController,
                ),
                const SizedBox(height: 10),
                TextInput(
                  label: "Password",
                  hint: "************",
                  controller: passwordController,
                ),
                const SizedBox(height: 12),
                Button(
                  isLoading: isLoading,
                  text: "Login",
                  onPressed: handleFrom,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
