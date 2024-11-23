package com.example.panduanwisata

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.panduanwisata.ui.theme.PanduanWisataTheme
import androidx.compose.ui.Alignment


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            PanduanWisataTheme {
                PanduanWisataScreen()
            }
        }
    }
}

@Composable
fun PanduanWisataScreen() {
    Scaffold(
        topBar = {
            TopAppBar(
                backgroundColor = Color(0xFF01714F), // Warna biru
                contentColor = Color.White, // Warna teks putih
                modifier = Modifier.height(80.dp) // Tinggi AppBar diperbesar menjadi 80 dp
            ) {
                Box( // Gunakan Box untuk memastikan konten berada di tengah
                    modifier = Modifier
                        .fillMaxSize(), // Mengisi seluruh ukuran TopAppBar
                    contentAlignment = Alignment.Center // Posisikan konten di tengah
                ) {
                    Text(
                        text = "Panduan Tempat Wisata",
                        fontSize = 20.sp, // Ukuran font
                        fontWeight = FontWeight.Bold // Tebal teks
                    )
                }
            }


        }
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .padding(16.dp)
        ) {
            // Gambar
            Card(
                shape = RoundedCornerShape(8.dp),
                elevation = 4.dp,
                modifier = Modifier.fillMaxWidth()
            ) {
                Image(
                    painter = painterResource(id = R.drawable.strawberry),
                    contentDescription = "Kebun Strawberry",
                    contentScale = ContentScale.Crop,
                    modifier = Modifier.height(200.dp)
                )
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Jam Operasional
            Text("Jam Operasional ", fontSize = 18.sp, fontWeight = FontWeight.Bold)
            Text("08.00 - 18.00", fontSize = 16.sp, color = Color(0xFFFFA500))

            Spacer(modifier = Modifier.height(16.dp))

            // Deskripsi
            Text("Deskripsi Tempat Wisata", fontSize = 18.sp, fontWeight = FontWeight.Bold)
            Text(
                text = "Terdapat area Agrowisata di Tepas Papandayan ini yaitu Kebun Buah. Salah satu kebun yang paling diminati adalah kebun Strawberry, pengunjung dapat memetik buah sendiri dan gratis memakannya. Selain kebun Strawberry terdapat juga kebun Kentang.\n" +
                        "\n"
                        ,
                fontSize = 16.sp,
                color = Color.Gray
            )

            Spacer(modifier = Modifier.height(16.dp))

            // Kebijakan
            Text("Kebijakan", fontSize = 18.sp, fontWeight = FontWeight.Bold)
            Text(
                text = "Tiket masuk Tepas Papandayan sudah termasuk dengan fasilitas berkebun ini.Bagi pengunjung yang ingin membeli buah untuk dibawa pulang, tersedia dengan harga Rp. 35.000 / kg.Tiket masuk belum termasuk dengan tiket parkir.",
                fontSize = 16.sp,
                color = Color.Gray
            )
        }
    }
}