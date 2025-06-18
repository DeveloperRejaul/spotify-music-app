import 'dart:convert';

import 'package:flutter_online_music_app/core/constants/secret.dart';
import 'package:flutter_online_music_app/core/failure/failure.dart';
import 'package:flutter_online_music_app/core/modal/favorite_model.dart';
import 'package:flutter_online_music_app/core/modal/music_modal.dart';
import 'package:fpdart/fpdart.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'package:http/http.dart' as http;

part 'music_repository.g.dart';

@riverpod
MusicRepository musicRepository(MusicRepositoryRef ref) {
  return MusicRepository();
}

class MusicRepository {
/**
 * This Function only for creating music
 * returns created music  
*/
  Future<Either<AppFailure, MusicModal>> createMusic({
    required String name,
    required String title,
    required String image,
    required String color,
    required String url,
    required bool isFavorite,
  }) async {
    try {
      final res = await http.post(
        Uri.parse("$BASE_URL/music"),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: jsonEncode({
          "name": name,
          "title": title,
          "image": image,
          "color": color,
          "url": url,
          "isFavorite": isFavorite
        }),
      );

      if (res.statusCode != 201)
        return Left(AppFailure("Something went wrong"));
      return Right(MusicModal.fromJson(res.body));
    } catch (e) {
      return Left(AppFailure(e.toString()));
    }
  }

/**
 * This Function using for only get multiple music list of music
 * returns multiple music list
 */
  Future<Either<AppFailure, List<MusicModal>>> getMusics() async {
    try {
      final res = await http.get(Uri.parse("$BASE_URL/music"));
      if (res.statusCode != 200) {
        return Left(AppFailure("Something went wrong"));
      }

      final result = jsonDecode(res.body);
      final List<MusicModal> data = [];
      for (var i = 0; i < result.length; i++) {
        data.add(MusicModal.fromMap(result[i]));
      }
      return Right(data);
    } catch (e) {
      return Left(AppFailure(e.toString()));
    }
  }

/**
 * This Function using for update music by id
 * returns updated music 
*/
//
  Future<Either<AppFailure, MusicModal>> updateMusic({
    required int id,
    required bool isFavorite,
  }) async {
    try {
      final res = await http.put(
        Uri.parse("$BASE_URL/music/$id"),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: jsonEncode({"isFavorite": isFavorite}),
      );

      if (res.statusCode != 200) {
        return Left(AppFailure("Something went wrong"));
      }

      final data = jsonDecode(res.body);
      return Right(MusicModal.fromMap(data[1][0]));
    } catch (e) {
      return Left(AppFailure(e.toString()));
    }
  }

  /**
   *  This Function using for get all favorite music by user id
   * returns all favorite music
   */
  Future<Either<AppFailure, List<MusicModal>>> getFavorites({
    required String id,
  }) async {
    try {
      final res = await http.get(Uri.parse("$BASE_URL/favorite/user/$id"));
      if (res.statusCode != 200) {
        return Left(AppFailure("Something went wrong"));
      }
      final result = jsonDecode(res.body);
      final List<MusicModal> data = [];
      for (var i = 0; i < result.length; i++) {
        data.add(MusicModal.fromMap(result[i]));
      }
      return Right(data);
    } catch (e) {
      return Left(AppFailure(e.toString()));
    }
  }

  /**
   *  This Function using for get single favorite music by music id
   * returns single favorite music
   */
  Future<Either<AppFailure, FavoriteModel>> getFavorite({
    required String id,
  }) async {
    try {
      final res = await http.get(Uri.parse("$BASE_URL/favorite/$id"));

      if (res.statusCode != 200) {
        return Left(AppFailure("Something went wrong"));
      }
      if (res.body.isEmpty) return Left(AppFailure("Something went wrong"));
      final result = jsonDecode(res.body);
      return Right(FavoriteModel.fromMap(result));
    } catch (e) {
      return Left(AppFailure(e.toString()));
    }
  }

  /**
   *  This Function using for remove favorite music by music id
   *  returns single remove count
   */
  Future<Either<AppFailure, bool>> removeFavorite({
    required String id,
  }) async {
    try {
      final res = await http.delete(Uri.parse("$BASE_URL/favorite/$id"));
      if (res.statusCode != 200) {
        return Left(AppFailure("Something went wrong"));
      }
      return Right(true);
    } catch (e) {
      return Left(AppFailure(e.toString()));
    }
  }

  /**
   *  This Function using for remove favorite music by music id
   *  returns single remove count
   */
  Future<Either<AppFailure, FavoriteModel>> addFavorite({
    required String userId,
    required String musicId,
  }) async {
    try {
      final res = await http.post(
        Uri.parse("$BASE_URL/favorite"),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: jsonEncode({"userId": userId, "musicId": musicId}),
      );

      if (res.statusCode != 201) {
        return Left(AppFailure("Something went wrong"));
      }
      final result = jsonDecode(res.body);
      return Right(FavoriteModel.fromMap(result));
    } catch (e) {
      return Left(AppFailure(e.toString()));
    }
  }
}
