-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 22, 2018 at 06:39 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `usoy`
--

-- --------------------------------------------------------

--
-- Table structure for table `kategori_lowongans`
--

CREATE TABLE `kategori_lowongans` (
  `id` int(10) UNSIGNED NOT NULL,
  `nama_kategori` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kategori_lowongans`
--

INSERT INTO `kategori_lowongans` (`id`, `nama_kategori`, `created_at`, `updated_at`) VALUES
(1, 'Keuangan', '2018-07-11 07:37:51', '2018-07-11 07:37:51'),
(2, 'IT & Teknik', '2018-07-11 07:37:51', '2018-07-11 07:37:51'),
(3, 'Seni / Desain', '2018-07-11 07:37:51', '2018-07-11 07:37:51'),
(4, 'Penjualan / Pemasaran', '2018-07-11 07:37:52', '2018-07-11 07:37:52'),
(5, 'Kesehatan', '2018-07-11 07:37:52', '2018-07-11 07:37:52'),
(6, 'Layanan Makanan', '2018-07-11 07:37:52', '2018-07-11 07:37:52');

-- --------------------------------------------------------

--
-- Table structure for table `lowongans`
--

CREATE TABLE `lowongans` (
  `id` int(10) UNSIGNED NOT NULL,
  `nama_low` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tgl_mulai` date NOT NULL,
  `lokasi` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gaji` int(11) NOT NULL,
  `deskripsi_iklan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `pers_id` int(10) UNSIGNED NOT NULL,
  `kategori_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `lowongans`
--

INSERT INTO `lowongans` (`id`, `nama_low`, `tgl_mulai`, `lokasi`, `gaji`, `deskripsi_iklan`, `status`, `user_id`, `pers_id`, `kategori_id`, `created_at`, `updated_at`) VALUES
(1, 'Programmer', '2018-06-27', 'Bandung', 4000000, '1).Dibutuhkan pekerja yang tekun, rajin, dan ulet 2).Siap dengan pekerjaan yang diberikan 3).Fisik yang sehat dan kuat 4).Jujur dan disiplin 5).Bisa menjadi Leader 6).Tegas dan Kreatif 7).Rajin beribadah dan tepat waktu 8).Bisa menjadi kebanggan client', '1', 2, 1, 2, '2018-07-11 07:37:52', '2018-07-11 07:37:52'),
(5, 'Waiter', '2018-07-12', 'Bandung', 4000000, '<p>1).Dibutuhkan pekerja yang tekun, rajin, dan ulet 2).Siap dengan pekerjaan yang diberikan 3).Fisik yang sehat dan kuat 4).Jujur dan disiplin 5).Bisa menjadi Leader 6).Tegas dan Kreatif 7).Rajin beribadah dan tepat waktu 8).Bisa menjadi kebanggan client</p>', '1', 6, 2, 6, '2018-07-12 07:33:13', '2018-07-12 07:35:57'),
(6, 'Guru Seni Budaya', '2018-07-12', 'Bandung', 4000000, '<p>1).Dibutuhkan pekerja yang tekun, rajin, dan ulet 2).Siap dengan pekerjaan yang diberikan 3).Fisik yang sehat dan kuat 4).Jujur dan disiplin 5).Bisa menjadi Leader 6).Tegas dan Kreatif 7).Rajin beribadah dan tepat waktu 8).Bisa menjadi kebanggan client</p>', '0', 9, 1, 3, '2018-07-12 07:59:04', '2018-07-12 18:11:27'),
(8, 'Guru Seni Budaya', '2018-07-14', 'Bandung', 3500000, '<p>1).Dibutuhkan pekerja yang tekun, rajin, dan ulet 2).Siap dengan pekerjaan yang diberikan 3).Fisik yang sehat dan kuat 4).Jujur dan disiplin 5).Bisa menjadi Leader 6).Tegas dan Kreatif 7).Rajin beribadah dan tepat waktu 8).Bisa menjadi kebanggan client&nbsp;1).Dibutuhkan pekerja yang tekun, rajin, dan ulet 2).Siap dengan pekerjaan yang diberikan 3).Fisik yang sehat dan kuat 4).Jujur dan disiplin 5).Bisa menjadi Leader 6).Tegas dan Kreatif 7).Rajin beribadah dan tepat waktu 8).Bisa menjadi kebanggan client</p>', '1', 13, 6, 3, '2018-07-14 01:15:19', '2018-07-14 01:16:36'),
(9, 'Analisis Design', '2018-07-14', 'Bogor', 3000000, '<p><em><span style=\"color: #444444; font-family: \'nunito sans\', sans-serif;\">1).Dibutuhkan pekerja yang tekun, rajin, dan ulet 2).Siap dengan pekerjaan yang diberikan 3).Fisik yang sehat dan kuat 4).Jujur dan disiplin 5).Bisa menjadi Leader 6).Tegas dan Kreatif 7).Rajin beribadah dan tepat waktu 8).Bisa menjadi kebanggan client</span></em></p>', '0', 2, 1, 2, '2018-07-14 01:32:21', '2018-07-22 09:04:10'),
(11, 'Marketing', '2018-07-22', 'Kalimantan', 3000000, '<p><span style=\"color: rgb(68, 68, 68); font-family: Tahoma;\"><u>1).Dibutuhkan pekerja yang tekun, rajin, dan ulet 2).Siap dengan pekerjaan yang diberikan 3).Fisik yang sehat dan kuat 4).Jujur dan disiplin 5).Bisa menjadi Leader 6).Tegas dan Kreatif 7).Rajin beribadah dan tepat waktu 8).Bisa menjadi kebanggan client</u></span><br></p>', '0', 2, 1, 3, '2018-07-22 09:06:16', '2018-07-22 09:06:16');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(153, '2014_10_12_000000_create_users_table', 1),
(154, '2014_10_12_100000_create_password_resets_table', 1),
(155, '2018_06_02_153946_create_kategori_lowongans_table', 1),
(156, '2018_06_02_154057_create_perusahaans_table', 1),
(157, '2018_06_02_154152_create_lowongans_table', 1),
(158, '2018_06_05_040409_laratrust_setup_tables', 1),
(159, '2018_06_13_144908_create_pelamars_table', 1),
(160, '2018_06_27_090810_create_lamarans_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pelamars`
--

CREATE TABLE `pelamars` (
  `id` int(10) UNSIGNED NOT NULL,
  `telepon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pesan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_cv` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `low_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pelamars`
--

INSERT INTO `pelamars` (`id`, `telepon`, `pesan`, `file_cv`, `status`, `user_id`, `low_id`, `created_at`, `updated_at`) VALUES
(1, '082989987887', 'saya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerja', 'S9EnnT_Belajar Laravel Untuk Pemula.pdf', '1', 3, 1, '2018-07-11 08:01:47', '2018-07-11 08:03:21'),
(4, '0895339608378', 'saya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerja', '4Cqd14_1008-2988-1-PB.pdf', '1', 10, 6, '2018-07-12 08:02:50', '2018-07-12 08:04:25'),
(7, '087272727', 'saya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerja', 'TjXC2B_Belajar Laravel Untuk Pemula.pdf', '1', 12, 8, '2018-07-14 01:20:58', '2018-07-14 01:22:59'),
(8, '085466437', 'saya ingin kerjasaya ingin kerjasaya ingin kerjasaya ingin kerja', 'JhGkn7_Pemrograman-Android-Dasar-02-Tipe-Data.pdf.pdf', '0', 3, 5, '2018-07-14 01:36:35', '2018-07-14 01:36:35');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission_role`
--

CREATE TABLE `permission_role` (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission_user`
--

CREATE TABLE `permission_user` (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `user_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `perusahaans`
--

CREATE TABLE `perusahaans` (
  `id` int(10) UNSIGNED NOT NULL,
  `nama_pers` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `telepon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `perusahaans`
--

INSERT INTO `perusahaans` (`id`, `nama_pers`, `logo`, `deskripsi`, `telepon`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'PT.Telkom', 'CvO7YD_telkom.jpg', '<p>PT Telkom Indonesia (Persero) Tbk (Telkom) adalah Badan Usaha Milik Negara (BUMN) yang bergerak di bidang jasa layanan teknologi informasi dan komunikasi (TIK) dan jaringan telekomunikasi di Indonesia. Pemegang saham mayoritas Telkom adalah Pemerintah Republik Indonesia sebesar 52.09%, sedangkan 47.91% sisanya dikuasai oleh publik. Saham Telkom diperdagangkan di Bursa Efek Indonesia (BEI) dengan kode &ldquo;TLKM&rdquo; dan New York Stock Exchange (NYSE) dengan kode &ldquo;TLK&rdquo;.</p>\r\n<p>&nbsp;</p>\r\n<p>Dalam upaya bertransformasi menjadi digital telecommunication company, TelkomGroup mengimplementasikan strategi bisnis dan operasional perusahaan yang berorientasi kepada pelanggan (customer-oriented). Transformasi tersebut akan membuat organisasi TelkomGroup menjadi lebih lean (ramping) dan agile (lincah) dalam beradaptasi dengan perubahan industri telekomunikasi yang berlangsung sangat cepat. Organisasi yang baru juga diharapkan dapat meningkatkan efisiensi dan efektivitas dalam menciptakan customer experience yang berkualitas.</p>', '0895339608375', 2, '2018-07-11 07:37:52', '2018-07-22 07:13:23'),
(2, 'PT.Mayora', 'RQU1hW_mayora.jpg', '<p><strong>PT Mayora Indah Tbk</strong>&nbsp;(<a href=\"https://id.wikipedia.org/wiki/IDX\">IDX</a>:&nbsp;<a href=\"http://www.idx.co.id/Home/ListedCompanies/CompanyProfile/tabid/89/KODE_Q/MYOR/language/id-ID/Default.aspx\">MYOR</a>) atau&nbsp;<strong>Mayora Group</strong>&nbsp;(melakukan bisnis sebagai&nbsp;<strong>PT Torabika Eka Semesta</strong>) adalah salah satu kelompok bisnis produk konsumen di&nbsp;<a href=\"https://id.wikipedia.org/wiki/Indonesia\">Indonesia</a>, yang didirikan pada tanggal&nbsp;<a href=\"https://id.wikipedia.org/wiki/17_Februari\">17 Februari</a>&nbsp;<a href=\"https://id.wikipedia.org/wiki/1977\">1977</a>. Perusahaan ini telah tercatat di&nbsp;<a href=\"https://id.wikipedia.org/wiki/Bursa_Efek_Jakarta\">Bursa Efek Jakarta</a>&nbsp;sejak tanggal&nbsp;<a href=\"https://id.wikipedia.org/wiki/4_Juli\">4 Juli</a>&nbsp;<a href=\"https://id.wikipedia.org/wiki/1990\">1990</a>. Saat ini mayoritas kepemilikan sahamnya dimiliki oleh PT Unita Branindo sebanyak 32,93%</p>', '0888546737', 6, '2018-07-11 21:28:57', '2018-07-11 21:28:58'),
(6, 'Yayasan Assalaam', 'Ysc2xK_assalaam.png', '<p><strong>PT Telkom Indonesia (Persero) Tbk (Telkom) adalah Badan Usaha Milik Negara (BUMN) yang bergerak di bidang jasa layanan teknologi informasi dan komunikasi (TIK) dan jaringan telekomunikasi di Indonesia. Pemegang saham mayoritas Telkom adalah Pemerintah Republik Indonesia sebesar 52.09%, sedangkan 47.91% sisanya dikuasai oleh publik. Saham Telkom diperdagangkan di Bursa Efek Indonesia (BEI) dengan kode &ldquo;TLKM&rdquo; dan New York Stock Exchange (NYSE) dengan kode &ldquo;TLK&rdquo;.<br />&nbsp;<br />&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Dalam upaya bertransformasi menjadi digital telecommunication company, TelkomGroup mengimplementasikan strategi bisnis dan operasional perusahaan yang berorientasi kepada pelanggan (customer-oriented). Transformasi tersebut akan membuat organisasi TelkomGroup menjadi lebih lean (ramping) dan agile (lincah) dalam beradaptasi dengan perubahan industri telekomunikasi yang berlangsung sangat cepat. Organisasi yang baru juga diharapkan dapat meningkatkan efisiensi dan efektivitas dalam menciptakan customer experience yang berkualitas.</strong></p>', '0893535666', 13, '2018-07-14 01:11:58', '2018-07-14 01:11:58'),
(8, 'PT.Dbest Hotel', 'QfdeWT_dbest.jpg', '<p style=\"color: #383838; font-family: BlinkMacSystemFont, -apple-system, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;\">d\'best Hotel Bandung terletak di Bandung, menyediakan akses WiFi gratis, juga menawarkan sebuah kolam renang outdoor dan restoran.</p>\r\n<p style=\"color: #383838; font-family: BlinkMacSystemFont, -apple-system, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;\">Masing-masing kamar ber-AC hotel ini menyediakan TV layar datar dengan saluran satelit dan ketel listrik. Selain shower, kamar mandi pribadinya juga menawarkan perlengkapan mandi gratis dan sandal. Anda dapat menikmati pemandangan kota dari kamar. Fasilitas tambahannya meliputi meja dan seprai.</p>\r\n<p style=\"color: #383838; font-family: BlinkMacSystemFont, -apple-system, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;\">Di d\'best Hotel Bandung, Anda dapat memanfaatkan layanan antar-jemput bandara, meja depan 24 jam, dan sebuah bar. Hotel ini menyediakan tempat parkir gratis.</p>\r\n<p style=\"color: #383838; font-family: BlinkMacSystemFont, -apple-system, \'Segoe UI\', Roboto, Helvetica, Arial, sans-serif;\">Hotel berjarak 1,2 km dari Istana Merdeka, 1,4 km dari Pasar Baru Bandung, dan 1,6 km dari Terminal Bus Stasiun Hall. Bandara Husein Sastranegara terletak sejauh 5 km.&nbsp;</p>', '08976445467', 15, '2018-07-18 01:38:18', '2018-07-18 01:38:18');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `display_name`, `description`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'Admin', NULL, '2018-07-11 07:37:50', '2018-07-11 07:37:50'),
(2, 'perusahaan', 'Perusahaan', NULL, '2018-07-11 07:37:50', '2018-07-11 07:37:50'),
(3, 'pelamar', 'Pelamar', NULL, '2018-07-11 07:37:50', '2018-07-11 07:37:50');

-- --------------------------------------------------------

--
-- Table structure for table `role_user`
--

CREATE TABLE `role_user` (
  `role_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `user_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_user`
--

INSERT INTO `role_user` (`role_id`, `user_id`, `user_type`) VALUES
(1, 1, 'App\\User'),
(2, 2, 'App\\User'),
(3, 3, 'App\\User'),
(3, 4, 'App\\User'),
(3, 5, 'App\\User'),
(2, 6, 'App\\User'),
(2, 7, 'App\\User'),
(3, 8, 'App\\User'),
(2, 9, 'App\\User'),
(3, 10, 'App\\User'),
(2, 11, 'App\\User'),
(3, 12, 'App\\User'),
(2, 13, 'App\\User'),
(3, 14, 'App\\User'),
(2, 15, 'App\\User');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin@gmail.com', '$2y$10$oeyu9G..nbgPTRYKZ27E5O254QlD9lZnnvPOhgLTmT01w8wUE6Ae.', 'RSHqhr8ybwX8Vqya0ZPzNhdQXLSJ672uZlwmLgrA4gQurdsHkTBErRroRdTq', '2018-07-11 07:37:50', '2018-07-11 07:37:50'),
(2, 'sample Perusahaan', 'perusahaan@gmail.com', '$2y$10$mjRvBW5YdrydDEwcMDyMyutl1ugckMg.fsVjftlJTNUEn2amG6dEi', 'doQseaZAtZjn3QVvUutZ6CQmASOE8vCTwVFdva0fYfhekezV6LIeKw8qYvqe', '2018-07-11 07:37:51', '2018-07-11 07:37:51'),
(3, 'sample Pelamar', 'pelamar@gmail.com', '$2y$10$1nSKrd7mKADyuVgxQvgaDedkHsYLipYB.vOYEUgVVvrOH7nrlWQjG', 'PmWZR5PsC12v9FycDjRm2gw7c1uRmq7KxOPUEt7meLLTuZ3gwBf6iQW8Hkfp', '2018-07-11 07:37:51', '2018-07-11 07:37:51'),
(4, 'aceng', 'acengburuk@gmail.com', '$2y$10$mKSZRtUvj9/8ya2eRKmHde4QOCBjbjyahbmYMxTrlIBgIsilVNrlG', '1A0zxhVNONNGmlKiYIhrFXMFUXFkSgGurkRSxQ9msTPP0fFTN9yBqdKRe1GP', '2018-07-11 08:10:05', '2018-07-11 08:10:05'),
(6, 'Alfi', 'alfi@aol.com', '$2y$10$zhcbjiFDKaiaPJvQxRyV2.HnxLkurroCg9M8/9laPMa7Wko/z28Te', 'TarQLJkv9zsZgSum9Ocy12C4sQya8C6sSik8A52Kb6giD6TFifByBTD2nVr0', '2018-07-11 21:20:55', '2018-07-11 21:20:55'),
(9, 'Aceng', 'acenggans@gmail.com', '$2y$10$9rEWo6ethvAtJyisqPCG0.BsjuOpeKuNjqNeySRH1oJKTaYYILrMu', '1gZhZnHndFuwIo7BLM1Pp5a9hakgFnaWDdZ0MoR4Z6HatqHyq3NAeAKx6vXE', '2018-07-12 07:55:28', '2018-07-12 07:55:28'),
(10, 'Ali', 'ali@gmail.com', '$2y$10$Zleb8TT66AyM3MRXsG.MquFbf7WzkH3xXdkn3WeLtwtzbmzOQbxH2', 'pO0FMsfftO6FV2biGI3yejKmZ17NspftdIf957dLj8T4INsEShoIyH1agGhH', '2018-07-12 08:01:21', '2018-07-12 08:01:21'),
(11, 'Baim', 'baim@gmail.com', '$2y$10$ukrBJt0BEBcXBwmEMZVVKeL84qWadPk/zKi96/Ye8L4XXQ9IBayiK', 'fzMx5U4zkdtkS1WSWr2DbVgmOGyjfHFcBdxJqGt60nfBxGK7Qs1n7jvzDSph', '2018-07-13 19:23:06', '2018-07-13 19:23:06'),
(12, 'Boim', 'boim@gmail.com', '$2y$10$8uqMPbjRVZIKFvzH9F4HoOzdg42bhkszdYIL7H/WxvFo.S2A9Zn2G', 'etacY3QqsZrKqwXCWEzqjaTvq4Y3VqCIYtS7omOrk830xsauz71syzChRdhu', '2018-07-13 19:54:59', '2018-07-13 19:54:59'),
(13, 'uli', 'uli@gmail.com', '$2y$10$soI7JEs2tU1z4Jo2z4jSEubOW8ZH78h/zvf8C4y/u9s0rrPZZfIOy', '9pvvRZieHoC2l155jfMSk9IXeczcNUB6LzMQuxC2jdxtZd8liCzBG0eb9T0x', '2018-07-14 01:08:43', '2018-07-14 01:08:43'),
(14, 'oli', 'oli@gmail.com', '$2y$10$iQfZdgTLXAGxqE2s.mM1Uu7TPct9JglUCYTgW5vB7DPRa9b0Yxy3C', 'ILfV67yEwH83V8L6HXrVJraY7QqgIbA9lREFbJa0lEMG9zVgodZDk5eiekLw', '2018-07-14 01:18:17', '2018-07-14 01:18:17'),
(15, 'gema', 'gema@gmail.com', '$2y$10$Y/5U0r7gHPqVu7lcBprxAuQ9PD1NxmoYUOLbsbxccvAFLDPVCCMAa', NULL, '2018-07-18 00:18:01', '2018-07-18 00:18:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kategori_lowongans`
--
ALTER TABLE `kategori_lowongans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lowongans`
--
ALTER TABLE `lowongans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lowongans_pers_id_foreign` (`pers_id`),
  ADD KEY `lowongans_kategori_id_foreign` (`kategori_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `pelamars`
--
ALTER TABLE `pelamars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pelamars_user_id_foreign` (`user_id`),
  ADD KEY `pelamars_low_id_foreign` (`low_id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_unique` (`name`);

--
-- Indexes for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `permission_role_role_id_foreign` (`role_id`);

--
-- Indexes for table `permission_user`
--
ALTER TABLE `permission_user`
  ADD PRIMARY KEY (`user_id`,`permission_id`,`user_type`),
  ADD KEY `permission_user_permission_id_foreign` (`permission_id`);

--
-- Indexes for table `perusahaans`
--
ALTER TABLE `perusahaans`
  ADD PRIMARY KEY (`id`),
  ADD KEY `perusahaans_user_id_foreign` (`user_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Indexes for table `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`user_id`,`role_id`,`user_type`),
  ADD KEY `role_user_role_id_foreign` (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kategori_lowongans`
--
ALTER TABLE `kategori_lowongans`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `lowongans`
--
ALTER TABLE `lowongans`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;

--
-- AUTO_INCREMENT for table `pelamars`
--
ALTER TABLE `pelamars`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `perusahaans`
--
ALTER TABLE `perusahaans`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lowongans`
--
ALTER TABLE `lowongans`
  ADD CONSTRAINT `lowongans_kategori_id_foreign` FOREIGN KEY (`kategori_id`) REFERENCES `kategori_lowongans` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `lowongans_pers_id_foreign` FOREIGN KEY (`pers_id`) REFERENCES `perusahaans` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `pelamars`
--
ALTER TABLE `pelamars`
  ADD CONSTRAINT `pelamars_low_id_foreign` FOREIGN KEY (`low_id`) REFERENCES `lowongans` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `pelamars_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `permission_user`
--
ALTER TABLE `permission_user`
  ADD CONSTRAINT `permission_user_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `perusahaans`
--
ALTER TABLE `perusahaans`
  ADD CONSTRAINT `perusahaans_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_user`
--
ALTER TABLE `role_user`
  ADD CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
