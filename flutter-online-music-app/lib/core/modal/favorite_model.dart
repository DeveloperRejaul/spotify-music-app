import 'dart:convert';

class FavoriteModel {
  final String id;
  final String userId;
  final String musicId;
  final String? createdAt;
  final String? updatedAt;
  FavoriteModel({
    required this.id,
    required this.userId,
    required this.musicId,
    this.createdAt,
    this.updatedAt,
  });

  FavoriteModel copyWith({
    String? id,
    String? userId,
    String? musicId,
    String? createdAt,
    String? updatedAt,
  }) {
    return FavoriteModel(
      id: id ?? this.id,
      userId: userId ?? this.userId,
      musicId: musicId ?? this.musicId,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'userId': userId,
      'musicId': musicId,
      'createdAt': createdAt,
      'updatedAt': updatedAt,
    };
  }

  factory FavoriteModel.fromMap(Map<String, dynamic> map) {
    return FavoriteModel(
      id: map['id'] as String,
      userId: map['userId'] as String,
      musicId: map['musicId'] as String,
      createdAt: map['createdAt'] != null ? map['createdAt'] as String : null,
      updatedAt: map['updatedAt'] != null ? map['updatedAt'] as String : null,
    );
  }

  String toJson() => json.encode(toMap());

  factory FavoriteModel.fromJson(String source) =>
      FavoriteModel.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'FavoriteModel(id: $id, userId: $userId, musicId: $musicId, createdAt: $createdAt, updatedAt: $updatedAt)';
  }

  @override
  bool operator ==(covariant FavoriteModel other) {
    if (identical(this, other)) return true;

    return other.id == id &&
        other.userId == userId &&
        other.musicId == musicId &&
        other.createdAt == createdAt &&
        other.updatedAt == updatedAt;
  }

  @override
  int get hashCode {
    return id.hashCode ^
        userId.hashCode ^
        musicId.hashCode ^
        createdAt.hashCode ^
        updatedAt.hashCode;
  }
}
