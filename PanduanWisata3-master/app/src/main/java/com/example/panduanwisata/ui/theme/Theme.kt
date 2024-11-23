package com.example.panduanwisata.ui.theme

import androidx.compose.material.MaterialTheme
import androidx.compose.material.darkColors
import androidx.compose.material.lightColors
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val LightThemeColors = lightColors(
    primary = Color(0xFF1E88E5),
    primaryVariant = Color(0xFF1565C0),
    secondary = Color(0xFF03DAC5)
)

@Composable
fun PanduanWisataTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colors = LightThemeColors,
        content =content

    )
}