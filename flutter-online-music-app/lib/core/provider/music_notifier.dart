import 'package:flutter_online_music_app/core/modal/music_modal.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'music_notifier.g.dart';

@Riverpod(keepAlive: true)
class MusicNotifier extends _$MusicNotifier {
  @override
  List<MusicModal?> build() {
    return [];
  }

  addMusic(MusicModal music) {
    state = [...state, music];
  }

  addMusics(List<MusicModal> musics) {
    state = [...state, ...musics];
  }

  updateMusicFavorite(int id) {}
}
