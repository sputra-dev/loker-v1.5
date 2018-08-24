-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2018 at 06:38 PM
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
(1, 'Keuangan', '2018-08-01 07:35:34', '2018-08-01 07:35:34'),
(2, 'IT & Teknik', '2018-08-01 07:35:34', '2018-08-01 07:35:34'),
(3, 'Seni / Desain', '2018-08-01 07:35:34', '2018-08-01 07:35:34'),
(4, 'Penjualan / Pemasaran', '2018-08-01 07:35:34', '2018-08-01 07:35:34'),
(5, 'Kesehatan', '2018-08-01 07:35:34', '2018-08-01 07:35:34'),
(6, 'Layanan Makanan', '2018-08-01 07:35:34', '2018-08-01 07:35:34');

-- --------------------------------------------------------

--
-- Table structure for table `lowongans`
--

CREATE TABLE `lowongans` (
  `id` int(10) UNSIGNED NOT NULL,
  `nama_low` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tgl_mulai` date NOT NULL,
  `tgl_akhir` date NOT NULL,
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

INSERT INTO `lowongans` (`id`, `nama_low`, `tgl_mulai`, `tgl_akhir`, `lokasi`, `gaji`, `deskripsi_iklan`, `status`, `user_id`, `pers_id`, `kategori_id`, `created_at`, `updated_at`) VALUES
(1, 'Programmer', '2018-08-01', '2018-08-03', 'Bandung', 4000000, '1).Dibutuhkan pekerja yang tekun, rajin, dan ulet 2).Siap dengan pekerjaan yang diberikan 3).Fisik yang sehat dan kuat 4).Jujur dan disiplin 5).Bisa menjadi Leader 6).Tegas dan Kreatif 7).Rajin beribadah dan tepat waktu 8).Bisa menjadi kebanggan client', '1', 2, 1, 2, '2018-08-01 07:35:34', '2018-08-01 07:35:34'),
(2, 'Analisis Design', '2018-08-01', '2018-08-08', 'Wonosobo', 4500000, '<h4 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; color: rgb(240, 173, 78); margin-top: 0px; margin-bottom: 5px;\">Icons, labels, and input groups</h4><p style=\"margin-bottom: 0px; color: rgb(51, 51, 51);\">Manual positioning of feedback icons is required for inputs without a label and for&nbsp;<a href=\"file:///C:/xampp/htdocs/latihan/BS/components/index.html#input-groups\" style=\"background-image: initial; background-position: 0px 0px; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(66, 139, 202);\">input groups</a>&nbsp;with an add-on on the right. You are strongly encouraged to provide labels for all inputs for accessibility reasons. If you wish to prevent labels from being displayed, hide them with the&nbsp;<code style=\"font-size: 12.6px; border-radius: 3px;\">sr-only</code>&nbsp;class. If you must do without labels, adjust the&nbsp;<code style=\"font-size: 12.6px; border-radius: 3px;\">top</code>&nbsp;value of the feedback icon. For input groups, adjust the&nbsp;<code style=\"font-size: 12.6px; border-radius: 3px;\">right</code>&nbsp;value to an appropriate pixel value depending on the width of your addon.</p>', '0', 2, 1, 2, '2018-08-01 07:54:18', '2018-08-01 07:54:18'),
(3, 'Marketing', '2018-08-01', '2018-08-10', 'Karawang', 6000000, '<h4 style=\"font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; color: rgb(240, 173, 78); margin-top: 0px; margin-bottom: 5px;\">Icons, labels, and input groups</h4><p style=\"margin-bottom: 0px; color: rgb(51, 51, 51);\">Manual positioning of feedback icons is required for inputs without a label and for&nbsp;<a href=\"file:///C:/xampp/htdocs/latihan/BS/components/index.html#input-groups\" style=\"background-image: initial; background-position: 0px 0px; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; color: rgb(66, 139, 202);\">input groups</a>&nbsp;with an add-on on the right. You are strongly encouraged to provide labels for all inputs for accessibility reasons. If you wish to prevent labels from being displayed, hide them with the&nbsp;<code style=\"font-size: 12.6px; border-radius: 3px;\">sr-only</code>&nbsp;class. If you must do without labels, adjust the&nbsp;<code style=\"font-size: 12.6px; border-radius: 3px;\">top</code>&nbsp;value of the feedback icon. For input groups, adjust the&nbsp;<code style=\"font-size: 12.6px; border-radius: 3px;\">right</code>&nbsp;value to an appropriate pixel value depending on the width of your addon.&nbsp;&nbsp;&nbsp;&nbsp;</p>', '0', 2, 1, 1, '2018-08-01 07:56:22', '2018-08-01 08:14:58');

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
(201, '2014_10_12_000000_create_users_table', 1),
(202, '2014_10_12_100000_create_password_resets_table', 1),
(203, '2018_06_02_153946_create_kategori_lowongans_table', 1),
(204, '2018_06_02_154057_create_perusahaans_table', 1),
(205, '2018_06_02_154152_create_lowongans_table', 1),
(206, '2018_06_05_040409_laratrust_setup_tables', 1);

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
-- Table structure for table `perusahaans`
--

CREATE TABLE `perusahaans` (
  `id` int(10) UNSIGNED NOT NULL,
  `nama_pers` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deskripsi` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `telepon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alamat` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `perusahaans`
--

INSERT INTO `perusahaans` (`id`, `nama_pers`, `logo`, `deskripsi`, `telepon`, `alamat`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'PT.Telkom', '7I23WW_telkom.jpg', 'PT Telkom Indonesia (Persero) Tbk (Telkom) adalah Badan Usaha Milik Negara (BUMN) yang bergerak di bidang jasa layanan teknologi informasi dan komunikasi (TIK) dan jaringan telekomunikasi di Indonesia. Pemegang saham mayoritas Telkom adalah Pemerintah Republik Indonesia sebesar 52.09%, sedangkan 47.91% sisanya dikuasai oleh publik. Saham Telkom diperdagangkan di Bursa Efek Indonesia (BEI) dengan kode “TLKM” dan New York Stock Exchange (NYSE) dengan kode “TLK”.\n			     Dalam upaya bertransformasi menjadi digital telecommunication company, TelkomGroup mengimplementasikan strategi \n             bisnis dan operasional perusahaan yang berorientasi kepada pelanggan (customer-oriented). Transformasi tersebut akan \n             membuat organisasi TelkomGroup menjadi lebih lean (ramping) dan agile (lincah) dalam beradaptasi dengan perubahan \n             industri telekomunikasi yang berlangsung sangat cepat. Organisasi yang baru juga diharapkan dapat meningkatkan \n             efisiensi dan efektivitas dalam menciptakan customer experience yang berkualitas.', '0895339608375', 'Jakarta,Jl.H.Thamrin No.2 Depan Komp.Persari', 2, '2018-08-01 07:35:34', '2018-08-01 07:35:34');

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
(1, 'admin', 'Admin', NULL, '2018-08-01 07:35:32', '2018-08-01 07:35:32'),
(2, 'perusahaan', 'Perusahaan', NULL, '2018-08-01 07:35:32', '2018-08-01 07:35:32'),
(3, 'pelamar', 'Pelamar', NULL, '2018-08-01 07:35:32', '2018-08-01 07:35:32');

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
(3, 3, 'App\\User');

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
(1, 'Admin', 'admin@gmail.com', '$2y$10$2pfKnNGnLOYtrcv8X9jIEuxGSsHXQmJomVGuhOueMW/3JTk9FahBe', NULL, '2018-08-01 07:35:33', '2018-08-01 07:35:33'),
(2, 'sample Perusahaan', 'perusahaan@gmail.com', '$2y$10$ugR3p/OjcbDiujK/otD20eaHJg.xZ84HR.rL4xTZUwrUMDRFwMPdC', 'w7U9y0WfwBGmpN3cPzBqpDObTnUgq2rMmllTGQuEG9msvrqlfmODpdf5ZjKh', '2018-08-01 07:35:33', '2018-08-01 07:35:33'),
(3, 'sample Pelamar', 'pelamar@gmail.com', '$2y$10$D6XViEO88uHzI.eMRO5Fx.CAOLLtEnw4Qg5STsCWLdmi/QNaRbp/K', NULL, '2018-08-01 07:35:34', '2018-08-01 07:35:34');

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
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_unique` (`name`);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=207;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `perusahaans`
--
ALTER TABLE `perusahaans`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
