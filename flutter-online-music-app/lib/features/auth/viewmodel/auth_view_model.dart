import 'package:flutter_online_music_app/core/modal/user_model.dart';
import 'package:flutter_online_music_app/core/provider/user_notifier.dart';
import 'package:flutter_online_music_app/core/utils/store.dart';
import 'package:flutter_online_music_app/features/auth/repositories/auth_repository.dart';
import 'package:fpdart/fpdart.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'auth_view_model.g.dart';

@riverpod
class AuthViewModel extends _$AuthViewModel {
  late AuthRepository _authRepository;
  late UserNotifier _user;

  @override
  AsyncValue<UserModel>? build() {
    _authRepository = ref.watch(authRepositoryProvider);
    _user = ref.watch(userNotifierProvider.notifier);
    return null;
  }

  Future signUpUser(
    String email,
    String name,
    String password,
  ) async {
    state = const AsyncValue.loading();
    final res = await _authRepository.signup(name, email, password);
    return switch (res) {
      Left(value: final l) => state =
          AsyncValue.error(l.message, StackTrace.current),
      Right(value: final r) => state = _signUp(r),
    };
  }

  AsyncValue<UserModel>? _signUp(UserModel user) {
    return state = AsyncValue.data(user);
  }

/// this function using for signup user
/// returns user data when login success
/// if request failed return error message
  Future loginUser(String email, String password) async {
    state = const AsyncValue.loading();
    final res = await _authRepository.login(email, password);

    return switch (res) {
      Left(value: final l) => state =
          AsyncValue.error(l.message, StackTrace.current),
      Right(value: final r) => _login(r),
    };
  }

  Future<AsyncValue<UserModel>?> _login(UserModel user) async {
    await Storage.writeStr("access_token", user.access_token ?? "");
    _user.addUser(user);
    return state = AsyncValue.data(user);
  }

/// this function using for check auth user
/// returns user data when login success
/// if request failed return error message
  Future authCheck() async {
    state = const AsyncValue.loading();
    final token = await Storage.readStr("access_token");
    final res = await _authRepository.checkAuth(token);
    return switch (res) {
      Left(value: final l) => state =
          AsyncValue.error(l.message, StackTrace.current),
      Right(value: final r) => _checkAuth(r),
    };
  }

  Future<AsyncValue<UserModel>?> _checkAuth(UserModel user) async {
    _user.addUser(user);
    return state = AsyncValue.data(user);
  }
}
