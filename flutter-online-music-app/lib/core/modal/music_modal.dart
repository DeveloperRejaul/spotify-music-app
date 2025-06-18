// ignore_for_file: public_member_api_docs, sort_constructors_first
import 'dart:convert';

// MusicModal class
class MusicModal {
  final String id;
  final String name;
  final String title;
  final String image;
  final String color;
  final String url;
  final String? createdAt;
  final String? updatedAt;

  MusicModal({
    required this.id,
    required this.name,
    required this.title,
    required this.image,
    required this.color,
    required this.url,
    this.createdAt,
    this.updatedAt,
  });

  MusicModal copyWith({
    String? id,
    String? name,
    String? title,
    String? image,
    String? color,
    String? url,
    String? createdAt,
    String? updatedAt,
  }) {
    return MusicModal(
      id: id ?? this.id,
      name: name ?? this.name,
      title: title ?? this.title,
      image: image ?? this.image,
      color: color ?? this.color,
      url: url ?? this.url,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }

  Map<String, dynamic> toMap() {
    return <String, dynamic>{
      'id': id,
      'name': name,
      'title': title,
      'image': image,
      'color': color,
      'url': url,
      'createdAt': createdAt,
      'updatedAt': updatedAt,
    };
  }

  factory MusicModal.fromMap(Map<String, dynamic> map) {
    return MusicModal(
      id: map['id'] as String,
      name: map['name'] as String,
      title: map['title'] as String,
      image: map['image'] as String,
      color: map['color'] as String,
      url: map['url'] as String,
      createdAt: map['createdAt'] != null ? map['createdAt'] as String : null,
      updatedAt: map['updatedAt'] != null ? map['updatedAt'] as String : null,
    );
  }

  String toJson() => json.encode(toMap());

  factory MusicModal.fromJson(String source) =>
      MusicModal.fromMap(json.decode(source) as Map<String, dynamic>);

  @override
  String toString() {
    return 'MusicModal(id: $id, name: $name, title: $title, image: $image, color: $color, url: $url, createdAt: $createdAt, updatedAt: $updatedAt)';
  }

  @override
  bool operator ==(covariant MusicModal other) {
    if (identical(this, other)) return true;

    return other.id == id &&
        other.name == name &&
        other.title == title &&
        other.image == image &&
        other.color == color &&
        other.url == url &&
        other.createdAt == createdAt &&
        other.updatedAt == updatedAt;
  }

  @override
  int get hashCode {
    return id.hashCode ^
        name.hashCode ^
        title.hashCode ^
        image.hashCode ^
        color.hashCode ^
        url.hashCode ^
        createdAt.hashCode ^
        updatedAt.hashCode;
  }
}
