import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

const String assetName = 'assets/icons/logo.svg';
const String assetName2 = 'assets/icons/logo2.svg';

final Widget logo = SvgPicture.asset(assetName, semanticsLabel: 'Logo');
final Widget logo2 = SvgPicture.asset(
  assetName2,
  semanticsLabel: 'Logo',
  height: 100,
  width: 100,
);
