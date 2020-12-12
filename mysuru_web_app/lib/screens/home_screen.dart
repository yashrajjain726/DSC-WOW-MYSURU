import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
      child: WebView(
        initialUrl: 'https://error404-mysuru.herokuapp.com/',
        javascriptMode: JavascriptMode.unrestricted,
      ),
    ));
  }
}
