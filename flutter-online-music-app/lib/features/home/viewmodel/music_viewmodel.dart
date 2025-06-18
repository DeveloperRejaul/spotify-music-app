import 'package:flutter_online_music_app/core/modal/music_modal.dart';
import 'package:flutter_online_music_app/core/provider/user_notifier.dart';
import 'package:flutter_online_music_app/features/home/repositoris/music_repository.dart';
import 'package:fpdart/fpdart.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'music_viewmodel.g.dart';

@riverpod
Future<List<MusicModal>> getMusics(GetMusicsRef ref) async {
  final res = await ref.watch(musicRepositoryProvider).getMusics();
  return switch (res) {
    Left(value: final l) => throw l.message,
    Right(value: final r) => r,
  };
}

@riverpod
Future<List<MusicModal>> getFavorites(GetFavoritesRef ref) async {
  final userId = ref.watch(userNotifierProvider)?.id;
  if (userId == null) return throw "User Id not found";
  final res = await ref.watch(musicRepositoryProvider).getFavorites(id: userId);
  return switch (res) {
    Left(value: final l) => throw l.message,
    Right(value: final r) => r,
  };
}

@riverpod
class MusicViewModel extends _$MusicViewModel {
  late MusicRepository _musicRepository;

  @override
  AsyncValue<MusicModal>? build() {
    _musicRepository = ref.read(musicRepositoryProvider);
    return null;
  }

/// This Function only for creating music
/// returns created music  
  Future createMusic({
    required String name,
    required String title,
    required String image,
    required String color,
    required String url,
    required bool isFavorite,
  }) async {
    state = AsyncValue.loading();
    final res = await _musicRepository.createMusic(
      name: name,
      title: title,
      image: image,
      color: color,
      url: url,
      isFavorite: isFavorite,
    );
    return switch (res) {
      Right(value: final r) => _createMusic(r),
      Left(value: final l) => state =
          AsyncValue.error(l.message, StackTrace.current)
    };
  }

  Future<AsyncValue<MusicModal>> _createMusic(MusicModal music) async {
    return state = AsyncValue.data(music);
  }

/// This Function using for update music by id
/// returns updated music 
  Future updateMusic({required int id, required bool isFavorite}) async {
    final res =
        await _musicRepository.updateMusic(id: id, isFavorite: isFavorite);

    return switch (res) {
      Right(value: final r) => _updateMusic(r),
      Left(value: final l) => state =
          AsyncValue.error(l.message, StackTrace.current)
    };
  }

  Future<AsyncValue<MusicModal>> _updateMusic(MusicModal music) async {
    return AsyncValue.data(music);
  }
}
