import 'package:shared_preferences/shared_preferences.dart';

class Storage {
  static Future<SharedPreferences> _load() async {
    return await SharedPreferences.getInstance();
  }

  static Future remove(String key) async {
    final prefs = await _load();
    prefs.remove(key);
  }

  static Future<String> readStr(String key) async {
    final prefs = await _load();
    return prefs.getString(key) ?? "";
  }

  static Future writeStr(String key, String data) async {
    final prefs = await _load();
    prefs.setString(key, data);
  }
}
