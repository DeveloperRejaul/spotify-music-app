import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';
import 'package:flutter_online_music_app/core/utils/navigation.dart';
import 'package:flutter_online_music_app/core/utils/toast.dart';
import 'package:flutter_online_music_app/core/widgets/logo.dart';
import 'package:flutter_online_music_app/features/auth/view/pages/login.dart';
import 'package:flutter_online_music_app/features/auth/view/widgets/button.dart';
import 'package:flutter_online_music_app/features/auth/view/widgets/text_input.dart';
import 'package:flutter_online_music_app/features/auth/viewmodel/auth_view_model.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class SignUp extends ConsumerStatefulWidget {
  const SignUp({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _SignUpState();
}

class _SignUpState extends ConsumerState<SignUp> {
  final _formKey = GlobalKey<FormState>();
  final TextEditingController nameController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  Future<void> handleFrom() async {
    try {
      if (_formKey.currentState!.validate()) {
        await ref.read(authViewModelProvider.notifier).signUpUser(
            emailController.text, nameController.text, passwordController.text);
      }
    } catch (e) {
      showSnackBar(context, "Something went wrong");
    }
  }

  @override
  void dispose() {
    passwordController.dispose();
    emailController.dispose();
    nameController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isLoading = ref.watch(
      authViewModelProvider.select((value) => value?.isLoading == true),
    );

    ref.listen(authViewModelProvider, (previous, next) {
      next?.when(
        data: (data) {
          showSnackBar(context, "You sign up successfully");
          return Nav.replace(context, const Login());
        },
        error: (e, s) {
          print(e);
          showSnackBar(context, "Something went wrong");
        },
        loading: () {},
      );
    });

    return Scaffold(
      backgroundColor: AppColors.dark700,
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10),
        child: SingleChildScrollView(
          child: SizedBox(
            height: MediaQuery.of(context).size.height,
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
                      label: "Name",
                      hint: "Jon deo",
                      controller: nameController,
                    ),
                    const SizedBox(height: 10),
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
                      text: "Sign up",
                      onPressed: handleFrom,
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
