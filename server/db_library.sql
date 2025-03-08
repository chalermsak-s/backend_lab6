-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Feb 25, 2025 at 02:41 AM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_library`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `id` int NOT NULL,
  `firstName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `affiliation` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`id`, `firstName`, `lastName`, `affiliation`) VALUES
(1, 'จเด็ด', 'คงธรรม', 'สำนักพิมพ์แห่งมหาวิทยาลัยมหิดล'),
(2, 'สมชาย', 'สุขใจ', 'สำนักพิมพ์มหาวิทยาลัยอัสสัมชัญ'),
(3, 'สุชาติ', 'สุขสันต์', 'สำนักพิมพ์มหาวิทยาลัยสยาม'),
(4, 'ประเสริฐ', 'สุขสม', 'สำนักพิมพ์มหาวิทยาลัยอัสสัมชัญ'),
(5, 'วิไล', 'วงศ์สว่าง', 'สำนักพิมพ์มหาวิทยาลัยอัสสัมชัญ'),
(6, 'ศักดิ์ชัย', 'ศักดิ์สิทธิ์', 'สำนักพิมพ์แห่งมหาวิทยาลัยมหิดล'),
(7, 'สุวิมล', 'สุขุม', 'สำนักพิมพ์แห่งมหาวิทยาลัยศิลปากร'),
(8, 'วีรยุทธ', 'วงศ์สว่าง', 'สำนักพิมพ์มหาวิทยาลัยสยาม'),
(9, 'สมชาย', 'สุขใจ', 'สำนักพิมพ์มหาวิทยาลัยอัสสัมชัญ'),
(10, 'Takmashido', 'Suzuran', 'พัฒนาซอฟต์แวร์');

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isbn` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `authorId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `title`, `isbn`, `category`, `authorId`) VALUES
(1, 'Java เบื้องต้น', 'V609359502264', 'คอมพิวเตอร์', 8),
(2, 'Python สำหรับพัฒนาเว็บ', 'D858239338957', 'พัฒนาเว็บ', 9),
(3, 'C++ สำหรับพัฒนาเกม', 'S388769275560', 'พัฒนาเกม', 3),
(4, 'JavaScript สำหรับพัฒนาเว็บ', 'I669609978299', 'พัฒนาเว็บ', 5),
(5, 'HTML/CSS สำหรับออกแบบเว็บ', 'B931495110148', 'ออกแบบเว็บ', 6),
(6, 'Angular สำหรับพัฒนาเว็บ', 'Z795424923141', 'พัฒนาเว็บ', 3),
(7, 'React สำหรับพัฒนาเว็บ', 'B735322652659', 'พัฒนาเว็บ', 8),
(8, 'Vue.js สำหรับพัฒนาเว็บ', 'R267293015174', 'พัฒนาเว็บ', 3),
(9, 'Node.js สำหรับพัฒนาเซิร์ฟเวอร์', 'Y972276485299', 'พัฒนาเซิร์ฟเวอร์', 2),
(10, 'Ruby on Rails สำหรับพัฒนาเว็บ', 'X373524576824', 'พัฒนาเว็บ', 4),
(11, 'Laravel สำหรับพัฒนาเว็บ', 'P696024117176', 'พัฒนาเว็บ', 2),
(12, 'Django สำหรับพัฒนาเว็บ', 'Q141401671841', 'พัฒนาเว็บ', 9),
(13, 'Flask สำหรับพัฒนาเว็บ', 'U374923674550', 'พัฒนาเว็บ', 3),
(14, 'Express.js สำหรับพัฒนาเซิร์ฟเวอร์', 'X883882324535', 'พัฒนาเซิร์ฟเวอร์', 1),
(15, 'Koa.js สำหรับพัฒนาเซิร์ฟเวอร์', 'K902372405742', 'พัฒนาเซิร์ฟเวอร์', 6),
(16, 'Hapi สำหรับพัฒนาเซิร์ฟเวอร์', 'C964204910953', 'พัฒนาเซิร์ฟเวอร์', 2),
(17, 'Sails.js สำหรับพัฒนาเซิร์ฟเวอร์', 'B582923108499', 'พัฒนาเซิร์ฟเวอร์', 7),
(18, 'Feathers.js สำหรับพัฒนาเซิร์ฟเวอร์', 'S868862264838', 'พัฒนาเซิร์ฟเวอร์', 7),
(19, 'Nest.js สำหรับพัฒนาเซิร์ฟเวอร์', 'H949690267844', 'พัฒนาเซิร์ฟเวอร์', 2),
(20, 'Next.js สำหรับพัฒนาเว็บ', 'I378517849388', 'พัฒนาเว็บ', 5),
(21, 'ReactJs17 สำหรับพัฒนาเว็บ', 'I669609978399', 'พัฒนาเว็บ', 1),
(22, 'Rust zero', 'r3382783293', 'สำนักพิมพ์มหาวิทยาลัยเชียงใหม่', 10);

-- --------------------------------------------------------

--
-- Table structure for table `borrowing`
--

CREATE TABLE `borrowing` (
  `id` int NOT NULL,
  `memberId` int NOT NULL,
  `bookId` int NOT NULL,
  `borrowedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `dueDate` datetime(3) NOT NULL,
  `returnedAt` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `borrowing`
--

INSERT INTO `borrowing` (`id`, `memberId`, `bookId`, `borrowedAt`, `dueDate`, `returnedAt`) VALUES
(1, 2, 4, '2025-02-23 15:55:20.302', '2025-02-23 13:59:26.939', NULL),
(2, 2, 8, '2025-02-23 15:55:20.306', '2025-02-22 19:32:38.297', NULL),
(3, 1, 1, '2025-02-23 15:55:20.308', '2025-02-22 19:56:46.874', NULL),
(4, 7, 3, '2025-02-23 15:55:20.309', '2025-02-22 03:49:01.941', NULL),
(5, 5, 3, '2025-02-23 15:55:20.311', '2025-02-22 19:21:18.797', NULL),
(6, 1, 1, '2025-02-25 12:00:00.000', '2025-02-25 12:00:00.000', NULL),
(7, 2, 2, '2025-02-25 12:00:00.000', '2025-02-25 12:00:00.000', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int NOT NULL,
  `firstName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `firstName`, `lastName`, `phone`) VALUES
(1, 'วีรยุทธ', 'ศิริไพบูลย์', '081-234-5678'),
(2, 'นันทพร', 'สุนทรพจน์', '089-123-4567'),
(3, 'ศักดิ์ชัย', 'รัตนชัย', '086-987-6543'),
(4, 'พิชญา', 'วัฒนกุล', '083-456-7890'),
(5, 'ธนา', 'ศักดิ์ศิริ', '082-111-2222'),
(6, 'นลินี', 'จันทร์สว่าง', '085-333-4444'),
(7, 'วีรศักดิ์', 'วัฒนศิริ', '081-555-6666'),
(8, 'ศจิกา', 'ศิริผล', '089-777-8888'),
(9, 'ธวัชชัย', 'รัตนธัญ', '086-999-0000');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('0d431129-93be-41ab-bfba-2beb296569d5', 'e031034b409ecf7671b83a1de27342960e7c7788cc4c9c0fb6d999f7f142ee30', '2025-02-23 15:55:15.148', '20250222085328_init', NULL, NULL, '2025-02-23 15:55:15.058', 1),
('ba526b91-6c0e-49e7-8648-82042cd632bd', '5971bddf80a8261b382246b13589d5e5ede2554361cf2a30209782af8ee89530', '2025-02-23 15:55:15.214', '20250222094955_init', NULL, NULL, '2025-02-23 15:55:15.149', 1),
('ce9729b2-c60c-4062-ad95-fd8f0b940ca3', 'afd7085dd98f4276a7a9f26d69731bb5f1fb77c764e16c968ecc932d07dedd99', '2025-02-23 15:55:15.256', '20250222204851_init', NULL, NULL, '2025-02-23 15:55:15.251', 1),
('dcc946cf-fc97-40da-b00b-11f75a83950b', '55e8e5c4b2df14526c0bb64466409182ff30e46cfab6b7e5d0403e0b3761d1d5', '2025-02-23 15:55:15.250', '20250222202654_init', NULL, NULL, '2025-02-23 15:55:15.245', 1),
('e1aeb49b-03e5-459b-992b-a70c023cffa6', '55e8e5c4b2df14526c0bb64466409182ff30e46cfab6b7e5d0403e0b3761d1d5', '2025-02-23 15:55:15.263', '20250223145424_init', NULL, NULL, '2025-02-23 15:55:15.257', 1),
('e806dae9-8e4f-43e4-b9f0-6eac3865b2db', '0a12cc058cd19d978300152eca18c89a3c701e106bd96bd5735944753f2ac78e', '2025-02-23 15:55:15.057', '20250222084447_init', NULL, NULL, '2025-02-23 15:55:15.003', 1),
('f227b033-63b4-41a1-b63c-717aca2951e0', '7f93e7636a3ff6513f71c2d806cdd511d4194005de688fd3033e6c9598b07f37', '2025-02-23 15:55:15.244', '20250222194034_init', NULL, NULL, '2025-02-23 15:55:15.215', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_authorId_fkey` (`authorId`);

--
-- Indexes for table `borrowing`
--
ALTER TABLE `borrowing`
  ADD PRIMARY KEY (`id`),
  ADD KEY `borrowing_memberId_fkey` (`memberId`),
  ADD KEY `borrowing_bookId_fkey` (`bookId`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `borrowing`
--
ALTER TABLE `borrowing`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `author` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `borrowing`
--
ALTER TABLE `borrowing`
  ADD CONSTRAINT `borrowing_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `book` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `borrowing_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `member` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
