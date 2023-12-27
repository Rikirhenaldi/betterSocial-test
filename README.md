This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# Jawaban Pertanyaan A

## 1. Pemotongan Paragraf Caption:

### Pertanyaan:
- Apakah pemotongan paragraf caption menjadi 3 baris dilakukan secara bebas yang penting tampilannya menjadi tiga baris?
- Atau menggunakan cara menghitung jumlah kata dan maksimal kata berapa captionnya di potong?
- Jika barisnya kurang dari tiga, apakah tombol "View More" harus dihilangkan?

## 2. Ketinggian Gambar Postingan:

### Pertanyaan:
- Ketinggian dari gambar postingan yang harus sesuai dengan tinggi teks itu secara spesifik seperti apa?
- Apakah height nya harus dibagi 2 ketika belum di-klik expand dengan tombol "View More"?


## 3. Down Vote pada Postingan:

### Pertanyaan:
- Bagaimana jika ada user yang melakukan down vote pada postingan ketika nilai vote nya sama dengan 0?
- Apakah nilai votes nya tetap dihitung jadi negatif atau button downvote di-disable atau harus menambahkan logika untuk tidak membuat votes lebih kecil dari 0?


# Jawaban Pertanyaan C-1

## 1. Struktur Data:

### Jawaban:
Untuk menerapkan fitur "Orang yang Mungkin Anda Kenal," menggunakan struktur data berupa graf (graph) dengan simpul (node) yang mewakili pengguna dan komunitas, serta tepi (edge) yang mewakili koneksi antara mereka. Setiap simpul memiliki atribut tambahan seperti waktu terakhir terhubung atau frekuensi interaksi.

### Contoh Struktur Data (dalam format JSON):
```json
{
  "users": [
    {"id": 1, "name": "UserA", "connections": [2, 3, 4], "communities": [101]},
    {"id": 2, "name": "UserB", "connections": [1, 3], "communities": [101, 102]},
    {"id": 3, "name": "UserC", "connections": [1, 2], "communities": [102, 103]}
  ],
  "communities": [
    {"id": 101, "name": "CommunityX", "members": [1, 2]},
    {"id": 102, "name": "CommunityY", "members": [2, 3]},
    {"id": 103, "name": "CommunityZ", "members": [3]}
  ]
}
```

## 2. Penanganan Kasus Ekstrim:

### Pertanyaan:
- Bagaimana menangani kasus ekstrim, seperti tidak ada pengguna/komunitas yang terkait/terkoneksi atau terlalu banyak pengguna/komunitas yang terkait/terkoneksi?

### Jawaban:
- Jika tidak ada pengguna/komunitas terkait, tampilkan pesan relevan dan jangan tampilkan rekomendasi pada saat tersebut.
- Jika terlalu banyak pengguna/komunitas terkait, terapkan algoritma filtrasi cerdas dan batasi jumlah rekomendasi yang ditampilkan.

## 3. Pengujian Fitur:

### Jawaban:
- Uji fungsional untuk memastikan rekomendasi sesuai dengan koneksi dan komunitas pengguna.
- Uji kinerja untuk menilai kemampuan menangani skala besar.
- Uji kesalahan dengan simulasi kondisi ekstrim.
- Uji integrasi untuk memastikan fitur berintegrasi dengan bagian lain dari aplikasi.

# Jawaban Pertanyaan C-2

## 1. Pengumpulan Informasi:

### Jawaban:
- Dapatkan informasi tentang pengguna, seperti daftar koneksi dan komunitas yang diikuti.

## 2. Identifikasi Koneksi dan Komunitas Terkait:

### Jawaban:
- Hitung tingkat koneksi antara pengguna dan setiap koneksi langsung (teman) serta tingkat afiliasi dengan setiap komunitas. Ini dapat melibatkan perhitungan berdasarkan frekuensi interaksi, waktu terakhir terhubung, atau faktor lain yang relevan.

## 3. Pemberian Bobot:

### Jawaban:
- Berikan bobot pada koneksi dan komunitas berdasarkan tingkat kedekatan atau relevansi.

## 4. Penyaringan Rekomendasi:

### Jawaban:
- Lindungi pengguna dari rekomendasi yang mungkin kurang relevan atau memiliki tingkat kedekatan yang rendah. Terapkan batasan pada jumlah rekomendasi yang ditampilkan untuk menjaga kejelasan.

## 5. Pemberian Bobot Tambahan:

### Jawaban:
- Pertimbangkan faktor-faktor tambahan seperti popularitas umum pengguna atau komunitas, atau kebaruan koneksi pengguna.

## 6. Pengurangan Rekomendasi Ganda:

### Jawaban:
- Hapus kemungkinan rekomendasi ganda agar hasilnya beragam dan tidak mengulangi konten yang sama.

## 7. Penanganan Kasus Ekstrim:

### Jawaban:
- Atur strategi khusus untuk kasus ekstrim, seperti pengguna dengan sedikit atau tanpa koneksi. Misalnya, tampilkan rekomendasi berdasarkan komunitas yang mungkin menarik bagi pengguna.

## 8. Penyesuaian Dinamis:

### Jawaban:
- Lakukan penyesuaian dinamis berdasarkan interaksi pengguna. Jika pengguna sering berinteraksi dengan rekomendasi tertentu, bobotnya dapat ditingkatkan.

## 9. Pengoptimalan Kinerja:

### Jawaban:
- Pastikan algoritma dapat beroperasi dengan cepat dan efisien pada skala besar. Gunakan teknik optimasi, seperti
