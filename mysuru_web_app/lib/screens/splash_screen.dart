import 'package:flutter/material.dart';
import 'package:mysuru_web_app/screens/home_screen.dart';
import 'dart:async';

import 'package:shimmer/shimmer.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashScreenState createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Future.delayed(
        Duration(
          milliseconds: 5000,
        ), () {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (context) => HomeScreen(),
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Container(
          child: Stack(
            alignment: Alignment.center,
            children: [
              Center(
                child: Shimmer.fromColors(
                  baseColor: Colors.pink[600],
                  highlightColor: Colors.orangeAccent[700],
                  child: Container(
                    padding: EdgeInsets.all(16.0),
                    child: Text(
                      "Mysuru",
                      style: TextStyle(
                          fontSize: 90.0,
                          fontFamily: 'Pacifico',
                          shadows: [
                            Shadow(
                              blurRadius: 18.0,
                              color: Colors.black87,
                              offset: Offset.fromDirection(120, 12),
                            )
                          ]),
                    ),
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
