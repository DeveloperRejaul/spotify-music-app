import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';

class Nav {
  static void push(BuildContext context, Widget page,
      [PageTransitionType? animation]) {
    Navigator.push(
      context,
      PageTransition(
        type: animation ?? PageTransitionType.rightToLeft,
        child: page,
      ),
    );
  }

  static void pop(BuildContext context) {
    Navigator.pop(context);
  }

  static void replace(BuildContext context, Widget page,
      [PageTransitionType? animation]) {
    Navigator.pushAndRemoveUntil(
      context,
      PageTransition(
        type: animation ?? PageTransitionType.rightToLeft,
        child: page,
      ),
      (route) => false,
    );
  }
}
