import 'package:flutter/material.dart';
import 'package:flutter_online_music_app/core/constants/colors.dart';
import 'package:flutter_online_music_app/core/utils/navigation.dart';
import 'package:flutter_online_music_app/core/widgets/Button.dart';
import 'package:flutter_online_music_app/core/widgets/Input.dart';

class CreateMusic extends StatefulWidget {
  const CreateMusic({super.key});

  @override
  State<CreateMusic> createState() => _CreateMusicState();
}

class _CreateMusicState extends State<CreateMusic> {
  final nameController = TextEditingController();
  final titleController = TextEditingController();
  final _key = GlobalKey();

  @override
  void dispose() {
    super.dispose();
    nameController.dispose();
    titleController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.dark600,
      body: Padding(
        padding:const EdgeInsets.only(left: 10, right: 10, top: 40),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                IconButton(
                  onPressed: () => Nav.pop(context),
                  icon:const Icon(
                    Icons.arrow_back,
                    color: AppColors.light100,
                  ),
                ),
                Text(
                  "Create Music",
                  style: Theme.of(context)
                      .textTheme
                      .titleLarge
                      ?.copyWith(fontSize: 25),
                ),
               const Text(""),
              ],
            ),
            SingleChildScrollView(
              child: Form(
                key: _key,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Input(
                      hint: "Enter your song name",
                      label: "Name",
                      controller: nameController,
                    ),
                    Input(
                      hint: "Enter song title",
                      label: "Title",
                      controller: titleController,
                    ),
                    Text(
                      "Select Image",
                      style: Theme.of(context).textTheme.labelMedium,
                    ),
                    Container(
                      margin:const EdgeInsets.only(top: 5),
                      height: 150,
                      decoration: BoxDecoration(
                        color: AppColors.light700,
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                   const SizedBox(height: 10),
                    Text(
                      "Select Music",
                      style: Theme.of(context).textTheme.labelMedium,
                    ),
                    Container(
                      margin:const EdgeInsets.only(top: 5),
                      height: 150,
                      decoration: BoxDecoration(
                        color: AppColors.light700,
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                   const SizedBox(height: 10),
                    Button(
                      text: "Create Music",
                      onPressed: () {},
                      width: double.infinity,
                      height: 50,
                    )
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
