import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Particles } from "@/components/Particles";
import { HistoryCard } from "@/components/HistoryCard";
import { StoryDialog, type StoryItem } from "@/components/StoryDialog";

// Wikimedia Commons stable redirect — tự resolve về file thật
const wiki = (filename: string, w = 1200) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=${w}`;
const wp = (slug: string) => `https://vi.wikipedia.org/wiki/${slug}`;

// Hero image — cờ Việt Nam tại Hà Nội
const HERO = wiki("National flag of Vietnam in Hanoi 24-12-2016.jpg", 1600);
// Fallback hero nếu Wikimedia lỗi
const HERO_FALLBACK = wiki("Flag of Vietnam.svg", 1600);

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lịch Sử Oai Hùng Việt Nam — Hành trình dựng nước và giữ nước" },
      { name: "description", content: "Hành trình dựng nước, giữ nước và những con người làm thay đổi dân tộc Việt Nam." },
      { property: "og:title", content: "Lịch Sử Oai Hùng Việt Nam" },
      { property: "og:description", content: "Hành trình dựng nước, giữ nước và những con người làm thay đổi dân tộc." },
      { property: "og:type", content: "website" },
    ],
  }),
});

// ============== DỰNG NƯỚC & GIỮ NƯỚC ==============
const dungNuoc: StoryItem[] = [
  {
    category: "Dựng nước & Giữ nước",
    title: "Trống đồng Đông Sơn",
    date: "Khoảng thế kỷ VII TCN — II SCN",
    description: "Bảo vật văn hoá — biểu tượng rực rỡ của nền văn minh Việt cổ.",
    image: wiki("Ngoc Lu drum.jpg"),
    fallback: wiki("DongSonBronzeDrum.JPG"),
    story:
      `Trống đồng Đông Sơn là di vật tiêu biểu nhất của văn hoá Đông Sơn — nền văn minh kim khí của người Việt cổ phát triển rực rỡ ở lưu vực sông Hồng, sông Mã, sông Cả trong khoảng thế kỷ VII TCN đến thế kỷ II SCN.\n\nMặt trống thường có hình mặt trời ở chính giữa, bao quanh là các vòng hoa văn hình học, chim Lạc, hươu nai, nhà sàn, người giã gạo và thuyền chiến — phản ánh đời sống nông nghiệp lúa nước, tín ngưỡng mặt trời và sinh hoạt cộng đồng của tổ tiên.\n\nNhững chiếc trống Ngọc Lũ, Hoàng Hạ, Cổ Loa hiện được trưng bày tại Bảo tàng Lịch sử quốc gia và được công nhận là Bảo vật quốc gia.`,
    sources: [
      { label: "Wikipedia tiếng Việt — Trống đồng Đông Sơn", url: wp("Tr%E1%BB%91ng_%C4%91%E1%BB%93ng_%C4%90%C3%B4ng_S%C6%A1n") },
      { label: "Bảo tàng Lịch sử Quốc gia Việt Nam", url: "https://baotanglichsu.vn/" },
    ],
  },
  {
    category: "Dựng nước & Giữ nước",
    title: "Khởi nghĩa Hai Bà Trưng",
    date: "Năm 40 — 43",
    description: "Hai vị nữ anh hùng đầu tiên đứng lên chống ách đô hộ phương Bắc.",
    image: wiki("Hai ba trung Dong Ho painting.jpg"),
    fallback: wiki("Trung sisters statue.jpg"),
    story:
      `Mùa xuân năm 40, Trưng Trắc cùng em gái Trưng Nhị phất cờ khởi nghĩa tại Hát Môn (Phúc Thọ, Hà Nội ngày nay), đánh đuổi thái thú Tô Định, giải phóng 65 thành trì của quận Giao Chỉ. Trưng Trắc xưng vương, đóng đô ở Mê Linh, mở ra thời kỳ tự chủ ngắn ngủi nhưng đầy ý nghĩa giữa hơn một nghìn năm Bắc thuộc.\n\nNăm 42, nhà Hán cử Mã Viện đem đại quân sang đàn áp. Sau những trận đánh ác liệt ở Lãng Bạc và Cấm Khê, Hai Bà thất thế và tuẫn tiết năm 43, để lại tấm gương bất khuất cho muôn đời sau.\n\nCuộc khởi nghĩa mở đầu cho truyền thống đấu tranh giành độc lập của dân tộc và truyền thống tham gia chính sự của phụ nữ Việt Nam.`,
    sources: [
      { label: "Wikipedia tiếng Việt — Khởi nghĩa Hai Bà Trưng", url: wp("Kh%E1%BB%9Fi_ngh%C4%A9a_Hai_B%C3%A0_Tr%C6%B0ng") },
      { label: "Britannica — Trung Sisters", url: "https://www.britannica.com/biography/Trung-sisters" },
    ],
  },
  {
    category: "Dựng nước & Giữ nước",
    title: "Lý Thường Kiệt & sông Như Nguyệt",
    date: "1077",
    description: "Phòng tuyến Như Nguyệt — bản tuyên ngôn độc lập đầu tiên vang vọng.",
    image: wiki("Tuong Ly Thuong Kiet, DNQT.jpg"),
    fallback: wiki("Song Nhu Nguyet.jpg"),
    story:
      `Năm 1075–1077, trước hiểm hoạ xâm lăng của nhà Tống, Thái uý Lý Thường Kiệt chủ trương "tiên phát chế nhân" — đem quân tập kích Ung Châu, Khâm Châu, Liêm Châu để phá kho lương và bẻ gãy ý đồ tiến công của địch.\n\nKhi quân Tống do Quách Quỳ, Triệu Tiết chỉ huy tràn sang, ông tổ chức phòng tuyến trên sông Như Nguyệt (sông Cầu ngày nay). Tương truyền trong đêm bên đền Trương Hống — Trương Hát vang lên bài thơ:\n\n"Nam quốc sơn hà Nam đế cư\nTiệt nhiên định phận tại thiên thư\nNhư hà nghịch lỗ lai xâm phạm\nNhữ đẳng hành khan thủ bại hư."\n\nĐược xem là bản tuyên ngôn độc lập đầu tiên của Đại Việt, khẳng định chủ quyền thiêng liêng và bất khả xâm phạm của dân tộc.`,
    sources: [
      { label: "Wikipedia tiếng Việt — Lý Thường Kiệt", url: wp("L%C3%BD_Th%C6%B0%E1%BB%9Dng_Ki%E1%BB%87t") },
      { label: "Wikipedia tiếng Việt — Nam quốc sơn hà", url: wp("Nam_qu%E1%BB%91c_s%C6%A1n_h%C3%A0") },
    ],
  },
  {
   category: "Dựng nước & Giữ nước",
title: "Trận Bạch Đằng 1288",
date: "09/04/1288",
description: "Trần Hưng Đạo đánh tan thuỷ quân Nguyên Mông trên sông Bạch Đằng.",
image: wiki("Battle_of_Bach_Dang_river.jpg"),
fallback: wiki("Bãi_cọc_cửa_sông_Bạch_Đằng.jpg"),
story:
  `Lần thứ ba quân Nguyên Mông xâm lược Đại Việt (1287–1288). Quốc công Tiết chế Hưng Đạo Đại vương Trần Quốc Tuấn cho đóng cọc gỗ lim đầu bịt sắt cắm dưới lòng sông Bạch Đằng, lợi dụng quy luật thuỷ triều để bẫy hạm đội rút lui của Ô Mã Nhi.\n\nNgày 8 tháng 3 năm Mậu Tý (9/4/1288), khi thuỷ triều rút, hạm đội Nguyên mắc cạn vào bãi cọc và bị quân Trần dùng hoả công, thuyền nhẹ tiêu diệt. Hơn 400 chiến thuyền bị phá huỷ, Ô Mã Nhi bị bắt sống.\n\nĐây là chiến thắng quyết định, chấm dứt mọi tham vọng xâm lược của đế chế Mông Cổ — đế chế hùng mạnh nhất thế giới thế kỷ XIII. Sông Bạch Đằng ba lần ghi dấu chiến công: 938 (Ngô Quyền), 981 (Lê Hoàn) và 1288 (Trần Hưng Đạo).`,
sources: [
  {
    label: "Wikipedia tiếng Việt — Trận Bạch Đằng (1288)",
    url: wp("Tr%E1%BA%ADn_B%E1%BA%A1ch_%C4%90%E1%BA%B1ng_(1288)")
  },
  {
    label: "Wikipedia tiếng Việt — Trần Hưng Đạo",
    url: wp("Tr%E1%BA%A7n_H%C6%B0ng_%C4%90%E1%BA%A1o")
  ],
},
  {
    category: "Dựng nước & Giữ nước",
    title: "Quang Trung đại phá quân Thanh",
    date: "Tết Kỷ Dậu 1789",
    description: "Hành quân thần tốc, đánh tan 29 vạn quân Thanh trong 5 ngày Tết.",
    image: wiki("NguyenHue.jpg"),
    fallback: wiki("Quang Trung statue.jpg"),
    story:
      `Cuối năm 1788, vua Càn Long nhà Thanh sai Tôn Sĩ Nghị đem khoảng 29 vạn quân tràn vào Thăng Long với danh nghĩa "phù Lê". Ngày 22/12/1788, Nguyễn Huệ lên ngôi Hoàng đế, lấy niên hiệu Quang Trung, rồi lập tức xuất quân ra Bắc.\n\nChỉ trong 5 ngày Tết Kỷ Dậu (từ đêm 30 đến trưa mùng 5 tháng Giêng 1789), đại quân Tây Sơn lần lượt phá tan các đồn Hà Hồi, Ngọc Hồi, Đống Đa, giải phóng kinh thành Thăng Long. Sầm Nghi Đống thắt cổ tự tử, Tôn Sĩ Nghị bỏ ấn tín chạy về nước.\n\nChiến công Ngọc Hồi — Đống Đa là một trong những cuộc hành quân thần tốc nổi tiếng nhất lịch sử quân sự Việt Nam.`,
    sources: [
      { label: "Wikipedia tiếng Việt — Trận Ngọc Hồi – Đống Đa", url: wp("Tr%E1%BA%ADn_Ng%E1%BB%8Dc_H%E1%BB%93i_%E2%80%93_%C4%90%E1%BB%91ng_%C4%90a") },
      { label: "Wikipedia tiếng Việt — Quang Trung", url: wp("Quang_Trung") },
    ],
  },
];

// ============== THỜI ĐẠI HỒ CHÍ MINH ==============
const cachMang: StoryItem[] = [
  {
    category: "Thời đại Hồ Chí Minh",
    title: "Chủ tịch Hồ Chí Minh",
    date: "19/05/1890 — 02/09/1969",
    description: "Vị lãnh tụ kính yêu đã đưa Việt Nam đến độc lập.",
    image: wiki("Ho Chi Minh 1946.jpg"),
    fallback: wiki("Ho Chi Minh 1962.jpg"),
    story:
      `Sinh ngày 19/5/1890 tại làng Sen, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An, Nguyễn Sinh Cung — Nguyễn Tất Thành — Nguyễn Ái Quốc — Hồ Chí Minh đã dành trọn cuộc đời cho sự nghiệp giải phóng dân tộc.\n\nNgày 5/6/1911, từ bến cảng Nhà Rồng, người thanh niên Nguyễn Tất Thành lên tàu Amiral Latouche-Tréville ra đi tìm đường cứu nước, bôn ba qua hơn 30 quốc gia trong gần 30 năm. Năm 1930, Người sáng lập Đảng Cộng sản Việt Nam. Ngày 2/9/1945, Người đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hoà.\n\nNgười qua đời ngày 2/9/1969 tại Hà Nội, để lại bản Di chúc thiêng liêng và một tấm gương đạo đức cách mạng: cần, kiệm, liêm, chính, chí công vô tư.`,
    sources: [
      { label: "Wikipedia tiếng Việt — Hồ Chí Minh", url: wp("H%E1%BB%93_Ch%C3%AD_Minh") },
      { label: "Hochiminh.vn — Trang thông tin chính thức", url: "https://hochiminh.vn/" },
    ],
  },
  {
    category: "Thời đại Hồ Chí Minh",
    title: "Đại tướng Võ Nguyên Giáp",
    date: "25/08/1911 — 04/10/2013",
    description: "Vị tướng huyền thoại, người anh cả của Quân đội nhân dân Việt Nam.",
    image: wiki("Mr. Vo Nguyen Giap.jpg"),
    fallback: wiki("Võ Nguyên Giáp 1954.jpg"),
    story:
      `Từ một thầy giáo dạy lịch sử ở trường Thăng Long, Võ Nguyên Giáp trở thành Đại tướng đầu tiên (1948) và là Tổng Tư lệnh Quân đội nhân dân Việt Nam. Ông là người chỉ huy trực tiếp hai chiến dịch có ý nghĩa quyết định: Điện Biên Phủ 1954 và Tổng tiến công mùa Xuân 1975.\n\nVới triết lý quân sự "lấy ít địch nhiều, lấy yếu thắng mạnh, lấy chính nghĩa thắng hung tàn", ông được nhiều học giả quân sự quốc tế đánh giá là một trong những danh tướng nổi bật của thế kỷ XX.\n\nNhân dân gọi ông giản dị: "Anh Văn" — người anh cả của Quân đội nhân dân Việt Nam.`,
    sources: [
      { label: "Wikipedia tiếng Việt — Võ Nguyên Giáp", url: wp("V%C3%B5_Nguy%C3%AAn_Gi%C3%A1p") },
      { label: "Britannica — Vo Nguyen Giap", url: "https://www.britannica.com/biography/Vo-Nguyen-Giap" },
    ],
  },
  {
    category: "Thời đại Hồ Chí Minh",
    title: "Quốc ca — Tiến Quân Ca",
    date: "Sáng tác 1944",
    description: '"Đoàn quân Việt Nam đi…" — bản hùng ca của Văn Cao.',
    image: wiki("Musician Văn Cao.jpg"),
    fallback: wiki("Van Cao.jpg"),
    story:
      `Tiến Quân Ca được nhạc sĩ Văn Cao (1923–1995) sáng tác vào mùa đông năm 1944 tại căn gác số 45 phố Nguyễn Thượng Hiền, Hà Nội. Bài hát lần đầu được in trên báo Cờ Giải Phóng tháng 11/1944.\n\nKỳ họp thứ hai Quốc hội khoá I (tháng 3/1946) đã chính thức công nhận Tiến Quân Ca là Quốc ca của nước Việt Nam Dân chủ Cộng hoà. Sau ngày thống nhất, Quốc hội khoá VI (2/7/1976) tiếp tục giữ làm Quốc ca của nước Cộng hoà Xã hội chủ nghĩa Việt Nam.\n\nNăm 2016, gia đình nhạc sĩ Văn Cao đã hiến tặng tác phẩm Tiến Quân Ca cho Nhà nước và nhân dân Việt Nam.`,
    sources: [
      { label: "Wikipedia tiếng Việt — Tiến Quân Ca", url: wp("Ti%E1%BA%BFn_Qu%C3%A2n_Ca") },
      { label: "Wikipedia tiếng Việt — Văn Cao", url: wp("V%C4%83n_Cao") },
    ],
  },
  {
    category: "Thời đại Hồ Chí Minh",
    title: "Cách mạng Tháng Tám 1945",
    date: "19/08/1945",
    description: "Tổng khởi nghĩa giành chính quyền về tay nhân dân.",
    image: wiki("Cách mạng tháng 8 b.jpg"),
    fallback: wiki("August Revolution Hanoi 1945.jpg"),
    story:
      `Sau khi Nhật đầu hàng Đồng Minh (15/8/1945), thời cơ khởi nghĩa đã chín muồi. Đêm 13/8/1945, Uỷ ban Khởi nghĩa toàn quốc ra Quân lệnh số 1, phát động Tổng khởi nghĩa.\n\nNgày 19/8/1945, hàng chục vạn nhân dân Hà Nội rầm rộ xuống đường, chiếm Phủ Khâm sai, Trại Bảo an binh và các công sở. Cách mạng Tháng Tám chỉ trong khoảng hai tuần đã thành công trên cả nước, lật đổ chế độ phong kiến tồn tại hàng nghìn năm và ách thống trị của thực dân Pháp gần một thế kỷ.\n\nĐây là một trong những cuộc cách mạng giải phóng dân tộc thành công sớm nhất ở các nước thuộc địa thế kỷ XX.`,
    sources: [
      { label: "Wikipedia tiếng Việt — Cách mạng Tháng Tám", url: wp("C%C3%A1ch_m%E1%BA%A1ng_Th%C3%A1ng_T%C3%A1m") },
    ],
  },
  {
    category: "Thời đại Hồ Chí Minh",
    title: "Tuyên ngôn Độc lập",
    date: "02/09/1945",
    description: "Bản tuyên ngôn khai sinh nước Việt Nam Dân chủ Cộng hoà.",
    image: wiki("Président Ho-chi-Minh lit la Proclamation-d'indépendance sur la place Ba-dinh le 2nd Sep 1945.jpg"),
    fallback: wiki("Declaration of Independence of Vietnam 1945.jpg"),
    story:
      "Sáng ngày 2/9/1945, tại quảng trường Ba Đình lịch sử, trước khoảng nửa triệu đồng bào, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hoà — nhà nước công nông đầu tiên ở Đông Nam Á.\n\n\"Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hoá cho họ những quyền không ai có thể xâm phạm được; trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc.\"\n\nCâu mở đầu — vận dụng Tuyên ngôn Độc lập 1776 của Hoa Kỳ và Tuyên ngôn Nhân quyền và Dân quyền 1789 của Pháp — đã đặt Việt Nam vào dòng chảy chung của các dân tộc tự do trên thế giới.",
    sources: [
      { label: "Wikipedia tiếng Việt — Tuyên ngôn Độc lập (Việt Nam DCCH)", url: wp("Tuy%C3%AAn_ng%C3%B4n_%C4%91%E1%BB%99c_l%E1%BA%ADp_(Vi%E1%BB%87t_Nam_D%C3%A2n_ch%E1%BB%A7_C%E1%BB%99ng_h%C3%B2a)") },
    ],
  },
  {
    category: "Thời đại Hồ Chí Minh",
    title: "Quốc kỳ Việt Nam",
    date: "Chính thức từ 1945 / 1976",
    description: "Cờ đỏ sao vàng — biểu tượng thiêng liêng của Tổ quốc.",
    image: wiki("National flag of Vietnam in Hanoi 24-12-2016.jpg"),
    fallback: wiki("Flag of Vietnam.svg"),
    story:
      "Lá cờ đỏ sao vàng năm cánh xuất hiện lần đầu trong cuộc Khởi nghĩa Nam Kỳ tháng 11/1940. Tác giả mẫu cờ theo nhiều nguồn nghiên cứu là đồng chí Nguyễn Hữu Tiến (1901–1941).\n\nNgày 5/9/1945, Chủ tịch Hồ Chí Minh ký Sắc lệnh quy định Quốc kỳ Việt Nam là \"lá cờ đỏ, ở giữa có sao vàng năm cánh\". Quốc hội khoá VI ngày 2/7/1976 tiếp tục xác định đây là Quốc kỳ của nước Cộng hoà Xã hội chủ nghĩa Việt Nam.\n\nNền đỏ tượng trưng cho cách mạng và máu của các anh hùng liệt sĩ. Ngôi sao vàng đại diện cho linh hồn dân tộc và khối đại đoàn kết toàn dân.",
    sources: [
      { label: "Wikipedia tiếng Việt — Quốc kỳ Việt Nam", url: wp("Qu%E1%BB%91c_k%E1%BB%B3_Vi%E1%BB%87t_Nam") },
    ],
  },
  {
    category: "Thời đại Hồ Chí Minh",
    title: "Chiến thắng Điện Biên Phủ",
    date: "13/03 — 07/05/1954",
    description: "Lừng lẫy năm châu, chấn động địa cầu.",
    image: wiki("Victory in Battle of Dien Bien Phu.jpg"),
    fallback: wiki("Dien Bien Phu battle.jpg"),
    story:
      "Chiến dịch Điện Biên Phủ kéo dài 56 ngày đêm (13/3 – 7/5/1954), gồm ba đợt tấn công vào tập đoàn cứ điểm mạnh nhất Đông Dương do thực dân Pháp xây dựng. Bộ Chỉ huy chiến dịch do Đại tướng Võ Nguyên Giáp làm Tư lệnh kiêm Bí thư Đảng uỷ Mặt trận.\n\nQuyết định chuyển từ phương châm \"đánh nhanh, thắng nhanh\" sang \"đánh chắc, tiến chắc\" — được Đại tướng gọi là \"quyết định khó khăn nhất trong đời cầm quân\" — đã làm nên chiến thắng.\n\nChiều 7/5/1954, lá cờ \"Quyết chiến Quyết thắng\" cắm trên nóc hầm De Castries. Toàn bộ 16.200 quân Pháp bị tiêu diệt và bắt sống. Hiệp định Genève 21/7/1954 đặt dấu chấm hết cho ách đô hộ gần một thế kỷ của thực dân Pháp ở Đông Dương.",
    sources: [
      { label: "Wikipedia tiếng Việt — Chiến dịch Điện Biên Phủ", url: wp("Chi%E1%BA%BFn_d%E1%BB%8Bch_%C4%90i%E1%BB%87n_Bi%C3%AAn_Ph%E1%BB%A7") },
      { label: "Britannica — Battle of Dien Bien Phu", url: "https://www.britannica.com/event/Battle-of-Dien-Bien-Phu" },
    ],
  },
  {
    category: "Thời đại Hồ Chí Minh",
    title: "Giải phóng miền Nam — Thống nhất đất nước",
    date: "30/04/1975",
    description: "Non sông thu về một mối, Bắc Nam sum họp một nhà.",
    image: wiki("Independence Palace, Saigon Ho Chi Minh City (9982392085).jpg"),
    fallback: wiki("Tank 390 Reunification Palace 1975.jpg"),
    story:
      `Cuộc Tổng tiến công và nổi dậy mùa Xuân 1975 gồm ba chiến dịch lớn: Tây Nguyên (4 – 24/3), Huế – Đà Nẵng (21 – 29/3) và Chiến dịch Hồ Chí Minh (26 – 30/4).\n\nTrưa 30/4/1975, các xe tăng của Lữ đoàn xe tăng 203 tiến vào Dinh Độc Lập. Xe tăng 390 húc đổ cánh cổng chính, còn Trung uý Bùi Quang Thận lên nóc Dinh kéo cờ Mặt trận Dân tộc Giải phóng miền Nam Việt Nam.\n\nTổng thống Dương Văn Minh tuyên bố đầu hàng vô điều kiện. Sau 21 năm chia cắt, đất nước thống nhất, Bắc – Nam thu về một mối.`,
    sources: [
      { label: "Wikipedia tiếng Việt — Sự kiện 30 tháng 4 năm 1975", url: wp("S%E1%BB%B1_ki%E1%BB%87n_30_th%C3%A1ng_4_n%C4%83m_1975") },
      { label: "Wikipedia tiếng Việt — Chiến dịch Hồ Chí Minh", url: wp("Chi%E1%BA%BFn_d%E1%BB%8Bch_H%E1%BB%93_Ch%C3%AD_Minh") },
    ],
  },
];

// ============== VĂN HOÁ & DI SẢN ==============
const vanHoa: StoryItem[] = [
  {
    category: "Văn hoá & Di sản",
    title: "Vịnh Hạ Long",
    date: "UNESCO 1994 & 2000",
    description: "Kỳ quan thiên nhiên — bản giao hưởng của đá và nước.",
    image: wiki("Ha Long Bay.jpg"),
    fallback: wiki("Halong bay.jpg"),
    story:
      "Vịnh Hạ Long thuộc tỉnh Quảng Ninh, có diện tích khoảng 1.553 km² với 1.969 hòn đảo đá vôi — phần lớn là đảo đá có tuổi địa chất khoảng 500 triệu năm.\n\nUNESCO đã hai lần công nhận Vịnh Hạ Long là Di sản Thiên nhiên Thế giới: lần thứ nhất năm 1994 với giá trị thẩm mỹ ngoại hạng, lần thứ hai năm 2000 với giá trị địa chất – địa mạo. Năm 2011, Vịnh Hạ Long được New7Wonders bình chọn là một trong 7 kỳ quan thiên nhiên mới của thế giới.\n\nTên gọi \"Hạ Long\" nghĩa là \"rồng đáp xuống\", gắn liền với truyền thuyết về đàn rồng được Ngọc Hoàng cử xuống giúp dân Việt chống giặc, phun châu nhả ngọc tạo thành những hòn đảo kỳ vĩ.",
    sources: [
      { label: "UNESCO — Ha Long Bay", url: "https://whc.unesco.org/en/list/672/" },
      { label: "Wikipedia tiếng Việt — Vịnh Hạ Long", url: wp("V%E1%BB%8Bnh_H%E1%BA%A1_Long") },
    ],
  },
  {
    category: "Văn hoá & Di sản",
    title: "Hà Nội — Thăng Long ngàn năm",
    date: "Định đô 1010",
    description: "Thủ đô ngàn năm văn hiến, trái tim thiêng liêng của Tổ quốc.",
    image: wiki("One Pillar Pagoda, Hanoi, Vietnam, 20240123 1122 3219.jpg"),
    fallback: wiki("Hoan Kiem Lake Hanoi.jpg"),
    story:
      "Năm 1010, vua Lý Thái Tổ ban Chiếu dời đô, chuyển kinh đô từ Hoa Lư (Ninh Bình) về thành Đại La và đổi tên là Thăng Long — \"Rồng bay lên\". Trong hơn 1000 năm, Thăng Long – Hà Nội là trung tâm chính trị, văn hoá, giáo dục của nước Việt.\n\nKhu di tích Hoàng thành Thăng Long được UNESCO công nhận là Di sản Văn hoá Thế giới năm 2010, đúng dịp đại lễ 1000 năm Thăng Long – Hà Nội.\n\nThành phố mang trong mình 36 phố phường cổ kính, Hồ Gươm huyền thoại, Văn Miếu uy nghi, Chùa Một Cột thanh thoát và những con người thanh lịch, hào hoa đã đi vào thơ ca.",
    sources: [
      { label: "Wikipedia tiếng Việt — Hà Nội", url: wp("H%C3%A0_N%E1%BB%99i") },
      { label: "UNESCO — Hoàng thành Thăng Long", url: "https://whc.unesco.org/en/list/1328/" },
    ],
  },
  {
    category: "Văn hoá & Di sản",
    title: "Văn Miếu — Quốc Tử Giám",
    date: "Khởi dựng 1070",
    description: "Trường đại học đầu tiên của Việt Nam — biểu tượng của hiếu học.",
    image: wiki("Khue Van Cac 2024.jpg"),
    fallback: wiki("Temple of Literature Hanoi.jpg"),
    story:
      `Văn Miếu được xây dựng năm 1070 dưới triều vua Lý Thánh Tông để thờ Khổng Tử và các bậc tiên thánh, tiên hiền của đạo Nho. Năm 1076, vua Lý Nhân Tông cho lập Quốc Tử Giám bên cạnh — được xem là trường đại học đầu tiên của Việt Nam.\n\nTrong gần một nghìn năm, các triều Lý, Trần, Lê, Mạc, Nguyễn đã tổ chức nhiều khoa thi tại đây. 82 tấm bia tiến sĩ bằng đá khắc tên 1.304 vị đỗ đại khoa từ năm 1442 đến 1779 còn lưu giữ tới ngày nay.\n\nNăm 2010, 82 bia tiến sĩ đã được UNESCO công nhận là Di sản tư liệu thế giới thuộc Chương trình Ký ức Thế giới.`,
    sources: [
      { label: "Wikipedia tiếng Việt — Văn Miếu – Quốc Tử Giám", url: wp("V%C4%83n_Mi%E1%BA%BFu_%E2%80%93_Qu%E1%BB%91c_T%E1%BB%AD_Gi%C3%A1m") },
      { label: "UNESCO — Stone Stele Records", url: "https://en.unesco.org/memoryoftheworld/registry/162" },
    ],
  },
  {
    category: "Văn hoá & Di sản",
    title: "Sài Gòn — Thành phố Hồ Chí Minh",
    date: "Khai phá 1698 — Đặt tên 02/07/1976",
    description: "Hòn ngọc Viễn Đông — đầu tàu kinh tế của cả nước.",
    image: wiki("Saigon Notre-Dame Basilica 20190921-2.jpg"),
    fallback: wiki("Ho Chi Minh City skyline.jpg"),
    story:
      `Vùng đất Sài Gòn – Gia Định được khai phá từ cuối thế kỷ XVII, khi chúa Nguyễn cử Thống suất Nguyễn Hữu Cảnh vào kinh lý phương Nam (1698) — chính thức xác lập chủ quyền hành chính của người Việt trên vùng đất này.\n\nThời Pháp thuộc, Sài Gòn được mệnh danh là "Hòn ngọc Viễn Đông". Sau ngày 30/4/1975 thống nhất đất nước, kỳ họp đầu tiên Quốc hội khoá VI (2/7/1976) đã quyết định đổi tên thành phố Sài Gòn – Gia Định thành Thành phố Hồ Chí Minh.\n\nDinh Độc Lập, Bến Nhà Rồng, Nhà thờ Đức Bà, Bưu điện Trung tâm, chợ Bến Thành — những công trình in đậm dấu ấn lịch sử. Hôm nay, Thành phố Hồ Chí Minh là đầu tàu kinh tế của cả nước.`,
    sources: [
      { label: "Wikipedia tiếng Việt — Thành phố Hồ Chí Minh", url: wp("Th%C3%A0nh_ph%E1%BB%91_H%E1%BB%93_Ch%C3%AD_Minh") },
    ],
  },
  {
    category: "Văn hoá & Di sản",
    title: "Áo dài Việt Nam",
    date: "Tiền thân 1744 — Định hình hiện đại thập niên 1930",
    description: "Trang phục truyền thống — biểu tượng văn hoá của người Việt.",
    image: wiki("Ao dai 12.2022 (cropped).jpg"),
    fallback: wiki("Vietnamese women in ao dai.jpg"),
    story:
      `Áo dài hiện đại có nguồn gốc từ áo ngũ thân tay chẽn — trang phục được định chế dưới thời chúa Nguyễn Phúc Khoát (1744) và phổ biến rộng rãi vào thế kỷ XIX.\n\nĐến thập niên 1930, hoạ sĩ Nguyễn Cát Tường (Lemur) cùng nhóm Tự Lực Văn Đoàn đã cách tân áo ngũ thân thành kiểu áo dài tân thời ôm sát cơ thể với hai tà mềm mại. Hoạ sĩ Lê Phổ tiếp tục hoàn thiện vào cuối thập niên 1930 thành dáng áo dài cơ bản như ngày nay.\n\nHiện nay áo dài đã được công nhận rộng rãi như một biểu tượng văn hoá truyền thống và được Bộ Văn hoá – Thể thao và Du lịch đề xuất xây dựng hồ sơ trình UNESCO ghi danh di sản văn hoá phi vật thể.`,
    sources: [
      { label: "Wikipedia tiếng Việt — Áo dài", url: wp("%C3%81o_d%C3%A0i") },
      { label: "Báo Chính phủ — Áo dài và câu chuyện Quốc phục", url: "https://baochinhphu.vn/ao-dai-viet-nam-cau-chuyen-quoc-phuc-102220308184049063.htm" },
    ],
  },
  {
    category: "Văn hoá & Di sản",
    title: "Phở — Tinh hoa ẩm thực Việt",
    date: "Ra đời đầu thế kỷ XX",
    description: "Món ăn quốc hồn quốc tuý — đại sứ ẩm thực của Việt Nam.",
    image: wiki("Vietnamese Pho Beef Noodles 2007.jpg"),
    fallback: wiki("Pho bo.jpg"),
    story:
      "Phở ra đời ở vùng đồng bằng Bắc Bộ vào đầu thế kỷ XX, được cho là khởi nguồn từ Nam Định và Hà Nội. Phở là sự kết tinh từ truyền thống ẩm thực bản địa với những ảnh hưởng giao thoa văn hoá đầu thế kỷ XX.\n\nMột bát phở chuẩn vị là sự hoà quyện giữa nước dùng trong, ngọt thanh từ xương ninh nhiều giờ với hồi, quế, thảo quả, hành nướng; bánh phở mềm dai; thịt bò hoặc gà thái mỏng; cùng hành lá, rau thơm và chanh ớt.\n\nTừ những gánh phở rong Hà Nội, phở đã đi khắp năm châu. Từ điển Oxford English Dictionary đã thêm từ \"pho\" vào năm 2007. Năm 2017, CNN bình chọn phở là một trong 50 món ăn ngon nhất thế giới.",
    sources: [
      { label: "Wikipedia tiếng Việt — Phở", url: wp("Ph%E1%BB%9F") },
      { label: "CNN — World's 50 best foods", url: "https://edition.cnn.com/travel/article/world-best-foods-readers-choice/index.html" },
    ],
  },
];

const sections = [
  { id: "dung-nuoc", label: "I", title: "Dựng nước & Giữ nước", subtitle: "Từ Văn Lang – Âu Lạc đến đại thắng quân Thanh", items: dungNuoc },
  { id: "cach-mang", label: "II", title: "Thời đại Hồ Chí Minh", subtitle: "Cách mạng, độc lập và thống nhất non sông", items: cachMang },
  { id: "van-hoa", label: "III", title: "Văn hoá & Di sản", subtitle: "Những di sản trường tồn của dân tộc Việt", items: vanHoa },
] as const;

function CategoryRow({
  title, subtitle, label, items, onPick,
}: {
  title: string;
  subtitle: string;
  label: string;
  items: StoryItem[];
  onPick: (s: StoryItem) => void;
}) {
  return (
    <section className="relative px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-8 flex items-end justify-between gap-6"
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="font-serif text-[11px] uppercase tracking-[0.4em] text-[#facc15]/80">Chương {label}</span>
              <span className="h-px w-10 bg-gradient-to-r from-[#facc15] to-transparent" />
            </div>
            <h2 className="font-serif text-3xl font-light leading-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-gradient-gold">{title}</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{subtitle}</p>
          </div>
          <div className="hidden shrink-0 items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#facc15]/60 md:flex">
            <span>Lướt ngang</span>
            <span aria-hidden>→</span>
          </div>
        </motion.div>
      </div>

      <div className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#050505] to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#050505] to-transparent" />
        <div
          className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 pt-2 md:gap-6"
          style={{ scrollPaddingLeft: "1.5rem" }}
        >
          {items.map((card, i) => (
            <div key={card.title} className="snap-start shrink-0 w-[78vw] sm:w-[340px] md:w-[300px] lg:w-[320px]">
              <HistoryCard
                index={i}
                title={card.title}
                description={card.description}
                image={card.image}
                fallback={card.fallback}
                onClick={() => onPick(card)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<StoryItem | null>(null);
  const [heroSrc, setHeroSrc] = useState(HERO);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <main className="relative min-h-screen bg-[#050505] text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 vn-pattern" />
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-noise opacity-30" />

      <section ref={heroRef} className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale, opacity: heroOpacity }} className="absolute inset-0">
          <img
            src={heroSrc}
            alt="Quốc kỳ Việt Nam"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).onerror = null;
              setHeroSrc(HERO_FALLBACK);
            }}
            className="absolute inset-0 h-full w-full object-cover animate-slow-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#050505]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial-red)" }} />
        </motion.div>

        <Particles count={50} />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#facc15]" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-[#facc15]">Sử Thi Việt Nam</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#facc15]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-shadow-cinema sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="block text-gradient-gold">Lịch Sử Oai Hùng</span>
            <span className="block mt-2 text-foreground">Việt Nam</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-8 max-w-2xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Ba chương sử thi — từ buổi đầu dựng nước, qua thời đại Hồ Chí Minh, đến những di sản trường tồn của dân tộc.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="group inline-flex items-center gap-2 rounded-full border border-[#facc15]/30 bg-black/30 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-[#facc15]/90 backdrop-blur-md transition-all duration-500 hover:border-[#facc15] hover:bg-[#b91c1c]/20 hover:text-[#facc15] hover:shadow-[0_0_24px_-6px_rgba(250,204,21,0.6)]"
              >
                <span className="font-serif text-[#facc15]">{s.label}.</span>
                <span>{s.title}</span>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#facc15]/70">cuộn xuống</span>
            <div className="h-10 w-px bg-gradient-to-b from-[#facc15]/70 to-transparent animate-glow-pulse" />
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <p className="font-serif text-2xl font-light italic leading-relaxed text-muted-foreground md:text-3xl">
              "Dân ta phải biết sử ta,<br />
              <span className="text-gradient-gold">cho tường gốc tích nước nhà Việt Nam."</span>
            </p>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#facc15] to-transparent" />
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#facc15]/80">— Chủ tịch Hồ Chí Minh</p>
          </motion.div>
        </div>
      </section>

      {sections.map((s) => (
        <div key={s.id} id={s.id}>
          <CategoryRow title={s.title} subtitle={s.subtitle} label={s.label} items={s.items} onPick={setActive} />
        </div>
      ))}

      <footer className="relative overflow-hidden border-t border-[#facc15]/15 bg-black/60 px-6 py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30" style={{ background: "var(--gradient-radial-red)" }} />
        <Particles count={20} />
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }}>
            <div className="mx-auto mb-8 h-px w-32 bg-gradient-to-r from-transparent via-[#facc15] to-transparent" />
            <blockquote className="font-serif text-3xl font-light italic leading-tight text-shadow-cinema sm:text-4xl md:text-5xl">
              <span className="text-gradient-gold">"Không có gì quý hơn độc lập, tự do."</span>
            </blockquote>
            <p className="mt-6 text-xs uppercase tracking-[0.4em] text-[#facc15]/70">— Hồ Chí Minh —</p>
            <div className="mx-auto mt-12 h-px w-32 bg-gradient-to-r from-transparent via-[#b91c1c] to-transparent" />
            <p className="mt-8 text-xs tracking-[0.2em] text-muted-foreground/70">
              Tưởng nhớ và tri ân các thế hệ cha anh đã hy sinh vì Tổ quốc.
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/50">
              Tư liệu &amp; hình ảnh: Wikipedia, Wikimedia Commons, UNESCO, Britannica.
            </p>
          </motion.div>
        </div>
      </footer>

      <StoryDialog item={active} onClose={() => setActive(null)} />
    </main>
  );
}
