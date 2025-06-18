import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/theme.dart';
import 'package:flutter_online_music_app/core/provider/user_notifier.dart';
import 'package:flutter_online_music_app/features/auth/view/pages/login.dart';
import 'package:flutter_online_music_app/features/auth/viewmodel/auth_view_model.dart';
import 'package:flutter_online_music_app/features/home/view/pages/index.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

// 6540
void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final container = ProviderContainer();
  await container.read(authViewModelProvider.notifier).authCheck();
  runApp(
    UncontrolledProviderScope(
      container: container,
      child: const Main(),
    ),
  );
}

class Main extends ConsumerStatefulWidget {
  const Main({super.key});

  @override
  ConsumerState<ConsumerStatefulWidget> createState() => _MainState();
}

class _MainState extends ConsumerState<Main> {
  @override
  Widget build(BuildContext context) {
    final user = ref.read(userNotifierProvider);
    return MaterialApp(
      title: 'Spotify Music',
      theme: theme,
      debugShowCheckedModeBanner: false,
      home: user == null ? const Login() : const Home(),
    );
  }
}


