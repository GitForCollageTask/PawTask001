-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2017 at 11:20 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simac`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_masjid` varchar(15) NOT NULL,
  `nama_lengkap` varchar(30) NOT NULL,
  `email` varchar(25) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(50) NOT NULL,
  `no_telpon` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_masjid`, `nama_lengkap`, `email`, `username`, `password`, `no_telpon`) VALUES
('004', 'miftahul falah', 'ibnuaziznu@gmail.com', 'ibnuaziz', 'akdhkakdlja', 97473895),
('005', 'Salman', 'ibnuazizn@gmail.com', 'ibnuaziz', 'ibnuaziz', 2147483647),
('1', 'ibnuaziz', 'ibnuaziznu@gmail.com', 'ibnuazizn', 'hhhhhh', 2147483647),
('2', 'Ibnu Aziz Nu', 'ibnuazizn@gmail.com', 'ibnuazizn', 'ibnuaziz', 2147483647),
('3', 'Ibnu Aziz Nu', 'ibnuazizn@gmail.com', 'ibnuazizn', 'ibnuaziz', 2147483647);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_masjid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
