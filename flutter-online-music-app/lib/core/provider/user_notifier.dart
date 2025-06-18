import 'package:flutter_online_music_app/core/modal/user_model.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'user_notifier.g.dart';

@Riverpod(keepAlive: true)
class UserNotifier extends _$UserNotifier {
  @override
  UserModel? build() {
    return null;
  }

  addUser(UserModel user) {
    state = user;
  }
}
