    // =============================================================================
    // DATA-PART: QUESTION DATA VARIABLE (qadata.js) Ver3.10h 大学生用 20260718
    // =============================================================================
    const questions = [
        // ==================== LESSON 1 ====================
        { "lesson": 1, "id": "1-1a", "text": "お<ruby>名前<rt>なまえ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。/ <ruby>名前<rt>なまえ</rt></ruby>を <ruby>言<rt>い</rt></ruby>ってください/ <ruby>教<rt>おし</rt></ruby>えてください。", "viText": "Tên bạn là gì? / Hãy đọc tên của bạn / Hãy cho tôi biết tên của bạn. ", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.1a.mp3" },
        { "lesson": 1, "id": "1-1b", "text": "お<ruby>名前<rt>なまえ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。/ <ruby>名前<rt>なまえ</rt></ruby>を <ruby>言<rt>い</rt></ruby>ってください/ <ruby>教<rt>おし</rt></ruby>えてください。", "viText": "Tên bạn là gì? / Hãy đọc tên của bạn / Hãy cho tôi biết tên của bạn. ", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.1b.mp3" },
        { "lesson": 1, "id": "1-2a", "text": "おいくつ ですか。/ <ruby>何歳<rt>なんさい</rt></ruby> ですか。", "viText": "Bạn bao nhiêu tuổi?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.2a.mp3" },
        { "lesson": 1, "id": "1-2b", "text": "おいくつ ですか。/ <ruby>何歳<rt>なんさい</rt></ruby> ですか。", "viText": "Bạn bao nhiêu tuổi?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.2b.mp3" },
        { "lesson": 1, "id": "1-3", "text": "<ruby>大学<rt>だいがく</rt></ruby>は どちらですか/どこですか。", "viText": "Bạn học trường đại học nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.3.mp3" },
        { "lesson": 1, "id": "1-4", "text": "いま、<ruby>何年生<rt>なんねんせい</rt></ruby>ですか。", "viText": "Hiện tại bạn là sinh viên năm thứ mấy?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.4.mp3" },
        { "lesson": 1, "id": "1-5a", "text": "<ruby>専門<rt>せんもん</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか/ <ruby>専攻<rt>せんこう</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。", "viText": "Chuyên ngành của bạn là gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.5a.mp3" },
        { "lesson": 1, "id": "1-5b", "text": "<ruby>専門<rt>せんもん</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか/ <ruby>専攻<rt>せんこう</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。", "viText": "Chuyên ngành của bạn là gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.5b.mp3" },
        { "lesson": 1, "id": "1-6a", "text": "あなたは、<ruby>大学生<rt>だいがくせい</rt></ruby>/エンジニア/ <ruby>留学生<rt>りゅうがくせい</rt></ruby> ですか。", "viText": "Bạn 〇〇 là sinh viên đại học / kỹ sư / du học sinh phải không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.6a.mp3" },
        { "lesson": 1, "id": "1-6b", "text": "あなたは、<ruby>大学生<rt>だいがくせい</rt></ruby>/エンジニア/ <ruby>留学生<rt>りゅうがくせい</rt></ruby> ですか。", "viText": "Bạn 〇〇 là sinh viên đại học / kỹ sư / du học sinh phải không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.6b.mp3" },
        { "lesson": 1, "id": "1-7a", "text": "あなたは、1<ruby>年生<rt>ねんせい</rt></ruby>/2<ruby>年生<rt>ねんせい</rt></ruby>/3<ruby>年生<rt>ねんせい</rt></ruby>/4<ruby>年生<rt>ねんせい</rt></ruby> ですか。", "viText": "Bạn ○○ là sinh viên năm 1 / năm 2 / năm 3 / năm 4 phải không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.7a.mp3" },
        { "lesson": 1, "id": "1-7b", "text": "あなたは、1<ruby>年生<rt>ねんせい</rt></ruby>/2<ruby>年生<rt>ねんせい</rt></ruby>/3<ruby>年生<rt>ねんせい</rt></ruby>/4<ruby>年生<rt>ねんせい</rt></ruby> ですか。", "viText": "Bạn ○○ là sinh viên năm 1 / năm 2 / năm 3 / năm 4 phải không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.7b.mp3" },
        { "lesson": 1, "id": "1-8", "text": "あなたは、△△<ruby>大学<rt>だいがく</rt></ruby>/△△<ruby>短大<rt>たんだい</rt></ruby>の <ruby>学生<rt>がくせい</rt></ruby>ですか。", "viText": "Bạn 〇〇 là sinh viên của trường đại học △△ / cao đẳng △△ phải không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.8.mp3" },
        { "lesson": 1, "id": "1-9", "text": "<ruby>出身<rt>しゅっしん</rt></ruby>は どちらですか/どこですか。", "viText": "Quê quán của bạn ở đâu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.9.mp3" },
        { "lesson": 1, "id": "1-10a", "text": "あなたは ベトナム<ruby>人<rt>じん</rt></ruby>/<ruby>中国<rt>ちゅうごく</rt></ruby><ruby>人<rt>じん</rt></ruby>/<ruby>韓国<rt>かんこく</rt></ruby><ruby>人<rt>じん</rt></ruby>ですか。", "viText": "Bạn 〇〇 là người Việt Nam / người Trung Quốc / người Hàn Quốc phải không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.10a.mp3" },
        { "lesson": 1, "id": "1-10b", "text": "あなたは ベトナム<ruby>人<rt>じん</rt></ruby>/<ruby>中国<rt>ちゅうごく</rt></ruby><ruby>人<rt>じん</rt></ruby>/<ruby>韓国<rt>かんこく</rt></ruby><ruby>人<rt>じん</rt></ruby>ですか。", "viText": "Bạn 〇〇 là người Việt Nam / người Trung Quốc / người Hàn Quốc phải không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.10b.mp3" },

        // ==================== LESSON 2 ====================
        { "lesson": 2, "id": "2-1", "text": "<ruby>仕事<rt>しごと</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。", "viText": "Công việc của bạn là gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/2.1.mp3" },
        { "lesson": 2, "id": "2-2", "text": "<ruby>出身<rt>しゅっしん</rt></ruby>は どこですか。", "viText": "Quê quán của bạn ở đâu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/2.2.mp3" },
        { "lesson": 2, "id": "2-3", "text": "<ruby>家族<rt>かぞく</rt></ruby>は <ruby>何人<rt>なんにん</rt></ruby> ですか。", "viText": "Gia đình bạn có mấy người?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/2.3.mp3" },
        { "lesson": 2, "id": "2-4a", "text": "お<ruby>父<rt>とう</rt></ruby>さん／お<ruby>母<rt>かあ</rt></ruby>さんの <ruby>仕事<rt>しごと</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。", "viText": "Công việc của bố / mẹ bạn là gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/2.4a.mp3" },
        { "lesson": 2, "id": "2-4b", "text": "お<ruby>父<rt>とう</rt></ruby>さん／お<ruby>母<rt>かあ</rt></ruby>さんの <ruby>仕事<rt>しごと</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。", "viText": "Công việc của bố / mẹ bạn là gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/2.4b.mp3" },
        { "lesson": 2, "id": "2-5", "text": "<ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。", "viText": "Sở thích của bạn là gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/2.5.mp3" },
        { "lesson": 2, "id": "2-6", "text": "あれは <ruby>何<rt>なん</rt></ruby>ですか。（カメラ、テレビ、<ruby>扇風機<rt>せんぷうき</rt></ruby>など）", "viText": "Kia là cái gì? (Máy ảnh, tivi, quạt máy...)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/2.6.mp3" },
        { "lesson": 2, "id": "2-7a", "text": "それは ボールペン／シャープペン／〇〇さん ですか。（※いいえ）", "viText": "Đó là bút bi / bút chì bấm / bạn 〇〇 phải không? (*Câu hỏi yêu cầu trả lời 'Không')", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/2.7a.mp3" },
        { "lesson": 2, "id": "2-7b", "text": "それは ボールペン／シャープペン／〇〇さん ですか。（※いいえ）", "viText": "Đó là bút bi / bút chì bấm / bạn 〇〇 phải không? (*Câu hỏi yêu cầu trả lời 'Không')", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/2.7b.mp3" },
        { "lesson": 2, "id": "2-8a", "text": "これは、<ruby>何<rt>なん</rt></ruby>の <ruby>教科書<rt>きょうかしょ</rt></ruby>／<ruby>本<rt>ほん</rt></ruby>／<ruby>鍵<rt>かぎ</rt></ruby>ですか。<br>", "viText": "Đây là sách giáo khoa / sách / chìa khóa về cái gì? (Sách giáo khoa ghi tên đặt trên bàn, học sinh có thể nhìn hoặc chạm vào)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/2.8a.mp3" },
        { "lesson": 2, "id": "2-8b", "text": "これは、<ruby>何<rt>なん</rt></ruby>の <ruby>教科書<rt>きょうかしょ</rt></ruby>／<ruby>本<rt>ほん</rt></ruby>／<ruby>鍵<rt>かぎ</rt></ruby>ですか。<br>", "viText": "Đây là sách giáo khoa / sách / chìa khóa về cái gì? (Sách giáo khoa ghi tên đặt trên bàn, học sinh có thể nhìn hoặc chạm vào)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/2.8b.mp3" },
        { "lesson": 2, "id": "2-9", "text": "あなたのですか。（※いいえの<ruby>回答<rt>かいとう</rt></ruby>）", "viText": "Cái này của bạn 〇〇 phải không? (*Trả lời 'Không phải')", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/2.9.mp3" },
        { "lesson": 2, "id": "2-10", "text": "<ruby>誰<rt>だれ</rt></ruby>のですか。<br>※ <ruby>教科書<rt>きょうかしょ</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>を<ruby>見<rt>み</rt></ruby>るなど／「わかりません」もあり", "viText": "Cái này của ai? *Học sinh nhìn tên trên sách / Hoặc trả lời 'Tôi không biết'", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/2.10.mp3" },

       // ==================== LESSON 3 ====================
        { "lesson": 3, "id": "3-1", "text": "この<ruby>魚<rt>さかな</rt></ruby>は、いくらですか？ → 150<ruby>円<rt>えん</rt></ruby>／1,500<ruby>円<rt>えん</rt></ruby>／15,000<ruby>円<rt>えん</rt></ruby>です。", "viText": "Con cá này giá bao nhiêu? -> 150 Yên / 1.500 Yên / 15.000 Yên.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.1.mp3","imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.1.jpg" },
        { "lesson": 3, "id": "3-2", "text": "このかばんは、いくらですか？ → 240<ruby>円<rt>えん</rt></ruby>／2,400<ruby>円<rt>えん</rt></ruby>／24,000<ruby>円<rt>えん</rt></ruby>です。", "viText": "Cái cặp này giá bao nhiêu? -> 240 Yên / 2.400 Yên / 24.000 Yên.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.2.mp3","imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.2.jpg" },
        { "lesson": 3, "id": "3-3", "text": "このハサミは、いくらですか？ → 360<ruby>円<rt>えん</rt></ruby>／3,600<ruby>円<rt>えん</rt></ruby>／36,000<ruby>円<rt>えん</rt></ruby>です。", "viText": "Cái kéo này giá bao nhiêu? -> 360 Yên / 2.400 Yên / 36.000 Yên.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.3.mp3","imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.3.jpg" },
        { "lesson": 3, "id": "3-4", "text": "この<ruby>安全靴<rt>あんぜんぐつ</rt></ruby>は、いくらですか？→ 780<ruby>円<rt>えん</rt></ruby>／7,800<ruby>円<rt>えん</rt></ruby>／78,000<ruby>円<rt>えん</rt></ruby>です。", "viText": "Đôi giày bảo hộ này giá bao nhiêu? -> 780 Yên / 7.800 Yên / 78.000 Yên.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.4.mp3","imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.4.jpg" },
        { "lesson": 3, "id": "3-5", "text": "このパソコンは、いくらですか？ →1,250<ruby>円<rt>えん</rt></ruby>／12,500<ruby>円<rt>えん</rt></ruby>／125,000<ruby>円<rt>えん</rt></ruby>です。", "viText": "Cái máy tính này giá 1.250 Yên / 12.500 Yên / 125.000 Yên.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.5.mp3","imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.5.jpg" },
        { "lesson": 3, "id": "3-6a", "text": "ここは <ruby>教室<rt>きょうしつ</rt></ruby>／<ruby>寮<rt>りょう</rt></ruby>／<ruby>食堂<rt>しょくどう</rt></ruby>／<ruby>図書館<rt>としょかん</rt></ruby>ですか。", "viText": "Đây là phòng học / kí túc xá / nhà ăn / thư viện phải không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.6a.mp3" },
        { "lesson": 3, "id": "3-6b", "text": "ここは <ruby>教室<rt>きょうしつ</rt></ruby>／<ruby>寮<rt>りょう</rt></ruby>／<ruby>食堂<rt>しょくどう</rt></ruby>／<ruby>図書館<rt>としょかん</rt></ruby>ですか。", "viText": "Đây là phòng học / kí túc xá / nhà ăn / thư viện phải không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.6b.mp3" },
        { "lesson": 3, "id": "3-7a", "text": "あなたの<ruby>教室<rt>きょうしつ</rt></ruby>／<ruby>事務所<rt>じむしょ</rt></ruby>／<ruby>食堂<rt>しょくどう</rt></ruby>は 1<ruby>階<rt>かい</rt></ruby>／2<ruby>階<rt>かい</rt></ruby>／3<ruby>階<rt>がい</rt></ruby>ですか。", "viText": "Phòng học / văn phòng / nhà ăn của bạn 〇〇 ở tầng 1 / tầng 2 / tầng 3 phải không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.7a.mp3" },
        { "lesson": 3, "id": "3-7b", "text": "あなたの<ruby>教室<rt>きょうしつ</rt></ruby>／<ruby>事務所<rt>じむしょ</rt></ruby>／<ruby>食堂<rt>しょくどう</rt></ruby>は 1<ruby>階<rt>かい</rt></ruby>／2<ruby>階<rt>かい</rt></ruby>／3<ruby>階<rt>がい</rt></ruby>ですか。", "viText": "Phòng học / văn phòng / nhà ăn của bạn 〇〇 ở tầng 1 / tầng 2 / tầng 3 phải không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.7b.mp3" },
        { "lesson": 3, "id": "3-8a", "text": "トイレ／<ruby>教室<rt>きょうしつ</rt></ruby>／<ruby>食堂<rt>しょくどう</rt></ruby>は <ruby>何階<rt>なんがい</rt></ruby>／どこですか。", "viText": "Nhà vệ sinh / phòng học / nhà ăn ở tầng mấy / ở đâu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.8a.mp3" },
        { "lesson": 3, "id": "3-8b", "text": "トイレ／<ruby>教室<rt>きょうしつ</rt></ruby>／<ruby>食堂<rt>しょくどう</rt></ruby>は <ruby>何階<rt>なんがい</rt></ruby>／どこですか。", "viText": "Nhà vệ sinh / phòng học / nhà ăn ở tầng mấy / ở đâu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.8b.mp3" },
        { "lesson": 3, "id": "3-9", "text": "あなたの<ruby>先生<rt>せんせい</rt></ruby>／あなた　は、<ruby>事務所<rt>じむしょ</rt></ruby>／トイレ／<ruby>教室<rt>きょうしつ</rt></ruby>ですか。", "viText": "Thầy/Cô 〇〇 / Bạn 〇〇 đang ở văn phòng / nhà vệ sinh / phòng học phải không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.9.mp3" },
        { "lesson": 3, "id": "3-10", "text": "あなたの<ruby>先生<rt>せんせい</rt></ruby>／あなた　は、どこですか。", "viText": "Thầy/Cô 〇〇 / Bạn 〇〇 đang ở đâu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.10.mp3" },

        // ==================== LESSON 4 ====================
        { "lesson": 4, "id": "4-1a", "text": "<ruby>今日<rt>きょう</rt></ruby>／<ruby>明日<rt>あした</rt></ruby>／<ruby>明後日<rt>あさって</rt></ruby>は、<ruby>何曜日<rt>なんようび</rt></ruby>ですか。", "viText": "Hôm nay / Ngày mai / Ngày kia là thứ mấy?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.1a.mp3" },
        { "lesson": 4, "id": "4-1b", "text": "<ruby>今日<rt>きょう</rt></ruby>／<ruby>明日<rt>あした</rt></ruby>／<ruby>明後日<rt>あさって</rt></ruby>は、<ruby>何曜日<rt>なんようび</rt></ruby>ですか。", "viText": "Hôm nay / Ngày mai / Ngày kia là thứ mấy?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.1b.mp3" },
        { "lesson": 4, "id": "4-2", "text": "<ruby>休<rt>やす</rt></ruby>みは <ruby>何曜日<rt>なんようび</rt></ruby>ですか。", "viText": "Ngày nghỉ là thứ mấy?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.2.mp3" },
        { "lesson": 4, "id": "4-3", "text": "いま、<ruby>何時<rt>なんじ</rt></ruby>ですか。", "viText": "Bây giờ là mấy giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.3.mp3" },
        { "lesson": 4, "id": "4-4", "text": "<ruby>日本<rt>にほん</rt></ruby>は いま、<ruby>何時<rt>なんじ</rt></ruby>ですか。", "viText": "Ở Nhật Bản bây giờ là mấy giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.4.mp3" },
        { "lesson": 4, "id": "4-5", "text": "<ruby>電話番号<rt>でんわばんごう</rt></ruby>は <ruby>何番<rt>なんばん</rt></ruby>ですか。", "viText": "Số điện thoại của bạn là số mấy?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.5.mp3" },
        { "lesson": 4, "id": "4-6a", "text": "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>勉強<rt>べんきょう</rt></ruby>しますか。", "viText": "Bạn 〇〇 có học bài mỗi ngày / mỗi tối không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.6a.mp3" },
        { "lesson": 4, "id": "4-6b", "text": "<ruby>毎晩<rt>まいばん</rt></ruby> <ruby>勉強<rt>べんきょう</rt></ruby>しますか。", "viText": "Bạn 〇〇 có học bài mỗi ngày / mỗi tối không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.6b.mp3" },
        { "lesson": 4, "id": "4-7a", "text": "<ruby>何時<rt>なんじ</rt></ruby>から／<ruby>何時<rt>なんじ</rt></ruby>まで／ <ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>まで <ruby>勉強<rt>べんきょう</rt></ruby>しますか。", "viText": "Bạn học từ mấy giờ / đến mấy giờ / từ mấy giờ đến mấy giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.7a.mp3" },
        { "lesson": 4, "id": "4-7b", "text": "<ruby>何時<rt>なんじ</rt></ruby>から／<ruby>何時<rt>なんじ</rt></ruby>まで／ <ruby>何時<rt>なんじ</rt></ruby>から<ruby>何時<rt>なんじ</rt></ruby>まで <ruby>勉強<rt>べんきょう</rt></ruby>しますか。", "viText": "Bạn học từ mấy giờ / đến mấy giờ / từ mấy giờ đến mấy giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.7b.mp3" },
        { "lesson": 4, "id": "4-8", "text": "<ruby>昨日<rt>きのう</rt></ruby>の <ruby>晩<rt>ばん</rt></ruby>、<ruby>勉強<rt>べんきょう</rt></ruby>しましたか。", "viText": "Tối hôm qua bạn có học bài không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.8.mp3" },
        { "lesson": 4, "id": "4-9a", "text": "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>に <ruby>寝<rt>ね</rt></ruby>ましたか。", "viText": "Hôm qua bạn đi ngủ lúc mấy giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.9a.mp3" },
        { "lesson": 4, "id": "4-9b", "text": "<ruby>今朝<rt>けさ</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きましたか。", "viText": "Sáng nay bạn thức dậy lúc mấy giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.9b.mp3" },
        { "lesson": 4, "id": "4-10", "text": "<ruby>一昨日<rt>おととい</rt></ruby> <ruby>働<rt>はたら</rt></ruby>きましたか。", "viText": "Ngày hôm kia bạn có làm việc không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/4.10.mp3" },

        // ==================== LESSON 5 ====================
        { "lesson": 5, "id": "5-1a", "text": "あなたは、<ruby>中国<rt>ちゅうごく</rt></ruby>／インドネシア／<ruby>韓国<rt>かんこく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。<br>いいえ → どこへ <ruby>行<rt>い</rt></ruby>きますか。", "viText": "Bạn 〇〇 đi Trung Quốc / Indonesia / Hàn Quốc phải không? Nếu không -> Bạn đi đâu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/5.1a.mp3" },
        { "lesson": 5, "id": "5-1b", "text": "あなたは、<ruby>中国<rt>ちゅうごく</rt></ruby>／インドネシア／<ruby>韓国<rt>かんこく</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。<br>いいえ → どこへ <ruby>行<rt>い</rt></ruby>きますか。", "viText": "Bạn 〇〇 đi Trung Quốc / Indonesia / Hàn Quốc phải không? Nếu không -> Bạn đi đâu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/5.1b.mp3" },
        { "lesson": 5, "id": "5-2", "text": "<ruby>船<rt>ふね</rt></ruby>で <ruby>日本<rt>にほん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。<br>いいえ → <ruby>何<rt>なに</rt></ruby>で <ruby>行<rt>い</rt></ruby>きますか。", "viText": "Bạn đi Nhật Bản bằng tàu thủy phải không? Nếu không -> Bạn đi bằng phương tiện gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/5.2.mp3" },
        { "lesson": 5, "id": "5-3a", "text": "<ruby>日本<rt>にほん</rt></ruby>の <ruby>東京<rt>とうきょう</rt></ruby>／<ruby>京都<rt>きょうと</rt></ruby>／<ruby>大阪<rt>おおさか</rt></ruby>／どこ／へ <ruby>行<rt>い</rt></ruby>きますか。", "viText": "Bạn sẽ đi đâu ở Nhật Bản: Tokyo / Kyoto / Osaka / nơi nào khác?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/5.3a.mp3" },
        { "lesson": 5, "id": "5-3b", "text": "<ruby>日本<rt>にほん</rt></ruby>の <ruby>東京<rt>とうきょう</rt></ruby>／<ruby>京都<rt>きょうと</rt></ruby>／<ruby>大阪<rt>おおさか</rt></ruby>／どこ／へ <ruby>行<rt>い</rt></ruby>きますか。", "viText": "Bạn sẽ đi đâu ở Nhật Bản: Tokyo / Kyoto / Osaka / nơi nào khác?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/5.3b.mp3" },
        { "lesson": 5, "id": "5-4", "text": "<ruby>今朝<rt>けさ</rt></ruby>、<ruby>何時<rt>なんじ</rt></ruby>に 〇〇<ruby>大学<rt>だいがく</rt></ruby>／〇〇<ruby>短大<rt>たんだい</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ましたか。<br>あなたは いつ 〇〇<ruby>大学<rt>だいがく</rt></ruby>／〇〇<ruby>短大<rt>たんだい</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ましたか（<ruby>寮生<rt>りょうせい</rt></ruby>）", "viText": "Sáng nay bạn đến trường Đại học 〇〇 / Cao đẳng 〇〇 lúc mấy giờ? (Đối với nội trú: Bạn đã đến trường từ bao giờ?)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/5.4.mp3" },
        { "lesson": 5, "id": "5-5", "text": "<ruby>何<rt>なに</rt></ruby>で 〇〇<ruby>大学<rt>だいがく</rt></ruby>／〇〇<ruby>短大<rt>たんだい</rt></ruby>へ <ruby>来<rt>き</rt></ruby>ましたか。", "viText": "Bạn đến trường Đại học 〇〇 / Cao đẳng 〇〇 bằng gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/5.5.mp3" },
        { "lesson": 5, "id": "5-6", "text": "<ruby>今日<rt>きょう</rt></ruby>は<ruby>何日<rt>なんにち</rt></ruby>ですか。<ruby>何曜日<rt>なんようび</rt></ruby>ですか。", "viText": "Hôm nay là ngày mùng mấy? Là thứ mấy?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/5.6.mp3" },
        { "lesson": 5, "id": "5-7", "text": "いま、<ruby>何時<rt>なんじ</rt></ruby>ですか。", "viText": "Bây giờ là mấy giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/5.7.mp3" },
        { "lesson": 5, "id": "5-8", "text": "<ruby>日本<rt>にほん</rt></ruby>は いま、<ruby>何時<rt>なんじ</rt></ruby>ですか。", "viText": "Ở Nhật Bản bây giờ là mấy giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/5.8.mp3" },
        { "lesson": 5, "id": "5-9a", "text": "<ruby>来週<rt>らいしゅう</rt></ruby>の 〇<ruby>曜日<rt>ようび</rt></ruby>は <ruby>何日<rt>なんにち</rt></ruby>ですか。", "viText": "Thứ 〇 tuần tới là ngày mấy / Thứ 〇 tuần trước là ngày mấy?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/5.9a.mp3" },
        { "lesson": 5, "id": "5-9b", "text": "<ruby>先週<rt>せんしゅう</rt></ruby>の 〇<ruby>曜日<rt>ようび</rt></ruby>は <ruby>何日<rt>なんにち</rt></ruby>でしたか。", "viText": "Thứ 〇 tuần tới là ngày mấy / Thứ 〇 tuần trước là ngày mấy?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/5.9b.mp3" },
        { "lesson": 5, "id": "5-10", "text": "あなたの <ruby>生年月日<rt>せいねんがっぴ</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えてください。", "viText": "Hãy cho tôi biết ngày tháng năm sinh của bạn 〇〇.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/5.10.mp3" },

        // ==================== LESSON 6 ====================
        { "lesson": 6, "id": "6-1a", "text": "<ruby>今朝<rt>けさ</rt></ruby>／<ruby>今日<rt>きょう</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きましたか。", "viText": "Sáng nay / Hôm nay bạn thức dậy lúc mấy giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.1a.mp3" },
        { "lesson": 6, "id": "6-1b", "text": "ゆうべ／<ruby>昨日<rt>きのう</rt></ruby>の<ruby>晩<rt>ばん</rt></ruby> <ruby>何時<rt>なんじ</rt></ruby>に <ruby>寝<rt>ね</rt></ruby>ましたか。", "viText": "Tối qua / Tối hôm qua bạn đi ngủ lúc mấy giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.1b.mp3" },
        { "lesson": 6, "id": "6-2a", "text": "<ruby>今朝<rt>けさ</rt></ruby>、コーヒー／<ruby>水<rt>みず</rt></ruby>／<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby> を <ruby>飲<rt>の</rt></ruby>みましたか。", "viText": "Sáng nay bạn có uống cà phê / nước / sữa không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.2a.mp3" },
        { "lesson": 6, "id": "6-2b", "text": "<ruby>今朝<rt>けさ</rt></ruby>、コーヒー／<ruby>水<rt>みず</rt></ruby>／<ruby>牛乳<rt>ぎゅうにゅう</rt></ruby> を <ruby>飲<rt>の</rt></ruby>みましたか。", "viText": "Sáng nay bạn có uống cà phê / nước / sữa không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.2b.mp3" },
        { "lesson": 6, "id": "6-3", "text": "<ruby>毎日<rt>まいにち</rt></ruby> <ruby>朝<rt>あさ</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べますか。", "viText": "Hàng ngày bạn có ăn sáng không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.3.mp3" },
        { "lesson": 6, "id": "6-4a", "text": "<ruby>今朝<rt>けさ</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましたか。<br>※<ruby>食<rt>た</rt></ruby>べていない<ruby>場合<rt>ばあい</rt></ruby>：<ruby>昨日<rt>きのう</rt></ruby>、<ruby>食<rt>た</rt></ruby>べましたか。", "viText": "Sáng nay bạn đã ăn gì? *Trường hợp chưa ăn: Hôm qua bạn có ăn không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.4a.mp3" },
        { "lesson": 6, "id": "6-4b", "text": "<ruby>今朝<rt>けさ</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましたか。<br>※<ruby>食<rt>た</rt></ruby>べていない<ruby>場合<rt>ばあい</rt></ruby>：<ruby>昨日<rt>きのう</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べましたか。", "viText": "Sáng nay bạn đã ăn gì? *Trường hợp chưa ăn: Hôm qua bạn đã ăn gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.4b.mp3" },
        { "lesson": 6, "id": "6-5", "text": "あなたは たばこを <ruby>吸<rt>す</rt></ruby>いますか。お<ruby>酒<rt>さけ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みますか。", "viText": "Bạn 〇〇 có hút thuốc không? Có uống rượu không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.5.mp3" },
        { "lesson": 6, "id": "6-6", "text": "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>、いつも <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きますか。", "viText": "Vào ngày nghỉ, bạn thường thức dậy lúc mấy giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.6.mp3" },
        { "lesson": 6, "id": "6-7a", "text": "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>、<ruby>勉強<rt>べんきょう</rt></ruby>しましたか／テレビを<ruby>見<rt>み</rt></ruby>ましたか／<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きましたか。", "viText": "Vào ngày nghỉ, bạn có học bài / xem tivi / nghe nhạc không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.7a.mp3" },
        { "lesson": 6, "id": "6-7b", "text": "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>、<ruby>勉強<rt>べんきょう</rt></ruby>しましたか／テレビを<ruby>見<rt>み</rt></ruby>ましたか／<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きましたか。", "viText": "Vào ngày nghỉ, bạn có học bài / xem tivi / nghe nhạc không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.7b.mp3" },
        { "lesson": 6, "id": "6-8", "text": "<ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>誰<rt>だれ</rt></ruby>に <ruby>会<rt>あ</rt></ruby>いましたか。", "viText": "Chủ nhật bạn đã gặp ai?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.8.mp3" },
        { "lesson": 6, "id": "6-9", "text": "<ruby>昨日<rt>きのう</rt></ruby>、どこで <ruby>晩<rt>ばん</rt></ruby>ごはんを<ruby>食<rt>た</rt></ruby>べましたか。", "viText": "Hôm qua bạn ăn cơm tối ở đâu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.9.mp3" },
        { "lesson": 6, "id": "6-10", "text": "<ruby>次<rt>つぎ</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしますか。", "viText": "Thứ bảy tới bạn sẽ làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.10.mp3" },

        // ==================== LESSON 7 ====================
        { "lesson": 7, "id": "7-1", "text": "<ruby>誕生日<rt>たんじょうび</rt></ruby>は <ruby>何<rt>なん</rt></ruby><ruby>月<rt>がつ</rt></ruby>／いつですか。", "viText": "Sinh nhật của bạn 〇〇 là tháng mấy / khi nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.1.mp3" },
        { "lesson": 7, "id": "7-2", "text": "（<ruby>去年<rt>きょねん</rt></ruby>の）<ruby>誕生日<rt>たんじょうび</rt></ruby>にプレゼントをもらいましたか。", "viText": "Bạn có nhận được quà vào sinh nhật (năm ngoái) không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.2.mp3", "groupId": "group7-2" },
        { "lesson": 7, "id": "7-3", "text": "はい → <ruby>誰<rt>だれ</rt></ruby>に もらいましたか。<br>いいえ → あなたは、<ruby>去年<rt>きょねん</rt></ruby><ruby>誰<rt>だれ</rt></ruby>にプレゼントをあげましたか。", "viText": "Nếu có -> Bạn nhận từ ai? Nếu không -> Năm ngoái bạn 〇〇 đã tặng quà cho ai?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.3.mp3", "groupId": "group7-2" },
        { "lesson": 7, "id": "7-4", "text": "<ruby>何<rt>なに</rt></ruby>をもらいましたか／<ruby>何<rt>なに</rt></ruby>をあげましたか。<br><ruby>何<rt>なに</rt></ruby>もあげませんでした → <ruby>今年<rt>ことし</rt></ruby>、<ruby>誰<rt>だれ</rt></ruby>にプレゼントをあげますか。", "viText": "Bạn đã nhận được gì / đã tặng gì? Nếu không tặng gì -> Năm nay bạn định tặng quà cho ai?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.4.mp3", "groupId": "group7-2"},
        { "lesson": 7, "id": "7-5", "text": "それは、どんなプレゼントですか。（お<ruby>金<rt>かね</rt></ruby>：いくら もらいましたか）<br>※あげません → <ruby>家族<rt>かぞく</rt></ruby>にあげませんか。", "viText": "Món quà đó như thế nào? (Nếu là tiền: Nhận được bao nhiêu?) *Nếu không tặng -> Bạn không tặng cho gia đình à?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.5.mp3", "groupId": "group7-2" },
        { "lesson": 7, "id": "7-6", "text": "<ruby>次<rt>つぎ</rt></ruby>は「9<ruby>課<rt>か</rt></ruby>」の<ruby>勉強<rt>べんきょう</rt></ruby>をしますね。<br>もう（ことばの）<ruby>予習<rt>よしゅう</rt></ruby>は／<ruby>勉強<rt>べんきょう</rt></ruby>を しましたか。<br>※ はい、もう～ました  いいえ、まだです。／まだ～ていません。", "viText": "Tiếp theo chúng ta sẽ học (Bài 9) nhé. Bạn đã chuẩn bị từ vựng / học trước chưa? *Có, đã... / Chưa, tôi chưa làm", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.6.mp3" },
        { "lesson": 7, "id": "7-7", "text": "これは（<ruby>消<rt>け</rt></ruby>しゴムやボールペンなどを<ruby>持<rt>も</rt></ruby>ちながら）ベトナム<ruby>語<rt>ご</rt></ruby>で<ruby>何<rt>なん</rt></ruby>ですか。<br>（<ruby>物<rt>もの</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>して）<ruby>日本語<rt>にほんご</rt></ruby>がわかりません。<ruby>私<rt>わたし</rt></ruby>に<ruby>質問<rt>しつもん</rt></ruby>してください。", "viText": "Cái này (cầm cục tẩy, bút bi...) tiếng Việt gọi là gì? (Đưa đồ vật) Bạn không biết tiếng Nhật, hãy đặt câu hỏi cho tôi đi.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.7.mp3" },
        { "lesson": 7, "id": "7-8", "text": "<ruby>日本人<rt>にほんじん</rt></ruby>は<ruby>箸<rt>はし</rt></ruby>でご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。<br>ベトナム<ruby>人<rt>じん</rt></ruby>は<ruby>何<rt>なに</rt></ruby>でご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べますか。", "viText": "Người Nhật ăn cơm bằng đũa. Người Việt Nam ăn cơm bằng gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.8.mp3" },
        { "lesson": 7, "id": "7-9", "text": "いつも、ケータイで<ruby>何<rt>なに</rt></ruby>をしますか。", "viText": "Bạn thường làm gì trên điện thoại di động?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.9.mp3", "groupId": "group7-9" },
        { "lesson": 7, "id": "7-10", "text": "それ（Q9の<ruby>回答<rt>かいとう</rt></ruby>）は おもしろいですか／どうですか／どんな〇〇を～ますか", "viText": "(Nội dung trả lời ở câu 9) có thú vị không / như thế nào / bạn làm như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.10.mp3", "groupId": "group7-9" },

        // ==================== LESSON 8 ====================
        { "lesson": 8, "id": "8-1", "text": "<ruby>出身地<rt>しゅっしんち</rt></ruby>はどこ／どちらですか。ここから<ruby>近<rt>ちか</rt></ruby>いですか。", "viText": "Quê của bạn 〇〇 ở đâu? Có gần đây không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.1.mp3", "groupId": "group8-1" },
        { "lesson": 8, "id": "8-2", "text": "そこ（<ruby>出身地<rt>しゅっしんち</rt></ruby>）は <ruby>便利<rt>べんり</rt></ruby>なところですか。", "viText": "(Quê của bạn) có phải là một nơi tiện lợi không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.2.mp3", "groupId": "group8-1" },
        { "lesson": 8, "id": "8-3", "text": "<ruby>出身地<rt>しゅっしんち</rt></ruby>は、どんなところですか。", "viText": "(Quê của bạn) là một nơi như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.3.mp3" },
        { "lesson": 8, "id": "8-4", "text": "あなたの<ruby>大学<rt>だいがく</rt></ruby>は <ruby>新<rt>あたら</rt></ruby>しいですか。", "viText": "Trường đại học của bạn có mới không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.4.mp3" },
        { "lesson": 8, "id": "8-5", "text": "あなたの<ruby>大学<rt>だいがく</rt></ruby>は どんな ところですか。", "viText": "Trường đại học của bạn là một nơi như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.5.mp3" },
        { "lesson": 8, "id": "8-6", "text": "<ruby>日本語<rt>にほんご</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しいですか。", "viText": "Tiếng Nhật có khó không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.6.mp3" },
        { "lesson": 8, "id": "8-7", "text": "どの<ruby>勉強<rt>べんきょう</rt></ruby>が おもしろいですか。", "viText": "Môn học nào làm bạn cảm thấy thú vị?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.7.mp3" },
        { "lesson": 8, "id": "8-8a", "text": "<ruby>毎日<rt>まいにち</rt></ruby>、どうですか。", "viText": "Việc học hàng ngày thì như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.8a.mp3" },
        { "lesson": 8, "id": "8-8b", "text": "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>は どうですか。", "viText": "Việc học tiếng Nhật thì như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.8b.mp3" },
        { "lesson": 8, "id": "8-9", "text": "クラスで <ruby>誰<rt>だれ</rt></ruby>が <ruby>親切<rt>しんせつ</rt></ruby>ですか／<ruby>元気<rt>げんき</rt></ruby>ですか／おもしろいですか。", "viText": "Trong lớp ai là người thân thiện / khỏe khoắn, năng động / thú vị nhất?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.9.mp3" },
        { "lesson": 8, "id": "8-10", "text": "どれがいいですか?　<ruby>赤<rt>あか</rt></ruby>、<ruby>青<rt>あお</rt></ruby>、<ruby>白<rt>しろ</rt></ruby>、<ruby>黒<rt>くろ</rt></ruby>?（…<ruby>赤<rt>あか</rt></ruby>がいいです／<ruby>赤<rt>あか</rt></ruby>いのがいいです） ※「これです」の<ruby>場合<rt>ばあい</rt></ruby>→これは<ruby>何色<rt>なにいろ</rt></ruby>ですか。", "viText": "(Cho xem các đồ vật khác màu) Bạn thích cái nào? (...Tôi thích cái màu đỏ) Nếu câu trả lời là tôi thích 'màu này' thì hỏi tiếp màu này là màu gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.10.mp3" },

        // ==================== LESSON 9 ====================
        { "lesson": 9, "id": "9-1a", "text": "あなたは、（①スポーツ②アニメ ③<ruby>音楽<rt>おんがく</rt></ruby>）が<ruby>好<rt>す</rt></ruby>きですか。<br>※いいえ：もう一つ<ruby>聞<rt>き</rt></ruby>く<br>※どれも<ruby>好<rt>す</rt></ruby>きでない → <ruby>何<rt>なに</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。（ゲーム、<ruby>旅行<rt>りょこう</rt></ruby>、<ruby>料理<rt>りょうり</rt></ruby>）", "viText": "Bạn 〇〇 có thích (① Thể thao ② Anime ③ Âm nhạc) không? *Nếu không: Hỏi sang cái khác. *Nếu không thích cái nào -> Hỏi: Vậy bạn thích cái gì? (Game, du lịch, nấu ăn...)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.1a.mp3"},
        { "lesson": 9, "id": "9-1b", "text": "あなたは、（①スポーツ②アニメ ③<ruby>音楽<rt>おんがく</rt></ruby>）が<ruby>好<rt>す</rt></ruby>きですか。<br>※いいえ：もう一つ<ruby>聞<rt>き</rt></ruby>く<br>※どれも<ruby>好<rt>す</rt></ruby>きでない → <ruby>何<rt>なに</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。（ゲーム、<ruby>旅行<rt>りょこう</rt></ruby>、<ruby>料理<rt>りょうり</rt></ruby>）", "viText": "Bạn 〇〇 có thích (① Thể thao ② Anime ③ Âm nhạc) không? *Nếu không: Hỏi sang cái khác. *Nếu không thích cái nào -> Hỏi: Vậy bạn thích cái gì? (Game, du lịch, nấu ăn...)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.1b.mp3"},
        { "lesson": 9, "id": "9-2a", "text": "どんなスポーツ／アニメ／<ruby>音楽<rt>おんがく</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。", "viText": "Bạn thích thể loại thể thao / anime / âm nhạc như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.2a.mp3", "groupId": "group9-2a" },
        { "lesson": 9, "id": "9-2b", "text": "どんなスポーツ／アニメ／<ruby>音楽<rt>おんがく</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。", "viText": "Bạn thích thể loại thể thao / anime / âm nhạc như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.2b.mp3", "groupId": "group9-2b" },
        { "lesson": 9, "id": "9-3a", "text": "いつ しますか／<ruby>見<rt>み</rt></ruby>ますか／<ruby>聞<rt>き</rt></ruby>きますか。", "viText": "Bạn thường chơi / xem / nghe khi nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.3a.mp3", "groupId": "group9-2a" },
        { "lesson": 9, "id": "9-3b", "text": "いつ しますか／<ruby>見<rt>み</rt></ruby>ますか／<ruby>聞<rt>き</rt></ruby>きますか。", "viText": "Bạn thường chơi / xem / nghe khi nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.3b.mp3", "groupId": "group9-2b" },
        { "lesson": 9, "id": "9-4a", "text": "あなたは、<ruby>料理<rt>りょうり</rt></ruby>／<ruby>歌<rt>うた</rt></ruby>／<ruby>絵<rt>え</rt></ruby>／バドミントンが <ruby>上手<rt>じょうず</rt></ruby>ですか。", "viText": "Bạn 〇〇 có giỏi nấu ăn / ca hát / vẽ / cầu lông không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.4a.mp3", "groupId": "group9-4a" },
        { "lesson": 9, "id": "9-4b", "text": "あなたは、<ruby>料理<rt>りょうり</rt></ruby>／<ruby>歌<rt>うた</rt></ruby>／<ruby>絵<rt>え</rt></ruby>／バドミントンが <ruby>上手<rt>じょうず</rt></ruby>ですか。", "viText": "Bạn 〇〇 có giỏi nấu ăn / ca hát / vẽ / cầu lông không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.4b.mp3", "groupId": "group9-4b" },
        { "lesson": 9, "id": "9-5a", "text": "はい → だれに <ruby>習<rt>なら</rt></ruby>いましたか。", "viText": "Nếu giỏi -> Bạn học từ ai? Nếu không -> Ai giỏi ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.5a.mp3", "groupId": "group9-4a" },
        { "lesson": 9, "id": "9-5b", "text": "いいえ → だれが <ruby>上手<rt>じょうず</rt></ruby>ですか。", "viText": "Nếu giỏi -> Bạn học từ ai? Nếu không -> Ai giỏi ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.5b.mp3", "groupId": "group9-4b" },
        { "lesson": 9, "id": "9-6", "text": "<ruby>今週<rt>こんしゅう</rt></ruby>、<ruby>試験<rt>しけん</rt></ruby>がありますか。", "viText": "Tuần này bạn có bài kiểm tra / kì thi nào không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.6.mp3", "groupId": "group9-6" },
        { "lesson": 9, "id": "9-7a", "text": "はい → <ruby>何時<rt>なんじ</rt></ruby>からですか。<ruby>何<rt>なん</rt></ruby>の<ruby>試験<rt>しけん</rt></ruby>ですか。", "viText": "Nếu có -> Từ mấy giờ? Thi môn gì? Nếu không -> Khi nào sẽ có bài thi? Thi môn gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.7a.mp3", "groupId": "group9-6" },
        { "lesson": 9, "id": "9-7b", "text": "いいえ → いつ<ruby>試験<rt>しけん</rt></ruby>がありますか。<ruby>何<rt>なん</rt></ruby>の<ruby>試験<rt>しけん</rt></ruby>ですか。", "viText": "Nếu có -> Từ mấy giờ? Thi môn gì? Nếu không -> Khi nào sẽ có bài thi? Thi môn gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.7b.mp3", "groupId": "group9-6"},
        { "lesson": 9, "id": "9-8", "text": "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>約束<rt>やくそく</rt></ruby>がありますか。", "viText": "Vào ngày nghỉ, bạn có hẹn trước với bạn bè không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.8.mp3", "groupId": "group9-8" },
        { "lesson": 9, "id": "9-9a", "text": "はい → だれと <ruby>約束<rt>やくそく</rt></ruby>しましたか。どんな<ruby>約束<rt>やくそく</rt></ruby>ですか。", "viText": "Nếu có -> Hẹn với ai / hẹn làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.9a.mp3", "groupId": "group9-8" }, 
        { "lesson": 9, "id": "9-9b", "text": "いいえ → では、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>、<ruby>時間<rt>じかん</rt></ruby>がありますか。", "viText": "Nếu không -> Vậy vào ngày nghỉ bạn có thời gian rảnh không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.9b.mp3", "groupId": "group9-8" },
        { "lesson": 9, "id": "9-10", "text": "<ruby>私<rt>わたし</rt></ruby>（<ruby>先生<rt>せんせい</rt></ruby>）の<ruby>日本語<rt>にほんご</rt></ruby>が、わかりますか。<br>※「わかります」だけの<ruby>回答<rt>かいとう</rt></ruby>：ぜんぶ わかりますか。（よく、だいたい、あまり～ を<ruby>使<rt>つか</rt></ruby>った<ruby>回答<rt>かいとう</rt></ruby>が<ruby>望<rt>のぞ</rt></ruby>ましい）", "viText": "Bạn có hiểu tiếng Nhật của tôi (Thầy/Cô) không? *Nếu chỉ trả lời 'Hiểu': Bạn hiểu hết chứ? (Nên dùng phó từ như yoku, daitai, amari...)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.10.mp3" },

        // ==================== LESSON 10 ====================
        { "lesson": 10, "id": "10-1", "text": "あなた／<ruby>担任<rt>たんにん</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>／あなたの<ruby>家族<rt>かぞく</rt></ruby> は どこに いますか。", "viText": "Bạn 〇〇 / Thầy Cô 〇〇 / Gia đình bạn 〇〇 bây giờ đang ở đâu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.1.mp3" },
        { "lesson": 10, "id": "10-2", "text": "いま、（Q1<ruby>以外<rt>いがい</rt></ruby>の）<ruby>場所<rt>ばしょ</rt></ruby>／この<ruby>教室<rt>きょうしつ</rt></ruby>／この<ruby>部屋<rt>へや</rt></ruby>／この<ruby>部屋<rt>へや</rt></ruby>の<ruby>外<rt>そと</rt></ruby>）に だれが いますか。", "viText": "Bây giờ, ở (phòng học / phòng này / bên ngoài phòng này) có ai ở đó không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.2.mp3" },
        { "lesson": 10, "id": "10-3a", "text": "<ruby>教室<rt>きょうしつ</rt></ruby>で、あなたの <ruby>前<rt>まえ</rt></ruby>／<ruby>後<rt>うし</rt></ruby>ろ／となりの<ruby>人<rt>ひと</rt></ruby>／ は <ruby>誰<rt>だれ</rt></ruby>ですか。", "viText": "(Trong lớp) Người ngồi trước / sau / bên cạnh bạn 〇〇 là ai?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.3a.mp3" },
        { "lesson": 10, "id": "10-3b", "text": "<ruby>教室<rt>きょうしつ</rt></ruby>で、あなたの <ruby>前<rt>まえ</rt></ruby>／<ruby>後<rt>うし</rt></ruby>ろ／となりの<ruby>人<rt>ひと</rt></ruby>／ は <ruby>誰<rt>だれ</rt></ruby>ですか。", "viText": "(Trong lớp) Người ngồi trước / sau / bên cạnh bạn 〇〇 là ai?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.3b.mp3" },
        { "lesson": 10, "id": "10-4a", "text": "<ruby>教室<rt>きょうしつ</rt></ruby>の どこに ホワイトボード／テレビ／ごみばこ がありますか。", "viText": "Bảng trắng / tivi / thùng rác nằm ở đâu (trong phòng học)?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.4a.mp3" },
        { "lesson": 10, "id": "10-4b", "text": "<ruby>教室<rt>きょうしつ</rt></ruby>の どこに ホワイトボード／テレビ／ごみばこ がありますか。", "viText": "Bảng trắng / tivi / thùng rác nằm ở đâu (trong phòng học)?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.4b.mp3" },
        { "lesson": 10, "id": "10-5a", "text": "あなたの／<ruby>先生<rt>せんせい</rt></ruby>の <ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>／<ruby>中<rt>なか</rt></ruby>／<ruby>下<rt>した</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>がありますか。", "viText": "Trên / trong / dưới bàn của bạn 〇〇 / của Thầy Cô có cái gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.5a.mp3" },
        { "lesson": 10, "id": "10-5b", "text": "あなたの／<ruby>先生<rt>せんせい</rt></ruby>の <ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>／<ruby>中<rt>なか</rt></ruby>／<ruby>下<rt>した</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>がありますか。", "viText": "Trên / trong / dưới bàn của bạn 〇〇 / của Thầy Cô có cái gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.5b.mp3" },
        { "lesson": 10, "id": "10-6", "text": "<ruby>大学<rt>だいがく</rt></ruby>／<ruby>短大<rt>たんだい</rt></ruby>は ベトナムのどこにありますか。<br>※<ruby>都市名<rt>としめい</rt></ruby>が<ruby>言<rt>い</rt></ruby>える。", "viText": "Trường Đại học 〇〇 / Cao đẳng 〇〇 nằm ở đâu tại Việt Nam? *Yêu cầu trả lời được tên thành phố.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.6.mp3", "groupId": "group10-6" },
        { "lesson": 10, "id": "10-7", "text": "そこ（Q1<ruby>回答<rt>かいとう</rt></ruby>）に、 <ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>がありますか。<br>※はい、あります／いいえ、ありません。", "viText": "Ở (Nơi vừa trả lời ở câu 1) có địa điểm nào nổi tiếng không? *Có, có / Không, không có.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.7.mp3", "groupId": "group10-6" },
        { "lesson": 10, "id": "10-8", "text": "（Q2<ruby>回答<rt>かいとう</rt></ruby>に）それはどこですか。<br>※<ruby>場所<rt>ばしょ</rt></ruby>の<ruby>名称<rt>めいしょう</rt></ruby>を<ruby>答<rt>こた</rt></ruby>える。", "viText": "(Địa danh nổi tiếng vừa nhắc tới) Đó là nơi nào? *Trả lời tên cụ thể của địa điểm đó.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.8.mp3", "groupId": "group10-6" },
        { "lesson": 10, "id": "10-9", "text": "<ruby>大学<rt>だいがく</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くに <ruby>何<rt>なに</rt></ruby>が ありますか。", "viText": "Ở gần trường Đại học 〇〇 có cái gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.9.mp3" },
        { "lesson": 10, "id": "10-10", "text": "あなたの<ruby>出身地<rt>しゅっしんち</rt></ruby>は どこですか。それは ベトナムのどの<ruby>辺<rt>へん</rt></ruby>にありますか。<br>（ベトナムの<ruby>北部<rt>ほくぶ</rt></ruby>／<ruby>中部<rt>ちゅうぶ</rt></ruby>／<ruby>南部<rt>なんぶ</rt></ruby> です。）", "viText": "Quê của bạn 〇〇 ở đâu? Nó nằm ở khu vực nào của Việt Nam? (Miền Bắc / Miền Trung / Miền Nam).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.10.mp3" },
// ==================== LESSON 11 ====================
        { "lesson": 11, "id": "11-1a", "text": "<ruby>家族<rt>かぞく</rt></ruby>は<ruby>何人<rt>なんにん</rt></ruby>いますか。／<ruby>兄弟<rt>きょうだい</rt></ruby>は<ruby>何人<rt>なんにん</rt></ruby>ですか。／<ruby>何人<rt>なんにん</rt></ruby> <ruby>兄弟<rt>きょうだい</rt></ruby>ですか。", "viText": "Gia đình bạn có mấy người? / Bạn có mấy anh chị em? / Nhà có mấy anh em?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.1a.mp3", "groupId": "group11-1a" },
        { "lesson": 11, "id": "11-1b", "text": "<ruby>家族<rt>かぞく</rt></ruby>は<ruby>何人<rt>なんにん</rt></ruby>いますか。／<ruby>兄弟<rt>きょうだい</rt></ruby>は<ruby>何人<rt>なんにん</rt></ruby>ですか。／<ruby>何人<rt>なんにん</rt></ruby> <ruby>兄弟<rt>きょうだい</rt></ruby>ですか。", "viText": "Gia đình bạn có mấy người? / Bạn có mấy anh chị em? / Nhà có mấy anh em?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.1b.mp3", "groupId": "group11-1b" },
        { "lesson": 11, "id": "11-2a", "text": "<ruby>誰<rt>だれ</rt></ruby>がいますか。", "viText": "Gia đình gồm những ai?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.2a.mp3", "groupId": "group11-1a" },
        { "lesson": 11, "id": "11-2b", "text": "お<ruby>父<rt>とう</rt></ruby>さん／お<ruby>母<rt>かあ</rt></ruby>さん／お<ruby>兄<rt>にい</rt></ruby>さん／お<ruby>姉<rt>ねえ</rt></ruby>さん／<ruby>妹<rt>いもうと</rt></ruby>さん／<ruby>弟<rt>おとうと</rt></ruby>さんは、どんな<ruby>人<rt>ひと</rt></ruby>ですか。", "viText": "Bố / Mẹ / Anh / Chị / Em gái / Em trai của bạn là người như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.2b.mp3", "groupId": "group11-1b" },
        { "lesson": 11, "id": "11-3", "text": "ここから<ruby>家<rt>うち</rt></ruby>まで <ruby>何<rt>なに</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby>りますか。（※「〜で<ruby>帰<rt>かえ</rt></ruby>ります」）", "viText": "Từ đây về nhà bạn đi bằng gì? (*Yêu cầu trả lời mẫu: 'Về bằng...')", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.3.mp3", "groupId": "group11-3" },
        { "lesson": 11, "id": "11-4a", "text": "<ruby>片道<rt>かたみち</rt></ruby>／<ruby>往復<rt>おうふく</rt></ruby> いくらかかりますか。", "viText": "Đi một chiều / khứ hồi hết bao nhiêu tiền?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.4a.mp3", "groupId": "group11-3" },
        { "lesson": 11, "id": "11-4b", "text": "<ruby>片道<rt>かたみち</rt></ruby>／<ruby>往復<rt>おうふく</rt></ruby> どのぐらい（なん<ruby>時間<rt>じかん</rt></ruby>ぐらい）かかりますか。", "viText": "Đi một chiều / khứ hồi Mất bao lâu (khoảng mấy tiếng)?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.4b.mp3", "groupId": "group11-3" },
        { "lesson": 11, "id": "11-5a", "text": "うちに、<ruby>車<rt>くるま</rt></ruby>が／バイクが／テレビがありますか。<ruby>何<rt>なん</rt></ruby><ruby>台<rt>だい</rt></ruby>ありますか。", "viText": "Ở nhà bạn có ô tô / xe máy / tivi không? Có mấy chiếc?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.5a.mp3" },
        { "lesson": 11, "id": "11-5b", "text": "うちに、<ruby>車<rt>くるま</rt></ruby>が／バイクが／テレビがありますか。<ruby>何<rt>なん</rt></ruby><ruby>台<rt>だい</rt></ruby>ありますか。", "viText": "Ở nhà bạn có ô tô / xe máy / tivi không? Có mấy chiếc?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.5b.mp3" },
        { "lesson": 11, "id": "11-6", "text": "（はさみ／<ruby>鍵<rt>かぎ</rt></ruby>／<ruby>消<rt>け</rt></ruby>しゴム）（ひとつ／ふたつ／みっつ／よっつ／いつつ） とって。", "viText": "Lấy giùm tôi (1 / 2 / 3 / 4 / 5) cái (kéo / chìa khóa / cục tẩy).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.6.mp3" },
        { "lesson": 11, "id": "11-7", "text": "（はさみ／<ruby>鍵<rt>かぎ</rt></ruby>／<ruby>消<rt>け</rt></ruby>しゴム）（ひとつ／ふたつ／みっつ／よっつ／いつつ） とって。", "viText": "Lấy giùm tôi (1 / 2 / 3 / 4 / 5) cái (kéo / chìa khóa / cục tẩy).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.7.mp3" },
        { "lesson": 11, "id": "11-8a", "text": "ペットボトル（いっぽん／にほん／さんぼん／よんほん／ごほん）とって。", "viText": "Lấy giùm tôi (1 / 2 / 3 / 4 / 5) cây chai nhựa.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.8a.mp3" },
        { "lesson": 11, "id": "11-8b", "text": "<ruby>缶<rt>かん</rt></ruby>（いっぽん／にほん／さんぼん／よんほん／ごほん）とって。", "viText": "Lấy giùm tôi (1 / 2 / 3 / 4 / 5) lon nước ngọt.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.8b.mp3" },
        { "lesson": 11, "id": "11-9", "text": "<ruby>数<rt>かぞ</rt></ruby>えて、<ruby>報告<rt>ほうこく</rt></ruby>してください。<br>〇〇がXX <ruby>枚<rt>まい</rt></ruby>／つ／<ruby>台<rt>だい</rt></ruby>／<ruby>人<rt>ひと</rt></ruby>／<ruby>本<rt>ほん</rt></ruby> います／あります。", "viText": "Hãy đếm và báo cáo lại. (Nếu học sinh không hiểu chỉ thị, giáo viên sẽ làm mẫu nhìn vào tranh để nói) Có XX tờ / cái / chiếc / người / cây 〇〇.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.9.mp3", "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.9.jpg" },
        { "lesson": 11, "id": "11-10", "text": "<ruby>数<rt>かぞ</rt></ruby>えて、<ruby>報告<rt>ほうこく</rt></ruby>してください。<br>〇〇がXX <ruby>枚<rt>まい</rt></ruby>／つ／<ruby>台<rt>だい</rt></ruby>／<ruby>人<rt>ひと</rt></ruby>／<ruby>本<rt>ほん</rt></ruby> います／あります。", "viText": "Hãy đếm và báo cáo lại. (Nếu học sinh không hiểu chỉ thị, giáo viên sẽ làm mẫu nhìn vào tranh để nói) Có XX tờ / cái / chiếc / người / cây 〇〇.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.10.mp3", "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.10.jpg" },

        // ==================== LESSON 12 ====================
        { "lesson": 12, "id": "12-1a", "text": "<ruby>今日<rt>きょう</rt></ruby>は、<ruby>晴<rt>は</rt></ruby>れ／<ruby>雨<rt>あめ</rt></ruby>／<ruby>曇<rt>くも</rt></ruby>り ですか。", "viText": "Hôm nay trời nắng / mưa / nhiều mây? Trời nóng / mát mẻ / lạnh?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.1a.mp3" },
        { "lesson": 12, "id": "12-1b", "text": "<ruby>暑<rt>あつ</rt></ruby>い／<ruby>涼<rt>すず</rt></ruby>しい／<ruby>寒<rt>さむ</rt></ruby>いですか。", "viText": "Hôm nay trời nắng / mưa / nhiều mây? Trời nóng / mát mẻ / lạnh?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.1b.mp3" },
        { "lesson": 12, "id": "12-2", "text": "<ruby>昨日<rt>きのう</rt></ruby>は どうでしたか／<ruby>昨日<rt>きのう</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>は どうでしたか。", "viText": "Hôm qua thì thế nào / Thời tiết hôm qua thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.2.mp3" },
        { "lesson": 12, "id": "12-3", "text": "<ruby>今日<rt>きょう</rt></ruby>は <ruby>忙<rt>いそが</rt></ruby>しいですか。<ruby>昨日<rt>きのう</rt></ruby>は どうでしたか。", "viText": "Hôm nay bạn có bận không? Hôm qua thì thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.3.mp3" },
        { "lesson": 12, "id": "12-4", "text": "<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>楽<rt>たの</rt></ruby>しいですか。<ruby>昨日<rt>きのう</rt></ruby>は どうでしたか。", "viText": "Mỗi ngày đều vui vẻ chứ? Còn hôm qua thì sao?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.4.mp3" },
        { "lesson": 12, "id": "12-5a", "text": "<ruby>第<rt>だい</rt></ruby>12<ruby>課<rt>か</rt></ruby>は、<ruby>簡単<rt>かんたん</rt></ruby>でしたか。／<ruby>難<rt>むずか</rt></ruby>しかったですか。／どうでしたか。", "viText": "Bài 12 có dễ không? / Có khó không? / Thấy thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.5a.mp3" },
        { "lesson": 12, "id": "12-5b", "text": "この<ruby>会話<rt>かいわ</rt></ruby>テストは どうですか。", "viText": "Bài kiểm tra hội thoại này thì sao?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.5b.mp3" },
        { "lesson": 12, "id": "12-6a", "text": "あなたの<ruby>出身<rt>しゅっしん</rt></ruby>はどこですか。そこ（<ruby>出身地<rt>しゅっしんち</rt></ruby>）と ハノイ（<ruby>現在地<rt>げんざいち</rt></ruby>）と どちらが<ruby>好<rt>す</rt></ruby>きですか。<br>※<ruby>同<rt>おな</rt></ruby>じ<ruby>場合<rt>ばあい</rt></ruby>、<ruby>他<rt>ほか</rt></ruby>の<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>都市<rt>とし</rt></ruby>と<ruby>比<rt>くら</rt></ruby>べる", "viText": "Quê của bạn 〇〇 ở đâu? Giữa (Quê hương) và (Nơi ở hiện tại), bạn thích nơi nào hơn? *Nếu trùng nhau: So sánh với thành phố nổi tiếng khác.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.6a.mp3", "groupId": "group12-6a"},
        { "lesson": 12, "id": "12-6b", "text": "あなたの<ruby>出身<rt>しゅっしん</rt></ruby>はどこですか。そこ（<ruby>出身地<rt>しゅっしんち</rt></ruby>）と ホーチミン<ruby>市<rt>し</rt></ruby>（<ruby>現在地<rt>げんざいち</rt></ruby>）と どちらが<ruby>好<rt>す</rt></ruby>きですか。<br>※<ruby>同<rt>おな</rt></ruby>じ<ruby>場合<rt>ばあい</rt></ruby>、<ruby>他<rt>ほか</rt></ruby>の<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>都市<rt>とし</rt></ruby>と<ruby>比<rt>くら</rt></ruby>べる", "viText": "Quê của bạn 〇〇 ở đâu? Giữa (Quê hương) và (Nơi ở hiện tại), bạn thích nơi nào hơn? *Nếu trùng nhau: So sánh với thành phố nổi tiếng khác.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.6b.mp3", "groupId": "group12-6a"},
        { "lesson": 12, "id": "12-7", "text": "どうしてですか。", "viText": "Tại sao lại như thế?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.7.mp3" , "groupId": "group12-6a"},
        { "lesson": 12, "id": "12-8a", "text": "（HN／DN／HCM）で <ruby>何月<rt>なんがつ</rt></ruby>がいちばん<ruby>暑<rt>あつ</rt></ruby>いですか。", "viText": "Tháng mấy ở (HN/DN/HCM) là nóng nhất?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.8a.mp3" },
        { "lesson": 12, "id": "12-8b", "text": "（HN／DN／HCM）で <ruby>何月<rt>なんがつ</rt></ruby>がいちばん<ruby>暑<rt>あつ</rt></ruby>いですか。", "viText": "Tháng mấy ở (HN/DN/HCM) là nóng nhất?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.8b.mp3" },
        { "lesson": 12, "id": "12-9", "text": "あなたは、<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>で<ruby>何<rt>なに</rt></ruby>がいちばん<ruby>好<rt>す</rt></ruby>きですか。<br>※（ベトナム<ruby>語<rt>ご</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>OK）が<ruby>好<rt>す</rt></ruby>きです。", "viText": "Về đồ ăn, bạn 〇〇 thích món nào nhất? *Trả lời bằng tiếng Việt (tên món ăn) cũng được chấp nhận.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.9.mp3" },
        { "lesson": 12, "id": "12-10a", "text": "クラスで <ruby>誰<rt>だれ</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby> <ruby>歌<rt>うた</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>／<ruby>背<rt>せ</rt></ruby>が<ruby>高<rt>た</rt></ruby>かい／おもしろい／<ruby>元気<rt>げんき</rt></ruby> ですか。", "viText": "Trong lớp ai là người hát hay nhất / cao nhất / thú vị nhất / năng nổ nhất?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.10a.mp3" },
        { "lesson": 12, "id": "12-10b", "text": "クラスで <ruby>誰<rt>だれ</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby> <ruby>歌<rt>うた</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>／<ruby>背<rt>せ</rt></ruby>が<ruby>高<rt>た</rt></ruby>かい／おもしろい／<ruby>元気<rt>げんき</rt></ruby> ですか。", "viText": "Trong lớp ai là người hát hay nhất / cao nhất / thú vị nhất / năng nổ nhất?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.10b.mp3" },

        // ==================== LESSON 13 ====================
        { "lesson": 13, "id": "13-1", "text": "お<ruby>金<rt>かね</rt></ruby>と<ruby>時間<rt>じかん</rt></ruby>と どちらが <ruby>欲<rt>ほ</rt></ruby>しいですか。", "viText": "Giữa tiền bạc và thời gian, bạn muốn cái nào hơn?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.1.mp3", "groupId": "group13-1" },
        { "lesson": 13, "id": "13-2a", "text": "いま、（Q1の<ruby>回答<rt>かいとう</rt></ruby>）が たくさん あります。<ruby>何<rt>なに</rt></ruby>をしますか。", "viText": "Bây giờ nếu có thật nhiều (cái vừa trả lời ở câu 1), bạn sẽ làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.2a.mp3", "groupId": "group13-1" },
        { "lesson": 13, "id": "13-2b", "text": "いま、（Q1の<ruby>回答<rt>かいとう</rt></ruby>）が たくさん あります。<ruby>何<rt>なに</rt></ruby>をしますか。", "viText": "Bây giờ nếu có thật nhiều (cái vừa trả lời ở câu 1), bạn sẽ làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.2b.mp3", "groupId": "group13-1" },
        { "lesson": 13, "id": "13-3", "text": "いま、<ruby>何<rt>なに</rt></ruby>が いちばん <ruby>欲<rt>ほ</rt></ruby>しいですか。（お<ruby>金<rt>かね</rt></ruby>はダメです。）", "viText": "Bây giờ bạn muốn cái gì nhất? (Không trả lời là tiền)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.3.mp3", "groupId": "group13-3" },
        { "lesson": 13, "id": "13-4", "text": "どんなの（Q3<ruby>回答<rt>かいとう</rt></ruby>）が<ruby>欲<rt>ほ</rt></ruby>しいですか。", "viText": "Bạn muốn một (thứ vừa trả lời ở câu 3) như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.4.mp3", "groupId": "group13-3" },
        { "lesson": 13, "id": "13-5a", "text": "<ruby>喉<rt>のど</rt></ruby>が <ruby>渇<rt>かわ</rt></ruby>きましたか", "viText": "Bạn có khát nước không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.5a.mp3" },
        { "lesson": 13, "id": "13-5b", "text": "お<ruby>腹<rt>なか</rt></ruby>が<ruby>空<rt>す</rt></ruby>きましたか。", "viText": "Bạn có đói bụng không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.5b.mp3" },
        { "lesson": 13, "id": "13-6a", "text": "あなたは、いつ<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きますか。<ruby>何<rt>なに</rt></ruby>をしに<ruby>行<rt>い</rt></ruby>きますか。", "viText": "Khi nào bạn 〇〇 đi Nhật? Đi để làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.6a.mp3", "groupId": "group13-6a"},
        { "lesson": 13, "id": "13-6b", "text": "<ruby>早<rt>はや</rt></ruby>く<ruby>日本<rt>にほん</rt></ruby>へ行きたいですか。", "viText": "Bạn có muốn nhanh chóng đi Nhật không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.6b.mp3", "groupId": "group13-6a"},
        { "lesson": 13, "id": "13-7", "text": "どのぐらいのレベルまで <ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>したいですか。", "viText": "Bạn muốn học tiếng Nhật đạt đến trình độ (level) nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.7.mp3" },
        { "lesson": 13, "id": "13-8", "text": "<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>が<ruby>欲<rt>ほ</rt></ruby>しいですか。", "viText": "Bạn có muốn có bạn bè là người Nhật không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.8.mp3" },
        { "lesson": 13, "id": "13-9", "text": "<ruby>日本<rt>にほん</rt></ruby>で どこへ<ruby>行<rt>い</rt></ruby>きたいですか。そこで<ruby>何<rt>なに</rt></ruby>をしたいですか。", "viText": "Bạn muốn đi đâu ở Nhật Bản? Bạn muốn làm gì ở đó?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.9.mp3" },
        { "lesson": 13, "id": "13-10", "text": "<ruby>日本<rt>にほん</rt></ruby>の<ruby>料理<rt>りょうり</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べたいですか。", "viText": "Trong các món ăn Nhật Bản, bạn muốn ăn món nào nhất?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.10.mp3" },

        // ==================== LESSON 14 ====================
        { "lesson": 14, "id": "14-1", "text": "<ruby>生年月日<rt>せいねんがっぴ</rt></ruby>／<ruby>年齢<rt>ねんれい</rt></ruby>／<ruby>名前<rt>なまえ</rt></ruby>を <ruby>教<rt>おし</rt></ruby>えてください。（※2つ<ruby>聞<rt>き</rt></ruby>く）", "viText": "Hãy cho tôi biết ngày sinh / tuổi / tên của bạn. (Hỏi ngẫu nhiên 2 thông tin)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.1.mp3" },
        { "lesson": 14, "id": "14-2", "text": "ここに、<ruby>自分<rt>じぶん</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。", "viText": "Hãy viết tên của bạn vào đây.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.2.mp3" },
        { "lesson": 14, "id": "14-3", "text": "あなたは<ruby>大学<rt>だいがく</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>していますか。<br>※（<ruby>専門名<rt>せんもんめい</rt></ruby>）を<ruby>勉強<rt>べんきょう</rt></ruby>しています。", "viText": "Bạn 〇〇 đang học gì ở trường đại học? *Trả lời: Tôi đang học chuyên ngành (chuyên ngành cụ thể).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.3.mp3" },
        { "lesson": 14, "id": "14-4", "text": "<ruby>先生<rt>せんせい</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>りたいです。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか？", "viText": "Em muốn chụp ảnh cùng thầy/cô. Em nên nói gì ạ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.4.mp3" },
        { "lesson": 14, "id": "14-5", "text": "この<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>がわかりますか。<ruby>教<rt>おし</rt></ruby>えてください。<br>※はい、わかります。〇〇です／いいえ、わかりません。", "viText": "Bạn có biết cách đọc chữ Hán này không? xin hãy chỉ cho tôi. *Trả lời: Có, là 〇〇 / Hoặc Không.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.5.mp3", "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.5.jpg" },
        { "lesson": 14, "id": "14-6", "text": "<ruby>復唱<rt>ふくしょう</rt></ruby>してください。「<ruby>明日<rt>あした</rt></ruby>（8<ruby>時<rt>じ</rt></ruby>に）<ruby>来<rt>き</rt></ruby>てください。」⇒『<ruby>明日<rt>あした</rt></ruby>8<ruby>時<rt>じ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ますね。』", "viText": "Hãy nhắc lại theo tôi: Ngày mai hãy đến lúc 8 giờ nhé. (Ngày mai tôi sẽ đến lúc 8 giờ).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.6.mp3" },
        { "lesson": 14, "id": "14-7", "text": "<ruby>復唱<rt>ふくしょう</rt></ruby>してください。「ドア／<ruby>窓<rt>まど</rt></ruby> を <ruby>開<rt>あ</rt></ruby>けてください。」⇒『窓を 開けますね。』", "viText": "Hãy nhắc lại theo tôi: Hãy mở cửa chính / cửa sổ ra giúp tôi. (Tôi mở cửa sổ nhé).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.7.mp3" },
        { "lesson": 14, "id": "14-8", "text": "ここに <ruby>自分<rt>じぶん</rt></ruby>の<ruby>大学名<rt>だいがくめい</rt></ruby>／<ruby>短期大学名<rt>たんきだいがくめい</rt></ruby>を<ruby>書<rt>か</rt></ruby>いて。<br>（※<ruby>実際<rt>じっさい</rt></ruby>に<ruby>書<rt>か</rt></ruby>くUTT<ruby>大学<rt>だいがく</rt></ruby>／LIC<ruby>短大<rt>たんだい</rt></ruby>など<ruby>省略可<rt>しょうりゃくか</rt></ruby>）", "viText": "Hãy viết tên trường Đại học / Cao đẳng của mình vào đây. (Thực hành viết thực tế, có thể viết tắt ví dụ UTT, LIC...)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.8.mp3" },
        { "lesson": 14, "id": "14-9", "text": "<ruby>立<rt>た</rt></ruby>って／<ruby>座<rt>すわ</rt></ruby>って／<ruby>後<rt>うし</rt></ruby>ろを<ruby>見<rt>み</rt></ruby>て／<ruby>手<rt>て</rt></ruby>を<ruby>見<rt>み</rt></ruby>せて／<ruby>手<rt>て</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げて など（※<ruby>実際<rt>じっさい</rt></ruby>に<ruby>動<rt>うご</rt></ruby>く）", "viText": "Hãy đứng dậy / ngồi xuống / nhìn ra sau / cho tôi xem tay / giơ tay lên... (Học sinh thực hiện hành động thực tế)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.9.mp3" },
        { "lesson": 14, "id": "14-10", "text": "<ruby>先生<rt>せんせい</rt></ruby>／<ruby>同<rt>おな</rt></ruby>じ<ruby>教室<rt>きょうしつ</rt></ruby>にいる<ruby>人<rt>ひと</rt></ruby>は いま <ruby>何<rt>なに</rt></ruby>をしていますか。", "viText": "Thầy/Cô/Người đang ở cùng phòng học này/ hiện tại đang làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.10.mp3" },

        // ==================== LESSON 15 ====================
        { "lesson": 15, "id": "15-1", "text": "あなたの／〇〇さんの  <ruby>家族<rt>かぞく</rt></ruby>は、どこに<ruby>住<rt>す</rt></ruby>んでいますか。", "viText": "Bạn 〇〇 / gia đình của bạn 〇〇 đang sinh sống ở đâu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.1.mp3" },
        { "lesson": 15, "id": "15-2a", "text": "お<ruby>父<rt>とう</rt></ruby>さんは/お<ruby>母<rt>かあ</rt></ruby>さんは、<ruby>何<rt>なん</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>をしていますか。<br>※「〜をしています」と<ruby>答<rt>こた</rt></ruby>える<br><ruby>兄弟<rt>きょうだい</rt></ruby>がいる<ruby>場合<rt>ばあい</rt></ruby>：お<ruby>兄<rt>にい</rt></ruby>さん/お<ruby>姉<rt>ねえ</rt></ruby>さんは<ruby>結婚<rt>けっこん</rt></ruby>していますか。", "viText": "Bố / Mẹ bạn đang làm công việc gì? *Yêu cầu trả lời đuôi '~ wo shiteimasu'. Nếu có anh chị: Anh / Chị của bạn đã kết hôn chưa?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.2a.mp3" },
        { "lesson": 15, "id": "15-2b", "text": "お<ruby>父<rt>とう</rt></ruby>さんは/お<ruby>母<rt>かあ</rt></ruby>さんは、<ruby>何<rt>なん</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>をしていますか。<br>※「〜をしています」と<ruby>答<rt>こた</rt></ruby>える<br><ruby>兄弟<rt>きょうだい</rt></ruby>がいる<ruby>場合<rt>ばあい</rt></ruby>：お<ruby>兄<rt>にい</rt></ruby>さん/お<ruby>姉<rt>ねえ</rt></ruby>さんは<ruby>結婚<rt>けっこん</rt></ruby>していますか。", "viText": "Bố / Mẹ bạn đang làm công việc gì? *Yêu cầu trả lời đuôi '~ wo shiteimasu'. Nếu có anh chị: Anh / Chị của bạn đã kết hôn chưa?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.2b.mp3" },
        { "lesson": 15, "id": "15-3", "text": "どうやって<ruby>家<rt>うち</rt></ruby>まで<ruby>帰<rt>かえ</rt></ruby>りますか。<br>※バスで<ruby>帰<rt>かえ</rt></ruby>ります。（<ruby>詳細<rt>しょうさい</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>）<br><ruby>毎日<rt>まいにち</rt></ruby>どうやってセンターに<ruby>来<rt>き</rt></ruby>ていますか。<br>※バイクで<ruby>来<rt>き</rt></ruby>ています（詳細は不要）", "viText": "Bạn đi về nhà bằng cách nào? *Ví dụ: Về bằng xe buýt (không cần chi tiết). Hàng ngày bạn đến trung tâm bằng cách nào? *Ví dụ: Đến bằng xe máy.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.3.mp3" },
        { "lesson": 15, "id": "15-4", "text": "あなたの<ruby>大学<rt>だいがく</rt></ruby>の<ruby>住所<rt>じゅうしょ</rt></ruby>を<ruby>知<rt>し</rt></ruby>っていますか。", "viText": "Bạn có biết địa chỉ của trường đại học không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.4.mp3" },
        { "lesson": 15, "id": "15-5a", "text": "<ruby>日本<rt>にほん</rt></ruby>に<ruby>友<rt>とも</rt></ruby>だちはいますか。<br>はい→<ruby>友<rt>とも</rt></ruby>だちはどこに<ruby>住<rt>す</rt></ruby>んでいますか。", "viText": "Bạn có bạn bè ở Nhật Bản không? Nếu có -> Bạn của bạn sống ở đâu? Nếu không -> Bạn có muốn có bạn là người Nhật không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.5a.mp3" },
        { "lesson": 15, "id": "15-5b", "text": "<ruby>日本<rt>にほん</rt></ruby>に<ruby>友<rt>とも</rt></ruby>だちはいますか。<br>いいえ→ <ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>友<rt>とも</rt></ruby>だちが<ruby>欲<rt>ほ</rt></ruby>しいですか。", "viText": "Bạn có bạn bè ở Nhật Bản không? Nếu có -> Bạn của bạn sống ở đâu? Nếu không -> Bạn có muốn có bạn là người Nhật không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.5b.mp3" },
        { "lesson": 15, "id": "15-6", "text": "<ruby>教室<rt>きょうしつ</rt></ruby>で <ruby>何<rt>なに</rt></ruby>か<ruby>食<rt>た</rt></ruby>べても/<ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んでも/スマホを<ruby>使<rt>つか</rt></ruby>っても いいですか。<br>※「はい、〜てもいいです/いいえ、〜てはいけません」と答える", "viText": "Trong phòng học, ăn cái gì đó / uống nước / sử dụng điện thoại có được không? *Yêu cầu trả lời mẫu: 'Vてもいいです' hoặc 'Vてはいけません'.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.6.mp3" },
        { "lesson": 15, "id": "15-7", "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>仕事<rt>しごと</rt></ruby>をしています。タバコを<ruby>吸<rt>す</rt></ruby>っても/ケータイを<ruby>使<rt>つか</rt></ruby>っても/ベトナム<ruby>語<rt>ご</rt></ruby>で<ruby>話<rt>はな</rt></ruby>しても いいですか。<br>※「はい、〜てもいいです/いいえ、〜てはいけません」と答える", "viText": "Giả sử bây giờ bạn đang làm việc ở công ty Nhật. Hút thuốc / dùng điện thoại / nói tiếng Việt có được không? *Trả lời mẫu: 'Vてもいいです' hoặc 'いいえ、Vてはいけません'。", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.7.mp3" },
        { "lesson": 15, "id": "15-8", "text": "<ruby>日本<rt>にほん</rt></ruby>で、<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>寮<rt>りょう</rt></ruby>に<ruby>住<rt>す</rt></ruby>みます。<ruby>何<rt>なに</rt></ruby>をしてはいけませんか/<ruby>何<rt>なに</rt></ruby>をしなければいけませんか。", "viText": "Giả sử bạn sẽ sống ở kí túc xá công ty tại Nhật. Bạn không được phép làm gì / Bắt buộc phải làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.8.mp3" },
        { "lesson": 15, "id": "15-9", "text": "<ruby>他<rt>ほか</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>の パソコンを<ruby>使<rt>つか</rt></ruby>いたいです。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。", "viText": "Bạn muốn dùng máy tính của người khác. Bạn sẽ nói gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.9.mp3" },
        { "lesson": 15, "id": "15-10", "text": "<ruby>疲<rt>つか</rt></ruby>れました。<ruby>休<rt>やす</rt></ruby>みたいです。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。", "viText": "Bạn đang mệt và muốn xin nghỉ ngơi một chút. Bạn sẽ nói gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.10.mp3" },

        // ==================== LESSON 16 ====================
        { "lesson": 16, "id": "16-1", "text": "<ruby>担任<rt>たんにん</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>ですか。どんな<ruby>先生<rt>せんせい</rt></ruby>（※<ruby>外見<rt>がいけん</rt></ruby>や<ruby>性格<rt>せいかく</rt></ruby>）ですか。<br>※「〜いAくて/〜なAで、〜人です」と<ruby>答<rt>こた</rt></ruby>える", "viText": "Thầy/Cô chủ nhiệm 〇〇 là ai? Thầy/Cô ấy là người như thế nào (ngoại hình, tính cách)? *Trả lời theo mẫu hình dung từ đuôi 'i' nối tiếp hoặc đuôi 'na' nối tiếp.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.1.mp3" },
        { "lesson": 16, "id": "16-2", "text": "あなたの<ruby>大学<rt>だいがく</rt></ruby>は、どんな<ruby>大学<rt>だいがく</rt></ruby>ですか。<br>※「〜いAくて/〜なAで、〜です」と答える", "viText": "Trường đại học của bạn là một ngôi trường như thế nào? *Trả lời kết nối tính từ dạng '~ kute / ~ de, ~ desu'.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.2.mp3" },
        { "lesson": 16, "id": "16-3a", "text": "HN/DN/HCM は どんなところですか。", "viText": "Hà Nội / Đà Nẵng / TP.HCM là nơi như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.3a.mp3" },
        { "lesson": 16, "id": "16-3b", "text": "HN/DN/HCM は どんなところですか。", "viText": "Hà Nội / Đà Nẵng / TP.HCM là nơi như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.3b.mp3" },
        { "lesson": 16, "id": "16-4a", "text": "あなたは、いつも<ruby>何<rt>なに</rt></ruby>をしてから/<ruby>寝<rt>ね</rt></ruby>ますか/ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べますか。", "viText": "Bạn 〇〇 luôn làm cái gì rồi mới đi ngủ / mới ăn cơm?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.4a.mp3" },
        { "lesson": 16, "id": "16-4b", "text": "あなたは、いつも<ruby>何<rt>なに</rt></ruby>をしてから/<ruby>寝<rt>ね</rt></ruby>ますか/ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べますか。", "viText": "Bạn 〇〇 luôn làm cái gì rồi mới đi ngủ / mới ăn cơm?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.4b.mp3" },
        { "lesson": 16, "id": "16-5", "text": "<ruby>朝<rt>あさ</rt></ruby><ruby>起<rt>お</rt></ruby>きて、<ruby>教室<rt>きょうしつ</rt></ruby>に<ruby>来<rt>く</rt></ruby>るまで<ruby>何<rt>なに</rt></ruby>をしますか。<ruby>話<rt>はな</rt></ruby>してください。<br>（※「Vて、Vて、Vます」と<ruby>答<rt>こた</rt></ruby>える）", "viText": "Hãy kể từ lúc thức dậy vào buổi sáng cho đến khi đến lớp học bạn làm những gì? *Yêu cầu liệt kê hành động nối tiếp theo đuôi V-te, V-te, V-masu.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.5.mp3" },
        { "lesson": 16, "id": "16-6", "text": "<ruby>大学<rt>だいがく</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ってから、<ruby>何<rt>なに</rt></ruby>か<ruby>始<rt>はじ</rt></ruby>めましたか。", "viText": "Khi vào đại học, bạn đã bắt đầu làm những hoạt động gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.6.mp3" },
        { "lesson": 16, "id": "16-7", "text": "あなたは どんな<ruby>人<rt>ひと</rt></ruby>ですか。<ruby>教<rt>おし</rt></ruby>えてください。", "viText": "Bản thân bạn là một người như thế nào? Hãy chia sẻ cho tôi biết.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.7.mp3" },
        { "lesson": 16, "id": "16-8", "text": "あなたの<ruby>好<rt>す</rt></ruby>きな<ruby>人<rt>ひと</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。<br>その<ruby>人<rt>ひと</rt></ruby>はどんな<ruby>人<rt>ひと</rt></ruby>ですか。", "viText": "Hãy nói về một người bạn yêu quý/thích. Người đó là một người như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.8.mp3" },
        { "lesson": 16, "id": "16-9", "text": "N4を<ruby>取<rt>と</rt></ruby>ってから<ruby>日本<rt>にほん</rt></ruby>へいきますか。<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってからN4を<ruby>取<rt>と</rt></ruby>りますか。", "viText": "Bạn định lấy N4 rồi mới đi Nhật, hay đi Nhật rồi mới thi lấy bằng N4?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.9.mp3", "groupId": "group16-9" },
        { "lesson": 16, "id": "16-10a", "text": "<ruby>問<rt>とい</rt></ruby>9の<ruby>答<rt>こた</rt></ruby>え： はい、<ruby>行<rt>い</rt></ruby>きます。→<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってから、<ruby>何<rt>なに</rt></ruby>を したいですか。", "viText": "Nếu đồng ý đi Nhật -> Sau khi sang Nhật bạn muốn làm gì? ", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.10a.mp3", "groupId": "group16-9" },
        { "lesson": 16, "id": "16-10b", "text": "<ruby>問<rt>とい</rt></ruby>9の<ruby>答<rt>こた</rt></ruby>え： いいえ、<ruby>行<rt>い</rt></ruby>きません。→<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>を<ruby>出<rt>で</rt></ruby>てから、<ruby>何<rt>なに</rt></ruby>をしたいですか。", "viText": "Nếu không đi -> Sau khi tốt nghiệp Đại học/Cao đẳng bạn muốn làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.10b.mp3", "groupId": "group16-9" },

        // ==================== LESSON 17 ====================
        { "lesson": 17, "id": "17-1", "text": "<ruby>教室<rt>きょうしつ</rt></ruby>で<ruby>友達<rt>ともだち</rt></ruby>がたばこを<ruby>吸<rt>す</rt></ruby>っています。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>※たばこを<ruby>吸<rt>す</rt></ruby>わないでください / たばこを<ruby>吸<rt>す</rt></ruby>ってはいけません", "viText": "Bạn cùng lớp đang hút thuốc trong lớp. Bạn sẽ nói gì nhắc nhở? *Xin đừng hút thuốc / Không được hút thuốc ở đây.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.1.mp3" },
        { "lesson": 17, "id": "17-2", "text": "<ruby>試験<rt>しけん</rt></ruby>をしています。<ruby>友達<rt>ともだち</rt></ruby>があなたの<ruby>答<rt>こた</rt></ruby>えをみています。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>※<ruby>見<rt>み</rt></ruby>ないでください", "viText": "Trong giờ thi, một người bạn đang nhìn đáp án của bạn. Bạn sẽ nói thế nào? *Xin đừng nhìn bài của tôi.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.2.mp3" },
        { "lesson": 17, "id": "17-3", "text": "<ruby>今日<rt>きょう</rt></ruby>、5<ruby>時<rt>じ</rt></ruby>までに<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>らなければなりませんか。<br>※はい、帰らなければなりません / 帰らなくてもいいです。", "viText": "Hôm nay bạn có phải về nhà trước 5 giờ không? *Vâng, tôi phải về nhà / tôi không cần phải về nhà.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.3.mp3" },
        { "lesson": 17, "id": "17-4", "text": "<ruby>日本<rt>にほん</rt></ruby>に<ruby>住<rt>す</rt></ruby>みます。<ruby>何<rt>なん</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>しなければなりませんか。<br>※日本のルールを<ruby>守<rt>まも</rt></ruby>らなければ / ごみの<ruby>捨<rt>す</rt></ruby>て<ruby>方<rt>かた</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>しなければ / まじめに<ruby>働<rt>はたら</rt></ruby>かなければ", "viText": "Khi sống ở Nhật Bản, bạn cần phải chú ý điều gì? *Phải tuân thủ luật lệ Nhật / phải chú ý cách đổ rác / phải làm việc chăm chỉ.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.4.mp3" },
        { "lesson": 17, "id": "17-5", "text": "<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くまでに、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。<br>※「30<ruby>課<rt>か</rt></ruby>」まで<ruby>勉強<rt>べんきょう</rt></ruby>しなければ / N5を<ruby>取<rt>と</rt></ruby>らなければ / もっと<ruby>勉強<rt>べんきょう</rt></ruby>しなければなりません", "viText": "Trước khi sang Nhật Bản, bạn bắt buộc phải làm gì? *Phải học xong (đến bài 30) / Phải lấy được N5 / Phải học chăm chỉ hơn nữa.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.5.mp3" },
        { "lesson": 17, "id": "17-6a", "text": "<ruby>左<rt>ひだり</rt></ruby>/<ruby>右<rt>みぎ</rt></ruby>/<ruby>上<rt>うえ</rt></ruby>/<ruby>下<rt>した</rt></ruby>/<ruby>前<rt>まえ</rt></ruby>/<ruby>後<rt>うし</rt></ruby>ろ/<ruby>私<rt>わたし</rt></ruby>の<ruby>顔<rt>かお</rt></ruby> / を <ruby>見<rt>み</rt></ruby>て。", "viText": "Hãy nhìn sang trái / sang phải / lên trên / xuống dưới / nhìn về trước / nhìn ra sau / nhìn thẳng mặt tôi.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.6a.mp3" },
        { "lesson": 17, "id": "17-6b", "text": "<ruby>左<rt>ひだり</rt></ruby>/<ruby>右<rt>みぎ</rt></ruby>/<ruby>上<rt>うえ</rt></ruby>/<ruby>下<rt>した</rt></ruby>/<ruby>前<rt>まえ</rt></ruby>/<ruby>後<rt>うし</rt></ruby>ろ/<ruby>私<rt>わたし</rt></ruby>の<ruby>顔<rt>かお</rt></ruby> / を <ruby>見<rt>み</rt></ruby>て。", "viText": "Hãy nhìn sang trái / sang phải / lên trên / xuống dưới / nhìn về trước / nhìn ra sau / nhìn thẳng mặt tôi.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.6b.mp3" },
        { "lesson": 17, "id": "17-7", "text": "<ruby>立<rt>た</rt></ruby>って、<ruby>座<rt>すわ</rt></ruby>らないで。", "viText": "Hãy đứng lên, đừng ngồi, hãy ngồi xuống, đừng đứng... xin hãy đứng lên (Hành động phản xạ theo lệnh).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.7.mp3" },
        { "lesson": 17, "id": "17-8a", "text": "<ruby>左手<rt>ひだりて</rt></ruby>/<ruby>右手<rt>みぎて</rt></ruby>/<ruby>両手<rt>りょうて</rt></ruby>/<ruby>左足<rt>ひだりあし</rt></ruby>/<ruby>右足<rt>みぎあし</rt></ruby> 　<ruby>上<rt>あ</rt></ruby>げて/おろして/<ruby>上<rt>あげ</rt></ruby>ないで。", "viText": "Hãy đưa/hạ/đừng đưa tay trái/phải/cả hai tay/chân trái/ chân phải lên.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.8a.mp3" },
        { "lesson": 17, "id": "17-8b", "text": "<ruby>左手<rt>ひだりて</rt></ruby>/<ruby>右手<rt>みぎて</rt></ruby>/<ruby>両手<rt>りょうて</rt></ruby>/<ruby>左足<rt>ひだりあし</rt></ruby>/<ruby>右足<rt>みぎあし</rt></ruby> 　<ruby>上<rt>あ</rt></ruby>げて/おろして/<ruby>上<rt>あげ</rt></ruby>ないで。", "viText": "Hãy đưa/hạ/đừng đưa tay trái/phải/cả hai tay/chân trái/ chân phải lên.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.8b.mp3" },
        { "lesson": 17, "id": "17-9a", "text": "<ruby>耳<rt>みみ</rt></ruby>/<ruby>鼻<rt>はな</rt></ruby>/<ruby>目<rt>め</rt></ruby>/<ruby>口<rt>くち</rt></ruby>/<ruby>頭<rt>あたま</rt></ruby>/<ruby>首<rt>くび</rt></ruby>/<ruby>肩<rt>かた</rt></ruby>/お<ruby>腹<rt>なか</rt></ruby>　<ruby>手<rt>て</rt></ruby>で<ruby>触<rt>さわ</rt></ruby>って。", "viText": "Hãy dùng tay chạm vào tai / mũi / mắt / miệng / đầu / cổ / vai / bụng (Học sinh chỉ bộ phận cơ thể thực tế).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.9a.mp3" },
        { "lesson": 17, "id": "17-9b", "text": "<ruby>耳<rt>みみ</rt></ruby>/<ruby>鼻<rt>はな</rt></ruby>/<ruby>目<rt>め</rt></ruby>/<ruby>口<rt>くち</rt></ruby>/<ruby>頭<rt>あたま</rt></ruby>/<ruby>首<rt>くび</rt></ruby>/<ruby>肩<rt>かた</rt></ruby>/お<ruby>腹<rt>なか</rt></ruby>　<ruby>手<rt>て</rt></ruby>で<ruby>触<rt>さわ</rt></ruby>って。", "viText": "Hãy dùng tay chạm vào tai / mũi / mắt / miệng / đầu / cổ / vai / bụng (Học sinh chỉ bộ phận cơ thể thực tế).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.9b.mp3" },
        { "lesson": 17, "id": "17-10", "text": "<ruby>前<rt>まえ</rt></ruby>/<ruby>横<rt>よこ</rt></ruby>/<ruby>後<rt>うし</rt></ruby>ろを <ruby>見<rt>み</rt></ruby>ないでください。<ruby>話<rt>はな</rt></ruby>さないで。 こっちを見て。", "viText": "Xin đừng nhìn lên trước / sang ngang / ra sau. Đừng nói chuyện. Hãy nhìn về phía tôi.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.10.mp3" },

        // ==================== LESSON 18 ====================
        { "lesson": 18, "id": "18-1a", "text": "<ruby>車<rt>くるま</rt></ruby>の<ruby>運転<rt>うんてん</rt></ruby>ができますか。バイクは<ruby>運転<rt>うんてん</rt></ruby>できますか。<ruby>自転車<rt>じてんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ることができますか。<br>車:できない→バイク:できない", "viText": "Bạn có thể lái ô tô không? Bạn có thể lái xe máy không? Bạn có thể đi xe đạp không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.1a.mp3" },
        { "lesson": 18, "id": "18-1b", "text": "<ruby>車<rt>くるま</rt></ruby>の<ruby>運転<rt>うんてん</rt></ruby>ができますか。バイクは<ruby>運転<rt>うんてん</rt></ruby>できますか。<ruby>自転車<rt>じてんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ることができますか。<br>車:できない→バイク:できない", "viText": "Bạn có thể lái ô tô không? Bạn có thể lái xe máy không? Bạn có thể đi xe đạp không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.1b.mp3" },
        { "lesson": 18, "id": "18-2", "text": "スマホで <ruby>何<rt>なに</rt></ruby>ができますか / <ruby>何<rt>なに</rt></ruby>をすることができますか。", "viText": "Bạn có thể làm được những việc gì trên chiếc điện thoại di động thông minh của mình?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.2.mp3" },
        { "lesson": 18, "id": "18-3", "text": "あなたの<ruby>出身地<rt>しゅっしんち</rt></ruby> / (<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>) で <ruby>何<rt>なに</rt></ruby>をすることができますか。", "viText": "Tại quê hương của bạn / tại địa điểm nổi tiếng thì có thể làm những gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.3.mp3" },
        { "lesson": 18, "id": "18-4", "text": "ベトナムでは できません。<ruby>日本<rt>にほん</rt></ruby>で、<ruby>何<rt>なに</rt></ruby>をすることができますか。", "viText": "Điều gì không thể làm ở Việt Nam nhưng có thể làm ở Nhật Bản?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.4.mp3" },
        { "lesson": 18, "id": "18-5", "text": "あなたは<ruby>何<rt>なに</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>ですか。<ruby>何<rt>なに</rt></ruby>をすることができますか。<ruby>教<rt>おし</rt></ruby>えてください。", "viText": "Bạn 〇〇 giỏi điều gì? Có thể làm được điều gì? Hãy kể cho tôi.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.5.mp3" },
        { "lesson": 18, "id": "18-6a", "text": "<ruby>漢字<rt>かんじ</rt></ruby>を<ruby>読<rt>よ</rt></ruby>む / <ruby>書<rt>か</rt></ruby>く  ことができますか。いくつ / どのぐらい<ruby>読<rt>よ</rt></ruby>むこと / <ruby>書<rt>か</rt></ruby>く こと ができますか。", "viText": "Bạn có thể đọc / viết được chữ Hán (Kanji) không? Tầm khoảng bao nhiêu chữ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.6a.mp3" },
        { "lesson": 18, "id": "18-6b", "text": "<ruby>漢字<rt>かんじ</rt></ruby>を<ruby>読<rt>よ</rt></ruby>む / <ruby>書<rt>か</rt></ruby>く  ことができますか。いくつ / どのぐらい<ruby>読<rt>よ</rt></ruby>むこと / <ruby>書<rt>か</rt></ruby>く こと ができますか。", "viText": "Bạn có thể đọc / viết được chữ Hán (Kanji) không? Tầm khoảng bao nhiêu chữ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.6b.mp3" },
        { "lesson": 18, "id": "18-7", "text": "<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>うことができますか。どんな<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>うことができますか。", "viText": "Bạn có thể hát bài hát bằng tiếng Nhật không? Có thể hát bài hát nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.7.mp3" },
        { "lesson": 18, "id": "18-8a", "text": "あなたは<ruby>一週間<rt>いっしゅうかん</rt></ruby>、<ruby>毎日<rt>まいにち</rt></ruby> <ruby>働<rt>はたら</rt></ruby>くことができますか。<br>はい→<ruby>本当<rt>ほんとう</rt></ruby>ですか/<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。 いいえ→<ruby>何日<rt>なんにち</rt></ruby><ruby>働<rt>はたら</rt></ruby>くことができますか", "viText": "(Sang Nhật) Bạn có thể làm việc liên tục cả tuần? -> (Nếu trả lời 'có') Thật không?/Ổn không? (Nếu trả lời 'không') Vậy bạn có thể làm được bao nhiêu ngày/giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.8a.mp3" },
        { "lesson": 18, "id": "18-8b", "text": "あなたは<ruby>一日<rt>いちにち</rt></ruby>12<ruby>時間<rt>じかん</rt></ruby> <ruby>働<rt>はたら</rt></ruby>くことができますか。<br>はい→<ruby>本当<rt>ほんとう</rt></ruby>ですか/<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。 いいえ→<ruby>何時間<rt>なんじかん</rt></ruby><ruby>働<rt>はたら</rt></ruby>くことができますか", "viText": "(Sang Nhật) Bạn có thể làm 12 tiếng mỗi ngày không? -> (Nếu trả lời 'có') Thật không?/Ổn không? (Nếu trả lời 'không') Vậy bạn có thể làm được bao nhiêu ngày/giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.8b.mp3" },
        { "lesson": 18, "id": "18-9", "text": "<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。<br>※サッカーです。→します、見ます / <ruby>料理<rt>りょうり</rt></ruby>です→つくります  ※Vることです", "viText": "Sở thích của bạn là gì? *Nếu trả lời danh từ (Bóng đá -> đi đá hay đi xem? / Nấu ăn -> tự nấu à?) *Yêu cầu dùng mẫu cấu trúc chuẩn V-ru koto desu.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.9.mp3" },
        { "lesson": 18, "id": "18-10", "text": "<ruby>将来<rt>しょうらい</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。<br>※Vることです。", "viText": "Ước mơ trong tương lai của bạn là gì? *Yêu cầu trả lời theo cấu trúc chuẩn V-ru koto desu.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.10.mp3" },

        // ==================== LESSON 19 ====================
        { "lesson": 19, "id": "19-1a", "text": "<ruby>雪<rt>ゆき</rt></ruby>を<ruby>見<rt>み</rt></ruby>た/<ruby>飛行機<rt>ひこうき</rt></ruby>に<ruby>乗<rt>の</rt></ruby>った/<ruby>船<rt>ふね</rt></ruby>に<ruby>乗<rt>の</rt></ruby>った/<ruby>着物<rt>きもの</rt></ruby>を<ruby>着<rt>き</rt></ruby>た/<ruby>温泉<rt>おんせん</rt></ruby>に<ruby>入<rt>はい</rt></ruby>った/カラオケに<ruby>行<rt>い</rt></ruby>った ことがありますか。（2つ<ruby>聞<rt>き</rt></ruby>く）どうでしたか。<br>いいえ→〜たいですか。", "viText": "Bạn đã từng trải nghiệm (ngắm tuyết, đi máy bay, đi tàu thủy, mặc Kimono, tắm suối nước nóng, hát karaoke) chưa? (Hỏi ngẫu nhiên 2 câu). Nếu trả lời 'Có' -> Hỏi tiếp: Trải nghiệm đó thế nào? Nếu trả lời 'Không' -> Hỏi tiếp: Có muốn ... không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.1a.mp3" },
        { "lesson": 19, "id": "19-1b", "text": "<ruby>雪<rt>ゆき</rt></ruby>を<ruby>見<rt>み</rt></ruby>た/<ruby>飛行機<rt>ひこうき</rt></ruby>に<ruby>乗<rt>の</rt></ruby>った/<ruby>船<rt>ふね</rt></ruby>に<ruby>乗<rt>の</rt></ruby>った/<ruby>着物<rt>きもの</rt></ruby>を<ruby>着<rt>き</rt></ruby>た/<ruby>温泉<rt>おんせん</rt></ruby>に<ruby>入<rt>はい</rt></ruby>った/カラオケに<ruby>行<rt>い</rt></ruby>った ことがありますか。（2つ<ruby>聞<rt>き</rt></ruby>く）どうでしたか。<br>いいえ→〜たいですか。", "viText": "Bạn đã từng trải nghiệm (ngắm tuyết, đi máy bay, đi tàu thủy, mặc Kimono, tắm suối nước nóng, hát karaoke) chưa? (Hỏi ngẫu nhiên 2 câu). Nếu trả lời 'Có' -> Hỏi tiếp: Trải nghiệm đó thế nào? Nếu trả lời 'Không' -> Hỏi tiếp: Có muốn ... không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.1b.mp3" },
        { "lesson": 19, "id": "19-2a", "text": "<ruby>日本料理<rt>にほんりょうり</rt></ruby>を<ruby>食<rt>た</rt></ruby>べた/<ruby>日本<rt>にほん</rt></ruby>のアニメを<ruby>見<rt>み</rt></ruby>た/<ruby>日本<rt>にほん</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>った/<ruby>日本<rt>にほん</rt></ruby>の<ruby>祭<rt>まつ</rt></ruby>りに<ruby>参加<rt>さんか</rt></ruby>した ことが ありますか。（2つ<ruby>聞<rt>き</rt></ruby>く）<br><ruby>何<rt>なに</rt></ruby>を/<ruby>何<rt>なん</rt></ruby>の/どんな〜ましたか。", "viText": "Bạn đã từng ăn món Nhật, xem anime Nhật, hát bài hát Nhật, tham gia lễ hội Nhật chưa? (Hỏi ngẫu nhiên 2 câu) Bạn đã làm gì/làm như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.2a.mp3" },
        { "lesson": 19, "id": "19-2b", "text": "<ruby>日本料理<rt>にほんりょうり</rt></ruby>を<ruby>食<rt>た</rt></ruby>べた/<ruby>日本<rt>にほん</rt></ruby>のアニメを<ruby>見<rt>み</rt></ruby>た/<ruby>日本<rt>にほん</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>った/<ruby>日本<rt>にほん</rt></ruby>の<ruby>祭<rt>まつ</rt></ruby>りに<ruby>参加<rt>さんか</rt></ruby>した ことが ありますか。（2つ<ruby>聞<rt>き</rt></ruby>く）<br><ruby>何<rt>なに</rt></ruby>を/<ruby>何<rt>なん</rt></ruby>の/どんな〜ましたか。", "viText": "Bạn đã từng ăn món Nhật, xem anime Nhật, hát bài hát Nhật, tham gia lễ hội Nhật chưa? (Hỏi ngẫu nhiên 2 câu) Bạn đã làm gì/làm như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.2b.mp3" },
        { "lesson": 19, "id": "19-3a", "text": "<ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れた/<ruby>授業<rt>じゅぎょう</rt></ruby>に<ruby>遅<rt>おく</rt></ruby>れた/<ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>休<rt>やす</rt></ruby>んだことがありますか。どうしてですか。", "viText": "Bạn đã từng quên làm bài tập / đi học muộn / nghỉ học buổi nào chưa? Lý do tại sao?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.3a.mp3" },
        { "lesson": 19, "id": "19-3b", "text": "<ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れた/<ruby>授業<rt>じゅぎょう</rt></ruby>に<ruby>遅<rt>おく</rt></ruby>れた/<ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>休<rt>やす</rt></ruby>んだことがありますか。どうしてですか。", "viText": "Bạn đã từng quên làm bài tập / đi học muộn / nghỉ học buổi nào chưa? Lý do tại sao?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.3b.mp3" },
        { "lesson": 19, "id": "19-4", "text": "〇〇<ruby>大学<rt>だいがく</rt></ruby>/〇〇<ruby>短大<rt>たんだい</rt></ruby>で どんなイベントに<ruby>参加<rt>さんか</rt></ruby>したことがありますか。", "viText": "Bạn đã từng tham gia sự kiện hay hoạt động tập thể nào tại trường Đại học/Cao đẳng 〇〇?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.4.mp3" },
        { "lesson": 19, "id": "19-5", "text": "<ruby>今<rt>いま</rt></ruby>まで、どこに<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったことがありますか。", "viText": "Tính đến nay, bạn đã từng đi du lịch ở những địa phương nào rồi?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.5.mp3" },
        { "lesson": 19, "id": "19-6", "text": "<ruby>日本語<rt>にほんご</rt></ruby>クラスに<ruby>入<rt>はい</rt></ruby>ってから、あなたは<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>になりましたか。",  "viText": "Từ khi vào lớp tiếng Nhật, tiếng Nhật của bạn 〇〇 có tiến bộ hơn không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.6.mp3" },
        { "lesson": 19, "id": "19-7a", "text": "<ruby>将来<rt>しょうらい</rt></ruby>、<ruby>社長<rt>しゃちょう</rt></ruby>/<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>/エンジニア になりたいですか。<br>いいえ→<ruby>何<rt>なに</rt></ruby>に なりたいですか。", "viText": "Trong tương lai, bạn có muốn trở thành giám đốc / giáo viên tiếng Nhật / kỹ sư không? Nếu trả lời 'Không' -> Bạn muốn trở thành gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.7a.mp3" },
        { "lesson": 19, "id": "19-7b", "text": "<ruby>将来<rt>しょうらい</rt></ruby>、<ruby>医者<rt>いしゃ</rt></ruby>になりたいですか。<br>いいえ→<ruby>何<rt>なに</rt></ruby>に なりたいですか。", "viText": "Trong tương lai, bạn có muốn trở thành bác sĩ không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.7b.mp3" },
        { "lesson": 19, "id": "19-8a", "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>眠<rt>ねむ</rt></ruby>く/<ruby>最近<rt>さいきん</rt></ruby><ruby>背<rt>せ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>く/<ruby>最近<rt>さいきん</rt></ruby><ruby>暑<rt>あつ</rt></ruby>く・<ruby>涼<rt>すず</rt></ruby>しくなりましたか。", "viText": "Bạn 〇〇 thấy bây giờ buồn ngủ hơn / dạo này cao lên / dạo này trời nóng lên hay mát đi không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.8a.mp3" },
        { "lesson": 19, "id": "19-8b", "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>眠<rt>ねむ</rt></ruby>く/<ruby>最近<rt>さいきん</rt></ruby><ruby>背<rt>せ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>く/<ruby>最近<rt>さいきん</rt></ruby><ruby>暑<rt>あつ</rt></ruby>く・<ruby>涼<rt>すず</rt></ruby>しくなりましたか。", "viText": "Bạn 〇〇 thấy bây giờ buồn ngủ hơn / dạo này cao lên / dạo này trời nóng lên hay mát đi không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.8b.mp3" },
        { "lesson": 19, "id": "19-9", "text": "<ruby>先週<rt>せんしゅう</rt></ruby>の<ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしましたか。2つ<ruby>答<rt>こた</rt></ruby>えてください。（「〜たり〜たり」）", "viText": "Chủ nhật tuần trước bạn đã làm những gì? Hãy nêu 2 hành động.'~ tari ~ tari desu'.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.9.mp3" },
        { "lesson": 19, "id": "19-10", "text": "<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>って、<ruby>何<rt>なに</rt></ruby>をしたいですか。2つ<ruby>答<rt>こた</rt></ruby>えてください。（「〜たり〜たり」で<ruby>答<rt>こた</rt></ruby>える）", "viText": "Sau khi đến Nhật Bản, bạn muốn làm những gì? Hãy nêu 2 việc. '~ tari ~ tari shitai desu'.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/19.10.mp3" },

        // ==================== LESSON 20 ====================
        { "lesson": 20, "id": "20-1", "text": "<ruby>元気<rt>げんき</rt></ruby>？", "viText": "Bạn 〇〇 khoẻ không? (Thể thông thường - nói thân mật)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/20.1.mp3" },
        { "lesson": 20, "id": "20-2", "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>何歳<rt>なんさい</rt></ruby>？ <ruby>誕生日<rt>たんじょうび</rt></ruby> <ruby>教<rt>おし</rt></ruby>えて。", "viText": "〇〇 năm nay bao nhiêu tuổi rồi? Nói cho mình biết sinh nhật đi. (Thể thân mật)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/20.2.mp3" },
        { "lesson": 20, "id": "20-3", "text": "<ruby>大学名<rt>だいがくめい</rt></ruby>/<ruby>短期大学名<rt>たんきだいがくめい</rt></ruby>は？", "viText": "Tên trường Đại học / Cao đẳng của bạn là gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/20.3.mp3" },
        { "lesson": 20, "id": "20-4", "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>の<ruby>住所<rt>じゅうしょ</rt></ruby>、<ruby>知<rt>し</rt></ruby>ってる？<br><ruby>知<rt>し</rt></ruby>っている→<ruby>言<rt>い</rt></ruby>って。  <ruby>知<rt>し</rt></ruby>らない→<ruby>覚<rt>おぼ</rt></ruby>えてないの？", "viText": "Có biết địa chỉ trường không? Nếu biết -> nói xem nào. Nếu không -> Bộ không nhớ nổi à? (Thể thân mật)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/20.4.mp3" },
        { "lesson": 20, "id": "20-5", "text": "<ruby>日本<rt>にほん</rt></ruby>に<ruby>行<rt>い</rt></ruby>きたい？", "viText": "Có muốn đi Nhật không? (Thể thông thường)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/20.5.mp3" },
        { "lesson": 20, "id": "20-6", "text": "〇〇<ruby>大学<rt>だいがく</rt></ruby>/〇〇<ruby>短大<rt>たんだい</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ってから、どれくらい？<br>（〇か<ruby>月<rt>げつ</rt></ruby>です/〇か<ruby>月<rt>げつ</rt></ruby>ぐらいです）", "viText": "Từ lúc vào học trường Đại học / Cao đẳng 〇〇 đến giờ được bao lâu rồi? (Trả lời: khoảng mấy tháng...)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/20.6.mp3" },
        { "lesson": 20, "id": "20-7", "text": "<ruby>日本語<rt>にほんご</rt></ruby>、<ruby>上手<rt>じょうず</rt></ruby>になった？", "viText": "Tiếng Nhật đã giỏi lên chút nào chưa? (Thể thông thường)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/20.7.mp3" },
        { "lesson": 20, "id": "20-8", "text": "<ruby>漢字<rt>かんじ</rt></ruby> <ruby>書<rt>か</rt></ruby>くことができる？ いくつぐらい？", "viText": "Có viết được chữ Hán không? Được tầm bao nhiêu chữ rồi? (Thể thông thường)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/20.8.mp3" },
        { "lesson": 20, "id": "20-9", "text": "<ruby>勉強<rt>べんきょう</rt></ruby>で <ruby>何<rt>なに</rt></ruby>がいちばん むずかしい？", "viText": "Trong việc học thì phần nào là khó nhất đối với bạn? (Thể thông thường)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/20.9.mp3" },
        { "lesson": 20, "id": "20-10", "text": "<ruby>明日<rt>あした</rt></ruby> ひま？", "viText": "Ngày mai rảnh không? (Thể thông thường)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/20.10.mp3" },

           // ==================== LESSON 21 ==================== 21-9a, 21-9b void
        { "lesson": 21, "id": "21-1a", "text": "<ruby>今朝<rt>けさ</rt></ruby>/テストの<ruby>前<rt>まえ</rt></ruby>に、<ruby>担任<rt>たんにん</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>は <ruby>何<rt>なん</rt></ruby>と <ruby>言<rt>い</rt></ruby>いましたか。", "viText": "Sáng nay / trước khi kiểm tra, thầy cô chủ nhiệm đã nói gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.1a.mp3" },
        { "lesson": 21, "id": "21-1b", "text": "<ruby>今朝<rt>けさ</rt></ruby>/テストの<ruby>前<rt>まえ</rt></ruby>に、<ruby>担任<rt>たんにん</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>は <ruby>何<rt>なん</rt></ruby>と <ruby>言<rt>い</rt></ruby>いましたか。", "viText": "Sáng nay / trước khi kiểm tra, thầy cô chủ nhiệm đã nói gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.1b.mp3" },
        { "lesson": 21, "id": "21-2", "text": "<ruby>日本人<rt>にほんじん</rt></ruby>と<ruby>話<rt>はな</rt></ruby>しています。<ruby>日本語<rt>にほんご</rt></ruby>がわかりません。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いましたか。", "viText": "Bạn đang nói chuyện với người Nhật và không hiểu tiếng Nhật. Bạn sẽ nói thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.2.mp3" },
        { "lesson": 21, "id": "21-3", "text": "<ruby>日本人<rt>にほんじん</rt></ruby>と<ruby>話<rt>はな</rt></ruby>しています。<ruby>声<rt>こえ</rt></ruby>が<ruby>小<rt>ちい</rt></ruby>さいです。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いましたか。", "viText": "Bạn đang nói chuyện với người Nhật nhưng giọng họ nhỏ quá. Bạn sẽ nói thế nào", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.3.mp3" },
        { "lesson": 21, "id": "21-4a", "text": "「よく<ruby>聞<rt>き</rt></ruby>いてください/これを<ruby>見<rt>み</rt></ruby>てください/・・・。」 <ruby>今<rt>いま</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いましたか。", "viText": " 'Hãy nghe kỹ / hãy nhìn cái này....' Vừa rồi tôi đã nói câu gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.4a.mp3" },
        { "lesson": 21, "id": "21-4b", "text": "「よく<ruby>聞<rt>き</rt></ruby>いてください/これを<ruby>見<rt>み</rt></ruby>てください/・・・。」 <ruby>今<rt>いま</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いましたか。", "viText": " 'Hãy nghe kỹ / hãy nhìn cái này....' Vừa rồi tôi đã nói câu gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.4b.mp3" },
        { "lesson": 21, "id": "21-5", "text": "<ruby>日本語<rt>にほんご</rt></ruby>は<ruby>簡単<rt>かんたん</rt></ruby>でしょう？", "viText": "Tiếng Nhật đơn giản đúng không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.5.mp3" },
        { "lesson": 21, "id": "21-6a", "text": "<ruby>今日<rt>きょう</rt></ruby>は <ruby>暑<rt>あつ</rt></ruby>いですね/いい<ruby>天気<rt>てんき</rt></ruby>ですね/<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っていますね。 <ruby>明日<rt>あした</rt></ruby>も〜と<ruby>思<rt>おも</rt></ruby>いますか。", "viText": "Hôm nay trời nóng/đẹp/mưa nhỉ. Bạn nghĩ mai cũng thế chứ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.6a.mp3" },
        { "lesson": 21, "id": "21-6b", "text": "<ruby>今日<rt>きょう</rt></ruby>は <ruby>暑<rt>あつ</rt></ruby>いですね/いい<ruby>天気<rt>てんき</rt></ruby>ですね/<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っていますね。 <ruby>明日<rt>あした</rt></ruby>も〜と<ruby>思<rt>おも</rt></ruby>いますか。", "viText": "Hôm nay trời nóng/đẹp/mưa nhỉ. Bạn nghĩ mai cũng thế chứ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.6b.mp3" },
        { "lesson": 21, "id": "21-7a", "text": "<ruby>今<rt>いま</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>ですか。あなたのお<ruby>父<rt>とう</rt></ruby>さん/お<ruby>母<rt>かあ</rt></ruby>さんは<ruby>今<rt>いま</rt></ruby><ruby>何<rt>なに</rt></ruby>をしていると<ruby>思<rt>おも</rt></ruby>いますか。", "viText": "Bây giờ là mấy giờ? Bạn nghĩ bố / mẹ của bạn 〇〇 đang làm gì ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.7a.mp3" },
        { "lesson": 21, "id": "21-7b", "text": "<ruby>今<rt>いま</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>ですか。あなたのお<ruby>父<rt>とう</rt></ruby>さん/お<ruby>母<rt>かあ</rt></ruby>さんは<ruby>今<rt>いま</rt></ruby><ruby>何<rt>なに</rt></ruby>をしていると<ruby>思<rt>おも</rt></ruby>いますか。", "viText": "Bây giờ là mấy giờ? Bạn nghĩ bố / mẹ của bạn 〇〇 đang làm gì ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.7b.mp3" },
        { "lesson": 21, "id": "21-8", "text": "あなたの<ruby>大学<rt>だいがく</rt></ruby>/あなたの<ruby>短大<rt>たんだい</rt></ruby>についてどう<ruby>思<rt>おも</rt></ruby>いますか。", "viText": "Bạn nghĩ thế nào về trường Đại học / Cao đẳng 〇〇 của mình?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.8.mp3" },
        { "lesson": 21, "id": "21-9", "text": "あなたの<ruby>友達<rt>ともだち</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>ですか。 その<ruby>友達<rt>ともだち</rt></ruby>について、どう<ruby>思<rt>おも</rt></ruby>いますか。（2つ<ruby>以上<rt>いじょう</rt></ruby> 「〜くて、〜で」）", "viText": "Bạn thân của bạn là ai? Bạn nghĩ thế nào về người bạn đó? *Đưa ra từ 2 nhận xét trở lên nối đuôi tính từ dạng thể Te.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.9.mp3" },
        { "lesson": 21, "id": "21-10", "text": "のどが<ruby>乾<rt>かわ</rt></ruby>いたでしょう？/おなかが<ruby>空<rt>す</rt></ruby>いたでしょう？<br>※はい、<ruby>空<rt>す</rt></ruby>きました。いいえ、<ruby>空<rt>す</rt></ruby>いていません。<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。など", "viText": "Chắc là bạn đang khát nước / đói bụng rồi đúng không? *Mẫu trả lời: Vâng tôi đói rồi / Hoặc Không tôi không đói, tôi vẫn ổn...", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.10.mp3" },

        // ==================== LESSON 22 ====================
        { "lesson": 22, "id": "22-1", "text": "どんな<ruby>人<rt>ひと</rt></ruby>が <ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>になりますか。<ruby>勉強<rt>べんきょう</rt></ruby>する<ruby>人<rt>ひと</rt></ruby>ですか。 しない<ruby>人<rt>ひと</rt></ruby>ですか。", "viText": "Người như thế nào thì sẽ giỏi tiếng Nhật? Người chăm học hay người không chăm học?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/22.1.mp3" },
        { "lesson": 22, "id": "22-2", "text": "パーティーをします。あなたはいつも<ruby>何<rt>なに</rt></ruby>をする<ruby>人<rt>ひと</rt></ruby>ですか。<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る<ruby>人<rt>ひと</rt></ruby>ですか。<ruby>皿<rt>さら</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>う<ruby>人<rt>ひと</rt></ruby>ですか。", "viText": "Khi tổ chức tiệc, bạn thường là người làm việc gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/22.2.mp3" },
        { "lesson": 22, "id": "22-3", "text": "ITMセンターは<ruby>何<rt>なに</rt></ruby>をするところですか。<br>※〜するところです/〜てはいけないところです など", "viText": "Trung tâm ITM là nơi như thế nào? *Trả lời: Là nơi dùng để... / Là nơi không được phép làm...", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/22.3.mp3" },
        { "lesson": 22, "id": "22-4", "text": "あなたの<ruby>会社<rt>かいしゃ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をする<ruby>会社<rt>かいしゃ</rt></ruby>ですか。<br>※<ruby>車<rt>くるま</rt></ruby>の<ruby>部品<rt>ぶひん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る会社です/ブタを<ruby>育<rt>そだ</rt></ruby>てる会社です/ビルをつくる<ruby>会社<rt>かいしゃ</rt></ruby>ですなど", "viText": "Công ty của bạn làm về cái gì? *Ví dụ: Là công ty sản xuất linh kiện ô tô / công ty chăn nuôi lợn / công ty xây dựng tòa nhà...", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/22.4.mp3" },
        { "lesson": 22, "id": "22-5", "text": "ロボットをもらいます。 どんなロボットがほしいですか。", "viText": "Nếu được tặng robot, bạn muốn robot như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/22.5.mp3" },
        { "lesson": 22, "id": "22-6", "text": "<ruby>帽子<rt>ぼうし</rt></ruby>をかぶっている人/スーツを<ruby>着<rt>き</rt></ruby>ている人/〜ている <ruby>人<rt>ひと</rt></ruby>はだれですか。<br>※あなたです。", "viText": "Người đang (hành động) là ai vậy? *Trả lời: Là bạn 〇〇 ạ.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/22.6.mp3" },
        { "lesson": 22, "id": "22-7", "text": "<ruby>名前<rt>なまえ</rt></ruby>がわかりません。<ruby>私<rt>わたし</rt></ruby>に<ruby>聞<rt>き</rt></ruby>いてください。<br>（<ruby>服装<rt>ふくそう</rt></ruby>を<ruby>見<rt>み</rt></ruby>て）「〜ている<ruby>人<rt>ひと</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>ですか。」で<ruby>質問<rt>しつもん</rt></ruby>する", "viText": "Bạn không biết tên. Hãy hỏi tôi đi. *Yêu cầu học sinh dùng mẫu định ngữ mô tả trang phục quần áo đang mặc để hỏi: Người đang mặc... là ai?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/22.7.mp3" },
        { "lesson": 22, "id": "22-8", "text": "<ruby>佐藤<rt>さとう</rt></ruby>さんはどの<ruby>人<rt>ひと</rt></ruby>ですか。<br>※<ruby>回答<rt>かいとう</rt></ruby> 〜ている<ruby>人<rt>ひと</rt></ruby>です。", "viText": "Anh/Chị Sato là người nào? *Mẫu trả lời: Là người đang thực hiện hành động cụ thể.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/22.8.mp3", "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/22.8.jpg" },
        { "lesson": 22, "id": "22-9", "text": "どの<ruby>人<rt>ひと</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。<br>※〜ている<ruby>人<rt>ひと</rt></ruby>が<ruby>好<rt>す</rt></ruby>きです", "viText": "Trong số những người này, bạn thích người nào? *Mẫu trả lời định ngữ: Tôi thích người đang làm việc gì đó.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/22.9.mp3", "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/22.9.jpg"  },
        { "lesson": 22, "id": "22-10", "text": "この<ruby>人<rt>ひと</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をした<ruby>人<rt>ひと</rt></ruby>ですか。", "viText": "Người này là người đã làm những gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/22.10.mp3","imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/22.10.jpg"},

        // ==================== LESSON 23 ==================== ここから
        { "lesson": 23, "id": "23-1", "text": "<ruby>時間<rt>じかん</rt></ruby>に<ruby>遅<rt>おく</rt></ruby>れたとき、<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。", "viText": "Khi đến muộn, bạn nói gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.1.mp3" },
        { "lesson": 23, "id": "23-2a", "text": "いつ 「おやすみなさい」/「いただきます」/「いってきます」/「ただいま」 と<ruby>言<rt>い</rt></ruby>いますか。<br>※〜とき、<ruby>言<rt>い</rt></ruby>います。", "viText": "Bạn nói câu Chúc ngủ ngon / Xin phép dùng bữa / Tôi đi đây / Tôi đã về rồi khi nào? *Mẫu trả lời cấu trúc: Khi... thì tôi nói câu đó.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.2a.mp3" },
        { "lesson": 23, "id": "23-2b", "text": "いつ 「おやすみなさい」/「いただきます」/「いってきます」/「ただいま」 と<ruby>言<rt>い</rt></ruby>いますか。<br>※〜とき、<ruby>言<rt>い</rt></ruby>います。", "viText": "Bạn nói câu Chúc ngủ ngon / Xin phép dùng bữa / Tôi đi đây / Tôi đã về rồi khi nào? *Mẫu trả lời cấu trúc: Khi... thì tôi nói câu đó.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.2b.mp3" },
        { "lesson": 23, "id": "23-3", "text": "どんなとき「<ruby>失礼<rt>しつれい</rt></ruby>します」と<ruby>言<rt>い</rt></ruby>いますか。", "viText": "Khi nào thì nói 'Shitsurei shimasu' (Tôi xin phép)?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.3.mp3" },
        { "lesson": 23, "id": "23-4a", "text": "どんなとき「よろしくお<ruby>願<rt>ねが</rt></ruby>いします」と<ruby>言<rt>い</rt></ruby>いますか/<ruby>自己紹介<rt>じこしょうかい</rt></ruby>をしますか。", "viText": "Khi nào thì nói 'Yoroshiku...' / giới thiệu bản thân?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.4a.mp3" },
        { "lesson": 23, "id": "23-4b", "text": "どんなとき「よろしくお<ruby>願<rt>ねが</rt></ruby>いします」と<ruby>言<rt>い</rt></ruby>いますか/<ruby>自己紹介<rt>じこしょうかい</rt></ruby>をしますか。", "viText": "Khi nào thì nói 'Yoroshiku...' / giới thiệu bản thân?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.4b.mp3" },
        { "lesson": 23, "id": "23-5", "text": "<ruby>何<rt>なに</rt></ruby>をしている<ruby>時<rt>とき</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>楽<rt>たの</rt></ruby>しいですか。", "viText": "Bạn vui nhất là khi đang làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.5.mp3" },
        { "lesson": 23, "id": "23-6", "text": "（エアコンのリモコンを<ruby>見<rt>み</rt></ruby>せながら） <ruby>暑<rt>あつ</rt></ruby>いですね/ <ruby>消<rt>け</rt></ruby>したいです  どうしますか。<br>リモコンの<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。<br>※〜を・・と、いいですよ/<ruby>涼<rt>すず</rt></ruby>しくなります。", "viText": "(Cầm điều khiển) Trời nóng/muốn tắt điều hòa thì làm thế nào? <br>Hãy chỉ cho tôi cách sử dụng điều khiển từ xa. <br>*Gợi ý cấu trúc: Nếu nhấn/vặn cái này thì sẽ mát lên đấy.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.6.mp3" },
        { "lesson": 23, "id": "23-7", "text": "（<ruby>学生<rt>がくせい</rt></ruby>のスマホを<ruby>見<rt>み</rt></ruby>ながら） どうすると、ケータイで<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く ことができますか。<ruby>教<rt>おし</rt></ruby>えてください。", "viText": "(Nhìn điện thoại học sinh) Phải làm sao để nghe nhạc?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.7.mp3" },
        { "lesson": 23, "id": "23-8", "text": "<ruby>私<rt>わたし</rt></ruby>はベトナムを<ruby>旅行<rt>りょこう</rt></ruby>したいです。<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べるといいですか。<ruby>教<rt>おし</rt></ruby>えてください。<br>※〜を〜といいです。", "viText": "Tôi muốn du lịch Việt Nam. Nên ăn món gì thì tốt? Hãy chỉ cho tôi? *Mẫu khuyên bảo đuôi '~ to ii desu'.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.8.mp3" },
        { "lesson": 23, "id": "23-9", "text": "<ruby>病気<rt>びょうき</rt></ruby>の<ruby>時<rt>とき</rt></ruby>/<ruby>元気<rt>げんき</rt></ruby>がない<ruby>時<rt>とき</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べるといいですか。<ruby>教<rt>おし</rt></ruby>えてください。<br>※〜を〜といいです。", "viText": "Khi bị ốm/mệt, nên ăn gì thì tốt? Hãy chỉ cho tôi? *Dùng đuôi khuyên bảo '~ to ii desu'.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.9.mp3" },
        { "lesson": 23, "id": "23-10", "text": "あなたは<ruby>誰<rt>だれ</rt></ruby>と<ruby>話<rt>はな</rt></ruby>すと、<ruby>楽<rt>たの</rt></ruby>しいですか。<br>※〜さんと<ruby>話<rt>はな</rt></ruby>すと<ruby>楽<rt>たの</rt></ruby>しいです。", "viText": "Bạn nói chuyện với ai thì thấy vui? *Mẫu điều kiện: Cứ hễ nói chuyện với... thì thấy vui.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.10.mp3" },

        // ==================== LESSON 24 ====================
        { "lesson": 24, "id": "24-1", "text": "いつも<ruby>誰<rt>だれ</rt></ruby>に<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてもらいますか。<br>※〜に<ruby>教<rt>おし</rt></ruby>えてもらいます。", "viText": "Bạn thường được ai dạy tiếng Nhật cho? *Mẫu hành động nhận lợi ích đuôi '~ ni oshiete moraimasu'.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.1.mp3" },
        { "lesson": 24, "id": "24-2", "text": "<ruby>子<rt>こ</rt></ruby>どもの<ruby>時<rt>とき</rt></ruby>、<ruby>誰<rt>だれ</rt></ruby>がごはんを<ruby>作<rt>つく</rt></ruby>って/いっしょに<ruby>遊<rt>あそ</rt></ruby>んでくれましたか。<br>※〜が〜てくれました。", "viText": "Hồi nhỏ, ai nấu cơm/chơi đùa cùng bạn? *Mẫu ai đó làm điều tốt cho mình đuôi '~ ga ~ te kuremashita'.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.2.mp3" },
        { "lesson": 24, "id": "24-3", "text": "〇〇さんが<ruby>病気<rt>びょうき</rt></ruby>のとき、<ruby>誰<rt>だれ</rt></ruby>が<ruby>何<rt>なに</rt></ruby>をしてくれましたか？", "viText": "Khi bạn bị ốm, bạn được ai làm gì cho?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.3.mp3" },
        { "lesson": 24, "id": "24-4", "text": "<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>く<ruby>前<rt>まえ</rt></ruby>に、<ruby>誰<rt>だれ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をしてもらいたい？", "viText": "Trước khi đi Nhật, bạn muốn ai làm gì cho bạn?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.4.mp3" },
        { "lesson": 24, "id": "24-5", "text": "<ruby>将来<rt>しょうらい</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>/<ruby>恋人<rt>こいびと</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をしてあげたい？", "viText": "(Tương lai) Bạn muốn làm gì cho gia đình/người yêu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.5.mp3" },
        { "lesson": 24, "id": "24-6", "text": "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>が <ruby>傘<rt>かさ</rt></ruby>を <ruby>貸<rt>か</rt></ruby>してくれました。お<ruby>礼<rt>れい</rt></ruby>を<ruby>言<rt>い</rt></ruby>って<ruby>返<rt>かえ</rt></ruby>してください。<br>※<ruby>傘<rt>かさ</rt></ruby>を<ruby>貸<rt>か</rt></ruby>してくれてありがとう。", "viText": "Hôm qua, 1 người bạn đã cho bạn mượn ô. Hãy nói lời cảm ơn đi.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.6.mp3" },
        { "lesson": 24, "id": "24-7", "text": "<ruby>誰<rt>だれ</rt></ruby>かにお<ruby>礼<rt>れい</rt></ruby>を<ruby>言<rt>い</rt></ruby>ってください。<br>※あなた、〜くれてありがとう。", "viText": "Hãy nói lời cảm ơn đến ai đó. *Mẫu câu: Bạn 〇〇, cảm ơn vì đã làm việc gì cho mình.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.7.mp3" },
        { "lesson": 24, "id": "24-8", "text": "<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてもらいたいです。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>※〜くれませんか/もらえませんか  「〜ください」→<ruby>他<rt>ほか</rt></ruby>の<ruby>言<rt>い</rt></ruby>い<ruby>方<rt>かた</rt></ruby>で", "viText": "Bạn muốn nhờ chỉ cách đọc chữ Hán. Bạn sẽ nói như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.8.mp3" },
        { "lesson": 24, "id": "24-9a", "text": "<ruby>友達<rt>ともだち</rt></ruby>に、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>って/ <ruby>部屋<rt>へや</rt></ruby>を<ruby>掃除<rt>そうじ</rt></ruby>して/<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>って/もらいたいとき、<ruby>何<rt>なん</rt></ruby>て<ruby>言<rt>い</rt></ruby>う？", "viText": "Bạn muốn nhờ bạn chụp ảnh/dọn phòng/nấu ăn, bạn sẽ nói như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.9a.mp3" },
        { "lesson": 24, "id": "24-9b", "text": "<ruby>友達<rt>ともだち</rt></ruby>に、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>って/ <ruby>部屋<rt>へや</rt></ruby>を<ruby>掃除<rt>そうじ</rt></ruby>して/<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>って/もらいたいとき、<ruby>何<rt>なん</rt></ruby>て<ruby>言<rt>い</rt></ruby>う？", "viText": "Bạn muốn nhờ bạn chụp ảnh/dọn phòng/nấu ăn, bạn sẽ nói như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.9b.mp3" },
        { "lesson": 24, "id": "24-10", "text": "どんなとき「ありがとう」って<ruby>言<rt>い</rt></ruby>う？<br>※〜もらったとき、<ruby>言<rt>い</rt></ruby>います。", "viText": "Khi nào thì bạn nói 'cảm ơn'? *Mẫu trả lời: Nói câu đó những khi nhận được sự giúp đỡ.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.10.mp3" },

        // ==================== LESSON 25 ====================
        { "lesson": 25, "id": "25-1a", "text": "いつ<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きますか。<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったら、どんな<ruby>仕事<rt>しごと</rt></ruby>をしますか。<br>※<ruby>行<rt>い</rt></ruby>かない<ruby>人<rt>ひと</rt></ruby>→ もし <ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>かないとしたら、どんな<ruby>仕事<rt>しごと</rt></ruby>をしたいですか/<ruby>何<rt>なに</rt></ruby>をしたいですか。", "viText": "Khi nào bạn đi Nhật? Sang Nhật bạn làm việc gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.1a.mp3" },
        { "lesson": 25, "id": "25-1b", "text": "もし<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったら、<ruby>何<rt>なに</rt></ruby>をしたいですか。<br>※<ruby>行<rt>い</rt></ruby>かない<ruby>人<rt>ひと</rt></ruby>→ もし <ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>かないとしたら、どんな<ruby>仕事<rt>しごと</rt></ruby>をしたいですか/<ruby>何<rt>なに</rt></ruby>をしたいですか。", "viText": "Khi nào bạn đi Nhật? Sang Nhật bạn làm việc gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.1b.mp3" },
        { "lesson": 25, "id": "25-2", "text": "（<ruby>日本<rt>にほん</rt></ruby>で） いくらお<ruby>給料<rt>きゅうりょう</rt></ruby>をもらったら、うれしいですか。<br>※〇〇<ruby>円<rt>えん</rt></ruby>/〇ドン もらったらうれしいです。", "viText": "(Ở Nhật) Nhận được lương bao nhiêu thì bạn thấy vui? *Dùng mẫu giả định '~ tara ureshii desu'.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.2.mp3" },
        { "lesson": 25, "id": "25-3a", "text": "<ruby>日本<rt>にほん</rt></ruby>でインターンシップが<ruby>終<rt>お</rt></ruby>わりました。ベトナムに<ruby>帰<rt>かえ</rt></ruby>ったら、まず<ruby>何<rt>なに</rt></ruby>をしますか。<br>※（ベトナムへ<ruby>帰<rt>かえ</rt></ruby>ったら）〜します。", "viText": "Sau khi hoàn thành thực tập tại Nhật và về Việt Nam, việc đầu tiên bạn làm là gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.3a.mp3" },
        { "lesson": 25, "id": "25-3b", "text": "<ruby>日本<rt>にほん</rt></ruby>で<ruby>実習<rt>じっしゅう</rt></ruby>が<ruby>終<rt>お</rt></ruby>わりました。ベトナムに<ruby>帰<rt>かえ</rt></ruby>ったら、まず<ruby>何<rt>なに</rt></ruby>をしますか。<br>※（ベトナムへ<ruby>帰<rt>かえ</rt></ruby>ったら）〜します。", "viText": "Sau khi hoàn thành thực tập tại Nhật và về Việt Nam, việc đầu tiên bạn làm là gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.3b.mp3" },
        { "lesson": 25, "id": "25-4a", "text": "<ruby>大学<rt>だいがく</rt></ruby>を<ruby>卒業<rt>そつぎょう</rt></ruby>したら、どんな<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>きたいですか。", "viText": "Sau khi tốt nghiệp đại học, bạn mong muốn được làm ở đâu / làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.4a.mp3" },
        { "lesson": 25, "id": "25-4b", "text": "<ruby>大学<rt>だいがく</rt></ruby>を<ruby>卒業<rt>そつぎょう</rt></ruby>したら、<ruby>何<rt>なに</rt></ruby>をしたいですか。", "viText": "Sau khi tốt nghiệp đại học, bạn mong muốn được làm ở đâu / làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.4b.mp3" },
        { "lesson": 25, "id": "25-5", "text": "<ruby>同<rt>おな</rt></ruby>じクラスに どんな<ruby>人<rt>ひと</rt></ruby>がいたら<ruby>楽<rt>たの</rt></ruby>しいと<ruby>思<rt>おも</rt></ruby>いますか。", "viText": "Trong lớp, nếu có người như thế nào thì lớp sẽ vui?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.5.mp3" },
        { "lesson": 25, "id": "25-6a", "text": "100<ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby>あったら、<ruby>何<rt>なに</rt></ruby>をする？", "viText": "Nếu có 100 vạn Yên bạn làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.6a.mp3" },
        { "lesson": 25, "id": "25-6b", "text": "ベトナムでいい<ruby>仕事<rt>しごと</rt></ruby>があっても、<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>く？", "viText": "Kể cả có việc tốt ở Việt Nam, bạn vẫn đi Nhật?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.6b.mp3" },
        { "lesson": 25, "id": "25-7a", "text": "<ruby>日本<rt>にほん</rt></ruby>で <ruby>仕事<rt>しごと</rt></ruby>が<ruby>大変<rt>たいへん</rt></ruby>だったら、ベトナムへ<ruby>帰<rt>かえ</rt></ruby>る？<br>※はい、〜たら、〜/いいえ、〜ても、〜", "viText": "Nếu sang Nhật công việc quá vất vả, bạn sẽ bỏ về Việt Nam hay nghỉ việc chứ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.7a.mp3" },
        { "lesson": 25, "id": "25-7b", "text": "<ruby>日本<rt>にほん</rt></ruby>で <ruby>仕事<rt>しごと</rt></ruby>が<ruby>大変<rt>たいへん</rt></ruby>だったら、すぐ<ruby>会社<rt>かいしゃ</rt></ruby>をやめる？<br>※はい、〜たら、〜/いいえ、〜ても、〜", "viText": "Nếu sang Nhật công việc quá vất vả, bạn sẽ bỏ về Việt Nam hay nghỉ việc chứ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.7b.mp3" },
        { "lesson": 25, "id": "25-8", "text": "60<ruby>歳<rt>さい</rt></ruby>になっても <ruby>働<rt>はたら</rt></ruby>きたい？<br>※ ～たら、<ruby>働<rt>はたら</rt></ruby>きたくないです/～ても、<ruby>働<rt>はたら</rt></ruby>きたいです。", "viText": "Dù 60t bạn vẫn muốn làm chứ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.8.mp3" },
        { "lesson": 25, "id": "25-9", "text": "どうしたら、<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>になると<ruby>思<rt>おも</rt></ruby>う？", "viText": "Theo bạn làm thế nào để giỏi tiếng Nhật?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.9.mp3" },
        { "lesson": 25, "id": "25-10", "text": "〇〇さんは、<ruby>健康<rt>けんこう</rt></ruby>と<ruby>家族<rt>かぞく</rt></ruby>と<ruby>友達<rt>ともだち</rt></ruby>と、<ruby>何<rt>なに</rt></ruby>があったら<ruby>幸<rt>しあわ</rt></ruby>せ/うれしい？ どうして？", "viText": "Sức khỏe, gia đình, bạn bè, điều gì làm bạn hạnh phúc nhất?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.10.mp3" },

        // =============================================================================
// DATA-PART2: QUESTION DATA VARIABLE (qadata.js) Ver1.00b
// =============================================================================

    {
        "lesson": 26,
        "id": "26-1",
        "text": "<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>話<rt>はな</rt></ruby>し<ruby>方<rt>かた</rt></ruby>が<ruby>速<rt>はや</rt></ruby>い<ruby>時<rt>とき</rt></ruby>、<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>ったらいいですか。　（※「～ていただけませんか」と<ruby>言<rt>い</rt></ruby>います。）",
        "viText": "Nên nói gì khi người Nhật nói quá nhanh ? （※ Dùng mẫu NP 「～ていただけませんか」để trả lời ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.1.mp3"
    },
    {
        "lesson": 26,
        "id": "26-2",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>の<ruby>言<rt>い</rt></ruby>ったことが<ruby>良<rt>よ</rt></ruby>くわからない<ruby>時<rt>とき</rt></ruby>、<ruby>何<rt>なん</rt></ruby>と <ruby>言<rt>い</rt></ruby>ったらいいですか。　（※「～んですが、Vていただけませんか。」）",
        "viText": "Nên nói gì khi bạn không thực sự hiểu những gì giáo viên nói? （※ Dùng mẫu NP 「～んですが、Vていただけませんか。」để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.2.mp3"
    },
    {
        "lesson": 26,
        "id": "26-3",
        "text": "<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>がわかりませんでした。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>ったらいいですか。　（※　「もう<ruby>一度<rt>いちど</rt></ruby><ruby>名前<rt>なまえ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えていただけませんか。」）",
        "viText": "Nên nói gì khi nghe người Nhật giới thiệu tên nhưng vẫn chưa nghe ra ? （※Dùng câu「もう<ruby>一度<rt>いちど</rt></ruby><ruby>名前<rt>なまえ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えていただけませんか」để hỏi. Có nghĩa là : Bạn có thể nói lại tên mình 1 lần nữa được không）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.3.mp3"
    },
    {
        "lesson": 26,
        "id": "26-4",
        "text": "ごみの<ruby>捨<rt>す</rt></ruby>て<ruby>方<rt>かた</rt></ruby>がわかりません。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>ったらいいですか。　（※ 「ごみの<ruby>捨<rt>す</rt></ruby>て<ruby>方<rt>かた</rt></ruby>がわからないんですが、<ruby>教<rt>おし</rt></ruby>えていただけませんか。」/「どうやって<ruby>捨<rt>す</rt></ruby>てたらいいですか。」）",
        "viText": "Nên nói gì khi không biết cách vứt rác ở Nhật ? （※Dùng câu 「ごみの<ruby>捨<rt>す</rt></ruby>て<ruby>方<rt>かた</rt></ruby>がわからないんですが、<ruby>教<rt>おし</rt></ruby>えていただけませんか。」/「どうやって<ruby>捨<rt>す</rt></ruby>てたらいいですか。」để hỏi. Có nghĩa là  'Tôi không biết cách vứt rác, bạn có thể dạy tôi được không?'） / 'Tôi nên vứt nó đi như thế nào?' ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.4.mp3"
    },
    {
        "lesson": 26,
        "id": "26-5",
        "text": "　「これ、<ruby>読<rt>よ</rt></ruby>んで」 / 「○○」と<ruby>書<rt>か</rt></ruby>いて。　　　（※　「<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>/<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>がわからないんですが、<ruby>教<rt>おし</rt></ruby>えていただけませんか。」）",
        "viText": "Hãy đọc cái này/Hãy viết cái này. （※Trong trường hợp không đọc hoặc không viết được thì sẽ trả lời bằng câu 「「<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>/<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>がわからないんですが、<ruby>教<rt>おし</rt></ruby>えていただけませんか。」có nghĩa là : tôi không biết đọc, không biết viết như thế nào cho đúng. Hãy chỉ cho tôi với） ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.5.mp3"
    },
    {
        "lesson": 26,
        "id": "26-6",
        "text": "<ruby>授業中<rt>じゅぎょうちゅう</rt></ruby>、お<ruby>腹<rt>なか</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>くなりました。トイレに<ruby>行<rt>い</rt></ruby>きたいです。 <ruby>先生<rt>せんせい</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。（※「～んですが、～てもいいですか。」）",
        "viText": "Trong giờ học, giả sử bị đau dạ dày / cảm thấy không khỏe/ muốn đi vệ sinh/ muốn nghỉ ngơi một chút. Bạn sẽ nói gì với giáo viên? （※Dùng「～んですが、～てもいいですか。」 để xin phép）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.6.mp3"
    },
    {
        "lesson": 26,
        "id": "26-6a",
        "text": "<ruby>仕事中<rt>しごとちゅう</rt></ruby>、お<ruby>腹<rt>なか</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>くなりました。トイレに<ruby>行<rt>い</rt></ruby>きたいです。<ruby>上司<rt>じょうし</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。（※「～んですが、～てもいいですか。」）",
        "viText": "Trong quá trình làm việc, giả sử bị đau bụng/muốn đi vệ sinh. Bạn sẽ nói gì với sếp của mình? （※Dùng「～んですが、～てもいいですか。」 để xin phép）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.6a.mp3"
    },
    {
        "lesson": 26,
        "id": "26-6b",
        "text": "<ruby>仕事中<rt>しごとちゅう</rt></ruby>、<ruby>気分<rt>きぶん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くなりました。ちょっと<ruby>休<rt>やす</rt></ruby>みたいです。 <ruby>上司<rt>じょうし</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。（※「～んですが、～てもいいですか。」）",
        "viText": "Trong quá trình làm việc, giả sử cảm thấy không khỏe.Bạn muốn nghỉ ngơi. Bạn sẽ nói gì với sếp của mình? （※Dùng「～んですが、～てもいいですか。」 để xin phép）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.6b.mp3"
    },
    {
        "lesson": 26,
        "id": "26-7",
        "text": "<ruby>熱<rt>ねつ</rt></ruby>があります/とても<ruby>頭<rt>あたま</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>いです/とても<ruby>調子<rt>ちょうし</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>いです。　<ruby>早<rt>はや</rt></ruby>く<ruby>帰<rt>かえ</rt></ruby>りたいです。<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。（※「～んですが、～てもいいですか。」）",
        "viText": "Bị sốt / bị đau đầu dữ dội / cảm thấy rất không khỏe. Bạn muốn về nhà sớm. Bạn sẽ nói gì với giáo viên? （※Dùng「～んですが、～てもいいですか。」 để xin phép）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.7.mp3"
    },
    {
        "lesson": 26,
        "id": "26-8",
        "text": "アルバイトで、ひとつ<ruby>仕事<rt>しごと</rt></ruby>が<ruby>終<rt>お</rt></ruby>わりました。<ruby>次<rt>つぎ</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。　（※「<ruby>次<rt>つぎ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしたらいいですか。」）",
        "viText": "Trong lúc làm thêm bạn đã hoàn thành công việc được giao. Hãy hỏi xem công việc tiếp theo sẽ là gì . （※ Dùng câu「<ruby>次<rt>つぎ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしたらいいですか。」để hỏi. Có nghĩa là  'Tôi nên làm gì tiếp theo?'）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.8.mp3"
    },
    {
        "lesson": 26,
        "id": "26-9",
        "text": "となりの<ruby>人<rt>ひと</rt></ruby>が<ruby>元気<rt>げんき</rt></ruby>がありません。<ruby>何<rt>なん</rt></ruby>て<ruby>言<rt>い</rt></ruby>う？",
        "viText": "Thấy người bên cạnh bạn có vẻ không khỏe. Bạn sẽ nói gì? （※Dùng câu （「どうしたんですか。大丈夫ですか。」để hỏi thăm. Có nghĩa là  'Có chuyện gì vậy? Bạn không sao chứ?' ）)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.9.mp3"
    },
    {
        "lesson": 26,
        "id": "26-10",
        "text": "<ruby>日本<rt>にほん</rt></ruby>で<ruby>旅行<rt>りょこう</rt></ruby>したいです。どこがいいか<ruby>聞<rt>き</rt></ruby>いてください。　（※「～んですが、どこへ<ruby>行<rt>い</rt></ruby>ったらいいですか。」/「～を<ruby>教<rt>おし</rt></ruby>えていただけませんか。」）",
        "viText": "Bạn muốn đi du lịch ở Nhật Bản. Hỏi xem nên đi nơi nào thì tốt （※ Dùng câu「～んですが、どこへ<ruby>行<rt>い</rt></ruby>ったらいいですか。」/「～を<ruby>教<rt>おし</rt></ruby>えていただけませんか。」 để hỏi. ） ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.10.mp3"
    },
    {
        "lesson": 27,
        "id": "27-1",
        "text": "＜２<ruby>問<rt>もん</rt></ruby>＞<ruby>日本語<rt>にほんご</rt></ruby>の / <ruby>英語<rt>えいご</rt></ruby>の <ruby>歌<rt>うた</rt></ruby>が<ruby>歌<rt>うた</rt></ruby>えますか。<ruby>誰<rt>だれ</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>が<ruby>歌<rt>うた</rt></ruby>えますか。　（※（<ruby>歌手名<rt>かしゅめい</rt></ruby>）の（<ruby>曲名<rt>きょくめい</rt></ruby>）が<ruby>歌<rt>うた</rt></ruby>えます。）",
        "viText": "Bạn có thể hát các bài hát tiếng Nhật / tiếng Anh không? Bạn có thể hát bài hát của ai? （※ Dùng câu　「（tên ca sĩ）の　（tên bài hát）が<ruby>歌<rt>うた</rt></ruby>えます」　để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.1.mp3"
    },
    {
        "lesson": 27,
        "id": "27-2",
        "text": "<ruby>何<rt>なに</rt></ruby>かスポーツが<ruby>出来<rt>でき</rt></ruby>ますか。 どんなスポーツが<ruby>出来<rt>でき</rt></ruby>ますか。（※「～が<ruby>出来<rt>でき</rt></ruby>ます。」/「<ruby>得意<rt>とくい</rt></ruby>です。」） ",
        "viText": "Bạn có thể chơi môn thể thao nào đó không? Bạn có thể chơi môn thể thao nào?（※Dùng mẫu câu「～が<ruby>出来<rt>でき</rt></ruby>ます。」/「<ruby>得意<rt>とくい</rt></ruby>です。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.2.mp3"
    },
    {
        "lesson": 27,
        "id": "27-3a",
        "text": "<ruby>漢字<rt>かんじ</rt></ruby>が<ruby>読<rt>よ</rt></ruby>め/<ruby>書<rt>か</rt></ruby>けますか。（※「はい、～ます。」）",
        "viText": "Bạn có thể đọc/viết kanji không? （※Dùng mẫu câu「はい、できます。」 để trả lời nếu biết, Dùng mẫu câu「いいえ、できません。」 để trả lời nếu không biết ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.3a.mp3",
        "groupId": "group27-3a"
    },
    {
        "lesson": 27,
        "id": "27-3b",
        "text": "どれくらい<ruby>読<rt>よ</rt></ruby>め/<ruby>書<rt>か</rt></ruby>けますか。（※「〇くらい～ます。」）",
        "viText": "Bạn có thể đọc/viết khoảng bao nhiêu từ ? （※ Dùng mẫu câu「（số đếm）くらい～かきます・よみます。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.3b.mp3",
        "groupId": "group27-3a"
    },
    {
        "lesson": 27,
        "id": "27-4",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>はどれくらい<ruby>話<rt>はな</rt></ruby>せますか。（※「<ruby>少<rt>すこ</rt></ruby>し～ます。」/「<ruby>少<rt>すこ</rt></ruby>ししか～ません。」）",
        "viText": "Bạn có thể nói được tiếng Nhật khoảng chừng nào? （※Dùng mẫu câu「少し話せます。」/「<ruby>少<rt>すこ</rt></ruby>ししか<ruby>話<rt>はな</rt></ruby>せません。」 để trả lời. Nghĩa là : tôi có thể nói được chút ít）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.4.mp3"
    },
    {
        "lesson": 27,
        "id": "27-5",
        "text": "あなたが<ruby>出来<rt>でき</rt></ruby>ることを<ruby>教<rt>おし</rt></ruby>えてください。",
        "viText": "Nói cho tôi biết bạn có thể làm được gì ? ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.5.mp3"
    },
    {
        "lesson": 27,
        "id": "27-6",
        "text": "ITMセンターに<ruby>入<rt>はい</rt></ruby>って、<ruby>友達<rt>ともだち</rt></ruby>が<ruby>出来<rt>でき</rt></ruby>ました？（それは）<ruby>誰<rt>だれ</rt></ruby>？ （※「はい、～」）",
        "viText": "Kể từ khi vào đại học/cao đẳng, bạn đã có những người bạn mới chưa? Đó là ai?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.6.mp3"
    },
    {
        "lesson": 27,
        "id": "27-7a",
        "text": "<ruby>部屋<rt>へや</rt></ruby>の<ruby>窓<rt>まど</rt></ruby>から<ruby>何<rt>なに</rt></ruby>か<ruby>見<rt>み</rt></ruby>える？",
        "viText": "Bạn có thể nhìn thấy thứ gì đó từ cửa sổ phòng mình không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.7a.mp3"
    },
    {
        "lesson": 27,
        "id": "27-7b",
        "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>何<rt>なに</rt></ruby>か<ruby>聞<rt>き</rt></ruby>こえる？",
        "viText": "Bây giờ bạn có nghe thấy gì không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.7b.mp3"
    },
    {
        "lesson": 27,
        "id": "27-8",
        "text": "あなたのケータイで<ruby>何<rt>なに</rt></ruby>ができるの？",
        "viText": "Điện thoại thông minh có thể làm được gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.8.mp3"
    },
    {
        "lesson": 27,
        "id": "27-9",
        "text": "<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったら、<ruby>何<rt>なに</rt></ruby>が<ruby>出来<rt>でき</rt></ruby>ると<ruby>思<rt>おも</rt></ruby>う？",
        "viText": "Bạn nghĩ sau khi bạn đến Nhật,  bạn có thể làm gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.9.mp3"
    },
    {
        "lesson": 27,
        "id": "27-10",
        "text": "ホーチミンで<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>はどこ？ そこで<ruby>何<rt>なに</rt></ruby>ができる？",
        "viText": "Những địa điểm nổi tiếng ở Thành phố Hồ Chí Minh ở đâu? Có thể làm gì ở đó?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.10.mp3"
    },
    {
        "lesson": 28,
        "id": "28-1",
        "text": "<ruby>日本<rt>にほん</rt></ruby>の<ruby>交通<rt>こうつう</rt></ruby>ルールではスマホを<ruby>使<rt>つか</rt></ruby>いながら<ruby>自転車<rt>じてんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ってもいいですか。　（※「いいえ、～ながら～してはいけません。」）",
        "viText": "Theo quy tắc giao thông Nhật Bản, vừa đi xe đạp vừa sử dụng điện thoại thông minh có sao không?（※Dùng mẫu câu「いいえ、～ながら～してはいけません。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.1.mp3"
    },
    {
        "lesson": 28,
        "id": "28-2",
        "text": "<ruby>何<rt>なに</rt></ruby>をしながら<ruby>歩<rt>ある</rt></ruby>くと、<ruby>危<rt>あぶ</rt></ruby>ないですか/よくないですか。　（※「スマホを<ruby>使<rt>つか</rt></ruby>いながら/<ruby>電話<rt>でんわ</rt></ruby>しながら/タバコを<ruby>吸<rt>す</rt></ruby>いながら、<ruby>歩<rt>ある</rt></ruby>くとよくないです。」）",
        "viText": "Vừa đi bộ vừa làm gì thì sẽ nguy hiểm ? （※ Có thể trả lời các ý sau「スマホを<ruby>使<rt>つか</rt></ruby>いながら/<ruby>電話<rt>でんわ</rt></ruby>しながら/タバコを<ruby>吸<rt>す</rt></ruby>いながら、<ruby>歩<rt>ある</rt></ruby>くとよくないです。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.2.mp3"
    },
    {
        "lesson": 28,
        "id": "28-3",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>や<ruby>上司<rt>じょうし</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く<ruby>時<rt>とき</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしながら<ruby>聞<rt>き</rt></ruby>くといいですか。　（※「メモをしながら<ruby>聞<rt>き</rt></ruby>くといいです。」）",
        "viText": "Khi lắng nghe giáo viên hoặc sếp nói chuyện, bạn nên làm gì trong khi nghe?（※Dùng câu「メモをしながら<ruby>聞<rt>き</rt></ruby>くといいです。」 để trả lời. Có nghĩa là : sẽ thật tốt nếu vừa ngh e vừa ghi chép)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.3.mp3"
    },
    {
        "lesson": 28,
        "id": "28-4",
        "text": "<ruby>暇<rt>ひま</rt></ruby>な<ruby>時<rt>とき</rt></ruby>、いつも<ruby>何<rt>なに</rt></ruby>していますか。　（※「～ています。」）",
        "viText": "Bạn thường làm gì khi có thời gian rảnh? （※Dùng mẫu「～ています。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.4.mp3"
    },
    {
        "lesson": 28,
        "id": "28-5",
        "text": "いつも<ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きていますか。　（※「～ています。」）",
        "viText": "Bạn thường thức dậy lúc mấy giờ? （※Dùng mẫu「～ています。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.5.mp3"
    },
    {
        "lesson": 28,
        "id": "28-5a",
        "text": "いつもどうやって<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ていますか。　（※「～ています。」）",
        "viText": "Bạn đi học bằng phương tiện gì?（※Dùng mẫu「～ています。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.5a.mp3"
    },
    {
        "lesson": 28,
        "id": "28-5b",
        "text": "いつも<ruby>朝<rt>あさ</rt></ruby>ごはんに<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べていますか。　（※「～ています。」）",
        "viText": "Bạn thường ăn gì vào bữa sáng?（※Dùng mẫu「～ています。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.5b.mp3"
    },
    {
        "lesson": 28,
        "id": "28-6",
        "text": "<ruby>今<rt>いま</rt></ruby>、ベトナムで<ruby>人気<rt>にんき</rt></ruby>があるベトナム<ruby>人<rt>じん</rt></ruby>や<ruby>日本人<rt>にほんじん</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えて。その<ruby>人<rt>ひと</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしている<ruby>人<rt>ひと</rt></ruby>？　（※「〇〇さんです。」/「～です。」、「～をしています。」）",
        "viText": "Hãy cho tôi biết về những người Việt Nam hoặc Nhật Bản đang nổi tiếng ở Việt Nam hiện nay. Người đó đang làm gì? （※Dùng mẫu「〇〇さんです。」/「～です。」、「～をしています。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.6.mp3",
        "groupId": "group28-6"
    },
    {
        "lesson": 28,
        "id": "28-7",
        "text": "その<ruby>人<rt>ひと</rt></ruby>は、どうして<ruby>人気<rt>にんき</rt></ruby>があるの？　※（「その<ruby>人<rt>ひと</rt></ruby>は、〜し、〜し、それで、<ruby>人気<rt>にんき</rt></ruby>があります。」）",
        "viText": "Tại sao người đó lại nổi tiếng như vậy? ※（Dùng mẫu 「その<ruby>人<rt>ひと</rt></ruby>は、〜し、〜し、それで、<ruby>人気<rt>にんき</rt></ruby>があります。」 để trả lời ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.7.mp3",
        "groupId": "group28-6"
    },
    {
        "lesson": 28,
        "id": "28-8",
        "text": "あなたが、よくごはんを<ruby>食<rt>た</rt></ruby>べに<ruby>行<rt>い</rt></ruby>く<ruby>店<rt>みせ</rt></ruby>はどこ？　どうしてそこによく<ruby>行<rt>い</rt></ruby>くの？",
        "viText": "Quán mà bạn thường hay đi ăn là quán nào ? Sao bạn lại hay đến đó ăn ? ※（Dùng mẫu 「その<ruby>店<rt>みせ</rt></ruby>は、〜し、〜し、それで、よく行きます。」 để trả lời ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.8.mp3"
    },
    {
        "lesson": 28,
        "id": "28-9",
        "text": "<ruby>日本<rt>にほん</rt></ruby>のアニメで<ruby>何<rt>なに</rt></ruby>が<ruby>好<rt>す</rt></ruby>き？　どうしてそのアニメが<ruby>好<rt>す</rt></ruby>きなの？",
        "viText": "Bạn thích phim hoạt hình nào của Nhật ? Tại sao ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.9.mp3"
    },
    {
        "lesson": 28,
        "id": "28-10",
        "text": "あなたは<ruby>誰<rt>だれ</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby><ruby>好<rt>す</rt></ruby>き？　どうしてその<ruby>人<rt>ひと</rt></ruby>が<ruby>好<rt>す</rt></ruby>きなの？",
        "viText": "Bạn thích ai nhất? Tại sao ?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.10.mp3"
    },
    {
        "lesson": 29,
        "id": "29-1a",
        "text": "<ruby>今<rt>いま</rt></ruby>、ドアはどうですか。　（※「<ruby>開<rt>あ</rt></ruby>いています。/<ruby>閉<rt>し</rt></ruby>まっています。」）",
        "viText": "Cửa chính đang trong trạng thái gì vậy? （※Dùng mẫu「～ています。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.1a.mp3"
    },
    {
        "lesson": 29,
        "id": "29-1b",
        "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>窓<rt>まど</rt></ruby>は　どうですか。　（※「<ruby>開<rt>あ</rt></ruby>いています。/<ruby>閉<rt>し</rt></ruby>まっています。」）",
        "viText": "Cửa sổ đang trong trạng thái gì vậy ? （※Dùng mẫu「～ています。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.1b.mp3"
    },
    {
        "lesson": 29,
        "id": "29-2a",
        "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>電気<rt>でんき</rt></ruby>は/エアコンは　どうですか。（※「<ruby>付<rt>つ</rt></ruby>いています。/<ruby>消<rt>き</rt></ruby>えています。」）",
        "viText": "Điện/điều hòa đang trong trạng thái gì vậy ?  （※Dùng mẫu「～ています。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.2a.mp3"
    },
    {
        "lesson": 29,
        "id": "29-2b",
        "text": "<ruby>今<rt>いま</rt></ruby>、エアコンは　どうですか。（※「<ruby>付<rt>つ</rt></ruby>いています。/<ruby>消<rt>き</rt></ruby>えています。」）",
        "viText": "Điều hòa đang trong trạng thái gì vậy ? （※Dùng mẫu「～ています。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.2b.mp3"
    },
    {
        "lesson": 29,
        "id": "29-3",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>に<ruby>来<rt>く</rt></ruby>る<ruby>時<rt>とき</rt></ruby>、<ruby>道<rt>みち</rt></ruby>はどうですか。　※<ruby>混<rt>こ</rt></ruby>んでいます/<ruby>混<rt>こ</rt></ruby>んでいません/<ruby>空<rt>す</rt></ruby>いています",
        "viText": "Trên đường đến trường, đường phố như thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.3.mp3"
    },
    {
        "lesson": 29,
        "id": "29-4",
        "text": "この<ruby>車<rt>くるま</rt></ruby>を<ruby>説明<rt>せつめい</rt></ruby>してください。　（※２つ<ruby>説明<rt>せつめい</rt></ruby>する　「<ruby>汚<rt>きたな</rt></ruby>いです」でもOK。）",
        "viText": "Vui lòng mô tả chiếc xe này.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.4.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.4.jpg"
    },
    {
        "lesson": 29,
        "id": "29-5",
        "text": "コーヒーです。<ruby>取<rt>と</rt></ruby>り<ruby>替<rt>か</rt></ruby>えたいです。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。　（※「～ていますから、<ruby>取<rt>と</rt></ruby>りかえてください。」）",
        "viText": "Bạn muốn đổi cà phê. Bạn nên nói như thế nào? ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.5.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.5.jpg"
    },
    {
        "lesson": 29,
        "id": "29-6",
        "text": "28<ruby>課<rt>か</rt></ruby>のことばや<ruby>文法<rt>ぶんぽう</rt></ruby>は、もう<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>覚<rt>おぼ</rt></ruby>えた？　（※「はい、<ruby>覚<rt>おぼ</rt></ruby>えてしまいました。/<ruby>覚<rt>おぼ</rt></ruby>えました。」）",
        "viText": "Bạn đã ghi nhớ tất cả các từ vựng và ngữ pháp từ Bài 28 chưa?　(※ 'Vâng, tôi đã nhớ hết / Tôi đã nhớ.' ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.6.mp3"
    },
    {
        "lesson": 29,
        "id": "29-7",
        "text": "あなたは<ruby>今日<rt>きょう</rt></ruby>、<ruby>遅刻<rt>ちこく</rt></ruby>しました。「どうして<ruby>遅刻<rt>ちこく</rt></ruby>しましたか。」　（※「<ruby>寝坊<rt>ねぼう</rt></ruby>してしまいました。」/「<ruby>事故<rt>じこ</rt></ruby>で<ruby>遅<rt>おく</rt></ruby>れてしまいました。」など。）",
        "viText": "Giả sử hôm nay bạn đến muộn và được hỏi 'Tại sao bạn lại đến muộn?' thì bạn sẽ trả lời như thế nào ? ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.7.mp3"
    },
    {
        "lesson": 29,
        "id": "29-9",
        "text": "<ruby>他<rt>ほか</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>の<ruby>物<rt>もの</rt></ruby>を<ruby>壊<rt>こわ</rt></ruby>してしまいました。<ruby>謝<rt>あやま</rt></ruby>ってください。　（※「○○を<ruby>壊<rt>こわ</rt></ruby>してしまいました。」（<ruby>割<rt>わ</rt></ruby>る、<ruby>破<rt>やぶ</rt></ruby>る、<ruby>汚<rt>よご</rt></ruby>すなどもOK））",
        "viText": "Bạn làm hỏng đồ của người khác. Hãy gửi lời xin lỗi đến họ. （※Dùng mẫu 「～てしまいました、すみません」để nói）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.9.mp3"
    },
    {
        "lesson": 29,
        "id": "29-10",
        "text": "<ruby>仕事中<rt>しごとちゅう</rt></ruby>、<ruby>機械<rt>きかい</rt></ruby>が<ruby>止<rt>と</rt></ruby>まりました。<ruby>課長<rt>かちょう</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。　（※「<ruby>機械<rt>きかい</rt></ruby>が<ruby>止<rt>と</rt></ruby>まってしまいました。どうしたらいいですか。」）",
        "viText": "Trong quá trình làm việc, máy bị đột ngột dừng lại. Bạn sẽ nói gì với trưởng bộ phận?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.10.mp3"
    },
    {
        "lesson": 30,
        "id": "30-1",
        "text": "もう３１<ruby>課<rt>か</rt></ruby>の<ruby>予習<rt>よしゅう</rt></ruby>をしてある？",
        "viText": "Bạn đã chuẩn bị cho Bài 31 chưa?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.1.mp3"
    },
    {
        "lesson": 30,
        "id": "30-2a",
        "text": "この<ruby>教室<rt>きょうしつ</rt></ruby>/クラス/○○さんの<ruby>部屋<rt>へや</rt></ruby>の　<ruby>壁<rt>かべ</rt></ruby>/ホワイトボード/…に、<ruby>何<rt>なに</rt></ruby>がはってある？？",
        "viText": "Phòng học này/lớp học/tường trong phòng của bạn/bảng trắng có dán gì đó không ? ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.2a.mp3"
    },
    {
        "lesson": 30,
        "id": "30-3",
        "text": "あなたの<ruby>部屋<rt>へや</rt></ruby>には、<ruby>何<rt>なに</rt></ruby>か<ruby>掛<rt>か</rt></ruby>けたり、<ruby>貼<rt>は</rt></ruby>ったりしてある？　（※「はい、～が<ruby>貼<rt>は</rt></ruby>ってあります。」/「いいえ、<ruby>何<rt>なに</rt></ruby>も<ruby>掛<rt>か</rt></ruby>けてありません。」）",
        "viText": "Bạn có treo hoặc dán cái gì đó trong phòng của bạn không?（※「はい、～が<ruby>貼<rt>は</rt></ruby>ってあります。（Có, tôi có dán ... 」/「いいえ、何も<ruby>掛<rt>か</rt></ruby>けてありません。（Không, tôi không treo gì hết）」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.3.mp3"
    },
    {
        "lesson": 30,
        "id": "30-4",
        "text": "この<ruby>紙<rt>かみ</rt></ruby>に<ruby>何<rt>なん</rt></ruby>て<ruby>書<rt>か</rt></ruby>いてありますか。　（※「～と<ruby>書<rt>か</rt></ruby>いてあります。」）",
        "viText": "Trên tờ giấy này viết cái gì vậy ? （※Dùng mẫu câu「～と<ruby>書<rt>か</rt></ruby>いてあります。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.4.mp3"
    },
    {
        "lesson": 30,
        "id": "30-5",
        "text": "あなたはもうパスポートを<ruby>作<rt>つく</rt></ruby>ってありますか。　どこにしまってありますか。/おいてありますか。（※「はい、<ruby>作<rt>つく</rt></ruby>ってあります。」、「いいえ、まだです。まだ<ruby>作<rt>つく</rt></ruby>っていません。/<ruby>作<rt>つく</rt></ruby>ってありません。」）",
        "viText": "Bạn đã làm hộ chiếu chưa? Nó được lưu trữ ở đâu? /Nó có sẵn không?（※「はい、<ruby>作<rt>つく</rt></ruby>ってあります。（Vâng, tôi đã làm rồi）」、「いいえ、まだです。まだ<ruby>作<rt>つく</rt></ruby>っていません。（Chưa, tôi chưa làm）/作ってありません。（Chưa, chưa có sẵn）」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.5.mp3"
    },
    {
        "lesson": 30,
        "id": "30-6",
        "text": "<ruby>会話<rt>かいわ</rt></ruby><ruby>反応<rt>はんのう</rt></ruby>チェック/テストの<ruby>前<rt>まえ</rt></ruby>に<ruby>練習<rt>れんしゅう</rt></ruby>しておいた？　（※「はい、<ruby>練習<rt>れんしゅう</rt></ruby>しておきました。」）",
        "viText": "Bạn đã luyện tập trước khi kiểm tra tổng/kiểm tra phản hồi hội thoại chưa? （※「はい、<ruby>練習<rt>れんしゅう</rt></ruby>しておきました。」（Vâng tôi đã luyện tập rồi）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.6.mp3"
    },
    {
        "lesson": 30,
        "id": "30-7",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>のクラスに<ruby>入<rt>はい</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に ひらがな / <ruby>日本語<rt>にほんご</rt></ruby> を<ruby>覚<rt>おぼ</rt></ruby>えておいた？",
        "viText": "Bạn đã ghi nhớ hiragana / tiếng Nhật trước khi tham gia lớp học tiếng Nhật chưa",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.7.mp3"
    },
    {
        "lesson": 30,
        "id": "30-8",
        "text": "いつ<ruby>卒業<rt>そつぎょう</rt></ruby>しますか。　<ruby>卒業<rt>そつぎょう</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>をしておきたいですか。",
        "viText": "Khi nào bạn sẽ tốt nghiệp? Bạn muốn làm gì trước khi tốt nghiệp?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.8.mp3"
    },
    {
        "lesson": 30,
        "id": "30-9",
        "text": "<ruby>日本<rt>にほん</rt></ruby>へ<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。<ruby>旅行<rt>りょこう</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>をしておきますか。",
        "viText": "Bạn sẽ đi du lịch Nhật Bản. Bạn nên làm gì trước chuyến đi của mình?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.9.mp3"
    },
    {
        "lesson": 30,
        "id": "30-10",
        "text": "<ruby>日本<rt>にほん</rt></ruby>へ<ruby>働<rt>はたら</rt></ruby>きに<ruby>行<rt>い</rt></ruby>きます。 <ruby>行<rt>い</rt></ruby>く<ruby>前<rt>まえ</rt></ruby>に、どれくらい<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>しておいたらいいと<ruby>思<rt>おも</rt></ruby>いますか。（※「〇<ruby>課<rt>か</rt></ruby>まで<ruby>勉強<rt>べんきょう</rt></ruby>して/N5・４を<ruby>取<rt>と</rt></ruby>って　おいたら/おくと　いいと<ruby>思<rt>おも</rt></ruby>います。」）",
        "viText": "Bạn sẽ đến Nhật Bản để làm việc. Bạn nghĩ mình nên học bao nhiêu tiếng Nhật trước khi đi? ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.10.mp3"
    },
    {
        "lesson": 31,
        "id": "31-1",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>を<ruby>卒業<rt>そつぎょう</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>はいつですか？※○○に<ruby>卒業<rt>そつぎょう</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>です。",
        "viText": "Dự kiến tốt nghiệp của bạn là khi nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.1.mp3"
    },
    {
        "lesson": 31,
        "id": "31-2",
        "text": "<ruby>卒業<rt>そつぎょう</rt></ruby>したら、<ruby>何<rt>なに</rt></ruby>をする<ruby>予定<rt>よてい</rt></ruby>/つもりですか？",
        "viText": "Bạn dự định làm gì sau khi tốt nghiệp?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.2.mp3",
        "groupId": "group31-2"
    },
    {
        "lesson": 31,
        "id": "31-3a",
        "text": "どのぐらい<ruby>日本<rt>にほん</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>こうと<ruby>思<rt>おも</rt></ruby>っていますか。 <ruby>他<rt>ほか</rt></ruby>の<ruby>説明<rt>せつめい</rt></ruby>：<ruby>日本<rt>にほん</rt></ruby>に<ruby>行<rt>い</rt></ruby>こうと<ruby>思<rt>おも</rt></ruby>っていますか。",
        "viText": "Bạn dự định làm việc tại Nhật Bản trong bao lâu?（Nếu câu trả lời không liên quan đến việc làm việc ở Nhật thì sẽ đổi thành câu hỏi 'Bạn có dự định đi Nhật không?'）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.3a.mp3",
        "groupId": "group31-2"

    },
    {
        "lesson": 31,
        "id": "31-3b",
        "text": "<ruby>日本<rt>にほん</rt></ruby>に<ruby>行<rt>い</rt></ruby>こうと<ruby>思<rt>おも</rt></ruby>っていますか。",
        "viText": "（Nếu câu trả lời không liên quan đến việc làm việc ở Nhật thì sẽ đổi thành câu hỏi 'Bạn có dự định đi Nhật không?'）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.3b.mp3",
        "groupId": "group31-2"
    },
    {
        "lesson": 31,
        "id": "31-4",
        "text": "JLPTはN1まで<ruby>受<rt>う</rt></ruby>けようと<ruby>思<rt>おも</rt></ruby>っていますか。　（※「はい、<ruby>受<rt>う</rt></ruby>けようと<ruby>思<rt>おも</rt></ruby>っています。」/「いいえ、N2まで<ruby>受<rt>う</rt></ruby>けようと<ruby>思<rt>おも</rt></ruby>っています。」）",
        "viText": "Bạn có dự định thi JLPT lên N1 không? （※「はい、受けようと<ruby>思<rt>おも</rt></ruby>っています。」（Có, tôi dự định sẽ thi lên N1）/「いいえ、<ruby>受<rt>う</rt></ruby>けようと<ruby>思<rt>おも</rt></ruby>っています。（Không, tôi chỉ tính thi đến N2 thôi）」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.4.mp3"
    },
    {
        "lesson": 31,
        "id": "31-5",
        "text": "もし、<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったら、<ruby>何<rt>なに</rt></ruby>しようと<ruby>思<rt>おも</rt></ruby>っていますか。",
        "viText": "Nếu bạn đến Nhật Bản, bạn dự định sẽ làm gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.5.mp3",
        "groupId": "group31-2"
    },
    {
        "lesson": 31,
        "id": "31-6",
        "text": "この<ruby>試験<rt>しけん</rt></ruby>の<ruby>後<rt>あと</rt></ruby>、<ruby>何<rt>なに</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>？",
        "viText": "Bạn dự định làm gì sau kỳ thi này?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.6.mp3"
    },
    {
        "lesson": 31,
        "id": "31-7",
        "text": "<ruby>次<rt>つぎ</rt></ruby>の<ruby>休<rt>やす</rt></ruby>みは<ruby>何<rt>なに</rt></ruby>しようと<ruby>思<rt>おも</rt></ruby>ってる？",
        "viText": "Bạn dự định làm gì vào ngày nghỉ tới?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.7.mp3"
    },
    {
        "lesson": 31,
        "id": "31-8",
        "text": "もうN4は<ruby>合格<rt>ごうかく</rt></ruby>した？　（※「はい、<ruby>合格<rt>ごうかく</rt></ruby>しました。」/「いいえ、まだ<ruby>合格<rt>ごうかく</rt></ruby>していません。」）",
        "viText": "Bạn đã đậu N4 chưa?（※「はい、<ruby>合格<rt>ごうかく</rt></ruby>しました。」（Vâng, tôi đã đậu N4）/「いいえ、まだ<ruby>合格<rt>ごうかく</rt></ruby>していません。」（Chưa, tôi chưa đậu N4））",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.8.mp3"
    },
    {
        "lesson": 31,
        "id": "31-9a",
        "text": "いつN3を<ruby>受<rt>う</rt></ruby>けるつもり？",
        "viText": "Khi nào bạn dự định thi N3?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.9a.mp3"
    },
    {
        "lesson": 31,
        "id": "31-9b",
        "text": "いつN3を<ruby>受<rt>う</rt></ruby>ける<ruby>予定<rt>よてい</rt></ruby>？",
        "viText": "Khi nào bạn dự định thi N3?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.9b.mp3"
    },
    {
        "lesson": 31,
        "id": "31-10",
        "text": "<ruby>将来<rt>しょうらい</rt></ruby>、どこに<ruby>住<rt>す</rt></ruby>むつもり？",
        "viText": "Bạn dự định sống ở đâu trong tương lai?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.10.mp3"
    },
    {
        "lesson": 32,
        "id": "32-1",
        "text": "のどが<ruby>痛<rt>いた</rt></ruby><ruby>い<ruby>時<rt>とき</rt></ruby>、<ruby>冷<rt>つめ</rt></ruby>たい<ruby>水<rt>みず</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んでもいいですか？/<ruby>辛<rt>から</rt></ruby>いものを<ruby>食<rt>た</rt></ruby>べてもいいですか？/<ruby>何<rt>なに</rt></ruby>をしたほうが いいですか？　（※「いいえ、(～<ruby>時<rt>とき</rt></ruby>)～ないほうがいいです。」）",
        "viText": "Uống nước lạnh khi đau họng có sao không? /Tôi ăn cay có sao không? /Tôi nên làm gì?　(※ ’Không, tốt hơn hết là không nên có (~thời gian)~.’)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.1.mp3"
    },
    {
        "lesson": 32,
        "id": "32-2",
        "text": "<ruby>風邪<rt>かぜ</rt></ruby>をひいた<ruby>時<rt>とき</rt></ruby>、①<ruby>何<rt>なに</rt></ruby>をしない<ruby>方<rt>ほう</rt></ruby>がいい？/②シャワーを<ruby>浴<rt>あ</rt></ruby>びてもいい？/③<ruby>運動<rt>うんどう</rt></ruby>しない<ruby>方<rt>ほう</rt></ruby>がいい？",
        "viText": "Khi bị cảm lạnh, (1) Bạn nên tránh điều gì? /(2) Tắm có sao không? /(3) Tôi có nên tránh tập thể dục không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.2.mp3"
    },
    {
        "lesson": 32,
        "id": "32-3",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>クラスの<ruby>規則<rt>きそく</rt></ruby>を<ruby>守<rt>まも</rt></ruby>っていない<ruby>友達<rt>ともだち</rt></ruby>に、アドバイスをして。",
        "viText": "Đưa ra lời khuyên cho những người bạn không tuân theo các quy tắc của lớp học tiếng Nhật.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.3.mp3"
    },
    {
        "lesson": 32,
        "id": "32-4",
        "text": "<ruby>熱<rt>ねつ</rt></ruby>がある<ruby>友達<rt>ともだち</rt></ruby>に、アドバイスをして。",
        "viText": "Đưa ra lời khuyên cho những người bạn bị sốt.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.4.mp3"
    },
    {
        "lesson": 32,
        "id": "32-5",
        "text": "１<ruby>年生<rt>ねんせい</rt></ruby>/<ruby>後輩<rt>こうはい</rt></ruby>に　ひとつアドバイスをして。",
        "viText": "Đưa ra một lời khuyên cho sinh viên năm nhất hoặc sinh viên năm cuối.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.5.mp3"
    },
    {
        "lesson": 32,
        "id": "32-6",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>クラスの1<ruby>年生<rt>ねんせい</rt></ruby>/<ruby>後輩<rt>こうはい</rt></ruby>に <ruby>漢字<rt>かんじ</rt></ruby>や<ruby>文法<rt>ぶんぽう</rt></ruby>など、<ruby>何<rt>なに</rt></ruby>かひとつ<ruby>勉強<rt>べんきょう</rt></ruby>のアドバイスをしてください。",
        "viText": "Đối với sinh viên năm nhất hoặc sinh viên năm cuối trong lớp tiếng Nhật, vui lòng đưa ra một số lời khuyên về việc học kanji hoặc ngữ pháp.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.6.mp3"
    },
    {
        "lesson": 32,
        "id": "32-7",
        "text": "<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>がベトナムへ<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>来<rt>き</rt></ruby>ます。アドバイスをしてください。（※「～を～たほうが」/「～ないほうが」いいですよ。",
        "viText": "Một người bạn Nhật Bản đang đi du lịch Việt Nam. Hãy cho một số lời khuyên. (※ '~o~tahoga' / '~naihoga' tốt hơn.)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.7.mp3"
    },
    {
        "lesson": 32,
        "id": "32-8",
        "text": "<ruby>今日<rt>きょう</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby>、<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>りましたね。　<ruby>明日<rt>あした</rt></ruby>はどうですか。　（※「たぶん、/きっと～と<ruby>思<rt>おも</rt></ruby>います。/～かもしれません。」）",
        "viText": "Sáng nay trời mưa.　Còn ngày mai thì sao?　(*’Có thể, / Tôi nghĩ~. /~ có thể.’) ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.8.mp3"
    },
    {
        "lesson": 32,
        "id": "32-9",
        "text": "<ruby>日本<rt>にほん</rt></ruby>の<ruby>交通<rt>こうつう</rt></ruby>ルールを<ruby>知<rt>し</rt></ruby>らないで<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったら、どうなると<ruby>思<rt>おも</rt></ruby>いますか。（※「～と<ruby>思<rt>おも</rt></ruby>います。/～かもしれません。」）　",
        "viText": "Bạn nghĩ điều gì sẽ xảy ra nếu bạn đến Nhật Bản mà không biết luật giao thông của Nhật Bản? (※ ’Tôi nghĩ ~. /~ có thể.’ ）　",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.9.mp3"
    },
    {
        "lesson": 32,
        "id": "32-10a",
        "text": "ベトナムは、これから<ruby>車<rt>くるま</rt></ruby>が<ruby>多<rt>おお</rt></ruby>くなる/バイクが<ruby>少<rt>すく</rt></ruby>なくなる/<ruby>地下鉄<rt>ちかてつ</rt></ruby>ができる…でしょうか。（※「たぶん～と<ruby>思<rt>おも</rt></ruby>います。/～かもしれません。」）",
        "viText": "Việt Nam sẽ chứng kiến nhiều ô tô hơn / ít xe máy hơn / xây dựng được tuyến tàu điện ngầm không ?... Tôi tự hỏi. (※ ’Tôi nghĩ có lẽ~. /~’. ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.10a.mp3"
    },
    {
        "lesson": 32,
        "id": "32-10b",
        "text": "ベトナムは、これからどうなる…でしょうか。（※「たぶん～と<ruby>思<rt>おも</rt></ruby>います。/～かもしれません。」）",
        "viText": "Việt Nam từ giờ trở đi sẽ ra sao nhỉ ?  （※ Dùng câu「たぶん、/きっと～と<ruby>思<rt>おも</rt></ruby>います。/～かもしれません。」 để trả lời） ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.10b.mp3"
    },
    {
        "lesson": 33,
        "id": "33-1",
        "text": "これは、<ruby>何<rt>なん</rt></ruby>と <ruby>書<rt>か</rt></ruby>いてありますか。（※２つ<ruby>説明<rt>せつめい</rt></ruby>する）",
        "viText": "Điều này nóChỗ này có viết cái gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.1.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.1.jpg"
    },
    {
        "lesson": 33,
        "id": "33-2",
        "text": "これは、<ruby>何<rt>なん</rt></ruby>と <ruby>読<rt>よ</rt></ruby>みますか。（※１つ<ruby>説明<rt>せつめい</rt></ruby>する）",
        "viText": "Từ này đọc sao ?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.2.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.2.jpg",
        "groupId": "group33-2"
    },
    {
        "lesson": 33,
        "id": "33-3",
        "text": "（Q２から）これはどういう<ruby>意味<rt>いみ</rt></ruby>ですか。（※「～という<ruby>意味<rt>いみ</rt></ruby>です。」）",
        "viText": "Từ này có nghĩa gì ? （※ Dùng mẫu câu「～という<ruby>意味<rt>いみ</rt></ruby>です。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.3.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.3.jpg",
        "groupId": "group33-2"
    },
    {
        "lesson": 33,
        "id": "33-4",
        "text": "<ruby>私<rt>わたし</rt></ruby>にこの<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。",
        "viText": "Hỏi tHỏi tôi cách đọc chữ kanji này đi. （※ Dùng mẫu câu「すみません、この<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えていただけませんか」 để hỏi）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.4.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.4.jpg",
        "groupId": "group33-4"
    },
    {
        "lesson": 33,
        "id": "33-5",
        "text": "（Q４から）<ruby>私<rt>わたし</rt></ruby>にこの<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。",
        "viText": "Hỏi tôi ý nghĩa của chữ kanji này đi. （※ Dùng mẫu câu「すみません、この<ruby>漢字<rt>かんじ</rt></ruby>はどういう<ruby>意味<rt>いみ</rt></ruby>ですか」 để hỏi）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.5.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.5.jpg",
        "groupId": "group33-4"
    },
    {
        "lesson": 33,
        "id": "33-6",
        "text": "<ruby>教師<rt>きょうし</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>（<ruby>命令形<rt>めいれいけい</rt></ruby>・<ruby>禁止<rt>きんし</rt></ruby><ruby>形<rt>けい</rt></ruby>）で<ruby>動<rt>うご</rt></ruby>く　（※４<ruby>問<rt>もん</rt></ruby>）　「<ruby>立<rt>た</rt></ruby>て/あっちへ<ruby>行<rt>い</rt></ruby>け/<ruby>座<rt>すわ</rt></ruby>れ/○○を<ruby>持<rt>も</rt></ruby>って<ruby>来<rt>こ</rt></ruby>い。」、「<ruby>座<rt>すわ</rt></ruby>るな/こっちへ<ruby>来<rt>く</rt></ruby>るな/<ruby>見<rt>み</rt></ruby>るな。」",
        "viText": "Nghe mệnh lệnh của giáo viên và làm theo. 「<ruby>立<rt>た</rt></ruby>て(đứng lên)/あっちへ<ruby>行<rt>い</rt></ruby>け(đi đến đằng kia)/<ruby>座<rt>すわ</rt></ruby>れ(ngồi xuống)/○○を<ruby>持<rt>も</rt></ruby>って<ruby>来<rt>こ</rt></ruby>い。(mang ...đến đây)」、「<ruby>座<rt>すわ</rt></ruby>るな(cấm ngồi)/こっちへ<ruby>来<rt>く</rt></ruby>るな(cấm đi lại đằng kia)/<ruby>見<rt>み</rt></ruby>るな。(cấm nhìn)」",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.6.mp3",
    },
    {
        "lesson": 33,
        "id": "33-8",
        "text": "これは、どういう<ruby>意味<rt>いみ</rt></ruby>ですか。（<ruby>交通標識<rt>こうつうひょうしき</rt></ruby>やマーク） （※２<ruby>問<rt>もん</rt></ruby>）（※「これは～という<ruby>意味<rt>いみ</rt></ruby>です。」）",
        "viText": "Biển báo này nghĩa là gì ? （※Dùng mẫu câu「これは～という<ruby>意味<rt>いみ</rt></ruby>です。」để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.8.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.8.jpg"
    },
    {
        "lesson": 33,
        "id": "33-10",
        "text": "これをあの<ruby>人<rt>ひと</rt></ruby>(その<ruby>教室<rt>きょうしつ</rt></ruby>にいる<ruby>人<rt>ひと</rt></ruby>/<ruby>画面<rt>がめん</rt></ruby>にいる<ruby>人<rt>ひと</rt></ruby>)に<ruby>伝<rt>つた</rt></ruby>えていただけませんか。（※「○○さん、＊＊<ruby>先生<rt>せんせい</rt></ruby>が～と<ruby>言<rt>い</rt></ruby>っていました。」）",
        "viText": "Bạn có thể vui lòng truyền đạt điều này cho bạn trong lớp học hoặc bạn xuất hiện trên màn hình không? 。Dùng mẫu（※「○○さん、＊＊<ruby>先生<rt>せんせい</rt></ruby>が～と<ruby>言<rt>い</rt></ruby>っていました。」để truyền lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.10.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.10.jpg"
    },
    {
        "lesson": 34,
        "id": "34-1",
        "text": "<ruby>出<rt>で</rt></ruby>かける<ruby>時<rt>とき</rt></ruby>、いつも  <ruby>何<rt>なに</rt></ruby>を<ruby>持<rt>も</rt></ruby>って　<ruby>出<rt>で</rt></ruby>かけますか。",
        "viText": "Bạn luôn mang theo những gì khi ra ngoài?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.1.mp3"
    },
    {
        "lesson": 34,
        "id": "34-2a",
        "text": "いつも、<ruby>扇風機<rt>せんぷうき</rt></ruby>/エアコン/<ruby>電気<rt>でんき</rt></ruby>を…<ruby>消<rt>け</rt></ruby>して、<ruby>寝<rt>ね</rt></ruby>ますか。",
        "viText": "Bạn có tắt quạt/điều hòa/điện khi ngủ không ? ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.2a.mp3"
    },
    {
        "lesson": 34,
        "id": "34-2b",
        "text": "いつも、<ruby>扇風機<rt>せんぷうき</rt></ruby>/エアコン/<ruby>電気<rt>でんき</rt></ruby>を…<ruby>消<rt>け</rt></ruby>さないで、<ruby>寝<rt>ね</rt></ruby>ますか。",
        "viText": "Bạn có luôn để quạt/điều hòa/điện chạy khi ngủ không ? ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.2b.mp3"
    },
    {
        "lesson": 34,
        "id": "34-3",
        "text": "いつもヘルメットをかぶってバイクに<ruby>乗<rt>の</rt></ruby>りますか。",
        "viText": "Bạn có luôn đội mũ bảo hiểm khi đi xe đạp không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.3.mp3"
    },
    {
        "lesson": 34,
        "id": "34-4",
        "text": "あなたは、<ruby>寿司<rt>すし</rt></ruby>/<ruby>刺身<rt>さしみ</rt></ruby>/マンゴー/<ruby>西瓜<rt>すいか</rt></ruby>　に、　<ruby>何<rt>なに</rt></ruby>つけて<ruby>食<rt>た</rt></ruby>べますか。",
        "viText": "BạBạn sẽ chấm gì khi ăn sushi/sashimi/xoài/dưa hấu?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.4.mp3"
    },
    {
        "lesson": 34,
        "id": "34-5",
        "text": "どんな<ruby>服<rt>ふく</rt></ruby>を<ruby>着<rt>き</rt></ruby>て、<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きますか。",
        "viText": "BạBạn sẽ mặc quần áo gì khi đến Nhật Bản?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.5.mp3"
    },
    {
        "lesson": 34,
        "id": "34-6",
        "text": "<ruby>私<rt>わたし</rt></ruby>が<ruby>言<rt>い</rt></ruby>うとおりに<ruby>言<rt>い</rt></ruby>ってください。<br>（※<ruby>復唱<rt>ふくしょう</rt></ruby>の<ruby>練習<rt>れんしゅう</rt></ruby>）　※<ruby>教師<rt>きょうし</rt></ruby>：「<ruby>明日<rt>あした</rt></ruby>８<ruby>時<rt>じ</rt></ruby>に<ruby>来<rt>こ</rt></ruby>い。」（<ruby>命令形<rt>めいれいけい</rt></ruby>）…<ruby>学生<rt>がくせい</rt></ruby>：「<ruby>明日<rt>あした</rt></ruby>８<ruby>時<rt>じ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ます。」（<ruby>丁寧<rt>ていねい</rt></ruby><ruby>形<rt>けい</rt></ruby>）",
        "viText": "Hãy nói như tôi sắp nói. (Cái này dùng để luyện tập lặp lại) Ví dụ :<ruby>教師<rt>きょうし</rt></ruby>：(Giáo viên)「<ruby>明日<rt>あした</rt></ruby>８<ruby>時<rt>じ</rt></ruby>に<ruby>来<rt>こ</rt></ruby>い。」（<ruby>命令形<rt>めいれいけい</rt></ruby>:(thể mệnh lệnh)）…<ruby>学生<rt>がくせい</rt></ruby>：「<ruby>明日<rt>あした</rt></ruby>８<ruby>時<rt>じ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ます。」（<ruby>丁寧<rt>ていねい</rt></ruby><ruby>形<rt>けい</rt></ruby>:（thể lịch sự））",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.6.mp3"
    },
    {
        "lesson": 34,
        "id": "34-7",
        "text": "<ruby>私<rt>わたし</rt></ruby>が<ruby>言<rt>い</rt></ruby>うとおりに<ruby>言<rt>い</rt></ruby>ってください。<br>（※<ruby>復唱<rt>ふくしょう</rt></ruby>の<ruby>練習<rt>れんしゅう</rt></ruby>）　※<ruby>教師<rt>きょうし</rt></ruby>：「<ruby>右手<rt>みぎて</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げろ。」（<ruby>命令形<rt>めいれいけい</rt></ruby>）…<ruby>学生<rt>がくせい</rt></ruby>：「<ruby>右手<rt>みぎて</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げます。」（<ruby>丁寧<rt>ていねい</rt></ruby><ruby>形<rt>けい</rt></ruby>）　　 <ruby>右手<rt>みぎて</rt></ruby>をあげろ…<ruby>右手<rt>みぎて</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げます。",
        "viText": "Hãy nói như tôi sắp nói. (Cái này dùng để luyện tập lặp lại) Ví dụ :  <ruby>教師<rt>きょうし</rt></ruby>：(Giáo viên)「<ruby>右手<rt>みぎて</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げろ。(đưa tay phải lên)」（<ruby>命令形<rt>めいれいけい</rt></ruby>:thể mệnh lệnh）... <ruby>学生<rt>がくせい</rt></ruby>：「<ruby>右手<rt>みぎて</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げます。」（<ruby>丁寧<rt>ていねい</rt></ruby><ruby>形<rt>けい</rt></ruby>:（thể lịch sự））",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.7.mp3"
    },
    {
        "lesson": 34,
        "id": "34-8",
        "text": "<ruby>私<rt>わたし</rt></ruby>が<ruby>言<rt>い</rt></ruby>ったとおりに<ruby>書<rt>か</rt></ruby>いてください。（※メモを<ruby>取<rt>と</rt></ruby>る<ruby>練習<rt>れんしゅう</rt></ruby>　<ruby>要点<rt>ようてん</rt></ruby>を<ruby>書<rt>か</rt></ruby>く）　※「 9<ruby>月<rt>がつ</rt></ruby>25<ruby>日<rt>にち</rt></ruby>、10<ruby>時<rt>じ</rt></ruby>に<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>に<ruby>来<rt>き</rt></ruby>てください。」",
        "viText": "Hãy viết như tôi đã nói (Cái này dùng để luyện tập ghi chú. Chỉ ghi những ý chính) Ví dụ :  ※「 9月25日、10時に<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>。」",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.8.mp3"
    },
    {
        "lesson": 34,
        "id": "34-9",
        "text": "<ruby>私<rt>わたし</rt></ruby>が<ruby>言<rt>い</rt></ruby>ったとおりに<ruby>書<rt>か</rt></ruby>いてください。（※メモを<ruby>取<rt>と</rt></ruby>る<ruby>練習<rt>れんしゅう</rt></ruby>　<ruby>要点<rt>ようてん</rt></ruby>を<ruby>書<rt>か</rt></ruby>く）　※「 <ruby>明日<rt>あした</rt></ruby>、<ruby>午後<rt>ごご</rt></ruby>3<ruby>時<rt>じ</rt></ruby>から<ruby>会議<rt>かいぎ</rt></ruby>があります。」",
        "viText": "Hãy viết như tôi đã nói (Cái này dùng để luyện tập ghi chú. Chỉ ghi những ý chính) Ví dụ :  ※<ruby>教師<rt>きょうし</rt></ruby>：(Giáo viên)「 <ruby>明日<rt>あした</rt></ruby>、<ruby>午後<rt>ごご</rt></ruby>3<ruby>時<rt>じ</rt></ruby>から<ruby>会議<rt>かいぎ</rt></ruby>があります。」（<ruby>丁寧<rt>ていねい</rt></ruby><ruby>形<rt>けい</rt></ruby>:（thể lịch sự））、<ruby>学生<rt>がくせい</rt></ruby>：「 <ruby>明日<rt>あした</rt></ruby>、<ruby>午後<rt>ごご</rt></ruby>3<ruby>時<rt>じ</rt></ruby>、<ruby>会議<rt>かいぎ</rt></ruby>。」",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.9.mp3"
    },
    {
        "lesson": 34,
        "id": "34-10",
        "text": "○○さんは、いつシャワーを<ruby>浴<rt>あ</rt></ruby>びますか？…<ruby>寝<rt>ね</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>ですか、<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>後<rt>あと</rt></ruby>ですか。/ いつ<ruby>宿題<rt>しゅくだい</rt></ruby>をしますか？…<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>/<ruby>後<rt>あと</rt></ruby>/、<ruby>寝<rt>ね</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>…ですか。（※「～の<ruby>後<rt>あと</rt></ruby>で/<ruby>前<rt>まえ</rt></ruby>に～します。」）",
        "viText": "Bạn đi tắm khi nào ? …<ruby>寝<rt>ね</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>ですか(trước khi ngủ)、<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>後<rt>あと</rt></ruby>ですか.(sau khi ăn)/ いつ<ruby>宿題<rt>しゅくだい</rt></ruby>をしますか(bạn làm bài tập khi nào)？…<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>/<ruby>後<rt>あと</rt></ruby>(trước hay sau khi ăn)/、<ruby>寝<rt>ね</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>...ですか。（※ Dùng mẫu「～の後で/前に～します。」 để trả lời）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.10.mp3"
    },
    {
        "lesson": 35,
        "id": "35-1",
        "text": "<ruby>何<rt>なに</rt></ruby>をすれば、<ruby>会話<rt>かいわ</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>になると<ruby>思<rt>おも</rt></ruby>いますか。",
        "viText": "Bạn nghĩ mình nên làm gì để nói tiếng Nhật giỏi hơn ?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.1.mp3"
    },
    {
        "lesson": 35,
        "id": "35-2",
        "text": "<ruby>日本<rt>にほん</rt></ruby>で、<ruby>日本語<rt>にほんご</rt></ruby>/<ruby>漢字<rt>かんじ</rt></ruby>/<ruby>道<rt>みち</rt></ruby>　がわからない<ruby>時<rt>とき</rt></ruby>、どうすればいいと<ruby>思<rt>おも</rt></ruby>いますか。",
        "viText": "Bạn sẽ làm gì nếu ở Nhật mà bạn không biết tiếng Nhật/kanji/đường?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.2.mp3"
    },
    {
        "lesson": 35,
        "id": "35-3",
        "text": "<ruby>日本<rt>にほん</rt></ruby>で、<ruby>困<rt>こま</rt></ruby>った<ruby>時<rt>とき</rt></ruby>、<ruby>誰<rt>だれ</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>すれば いいと<ruby>思<rt>おも</rt></ruby>いますか。",
        "viText": "Bạn nghĩ bạn nên tham khảo ý kiến của ai khi gặp khó khăn ở Nhật Bản?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.3.mp3"
    },
    {
        "lesson": 35,
        "id": "35-4",
        "text": "<ruby>何<rt>なに</rt></ruby>があれば/<ruby>何<rt>なに</rt></ruby>ができれば、<ruby>日本<rt>にほん</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>で<ruby>困<rt>こま</rt></ruby>らないと<ruby>思<rt>おも</rt></ruby>いますか。",
        "viText": "Bạn nghĩ điều gì sẽ giúp bạn tránh được những khó khăn trong cuộc sống ở Nhật Bản?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.4.mp3"
    },
    {
        "lesson": 35,
        "id": "35-5a",
        "text": "<ruby>何<rt>なに</rt></ruby>があれば<ruby>嬉<rt>うれ</rt></ruby>しいですか。",
        "viText": "Thứ gì sẽ khiến bạn thấy hạnh phúc?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.5a.mp3"
    },
    {
        "lesson": 35,
        "id": "35-5b",
        "text": "<ruby>誰<rt>だれ</rt></ruby>がいれば　<ruby>幸<rt>しあわ</rt></ruby>せですか。",
        "viText": "Bạn sẽ hạnh phúc khi có ai bên cạnh mình ? ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.5b.mp3"
    },
    {
        "lesson": 35,
        "id": "35-6",
        "text": "<ruby>天気<rt>てんき</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くても、<ruby>出<rt>で</rt></ruby>かけますか。",
        "viText": "Ngay cả khi thời tiết xấu, bạn có ra ngoài không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.6.mp3"
    },
    {
        "lesson": 35,
        "id": "35-7",
        "text": "<ruby>欲<rt>ほ</rt></ruby>しいものは、<ruby>高<rt>たか</rt></ruby>くても<ruby>買<rt>か</rt></ruby>いますか。　（※「はい、<ruby>高<rt>たか</rt></ruby>くても<ruby>買<rt>か</rt></ruby>います。/いいえ、<ruby>高<rt>たか</rt></ruby>ければ<ruby>買<rt>か</rt></ruby>いません。」）",
        "viText": "Nếu bạn mNếu bạn muốn một cái gì đó, bạn có sẵn sàng mua nó ngay cả khi nó đắt không? （※「はい、<ruby>高<rt>たか</rt></ruby>くても<ruby>買<rt>か</rt></ruby>います。(vâng,kể cả có đắt tôi cũng mua)/いいえ、<ruby>高<rt>たか</rt></ruby>ければ<ruby>買<rt>か</rt></ruby>いません。」(không, nếu đắt thì tôi không mua）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.7.mp3"
    },
    {
        "lesson": 35,
        "id": "35-8",
        "text": "あなたの<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>に<ruby>何<rt>なに</rt></ruby>があれば、<ruby>便利<rt>べんり</rt></ruby>だ / いい　と<ruby>思<rt>おも</rt></ruby>いますか。",
        "viText": "Bạn nghĩ trường đại học/cao đẳng của bạn trang bị thêm gì thì sẽ trở nên tiện lợi hơn?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.8.mp3"
    },
    {
        "lesson": 35,
        "id": "35-9",
        "text": "ベトナムで<ruby>海<rt>うみ</rt></ruby>と<ruby>山<rt>やま</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きたいです。<ruby>海<rt>うみ</rt></ruby>ならどこですか、<ruby>山<rt>やま</rt></ruby>ならどこですか？」：（※２つ<ruby>説明<rt>せつめい</rt></ruby>する）",
        "viText": "Tôi muốn đi biển và núi ở Việt Nam.Biển thì tôi nên đi đâu ? Núi thì tôi nên đi đâu?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.9.mp3"
    },
    {
        "lesson": 35,
        "id": "35-10a",
        "text": "ベトナムを<ruby>旅行<rt>りょこう</rt></ruby>します。どこへ<ruby>行<rt>い</rt></ruby>って<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べればいいですか。<ruby>教<rt>おし</rt></ruby>えてください。　（※「Aなら～/Bなら～。」（２つ<ruby>説明<rt>せつめい</rt></ruby>する））",
        "viText": "Đi du lịch ở Việt Nam thì nên đi đâu, ăn gì ? Chỉ cho tôi với. （※ Dùng mẫu「Aなら～/Bなら～。」để trả lời.)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.10a.mp3"
    },
    {
        "lesson": 35,
        "id": "35-10b",
        "text": "ベトナムを<ruby>旅行<rt>りょこう</rt></ruby>します。どこへ<ruby>行<rt>い</rt></ruby>って<ruby>何<rt>なに</rt></ruby>を<ruby>見<rt>み</rt></ruby>ればいいですか。<ruby>教<rt>おし</rt></ruby>えてください。　（※「Aなら～/Bなら～。」（２つ<ruby>説明<rt>せつめい</rt></ruby>する））",
        "viText": "Đi du lịch ở Việt Nam thì nên đi đâu, ngắm gì ? Chỉ cho tôi với. （※ Dùng mẫu「Aなら～/Bなら～。」để trả lời. )",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.10b.mp3"
    },
    {
        "lesson": 36,
        "id": "36-1a",
        "text": "<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>部屋<rt>へや</rt></ruby>を<ruby>掃除<rt>そうじ</rt></ruby>する/<ruby>洗濯<rt>せんたく</rt></ruby>する　ようにしていますか。　",
        "viText": "Bạn có thói quen dọn dẹp/giặt giũ mỗi ngày không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.1a.mp3"
    },
    {
        "lesson": 36,
        "id": "36-1b",
        "text": "<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>部屋<rt>へや</rt></ruby>を<ruby>掃除<rt>そうじ</rt></ruby>する/<ruby>洗濯<rt>せんたく</rt></ruby>する　ようにしていますか。　",
        "viText": "Bạn có thói quen dọn dẹp/giặt giũ mỗi ngày không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.1b.mp3"
    },
    {
        "lesson": 36,
        "id": "36-2",
        "text": "メモ<ruby>帳<rt>ちょう</rt></ruby>を<ruby>持<rt>も</rt></ruby>っていますか。どうしてメモしますか。（※「はい、<ruby>持<rt>も</rt></ruby>っています。<ruby>忘<rt>わす</rt></ruby>れないようにメモします。」）",
        "viText": "Bạn có sổ tay không? Tại sao phải  ghi chép? （※「はい、<ruby>持<rt>も</rt></ruby>っています。<ruby>忘<rt>わす</rt></ruby>れないようにメモします。」Vâng, tôi có. Để tránh quên thì tôi ghi chép）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.2.mp3"
    },
    {
        "lesson": 36,
        "id": "36-3",
        "text": "<ruby>毎日<rt>まいにち</rt></ruby><ruby>何時間<rt>なんじかん</rt></ruby>、<ruby>自分<rt>じぶん</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>するようにしていますか。（※「〇<ruby>時間<rt>じかん</rt></ruby>、<ruby>勉強<rt>べんきょう</rt></ruby>するようにしています。」）",
        "viText": "Bạn tự học bao nhiêu tiếng mỗi ngày? （※「〇<ruby>時間<rt>じかん</rt></ruby>、<ruby>勉強<rt>べんきょう</rt></ruby>するようにしています。」tôi cố gắng học ... tiếng mỗi ngày)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.3.mp3"
    },
    {
        "lesson": 36,
        "id": "36-4",
        "text": "あなたが、<ruby>気<rt>き</rt></ruby>をつけていること、<ruby>毎日<rt>まいにち</rt></ruby>がんばっていることは<ruby>何<rt>なん</rt></ruby>ですか。（※「<ruby>毎日<rt>まいにち</rt></ruby>/できるだけ～ようにしています。」）",
        "viText": "Bạn đang quan tâm đến gì ? Mỗi ngày bạn đang cố gắng làm gì ? （※「<ruby>毎日<rt>まいにち</rt></ruby>/できるだけ～ようにしています。」mỗi ngày, tôi đang cố gắng để .....）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.4.mp3",
        "groupId": "group36-4"
    },
    {
        "lesson": 36,
        "id": "36-5",
        "text": "（Q2）それは、どうしてですか。（※「<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>になるように/<ruby>日本<rt>にほん</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>けるように/<ruby>元気<rt>げんき</rt></ruby>でいられるように、～ています。」）",
        "viText": "(Q2) Tại sao vậy? （※「<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>になるように(cố gắng để giỏi tiếng Nhật hơn)/<ruby>日本<rt>にほん</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>けるように(cố gắng để có thể làm việc tại Nhật)/<ruby>元気<rt>げんき</rt></ruby>でいられるように(cố gắng để lúc nào cũng khỏe mạnh)、～ています。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.5.mp3",
        "groupId": "group36-4"
    },
    {
        "lesson": 36,
        "id": "36-6",
        "text": "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>大学<rt>だいがく</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>/<ruby>会社名<rt>かいしゃめい</rt></ruby>/<ruby>組合<rt>くみあい</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>/<ruby>住所<rt>じゅうしょ</rt></ruby>が<ruby>漢字<rt>かんじ</rt></ruby>で<ruby>書<rt>か</rt></ruby>けるようになった？",
        "viText": "Bạn có thể viết tên trường đại học, tên trường cao đẳng, tên công ty, tên công đoàn hoặc địa chỉ bằng chữ Hán không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.6.mp3"
    },
    {
        "lesson": 36,
        "id": "36-7",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>に<ruby>話<rt>はな</rt></ruby>せるようになった？　※「はい、<ruby>話<rt>はな</rt></ruby>せるようになりました。」/「<ruby>少<rt>すこ</rt></ruby>し～。」/「 いいえ、まだ<ruby>話<rt>はな</rt></ruby>せません。」/「まだ、<ruby>話<rt>はな</rt></ruby>せるようになりません。」",
        "viText": "Bạn đã trở nên giỏi nói tiếng Nhật chưa? ※「はい、<ruby>話<rt>はな</rt></ruby>せるようになりました。(vâng, tôi đã nói giỏi hơn)」/「<ruby>少<rt>すこ</rt></ruby>し～。(một chút)」/「 いいえ、まだ<ruby>話<rt>はな</rt></ruby>せません.(chưa, tôi chưa thể nói)」/「まだ、<ruby>話<rt>はな</rt></ruby>せるようになりません.(chưa, tôi chưa trở nên nói được)」",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.7.mp3"
    },
    {
        "lesson": 36,
        "id": "36-8",
        "text": "どうすれば、<ruby>上手<rt>じょうず</rt></ruby>に<ruby>話<rt>はな</rt></ruby>せるようになると<ruby>思<rt>おも</rt></ruby>う？　（※「・・・すれば、<ruby>話<rt>はな</rt></ruby>せるようになると<ruby>思<rt>おも</rt></ruby>います。」）",
        "viText": "Làm thế nào để bạn có thể nói tốt? （※Dùng mẫu「・・・すれば、<ruby>話<rt>はな</rt></ruby>せるようになると思います。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.8.mp3"
    },
    {
        "lesson": 36,
        "id": "36-9",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>に<ruby>入<rt>はい</rt></ruby>って、<ruby>何<rt>なに</rt></ruby>ができるようになった？",
        "viText": "Bạn đã có thể làm gì kể từ khi vào đại học / cao đẳng?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.9.mp3"
    },
    {
        "lesson": 36,
        "id": "36-10",
        "text": "<ruby>子<rt>こ</rt></ruby>どもの<ruby>時<rt>とき</rt></ruby>、<ruby>出来<rt>でき</rt></ruby>なくて、<ruby>今<rt>いま</rt></ruby>、<ruby>出来<rt>でき</rt></ruby>るようになったことは<ruby>何<rt>なに</rt></ruby>？",
        "viText": "Những điều bạn không thể làm khi còn nhỏ nhưng bây giờ có thể làm được là gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.10.mp3"
    },
    {
        "lesson": 37,
        "id": "37-1",
        "text": "<ruby>両親<rt>りょうしん</rt></ruby>に<ruby>叱<rt>しか</rt></ruby>られたことがありますか。　<ruby>何<rt>なに</rt></ruby>をして <ruby>叱<rt>しか</rt></ruby>られましたか。",
        "viText": "Bạn đã bao giờ bị cha mẹ mắng chưa? Bạn đã làm gì để bị mắng vậy?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.1.mp3"
    },
    {
        "lesson": 37,
        "id": "37-2",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>で ほめられたことが ありますか。どうしてほめられましたか。",
        "viText": "Bạn đã bao giờ được khen ngợi tại trường đại học hoặc cao đẳng chưa? Tại sao bạn được khen vậy?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.2.mp3"
    },
    {
        "lesson": 37,
        "id": "37-3",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>で<ruby>注意<rt>ちゅうい</rt></ruby>されたことが　ありますか。<ruby>何<rt>なん</rt></ruby>と<ruby>注意<rt>ちゅうい</rt></ruby>されましたか。",
        "viText": "Bạn đã bao giờ bị nhắc nhở tại trường đại học hoặc cao đẳng của mình chưa? Bạn đã bị khiển trách điều gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.3.mp3"
    },
    {
        "lesson": 37,
        "id": "37-4",
        "text": "<ruby>友達<rt>ともだち</rt></ruby>に　<ruby>何<rt>なに</rt></ruby>をされたら、<ruby>困<rt>こま</rt></ruby>りますか。/<ruby>嫌<rt>いや</rt></ruby>ですか。　（※「バイクを<ruby>壊<rt>こわ</rt></ruby>されたら / <ruby>服<rt>ふく</rt></ruby>を<ruby>汚<rt>よご</rt></ruby>されたら / <ruby>殴<rt>なぐ</rt></ruby>られたら / ・・・。」）",
        "viText": "Bạn bè của bạn làm gì sẽ khiến bạn khó chịu ? （※「バイクを<ruby>壊<rt>こわ</rt></ruby>されたら(làm hỏng xe máy) / <ruby>服<rt>ふく</rt></ruby>を<ruby>汚<rt>よご</rt></ruby>されたら(làm bẩn quần áo) / <ruby>殴<rt>なぐ</rt></ruby>られたら (đánh đập)/ ・・・。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.4.mp3"
    },
    {
        "lesson": 37,
        "id": "37-5",
        "text": "<ruby>友達<rt>ともだち</rt></ruby>が<ruby>何<rt>なに</rt></ruby>をしてくれたら、<ruby>嬉<rt>うれ</rt></ruby>しいですか。　（※「<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>遊<rt>あそ</rt></ruby>んでくれたら / <ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ってくれたら・・・。」）",
        "viText": "Điều gì sẽ khiến bạn hạnh phúc nếu bạn bè của bạn làm điều đó cho bạn? （※「<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>遊<rt>あそ</rt></ruby>んでくれたら(chơi cùng) / <ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ってくれたら(nấu ăn cho)・・・。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.5.mp3"
    },
    {
        "lesson": 37,
        "id": "37-6",
        "text": "<ruby>今日<rt>きょう</rt></ruby>、<ruby>担任<rt>たんにん</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何<rt>なに</rt></ruby>か<ruby>言<rt>い</rt></ruby>われました？　<ruby>何<rt>なん</rt></ruby>て<ruby>言<rt>い</rt></ruby>われた？",
        "viText": "Hôm nay giáo viên chủ nhiệm của bạn có nói gì với bạn không? Họ đã nói gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.6.mp3"
    },
    {
        "lesson": 37,
        "id": "37-7",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>でどんなイベントが<ruby>行<rt>おこな</rt></ruby>われている？",
        "viText": "Những loại sự kiện nào được tổ chức tại các trường đại học và cao đẳng?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.7.mp3"
    },
    {
        "lesson": 37,
        "id": "37-8",
        "text": "ベトナムでは <ruby>漢字<rt>かんじ</rt></ruby>が <ruby>使<rt>つか</rt></ruby>われてる？",
        "viText": "Kanji có được sử dụng ở Việt Nam không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.8.mp3"
    },
    {
        "lesson": 37,
        "id": "37-9",
        "text": "ベトナムでは フォーを<ruby>食<rt>た</rt></ruby>べるね。フォーは <ruby>何<rt>なに</rt></ruby>から　<ruby>作<rt>つく</rt></ruby>られているの？",
        "viText": "Ở Việt Nam có món phở nhỉ. Vậy phở thì được làm từ gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.9.mp3"
    },
    {
        "lesson": 37,
        "id": "37-10",
        "text": "ベトナムでは、<ruby>何<rt>なに</rt></ruby>がたくさん<ruby>作<rt>つく</rt></ruby>られている？　（※「<ruby>米<rt>こめ</rt></ruby>、<ruby>果物<rt>くだもの</rt></ruby>、コーヒー　が<ruby>作<rt>つく</rt></ruby>られています。」）",
        "viText": "Những gì đang được sản xuất nhiều ở Việt Nam?  （※「<ruby>米<rt>こめ</rt></ruby>(gạo)、<ruby>果物<rt>くだもの</rt></ruby>(trái cây)、コーヒー(cà phê) が<ruby>作<rt>つく</rt></ruby>られています。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.10.mp3"
    },
    {
        "lesson": 38,
        "id": "38-1a",
        "text": "（２<ruby>問<rt>もん</rt></ruby>）サッカーをするのが<ruby>好<rt>す</rt></ruby>きですか。<ruby>見<rt>み</rt></ruby>るのが<ruby>好<rt>す</rt></ruby>きですか。",
        "viText": "(Câu hỏi 2)Bạn có thích chơi bóng đá không? Bạn có thích xem bóng đá không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.1a.mp3"
    },
    {
        "lesson": 38,
        "id": "38-1b",
        "text": "（２<ruby>問<rt>もん</rt></ruby>）<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>うのが/<ruby>歌<rt>うた</rt></ruby>を<ruby>聴<rt>き</rt></ruby>くのが/<ruby>絵<rt>え</rt></ruby>を<ruby>見<rt>み</rt></ruby>るのが/<ruby>絵<rt>え</rt></ruby>を<ruby>描<rt>か</rt></ruby>くのが/ダンスをするのが/…<ruby>好<rt>す</rt></ruby>きですか。",
        "viText": "(2 câu hỏi) Ca hát / Nghe bài hát / Ngắm tranh / Vẽ tranh / Nhảy múa / ... Bạn có thích nó không??",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.1b.mp3",
        "groupId": "group38-1b"
    },
    {
        "lesson": 38,
        "id": "38-2",
        "text": "（Q1から）どうしてですか。",
        "viText": "(Từ Q1) Tại sao vậy?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.2.mp3",
        "groupId": "group38-1b"
    },
    {
        "lesson": 38,
        "id": "38-3a",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>で、<ruby>漢字<rt>かんじ</rt></ruby>を<ruby>書<rt>か</rt></ruby>くのは<ruby>難<rt>むずか</rt></ruby>しいですか。　<ruby>何<rt>なに</rt></ruby>をするのは <ruby>難<rt>むずか</rt></ruby>しいですか。 ※（「はい、<ruby>難<rt>むずか</rt></ruby>しいです。/<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>難<rt>むずか</rt></ruby>しいです。」）",
        "viText": "Khi học tiếng Nhật, việc viết kanji có khó không ? Học gì là khó ?  ※（「はい、<ruby>難<rt>むずか</rt></ruby>しいです。(vâng, khó)/<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>難<rt>むずか</rt></ruby>しいです。」(toàn bộ đều khó）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.3a.mp3"
    },
    {
        "lesson": 38,
        "id": "38-3b",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>で、<ruby>何<rt>なに</rt></ruby>をするのは<ruby>難<rt>むずか</rt></ruby>しくないですか。 ※（「<ruby>話<rt>はな</rt></ruby>すのは<ruby>難<rt>むずか</rt></ruby>しくないです。/<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>難<rt>むずか</rt></ruby>しいです。」）",
        "viText": "Khi học tiếng Nhật, việc gì là không khó ?  ※（「<ruby>話<rt>はな</rt></ruby>すのは<ruby>難<rt>むずか</rt></ruby>しくないです。(nói chuyện là không khó)/<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>難<rt>むずか</rt></ruby>しいです。」(tất cả đều khó)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.3b.mp3"
    },
    {
        "lesson": 38,
        "id": "38-4a",
        "text": "あなたは　<ruby>何<rt>なに</rt></ruby>をするのが<ruby>早<rt>はや</rt></ruby>いですか。",
        "viText": "Việc nào mà bạn có thể làm nhanh?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.4a.mp3"
    },
    {
        "lesson": 38,
        "id": "38-4b",
        "text": "あなたは　<ruby>何<rt>なに</rt></ruby>をするのが<ruby>遅<rt>おそ</rt></ruby>いですか。",
        "viText": "Việc nào mà bạn làm bị chậm ? ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.4b.mp3"
    },
    {
        "lesson": 38,
        "id": "38-5",
        "text": "あなたは  <ruby>何<rt>なに</rt></ruby>をするのが <ruby>嫌<rt>きら</rt></ruby>いですか。",
        "viText": "Bạn không thích làm gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.5.mp3"
    },
    {
        "lesson": 38,
        "id": "38-6",
        "text": "あなたは<ruby>今<rt>いま</rt></ruby>どこに<ruby>住<rt>す</rt></ruby>んでいるの？　<ruby>生<rt>う</rt></ruby>まれたのもそこ（<ruby>学生<rt>がくせい</rt></ruby>の<ruby>回答<rt>かいとう</rt></ruby>）ですか？　（※「いいえ、<ruby>生<rt>う</rt></ruby>まれたのは＊＊です。」）",
        "viText": "Bây giờ bạn sống ở đâu? Đó cũng là nơi bạn sinh ra hả ? （※「いいえ、<ruby>生<rt>う</rt></ruby>まれたのは＊＊です。」(không, đó không phải nơi tôi sinh ra）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.6.mp3"
    },
    {
        "lesson": 38,
        "id": "38-7",
        "text": "▲<ruby>月<rt>がつ</rt></ruby>から<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めたんだね？（※<ruby>違<rt>ちが</rt></ruby>う<ruby>月<rt>つき</rt></ruby>を<ruby>言<rt>い</rt></ruby>う：「いいえ、<ruby>勉強<rt>べんきょう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めたのは〇<ruby>月<rt>がつ</rt></ruby>からです。」）",
        "viText": "Bạn bắt đầu học tiếng Nhật từ tháng .... phải không? （※<ruby>違<rt>ちが</rt></ruby>う<ruby>月<rt>つき</rt></ruby>を<ruby>言<rt>い</rt></ruby>う：「いいえ、<ruby>勉強<rt>べんきょう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めたのは〇<ruby>月<rt>がつ</rt></ruby>からです。」:nếu không phải, hãy trả lời tháng mà bạn bắt đầu học tiếng Nhật）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.7.mp3"
    },
    {
        "lesson": 38,
        "id": "38-8",
        "text": "（<ruby>去年<rt>きょねん</rt></ruby>の）▲<ruby>月<rt>がつ</rt></ruby>から　<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ったんだね。（※<ruby>違<rt>ちが</rt></ruby>う<ruby>月<rt>つき</rt></ruby>を<ruby>言<rt>い</rt></ruby>う：「いいえ、<ruby>入<rt>はい</rt></ruby>ったのは▲<ruby>月<rt>がつ</rt></ruby>です。」）",
        "viText": "Vào tháng .... năm ngoái, bạn nhập học phải không ? （※<ruby>違<rt>ちが</rt></ruby>う<ruby>月<rt>つき</rt></ruby>を<ruby>言<rt>い</rt></ruby>う：「いいえ、<ruby>入<rt>はい</rt></ruby>ったのは▲<ruby>月<rt>がつ</rt></ruby>です。」:nếu không phải, hãy trả lời tháng mà bạn nhập học)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.8.mp3"
    },
    {
        "lesson": 38,
        "id": "38-9",
        "text": "<ruby>今<rt>いま</rt></ruby>、あなたが<ruby>一番<rt>いちばん</rt></ruby><ruby>欲<rt>ほ</rt></ruby>しいもの、<ruby>二番目<rt>にばんめ</rt></ruby>に<ruby>欲<rt>ほ</rt></ruby>しいものを<ruby>教<rt>おし</rt></ruby>えて。　（※「<ruby>一番<rt>いちばん</rt></ruby><ruby>欲<rt>ほ</rt></ruby>しいのは●です。<ruby>二番目<rt>にばんめ</rt></ruby>に<ruby>欲<rt>ほ</rt></ruby>しいのは▲です。」）",
        "viText": "Hãy cho tôi biết thứ mà bạn mong muốn có nhất. Tiếp theo là gì ?  （※「<ruby>一番<rt>いちばん</rt></ruby><ruby>欲<rt>ほ</rt></ruby>しいのは●です(thứ tôi muốn nhất là ...)。<ruby>二番目<rt>にばんめ</rt></ruby>に<ruby>欲<rt>ほ</rt></ruby>しいのは▲です。」thứ tôi muốn thứ nhì là ...）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.9.mp3"
    },
    {
        "lesson": 38,
        "id": "38-10",
        "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をするのが<ruby>楽<rt>たの</rt></ruby>しみ？　（※「～のが<ruby>楽<rt>たの</rt></ruby>しみです。」）",
        "viText": "Bạn đang mong đợi điều gì ? （※「～のが<ruby>楽<rt>たの</rt></ruby>しみです。」tôi đang mong đợi ...）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.10.mp3"
    },
    {
        "lesson": 39,
        "id": "39-1",
        "text": "<ruby>最近<rt>さいきん</rt></ruby>  どんなことで　<ruby>嬉<rt>うれ</rt></ruby>しかった？　（※「～て、<ruby>嬉<rt>うれ</rt></ruby>しかったです。」）",
        "viText": "Gần đây bạn hạnh phúc về điều gì? （※「～て、<ruby>嬉<rt>うれ</rt></ruby>しかったです。」tôi hạnh phúc vì ... ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.1.mp3"
    },
    {
        "lesson": 39,
        "id": "39-2",
        "text": "どんなことで　びっくりした？　（※「～て、びっくりしました。」）",
        "viText": "Điều gì khiến bạn ngạc nhiên?　（※「～て、びっくりしました。」tôi ngạc nhiên vì ...）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.2.mp3"
    },
    {
        "lesson": 39,
        "id": "39-3",
        "text": "どんなことで　がっかりした？　（※「～て、がっかりしました。」）",
        "viText": "Điều gì khiến bạn thất vọng?　（※「～て、がっかりしました。」tôi thất vọng vì ...）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.3.mp3"
    },
    {
        "lesson": 39,
        "id": "39-4",
        "text": "どんなことで　<ruby>残念<rt>ざんねん</rt></ruby>だった？　（※「～て、<ruby>残念<rt>ざんねん</rt></ruby>でした。」）",
        "viText": "Điều gì khiến bạn tiếc nuối?（※「～て、<ruby>残念<rt>ざんねん</rt></ruby>でした。」tôi thấy tiếc nuối vì...）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.4.mp3"
    },
    {
        "lesson": 39,
        "id": "39-5",
        "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>困<rt>こま</rt></ruby>っていること 　ある？　（※「～て、<ruby>困<rt>こま</rt></ruby>っています。」、「いいえ、ありません。」）",
        "viText": "Bạn có đang gặp rắc rối nào đó không ? （※「～て、<ruby>困<rt>こま</rt></ruby>っています。」tôi đang gặp rắc rối vì ... 、「いいえ、ありません。không, tôi không có rắc rối nào cả」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.5.mp3"
    },
    {
        "lesson": 39,
        "id": "39-6",
        "text": "<ruby>事故<rt>じこ</rt></ruby>がありました。<ruby>会社<rt>かいしゃ</rt></ruby>に/<ruby>学校<rt>がっこう</rt></ruby>に<ruby>遅<rt>おく</rt></ruby>れました。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。（※「『<ruby>事故<rt>じこ</rt></ruby>で/<ruby>事故<rt>じこ</rt></ruby>があって、<ruby>遅<rt>おく</rt></ruby>れました。すみません。』と<ruby>言<rt>い</rt></ruby>います。」）",
        "viText": "Trên đường đi làm/đi học thì có tai nạn nên bạn đến muộn. Bạn sẽ nói gì ? （※「Dùng câu『<ruby>事故<rt>じこ</rt></ruby>で/<ruby>事故<rt>じこ</rt></ruby>があって、<ruby>遅<rt>おく</rt></ruby>れました。すみません。』と<ruby>言<rt>い</rt></ruby>います。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.6.mp3"
    },
    {
        "lesson": 39,
        "id": "39-7",
        "text": "<ruby>今日<rt>きょう</rt></ruby>、<ruby>会社<rt>かいしゃ</rt></ruby>/<ruby>大学<rt>だいがく</rt></ruby>を<ruby>休<rt>やす</rt></ruby>みたいです。<ruby>理由<rt>りゆう</rt></ruby>を<ruby>言<rt>い</rt></ruby>って、<ruby>連絡<rt>れんらく</rt></ruby>してください。　（※「～ので、<ruby>休<rt>やす</rt></ruby>んでもいいですか。/<ruby>休<rt>やす</rt></ruby>ませてください。」）",
        "viText": "Bạn muốn nghỉ học. Hãy đưa ra lý do để xin phép.  （※Dùng mẫu「～ので、<ruby>休<rt>やす</rt></ruby>んでもいいですか。/<ruby>休<rt>やす</rt></ruby>ませてください。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.7.mp3"
    },
    {
        "lesson": 39,
        "id": "39-8",
        "text": "<ruby>早<rt>はや</rt></ruby>く<ruby>帰<rt>かえ</rt></ruby>りたいです。<ruby>課長<rt>かちょう</rt></ruby>に　<ruby>理由<rt>りゆう</rt></ruby>を<ruby>言<rt>い</rt></ruby>って　<ruby>許可<rt>きょか</rt></ruby>/OK　を  もらってください。 （※「～ので、<ruby>帰<rt>かえ</rt></ruby>ってもいいですか。/<ruby>帰<rt>かえ</rt></ruby>らせてください。」",
        "viText": "Bạn muốn về sớm. Hãy nói lý do với quản lý để nhận được sự đồng ý. （※ Dùng mẫu「～ので、<ruby>帰<rt>かえ</rt></ruby>ってもいいですか。/<ruby>帰<rt>かえ</rt></ruby>らせてください。」",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.8.mp3"
    },
    {
        "lesson": 39,
        "id": "39-9",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>で、ケガをした<ruby>人<rt>ひと</rt></ruby>がいます。　<ruby>誰<rt>だれ</rt></ruby>かを<ruby>呼<rt>よ</rt></ruby>んでください。　（※「○○さんがケガをした/ケガをした<ruby>人<rt>ひと</rt></ruby>がいる　ので、<ruby>来<rt>き</rt></ruby>てください。」）",
        "viText": "Ở trường đại học/cao đẳng có người bị thương. Hãy gọi ai đó giúp đỡ.  （※Dùng mẫu「○○さんがケガをした/ケガをした<ruby>人<rt>ひと</rt></ruby>がいる ので、<ruby>来<rt>き</rt></ruby>てください。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.9.mp3"
    },
    {
        "lesson": 39,
        "id": "39-10",
        "text": "<ruby>友達<rt>ともだち</rt></ruby>に<ruby>誘<rt>さそ</rt></ruby>われましたが、<ruby>行<rt>い</rt></ruby>けません。うまく <ruby>返事<rt>へんじ</rt></ruby>をしてください。：「<ruby>今晩<rt>こんばん</rt></ruby>、<ruby>食事<rt>しょくじ</rt></ruby>に<ruby>行<rt>い</rt></ruby>きませんか」　（※「ちょっと<ruby>約束<rt>やくそく</rt></ruby>があって・・・/があるので、<ruby>行<rt>い</rt></ruby>けません。」など。）",
        "viText": "Bạn được mời đi ăn nhưng bạn lại không thể đi được. Hãy đáp lại lời mời một cách đàng hoàng. （※ Dùng mẫu「ちょっと<ruby>約束<rt>やくそく</rt></ruby>があって・・・/があるので、<ruby>行<rt>い</rt></ruby>けません。」など。）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.10.mp3"
    },
    {
        "lesson": 40,
        "id": "40-1",
        "text": "スイッチ/<ruby>電源<rt>でんげん</rt></ruby>　がどこにあるかわかりません。<ruby>聞<rt>き</rt></ruby>いてください。（※「～か、<ruby>教<rt>おし</rt></ruby>えてください。」）",
        "viText": "Bạn không biết công tắc / nguồn điện ở đâu. Hãy hỏi. （※ Dùng mẫu「～か、<ruby>教<rt>おし</rt></ruby>えてください。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.1.mp3"
    },
    {
        "lesson": 40,
        "id": "40-2",
        "text": "１つ<ruby>仕事<rt>しごと</rt></ruby>が<ruby>終<rt>お</rt></ruby>わりました。<ruby>次<rt>つぎ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしたらいいですか。わかりません。<ruby>聞<rt>き</rt></ruby>いてください。　（※「<ruby>次<rt>つぎ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしたらいいか/すればいいか、<ruby>教<rt>おし</rt></ruby>えてください。」）",
        "viText": "Một công việc đã hoàn thành. Bạn không biết nên làm gì tiếp theo? Hãy hỏi.（※ Dùng mẫu:「<ruby>次<rt>つぎ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしたらいいか/すればいいか、<ruby>教<rt>おし</rt></ruby>えてください。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.2.mp3"
    },
    {
        "lesson": 40,
        "id": "40-3",
        "text": "<ruby>燃<rt>も</rt></ruby>えるゴミは<ruby>何曜日<rt>なんようび</rt></ruby>に<ruby>捨<rt>す</rt></ruby>てますか。わかりません。<ruby>聞<rt>き</rt></ruby>いてください。　（※「～か、<ruby>教<rt>おし</rt></ruby>えてください。」）",
        "viText": "Bạn không biết vứt rác cháy được vào thứ mấy?  Hãy hỏi. （※ Dùng mẫu 「～か、<ruby>教<rt>おし</rt></ruby>えてください。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.3.mp3"
    },
    {
        "lesson": 40,
        "id": "40-4",
        "text": "いつも<ruby>出<rt>で</rt></ruby>かける<ruby>前<rt>まえ</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>を<ruby>確<rt>たし</rt></ruby>かめますか。　（※ケータイを<ruby>持<rt>も</rt></ruby>っているかどうか/<ruby>鍵<rt>かぎ</rt></ruby>をかけたかどうか/<ruby>電気<rt>でんき</rt></ruby>を<ruby>消<rt>け</rt></ruby>したかどうか・・・。）",
        "viText": "Bạn thường kiểm tra những gì trước khi ra ngoài? （※ Như là mang điện thoại chưa, khóa hay tắt đèn chưa...）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.4.mp3"
    },
    {
        "lesson": 40,
        "id": "40-5",
        "text": "１０<ruby>年後<rt>ねんご</rt></ruby>、あなたは<ruby>何<rt>なに</rt></ruby>をしていますか。　/どこに<ruby>住<rt>す</rt></ruby>んでいますか。（※「～かわかりません。」、「～に<ruby>住<rt>す</rt></ruby>んでいます。/～をしています。」）",
        "viText": "10 năm sau bạn đang làm gì? /Bạn sống ở đâu? （※ Dùng mẫu 「～かわかりません。」、「～に住んでいます。/～をしています。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.5.mp3"
    },
    {
        "lesson": 40,
        "id": "40-6",
        "text": "<ruby>新<rt>あたら</rt></ruby>しい<ruby>服<rt>ふく</rt></ruby>を<ruby>買<rt>か</rt></ruby>う<ruby>前<rt>まえ</rt></ruby>に、<ruby>服<rt>ふく</rt></ruby>を<ruby>着<rt>き</rt></ruby>たい<ruby>時<rt>とき</rt></ruby>、<ruby>店<rt>みせ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>う？",
        "viText": "Trước khi mua quần áo mới, khi muốn mặc thử, bạn nói gì với nhân viên cửa hàng? / Trước khi mua quần áo mới, khi muốn mặc, bạn nói gì với nhân viên cửa hàng?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.6.mp3"
    },
    {
        "lesson": 40,
        "id": "40-7",
        "text": "<ruby>新<rt>あたら</rt></ruby>しい<ruby>靴<rt>くつ</rt></ruby>を<ruby>買<rt>か</rt></ruby>う<ruby>前<rt>まえ</rt></ruby>に、<ruby>靴<rt>くつ</rt></ruby>を<ruby>履<rt>は</rt></ruby>きたい<ruby>時<rt>とき</rt></ruby>、<ruby>店<rt>みせ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>う？",
        "viText": "Trước khi mua giày mới, khi muốn mang thử, bạn nói gì với nhân viên cửa hàng?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.7.mp3"
    },
    {
        "lesson": 40,
        "id": "40-8",
        "text": "<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったら、<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べてみたい？/<ruby>何<rt>なに</rt></ruby>をしてみたい？",
        "viText": "Nếu đến Nhật Bản, bạn muốn thử ăn món gì?/ muốn thử làm điều gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.8.mp3"
    },
    {
        "lesson": 40,
        "id": "40-9",
        "text": "どこへ<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>ってみたい？",
        "viText": "Bạn muốn đi du lịch ở đâu?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.9.mp3"
    },
    {
        "lesson": 40,
        "id": "40-10",
        "text": "<ruby>誰<rt>だれ</rt></ruby>に<ruby>会<rt>あ</rt></ruby>ってみたい？",
        "viText": "Bạn muốn gặp ai?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.10.mp3"
    },
    {
        "lesson": 41,
        "id": "41-1",
        "text": "クラスの<ruby>友達<rt>ともだち</rt></ruby>から<ruby>何<rt>なに</rt></ruby>かもらったことがありますか。<ruby>誰<rt>だれ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をもらいましたか。　（※「はい、あります。○さんに●をもらいました。」、「いいえ、ありません。」）",
        "viText": "Bạn đã từng nhận gì đó từ bạn cùng lớp chưa? Bạn đã nhận từ ai cái gi? （※ Dùng mẫu 「はい、あります。○さんに●をもらいました。」、「いいえ、ありません。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.1.mp3"
    },
    {
        "lesson": 41,
        "id": "41-2",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>から<ruby>何<rt>なに</rt></ruby>かもらったことがありますか。それは<ruby>何<rt>なん</rt></ruby>ですか。　（※はい、あります。○○をいただきました。」/「いいえ、ありません。」）",
        "viText": "Bạn đã từng nhận cái gì đó từ giáo viên của mình chưa? Nó là gì? （※ Dùng mẫu 「はい、あります。○○をいただきました。」/「いいえ、ありません。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.2.mp3"
    },
    {
        "lesson": 41,
        "id": "41-3",
        "text": "<ruby>誰<rt>だれ</rt></ruby>が<ruby>大学<rt>だいがく</rt></ruby>の<ruby>学費<rt>がくひ</rt></ruby>を<ruby>払<rt>はら</rt></ruby>ってくれますか。　　",
        "viText": "Ai trả học phí đại học cho bạn?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.3.mp3"
    },
    {
        "lesson": 41,
        "id": "41-4",
        "text": "<ruby>今<rt>いま</rt></ruby>まで<ruby>誰<rt>だれ</rt></ruby>が<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてくれましたか。",
        "viText": "Ai đã dạy tiếng Nhật cho bạn đến bây giờ?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.4.mp3"
    },
    {
        "lesson": 41,
        "id": "41-5",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>にもう<ruby>一度<rt>いちど</rt></ruby><ruby>説明<rt>せつめい</rt></ruby>してもらいたい<ruby>時<rt>とき</rt></ruby>、<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。　（※「～んですが、～くださいませんか。/いただけませんか。」）",
        "viText": "Khi bạn muốn giáo viên giải thích lại 1 lần nữa, bạn sẽ nói gì? （※ Dùng mẫu 「～んですが、～くださいませんか。/いただけませんか。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.5.mp3"
    },
    {
        "lesson": 41,
        "id": "41-6",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何<rt>なに</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてもらいたいですか。（<ruby>文法<rt>ぶんぽう</rt></ruby>、<ruby>言葉<rt>ことば</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>の<ruby>文化<rt>ぶんか</rt></ruby>など）　（※「～いただきたいです。」）",
        "viText": "Em muốn giáo viên dạy em điều gì? （Ngữ pháp, từ vựng, văn hóa Nhật Bản, v.v.） （※ Dùng mẫu 「～いただきたいです。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.6.mp3"
    },
    {
        "lesson": 41,
        "id": "41-7",
        "text": "<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>がわかりません。<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。　（※「～んですが、～くださいませんか。/いただけませんか。」）",
        "viText": "Bạn không hiểu ý nghĩa của chữ kanji. Bạn sẽ nói gì với giáo viên? （※ Dùng mẫu「～んですが、～くださいませんか。/いただけませんか。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.7.mp3"
    },
    {
        "lesson": 41,
        "id": "41-8",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>が<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>説明<rt>せつめい</rt></ruby>してくれました。<ruby>何<rt>なん</rt></ruby>とお<ruby>礼<rt>れい</rt></ruby>を<ruby>言<rt>い</rt></ruby>いますか。　（※「～くださって、…。」）",
        "viText": "Giáo viên giải thích mọi thứ một cách cẩn thận cho bạn. Bạn nói lời gì cảm ơn? （※ Dùng mẫu「～くださって、…。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.8.mp3"
    },
    {
        "lesson": 41,
        "id": "41-9a",
        "text": "あなたの<ruby>妹<rt>いもうと</rt></ruby>の<ruby>誕生日<rt>たんじょうび</rt></ruby>です。<ruby>何<rt>なに</rt></ruby>をしてあげたいですか。",
        "viText": "Ngày sinh nhật của em gái bạn. Bạn muốn làm gì cho em ấy?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.9a.mp3"
    },
    {
        "lesson": 41,
        "id": "41-9b",
        "text": "あなたの<ruby>弟<rt>おとうと</rt></ruby>の<ruby>誕生日<rt>たんじょうび</rt></ruby>です。<ruby>何<rt>なに</rt></ruby>をしてあげたいですか。",
        "viText": "Ngày sinh nhật của em trai bạn. Bạn muốn làm gì cho anh ấy?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.9b.mp3"
    },
    {
        "lesson": 41,
        "id": "41-10",
        "text": "<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>らなくて、<ruby>花<rt>はな</rt></ruby>や<ruby>野菜<rt>やさい</rt></ruby>の<ruby>元気<rt>げんき</rt></ruby>がない<ruby>時<rt>とき</rt></ruby>、どうしますか。",
        "viText": "Khi trời không mưa, hoa và rau không khỏe (không tươi), bạn sẽ làm gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.10.mp3"
    },
    {
        "lesson": 42,
        "id": "42-1",
        "text": "<ruby>健康<rt>けんこう</rt></ruby>のために、<ruby>何<rt>なに</rt></ruby>をしていますか。",
        "viText": "Bạn đang làm gì cho sức khỏe của mình?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.1.mp3"
    },
    {
        "lesson": 42,
        "id": "42-2a",
        "text": "<ruby>風邪<rt>かぜ</rt></ruby>をひいた<ruby>時<rt>とき</rt></ruby>、<ruby>早<rt>はや</rt></ruby>く　<ruby>治<rt>なお</rt></ruby>すために、<ruby>何<rt>なに</rt></ruby>をしたらいいですか。",
        "viText": "Khi bị cảm lạnh, bạn nên làm gì để nhanh chóng hồi phục?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.2a.mp3"
    },
    {
        "lesson": 42,
        "id": "42-2b",
        "text": "<ruby>好<rt>す</rt></ruby>きな　<ruby>仕事<rt>しごと</rt></ruby>をするために、<ruby>何<rt>なに</rt></ruby>をしたらいいですか。",
        "viText": "Bạn nên làm gì để làm công việc mình yêu thích?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.2b.mp3"
    },
    {
        "lesson": 42,
        "id": "42-3",
        "text": "<ruby>何<rt>なん</rt></ruby>のために、<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めましたか。",
        "viText": "Tại sao bạn bắt đầu học tiếng Nhật?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.3.mp3"
    },
    {
        "lesson": 42,
        "id": "42-4",
        "text": "<ruby>日本<rt>にほん</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>くためには、どのぐらい<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>すればいいと<ruby>思<rt>おも</rt></ruby>いますか。",
        "viText": "Bạn nghĩ mình cần học tiếng Nhật bao nhiêu lâu để làm việc tại Nhật Bản?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.4.mp3"
    },
    {
        "lesson": 42,
        "id": "42-5",
        "text": "この<ruby>会話<rt>かいわ</rt></ruby><ruby>反応<rt>はんのう</rt></ruby>チェックは、<ruby>何<rt>なん</rt></ruby>のためにしていると<ruby>思<rt>おも</rt></ruby>いますか。",
        "viText": "Bạn nghĩ mục đích của bài kiểm tra phản xạ hội thoại này là gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.5.mp3"
    },
    {
        "lesson": 42,
        "id": "42-6a",
        "text": "<ruby>都会<rt>とかい</rt></ruby>/（<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>）は <ruby>何<rt>なに</rt></ruby>をするのに<ruby>便利<rt>べんり</rt></ruby>な ところだと<ruby>思<rt>おも</rt></ruby>いますか。",
        "viText": "Theo bạn, thành phố lớn/(địa điểm nổi tiếng) là nơi thuận tiện để làm gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.6a.mp3"
    },
    {
        "lesson": 42,
        "id": "42-6b",
        "text": "<ruby>田舎<rt>いなか</rt></ruby>/（<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>）は <ruby>何<rt>なに</rt></ruby>をするのにいい ところだと<ruby>思<rt>おも</rt></ruby>いますか。",
        "viText": "Theo bạn, nông thôn/(địa điểm nổi tiếng) là nơi thích hợp để làm gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.6b.mp3"
    },
    {
        "lesson": 42,
        "id": "42-7",
        "text": "１<ruby>日<rt>にち</rt></ruby><ruby>自由<rt>じゆう</rt></ruby>な<ruby>時間<rt>じかん</rt></ruby>があります。その<ruby>時間<rt>じかん</rt></ruby>を<ruby>何<rt>なに</rt></ruby>に<ruby>使<rt>つか</rt></ruby>いますか。",
        "viText": "Bạn có một ngày rảnh rỗi. Bạn sẽ dùng khoảng thời gian đó vào việc gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.7.mp3"
    },
    {
        "lesson": 42,
        "id": "42-8",
        "text": "100<ruby>万<rt>まん</rt></ruby>VNDあります。<ruby>誰<rt>だれ</rt></ruby>のために、<ruby>何<rt>なん</rt></ruby>のために<ruby>使<rt>つか</rt></ruby>いますか。",
        "viText": "Bạn có 1tr VND. Bạn sẽ dùng số tiền đó cho ai và vào mục đích gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.8.mp3"
    },
    {
        "lesson": 42,
        "id": "42-9",
        "text": "あなたは、いつも<ruby>何<rt>なに</rt></ruby>をするためにスマホを<ruby>使<rt>つか</rt></ruby>っていますか。",
        "viText": "Bạn thường sử dụng điện thoại của mình để làm việc gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.9.mp3"
    },
    {
        "lesson": 42,
        "id": "42-10",
        "text": "スマホはパソコンより<ruby>何<rt>なに</rt></ruby>をするのに、<ruby>便利<rt>べんり</rt></ruby>ですか。どうしてですか。",
        "viText": "Theo bạn, so với máy tính, điện thoại thuận tiện hơn khi làm việc gì? Tại sao?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.10.mp3"
    },
    {
        "lesson": 43,
        "id": "43-1",
        "text": "この<ruby>絵<rt>え</rt></ruby>を<ruby>見<rt>み</rt></ruby>て、「Vそうですよ」で、<ruby>注意<rt>ちゅうい</rt></ruby>してください。　（※「Vそうですよ。」）",
        "viText": "Hãy nhìn bức tranh này và dùng mẫu câu 「Vそうですよ」 để nhắc nhở/cảnh báo người khác.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.1.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.1.jpg",
    },
    {
        "lesson": 43,
        "id": "43-2",
        "text": "<ruby>今週<rt>こんしゅう</rt></ruby>はどんな<ruby>天気<rt>てんき</rt></ruby>になりそうですか。",
        "viText": "Tuần này thời tiết có vẻ sẽ như thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.2.mp3"
    },
    {
        "lesson": 43,
        "id": "43-3",
        "text": "<ruby>今<rt>いま</rt></ruby>、JLPTのN4/N3を<ruby>受<rt>う</rt></ruby>けたら<ruby>合格<rt>ごうかく</rt></ruby>できそうですか。",
        "viText": "Nếu bây giờ bạn thi JLPT N4 / N3 , bạn có nghĩ rằng bạn có khả năng đậu không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.3.mp3"
    },
    {
        "lesson": 43,
        "id": "43-4",
        "text": "この<ruby>人<rt>ひと</rt></ruby>を<ruby>見<rt>み</rt></ruby>てどう<ruby>思<rt>おも</rt></ruby>いますか。",
        "viText": "Nhìn người này, bạn nghĩ như thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.4.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.4.jpg",
        "groupId": "group43-4"
    },
    {
        "lesson": 43,
        "id": "43-5",
        "text": "この<ruby>人<rt>ひと</rt></ruby>（Q４の<ruby>人<rt>ひと</rt></ruby>）に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。/<ruby>話<rt>はな</rt></ruby>しかけますか。　（※「～そうですね。どうしたんですか。」）",
        "viText": "(Đối với người số 4) Bạn sẽ nói gì với người này? / Bạn sẽ bắt chuyện như thế nào? （※ Dùng mẫu「～そうですね。どうしたんですか。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.5.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.4.jpg",
        "groupId": "group43-4"
    },
    {
        "lesson": 43,
        "id": "43-6",
        "text": "ベトナムで<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>する<ruby>人<rt>ひと</rt></ruby>は、これから<ruby>増<rt>ふ</rt></ruby>えますか。<ruby>減<rt>へ</rt></ruby>りますか。どうなりそうですか。",
        "viText": "Trong thời gian tới, số người học tiếng Nhật ở Việt Nam sẽ tăng hay giảm? Bạn dự đoán sẽ như thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.6.mp3"
    },
    {
        "lesson": 43,
        "id": "43-7",
        "text": "ベトナムで、これからどんな<ruby>仕事<rt>しごと</rt></ruby>が<ruby>人気<rt>にんき</rt></ruby>になりそうですか。",
        "viText": "Theo bạn, sắp tới ở Việt Nam, công việc gì sẽ trở nên được ưa chuộng?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.7.mp3"
    },
    {
        "lesson": 43,
        "id": "43-8",
        "text": "<ruby>今日<rt>きょう</rt></ruby>は、100<ruby>円<rt>えん</rt></ruby>が〇〇ドンです。<ruby>日本<rt>にほん</rt></ruby>の<ruby>円<rt>えん</rt></ruby>は　これから　どうなりそうですか。",
        "viText": "Hôm nay, 100 yên bằng ○○ đồng. Theo bạn, từ nay trở đi đồng yên Nhật có vẻ sẽ như thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.8.mp3"
    },
    {
        "lesson": 43,
        "id": "43-9",
        "text": "<ruby>家<rt>うち</rt></ruby>に<ruby>名札<rt>なふだ</rt></ruby>／スマホ／<ruby>財布<rt>さいふ</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れて<ruby>来<rt>き</rt></ruby>ました。まだ<ruby>家<rt>うち</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くにいます。どうしますか。",
        "viText": "Bạn quên thẻ tên/điện thoại/ví tiền ở nhà. Vẫn đang gần nhà. Bạn sẽ làm như thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.9.mp3"
    },
    {
        "lesson": 43,
        "id": "43-10",
        "text": "<ruby>友達<rt>ともだち</rt></ruby>がコンビニへ<ruby>行<rt>い</rt></ruby>きます。あなたは<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>が<ruby>欲<rt>ほ</rt></ruby>しいです。<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>を<ruby>頼<rt>たの</rt></ruby>んでください。",
        "viText": "Bạn của bạn đi tới cửa hàng tiện lợi. Bạn muốn mua giùm đồ uống. Hãy nhờ bạn ấy mua giúp.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.10.mp3"
    },
    {
        "lesson": 44,
        "id": "44-1",
        "text": "ボールペンとシャープペンと、どちらが<ruby>使<rt>つか</rt></ruby>いやすいですか。　（※「～のほうが・・・。」）",
        "viText": "Giữa bút bi và bút chì kim, bạn thấy loại nào dễ sử dụng hơn? （※ Dùng mẫu「～のほうが・・・。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.1.mp3"
    },
    {
        "lesson": 44,
        "id": "44-2",
        "text": "<ruby>教室<rt>きょうしつ</rt></ruby>と<ruby>家<rt>いえ</rt></ruby>と、どちらが<ruby>勉強<rt>べんきょう</rt></ruby>しやすいですか。　（※「～のほうが…。」）",
        "viText": "Giữa lớp học và nhà thì nơi nào học dễ hơn? （※ Dùng mẫu「～のほうが…。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.2.mp3"
    },
    {
        "lesson": 44,
        "id": "44-3",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>でどんな<ruby>言葉<rt>ことば</rt></ruby>が<ruby>覚<rt>おぼ</rt></ruby>えにくいですか。",
        "viText": "Bạn thấy những từ nào trong tiếng Nhật khó ghi nhớ?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.3.mp3"
    },
    {
        "lesson": 44,
        "id": "44-4",
        "text": "<ruby>聴解<rt>ちょうかい</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>で、<ruby>音<rt>おと</rt></ruby>が<ruby>少<rt>すこ</rt></ruby>し<ruby>小<rt>ちい</rt></ruby>さい<ruby>時<rt>とき</rt></ruby>、<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と　<ruby>言<rt>い</rt></ruby>いますか。　　（※「～ので、Aに／Aく していただけませんか。」）",
        "viText": "Trong giờ học nghe hiểu, khi âm thanh hơi nhỏ, bạn sẽ nói gì với giáo viên? （※ Dùng mẫu「～ので、Aに／Aく していただけませんか。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.4.mp3"
    },
    {
        "lesson": 44,
        "id": "44-5",
        "text": "<ruby>宿題<rt>しゅくだい</rt></ruby>が　<ruby>難<rt>むずか</rt></ruby>しすぎます/<ruby>多<rt>おお</rt></ruby>すぎます。<ruby>先生<rt>せんせい</rt></ruby>に <ruby>何<rt>なん</rt></ruby>と <ruby>頼<rt>たの</rt></ruby>みますか。　（※「Aく/Aに　していただけませんか。」）　　",
        "viText": "Nếu bài tập về nhà quá khó hoặc quá nhiều, bạn sẽ nói gì để nhờ giáo viên? （※ Dùng mẫu「Aく/Aに していただけませんか。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.5.mp3"
    },
    {
        "lesson": 44,
        "id": "44-6",
        "text": "どの<ruby>漢字<rt>かんじ</rt></ruby>と、どの<ruby>漢字<rt>かんじ</rt></ruby>が<ruby>間違<rt>まちが</rt></ruby>えやすいと<ruby>思<rt>おも</rt></ruby>いますか。 （※「〇の<ruby>漢字<rt>かんじ</rt></ruby>と◎の<ruby>漢字<rt>かんじ</rt></ruby>が<ruby>間違<rt>まちが</rt></ruby>えやすいです。」）",
        "viText": "Bạn nghĩ chữ Hán nào với chữ Hán nào dễ bị nhầm với nhau?  （※Dùng mẫu「〇の<ruby>漢字<rt>かんじ</rt></ruby>と◎の<ruby>漢字<rt>かんじ</rt></ruby>が<ruby>間違<rt>まちが</rt></ruby>えやすいです。」）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.6.mp3"
    },
    {
        "lesson": 44,
        "id": "44-7",
        "text": "<ruby>何<rt>なに</rt></ruby>をしすぎると、<ruby>体<rt>からだ</rt></ruby>によくないと<ruby>思<rt>おも</rt></ruby>いますか。",
        "viText": "Theo bạn, nếu làm gì quá mức thì sẽ không tốt cho sức khỏe?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.7.mp3",
        "groupId": "group44-7"
    },
    {
        "lesson": 44,
        "id": "44-8",
        "text": "（Q１の<ruby>回答<rt>かいとう</rt></ruby>）それをし<ruby>過<rt>す</rt></ruby>ぎたことがありますか。どうなりましたか。（※ない<ruby>場合<rt>ばあい</rt></ruby>→どうなると<ruby>思<rt>おも</rt></ruby>いますか。）",
        "viText": "（Câu trả lời 1） Bạn đã bao giờ làm điều đó quá nhiều chưa? Đã trở nên như thế nào? （※ (Nếu chưa từng) Bạn nghĩ nếu làm quá nhiều thì sẽ như thế nào?）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.8.mp3",
        "groupId": "group44-7"
    },
    {
        "lesson": 44,
        "id": "44-9",
        "text": "この<ruby>大学<rt>だいがく</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くは<ruby>住<rt>す</rt></ruby>みやすいですか。<ruby>住<rt>す</rt></ruby>みにくいですか。それはどうしてですか。",
        "viText": "Khu vực gần trường đại học này dễ sống hay khó sống? Vì sao?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.9.mp3"
    },
    {
        "lesson": 44,
        "id": "44-10",
        "text": "<ruby>今日<rt>きょう</rt></ruby>の<ruby>昼<rt>ひる</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>/<ruby>晩<rt>ばん</rt></ruby>ごはんは、<ruby>何<rt>なに</rt></ruby>にしますか。",
        "viText": "Bữa trưa/bữa tối hôm nay bạn sẽ chọn ăn gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.10.mp3"
    },
    {
        "lesson": 45,
        "id": "45-1",
        "text": "<ruby>交通事故<rt>こうつうじこ</rt></ruby>にあった<ruby>場合<rt>ばあい</rt></ruby>、どうすればいいですか。",
        "viText": "Trường hợp gặp sự cố giao thông, bạn nên làm gì thì tốt?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.1.mp3"
    },
    {
        "lesson": 45,
        "id": "45-2a",
        "text": "<ruby>消防車<rt>しょうぼうしゃ</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>ぶのは、どんな<ruby>場合<rt>ばあい</rt></ruby>ですか。",
        "viText": "Bạn nên gọi xe cứu hỏa trong những tình huống nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.2a.mp3"
    },
    {
        "lesson": 45,
        "id": "45-2b",
        "text": "<ruby>救急車<rt>きゅうきゅうしゃ</rt></ruby>を<ruby>呼<rt>よ</rt></ruby>ぶのは、どんな<ruby>場合<rt>ばあい</rt></ruby>ですか。",
        "viText": "Khi nào bạn nên gọi xe cứu thương?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.2b.mp3"
    },
    {
        "lesson": 45,
        "id": "45-3",
        "text": "<ruby>会社<rt>かいしゃ</rt></ruby>が<ruby>始<rt>はじ</rt></ruby>まる<ruby>前<rt>まえ</rt></ruby>に、<ruby>連絡<rt>れんらく</rt></ruby>しなければならないのは、どんな<ruby>場合<rt>ばあい</rt></ruby>ですか。",
        "viText": "Trước khi công ty bắt đầu làm việc, những trường hợp nào bạn phải liên lạc (báo cho công ty)?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.3.mp3"
    },
    {
        "lesson": 45,
        "id": "45-4",
        "text": "<ruby>部屋<rt>へや</rt></ruby>を<ruby>借<rt>か</rt></ruby>ります。どんな<ruby>部屋<rt>へや</rt></ruby>は<ruby>借<rt>か</rt></ruby>りたくないですか。　（※「～のに、～へやは<ruby>借<rt>か</rt></ruby>りたくないです。」）",
        "viText": "Bạn sẽ thuê phòng. Bạn không muốn thuê phòng như thế nào? ",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.4.mp3"
    },
    {
        "lesson": 45,
        "id": "45-5",
        "text": "どんな<ruby>時<rt>とき</rt></ruby>、とても<ruby>残念<rt>ざんねん</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>いますか。　（※「～のに～<ruby>時<rt>とき</rt></ruby>です。」）",
        "viText": "Khi nào bạn cảm thấy thực sự thất vọng? （※ '~Mặc dù ~ đã đến lúc.'）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.5.mp3"
    },
    {
        "lesson": 45,
        "id": "45-6",
        "text": "どんな<ruby>場合<rt>ばあい</rt></ruby>、<ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>休<rt>やす</rt></ruby>んでもいいと<ruby>思<rt>おも</rt></ruby>いますか。",
        "viText": "Theo bạn, trong những trường hợp nào thì được phép nghỉ học?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.6.mp3"
    },
    {
        "lesson": 45,
        "id": "45-7",
        "text": "<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んだのに、<ruby>風邪<rt>かぜ</rt></ruby>が<ruby>良<rt>よ</rt></ruby>くならない<ruby>場合<rt>ばあい</rt></ruby>、どうしますか。",
        "viText": "Nếu đã uống thuốc mà cảm vẫn không khỏi thì bạn sẽ làm gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.7.mp3"
    },
    {
        "lesson": 45,
        "id": "45-8a",
        "text": "<ruby>何<rt>なに</rt></ruby>を<ruby>買<rt>か</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>しますか。（※「〇を<ruby>買<rt>か</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>します。」）",
        "viText": "Khi mua cái gì thì bạn sẽ bàn bạc với gia đình?（※ 'Nếu mua 〇, tôi sẽ bàn bạc với gia đình'）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.8a.mp3"
    },
    {
        "lesson": 45,
        "id": "45-8b",
        "text": "<ruby>何<rt>なに</rt></ruby>を<ruby>買<rt>か</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>、ひとりで<ruby>決<rt>き</rt></ruby>めますか。　（※「〇を<ruby>買<rt>か</rt></ruby>う<ruby>場合<rt>ばあい</rt></ruby>、ひとりで<ruby>決<rt>き</rt></ruby>めます。」）",
        "viText": "Khi làm việc gì thì bạn sẽ tự quyết định một mình?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.8b.mp3"
    },
    {
        "lesson": 45,
        "id": "45-9",
        "text": "<ruby>食<rt>た</rt></ruby>べたかったものを<ruby>家族<rt>かぞく</rt></ruby>が<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>食<rt>た</rt></ruby>べてしまいました。「～のに」を<ruby>使<rt>つか</rt></ruby>って、<ruby>残念<rt>ざんねん</rt></ruby>な<ruby>気持<rt>きも</rt></ruby>ちを<ruby>伝<rt>つた</rt></ruby>えてください。",
        "viText": "Gia đình đã ăn hết món mà tôi muốn ăn.Hãy sử dụng '～のに' để truyền đạt sự hối tiếc của bạn.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.9.mp3"
    },
    {
        "lesson": 45,
        "id": "45-10b",
        "text": "<ruby>高<rt>たか</rt></ruby>いパソコンを<ruby>買<rt>か</rt></ruby>いましたが、すぐ<ruby>壊<rt>こわ</rt></ruby>れました。お<ruby>店<rt>みせ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>文句<rt>もんく</rt></ruby>/クレームを<ruby>言<rt>い</rt></ruby>ってください。",
        "viText": "Tôi đã mua một chiếc máy tính đắt tiền, nhưng nó bị hỏng nhanh chóng. Hãy phàn nàn/khiếu nại với nhân viên cửa hàng.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.10b.mp3"
    },
    {
        "lesson": 46,
        "id": "46-1",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>へ<ruby>入<rt>はい</rt></ruby>ったばかりの<ruby>時<rt>とき</rt></ruby>、どうでしたか。",
        "viText": "Khi vừa mới vào học đại học/cao đẳng, bạn cảm thấy thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.1.mp3"
    },
    {
        "lesson": 46,
        "id": "46-2",
        "text": "46<ruby>課<rt>か</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>は<ruby>終<rt>お</rt></ruby>わりましたか。　（※「～ところです。」）",
        "viText": "Bạn đã học xong bài 46 chưa? (※ Trả lời sử dụng mẫu cấu trúc ’～ところです。').",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.2.mp3"
    },
    {
        "lesson": 46,
        "id": "46-3",
        "text": "<ruby>電話<rt>でんわ</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。「～ところ」を<ruby>使<rt>つか</rt></ruby>って<ruby>説明<rt>せつめい</rt></ruby>してください。:「もしもし、<ruby>今<rt>いま</rt></ruby><ruby>何<rt>なに</rt></ruby>していますか。」",
        "viText": "Có điện thoại gọi đến. （Hãy dùng '～ところ' để trả lời: 'Alo, bây giờ bạn đang làm gì thế?...'）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.3.mp3"
    },
    {
        "lesson": 46,
        "id": "46-4",
        "text": "<ruby>電話<rt>でんわ</rt></ruby>が<ruby>来<rt>き</rt></ruby>ました。「～ところ」を<ruby>使<rt>つか</rt></ruby>って、「No」の<ruby>返事<rt>へんじ</rt></ruby>をしてください。：「もしもし、これから<ruby>食事<rt>しょくじ</rt></ruby>に<ruby>行<rt>い</rt></ruby>きませんか。」",
        "viText": "Có điện thoại gọi đến. （Hãy dùng '～ところ' để đưa ra câu trả lời từ chối ('Không'): 'Alo, đi ăn với tôi không?'）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.4.mp3"
    },
    {
        "lesson": 46,
        "id": "46-5a",
        "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>出発<rt>しゅっぱつ</rt></ruby>したら○○に、<ruby>何時<rt>なんじ</rt></ruby>ごろ<ruby>着<rt>つ</rt></ruby>きますか。  （※「～はずです」を<ruby>使<rt>つか</rt></ruby>って<ruby>説明<rt>せつめい</rt></ruby>してください。）",
        "viText": "Nếu bây giờ xuất phát thì khoảng mấy giờ sẽ đến 〇〇? (※ Hãy trả lời sử dụng mẫu cấu trúc '～はずです。' - chắc chắn/chắc là).",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.5a.mp3"
    },
    {
        "lesson": 46,
        "id": "46-5b",
        "text": "<ruby>田中<rt>たなか</rt></ruby>さんと<ruby>話<rt>はなし</rt></ruby>たいですが、<ruby>今<rt>いま</rt></ruby>どこにいますか。 （※「～はずです」を<ruby>使<rt>つか</rt></ruby>って<ruby>説明<rt>せつめい</rt></ruby>してください。）",
        "viText": "Tôi muốn nói chuyện với anh Tanaka, bây giờ anh ấy đang ở đâu vậy? (※ Hãy trả lời sử dụng mẫu cấu trúc '～はずです。')",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.5b.mp3"
    },
    {
        "lesson": 46,
        "id": "46-6",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めたばかりの<ruby>時<rt>とき</rt></ruby>、どうでしたか。",
        "viText": "Khi vừa mới bắt đầu học tiếng Nhật, bạn cảm thấy thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.6.mp3"
    },
    {
        "lesson": 46,
        "id": "46-7a",
        "text": "<ruby>専門<rt>せんもん</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>と<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>と、どちらが<ruby>難<rt>むずか</rt></ruby>しいですか。",
        "viText": "Giữa việc học chuyên ngành và học tiếng Nhật, việc nào khó hơn?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.7a.mp3"
    },
    {
        "lesson": 46,
        "id": "46-7b",
        "text": "<ruby>専門<rt>せんもん</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>と<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>と、どちらがおもしろいですか。",
        "viText": "Giữa việc học chuyên ngành và học tiếng Nhật, việc nào thú vị hơn?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.7b.mp3"
    },
    {
        "lesson": 46,
        "id": "46-8",
        "text": "あなたは、<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>をどれぐらい<ruby>頑張<rt>がんば</rt></ruby>っていると<ruby>思<rt>おも</rt></ruby>いますか。　パーセントで<ruby>答<rt>こた</rt></ruby>えてください。",
        "viText": "Bạn tự thấy mình đang cố gắng học tiếng Nhật khoảng bao nhiêu phần trăm? (Hãy trả lời bằng số phần trăm).",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.8.mp3"
    },
    {
        "lesson": 46,
        "id": "46-9",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>してよかったと<ruby>思<rt>おも</rt></ruby>ったことはありますか。それはどんな<ruby>時<rt>とき</rt></ruby>ですか。",
        "viText": "Có khi nào bạn cảm thấy thật tốt/may mắn vì đã học tiếng Nhật không? Đó là những lúc như thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.9.mp3"
    },
    {
        "lesson": 46,
        "id": "46-10",
        "text": "<ruby>最近<rt>さいきん</rt></ruby><ruby>覚<rt>おぼ</rt></ruby>えた<ruby>好<rt>す</rt></ruby>きな<ruby>言葉<rt>ことば</rt></ruby>や、<ruby>好<rt>す</rt></ruby>きな<ruby>漢字<rt>かんじ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。",
        "viText": "Hãy chia sẻ (cho tôi biết) từ vựng yêu thích hoặc chữ Kanji yêu thích mà bạn vừa mới nhớ/học gần đây.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.10.mp3"
    },
    {
        "lesson": 47,
        "id": "47-1",
        "text": "あなたは<ruby>天気予報<rt>てんきよほう</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きました。<ruby>明日<rt>あした</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>を<ruby>私<rt>わたし</rt></ruby>に<ruby>教<rt>おし</rt></ruby>えてください。",
        "viText": "Bạn đã nghe dự báo thời tiết rồi. Hãy cho tôi biết thời tiết ngày mai thế nào đi.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.1.mp3"
    },
    {
        "lesson": 47,
        "id": "47-2",
        "text": "あなたが<ruby>他<rt>ほか</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>から<ruby>聞<rt>き</rt></ruby>いた<ruby>話<rt>はなし</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。 （※<ruby>詳<rt>くわ</rt></ruby>しい<ruby>内容<rt>ないよう</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>、「<ruby>誰<rt>だれ</rt></ruby>が<ruby>何<rt>なに</rt></ruby>をする。/した。」「どこで<ruby>何<rt>なに</rt></ruby>がある。/あった。」など<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>内容<rt>ないよう</rt></ruby>が<ruby>言<rt>い</rt></ruby>えれば<ruby>良<rt>よ</rt></ruby>い。）",
        "viText": "Hãy kể cho tôi nghe một chuyện mà bạn nghe được từ người khác. (※ Không cần nội dung quá chi tiết, chỉ cần nói 'ai đã nói cái gì, ở đâu')",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.2.mp3"
    },
    {
        "lesson": 47,
        "id": "47-3",
        "text": "あなたが<ruby>他<rt>ほか</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>から<ruby>聞<rt>き</rt></ruby>いた<ruby>話<rt>はなし</rt></ruby>をもうひとつ<ruby>教<rt>おし</rt></ruby>えてください。 （※<ruby>詳<rt>くわ</rt></ruby>しい<ruby>内容<rt>ないよう</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>、「<ruby>誰<rt>だれ</rt></ruby>が<ruby>何<rt>なに</rt></ruby>をする。/した。」「どこで<ruby>何<rt>なに</rt></ruby>がある。/あった。」など<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>内容<rt>ないよう</rt></ruby>が<ruby>言<rt>い</rt></ruby>えれば<ruby>良<rt>よ</rt></ruby>い。）",
        "viText": "Hãy kể cho tôi nghe một câu chuyện khác mà bạn đã nghe từ những người khác. （* Không cần nội dung chi tiết, "Ai đã làm gì?" "Cái gì ở đâu, cái gì là..." Sẽ rất tốt nếu có thể nói điều gì đó đơn giản.）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.3.mp3"
    },
    {
        "lesson": 47,
        "id": "47-4",
        "text": "<ruby>私<rt>わたし</rt></ruby>が<ruby>言<rt>い</rt></ruby>ったことに「～ようです」を<ruby>使<rt>つか</rt></ruby>って<ruby>応<rt>こた</rt></ruby>えてください。：「<ruby>教室<rt>きょうしつ</rt></ruby>に/<ruby>店<rt>みせ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>人<rt>ひと</rt></ruby>が<ruby>集<rt>あつ</rt></ruby>まっていますね。」",
        "viText": "Hãy dùng cấu trúc '～ようです。' để phản hồi lại câu tôi nói: 'Mọi người đang tập trung ở trong lớp học / trước cửa hàng.'",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.4.mp3"
    },
    {
        "lesson": 47,
        "id": "47-5",
        "text": "<ruby>私<rt>わたし</rt></ruby>が<ruby>言<rt>い</rt></ruby>ったことに「～ようです」を<ruby>使<rt>つか</rt></ruby>って<ruby>応<rt>こた</rt></ruby>えてください。：「<ruby>外<rt>そと</rt></ruby>がにぎやかですね。/<ruby>今<rt>いま</rt></ruby>、<ruby>大<rt>おお</rt></ruby>きい<ruby>音<rt>おと</rt></ruby>がしましたね。」",
        "viText": "Hãy dùng cấu trúc '～ようです。' để phản hồi lại câu tôi nói: 'Bên ngoài ồn ào/nhộn nhịp nhỉ.'",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.5.mp3"
    },
    {
        "lesson": 47,
        "id": "47-6",
        "text": "JLPT N4はもう<ruby>受<rt>う</rt></ruby>けましたか。これから<ruby>受<rt>う</rt></ruby>ける<ruby>予定<rt>よてい</rt></ruby>ですか。",
        "viText": "Bạn đã thi JLPT N4 chưa? Hay là từ giờ mới có kế hoạch thi?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.6.mp3",
        "groupId": "group47-6"
    },
    {
        "lesson": 47,
        "id": "47-7",
        "text": "<ruby>合格<rt>ごうかく</rt></ruby><ruby>出来<rt>でき</rt></ruby>そうですか、どうですか。　<ruby>合格<rt>ごうかく</rt></ruby>している<ruby>人<rt>ひと</rt></ruby>は<ruby>点数<rt>てんすう</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。　（※これからの<ruby>人<rt>ひと</rt></ruby>：「<ruby>受<rt>う</rt></ruby>けたら、<ruby>合格<rt>ごうかく</rt></ruby>できそうですか。」）",
        "viText": "Bạn thấy mình có khả năng đỗ không, tình hình thế nào? Những bạn đã đỗ rồi thì hãy cho tôi biết số điểm nhé.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.7.mp3",
        "groupId": "group47-6"
    },
    {
        "lesson": 47,
        "id": "47-8",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>何<rt>なに</rt></ruby>が<ruby>出来<rt>でき</rt></ruby>るようになるのが<ruby>目標<rt>もくひょう</rt></ruby>ですか。",
        "viText": "Mục tiêu của bạn là muốn bản thân có thể làm được điều gì bằng tiếng Nhật?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.8.mp3"
    },
    {
        "lesson": 47,
        "id": "47-9",
        "text": "<ruby>将来<rt>しょうらい</rt></ruby>、<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>使<rt>つか</rt></ruby>う<ruby>仕事<rt>しごと</rt></ruby>をしたいですか。どんな<ruby>仕事<rt>しごと</rt></ruby>がしたいですか。/どんな<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>きたいですか。",
        "viText": "Trong tương lai, bạn có muốn làm công việc sử dụng tiếng Nhật không? Bạn muốn làm công việc như thế nào? / Muốn làm việc ở công ty như thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.9.mp3"
    },
    {
        "lesson": 47,
        "id": "47-10",
        "text": "<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>大学生<rt>だいがくせい</rt></ruby>と<ruby>友達<rt>ともだち</rt></ruby>になったら、どんなことを<ruby>話<rt>はな</rt></ruby>してみたいですか。",
        "viText": "Nếu kết bạn với một bạn sinh viên người Nhật, bạn muốn thử trò chuyện với họ về những chủ đề gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.10.mp3"
    },
    {
        "lesson": 48,
        "id": "48-1",
        "text": "<ruby>授業中<rt>じゅぎょうちゅう</rt></ruby>、<ruby>先生<rt>せんせい</rt></ruby>は、みなさんに<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>話<rt>はなし</rt></ruby>をさせますか。ベトナム<ruby>語<rt>ご</rt></ruby>で<ruby>話<rt>はなし</rt></ruby>をさせますか。",
        "viText": "Trong giờ học, giáo viên có yêu cầu bạn nói tiếng Nhật/tiếng Việt không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.1.mp3",
        "groupId": "group48-1"
    },
    {
        "lesson": 48,
        "id": "48-2",
        "text": "<ruby>他<rt>ほか</rt></ruby>に、<ruby>授業中<rt>じゅぎょうちゅう</rt></ruby>、<ruby>先生<rt>せんせい</rt></ruby>はどんなことをさせますか。",
        "viText": "Ngoài ra, giáo viên còn yêu cầu bạn làm gì khác trong lớp không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.2.mp3",
        "groupId": "group48-1"
    },
    {
        "lesson": 48,
        "id": "48-3",
        "text": "<ruby>嫌<rt>きら</rt></ruby>いな<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>がありますか。 <ruby>子<rt>こ</rt></ruby>どもの<ruby>時<rt>とき</rt></ruby>、<ruby>両親<rt>りょうしん</rt></ruby>は<ruby>嫌<rt>きら</rt></ruby>いな<ruby>物<rt>もの</rt></ruby>をあなたに<ruby>食<rt>た</rt></ruby>べさせましたか。　（※ない<ruby>場合<rt>ばあい</rt></ruby>　たくさんごはんを<ruby>食<rt>た</rt></ruby>べさせましたか。）",
        "viText": "Bạn có món ăn nào ghét không? Hồi nhỏ ba mẹ có bắt bạn ăn những món bạn ghét không? (※ Trường hợp không có món ghét: Ba mẹ có bắt bạn ăn nhiều cơm không?)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.3.mp3"
    },
    {
        "lesson": 48,
        "id": "48-4",
        "text": "<ruby>子<rt>こ</rt></ruby>どもの<ruby>時<rt>とき</rt></ruby>、<ruby>両親<rt>りょうしん</rt></ruby>はあなたに<ruby>家<rt>いえ</rt></ruby>の<ruby>手伝<rt>てつだ</rt></ruby>いをさせましたか。<ruby>何<rt>なに</rt></ruby>をさせましたか。",
        "viText": "Lúc nhỏ ba mẹ có bắt bạn phụ việc nhà không? Ba mẹ đã bắt bạn làm những gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.4.mp3"
    },
    {
        "lesson": 48,
        "id": "48-5",
        "text": "<ruby>熱<rt>ねつ</rt></ruby>があるので、<ruby>今日<rt>きょう</rt></ruby><ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>休<rt>やす</rt></ruby>みたいです。<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>話<rt>はな</rt></ruby>してください。",
        "viText": "Vì bị sốt nên hôm nay bạn muốn xin nghỉ học. Bạn sẽ nói gì với giáo viên? Hãy đưa ra lời xin phép lịch sự.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.5.mp3"
    },
    {
        "lesson": 48,
        "id": "48-6",
        "text": "<ruby>親<rt>おや</rt></ruby>になったら、<ruby>子<rt>こ</rt></ruby>どもに<ruby>何<rt>なに</rt></ruby>を<ruby>習<rt>なら</rt></ruby>わせたいですか。",
        "viText": "Khi trở thành cha mẹ, bạn muốn cho con mình học cái gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.6.mp3"
    },
    {
        "lesson": 48,
        "id": "48-7",
        "text": "<ruby>親<rt>おや</rt></ruby>になったら、<ruby>子<rt>こ</rt></ruby>どもを<ruby>留学<rt>りゅうがく</rt></ruby>させますか。<ruby>留学<rt>りゅうがく</rt></ruby>させる<ruby>場合<rt>ばあい</rt></ruby>、どの<ruby>国<rt>くに</rt></ruby>に<ruby>行<rt>い</rt></ruby>かせたいですか。",
        "viText": "Khi trở thành cha mẹ, bạn có cho con đi du học không? Nếu có, bạn muốn cho con đi du học ở quốc gia nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.7.mp3"
    },
    {
        "lesson": 48,
        "id": "48-8",
        "text": "<ruby>両親<rt>りょうしん</rt></ruby>はあなたのやりたいことをやらせてくれましたか。それはどんなことですか。",
        "viText": "Ba mẹ có cho phép bạn làm những điều bạn muốn không? Đó là những việc gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.8.mp3"
    },
    {
        "lesson": 48,
        "id": "48-9",
        "text": "<ruby>用事<rt>ようじ</rt></ruby>があって、<ruby>早<rt>はや</rt></ruby>く<ruby>帰<rt>かえ</rt></ruby>りたいです。<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>話<rt>はな</rt></ruby>してください。",
        "viText": "Vì có việc bận nên bạn muốn xin về sớm. Bạn sẽ nói gì với giáo viên? Hãy nói một cách lịch sự.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.9.mp3"
    },
    {
        "lesson": 48,
        "id": "48-10",
        "text": "<ruby>会社<rt>かいしゃ</rt></ruby>で、「マーケティング/<ruby>設計<rt>せっけい</rt></ruby>/<ruby>整備<rt>せいび</rt></ruby>」の<ruby>仕事<rt>しごと</rt></ruby>がやりたいです。<ruby>課長<rt>かちょう</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>話<rt>はな</rt></ruby>してください。　（※「～に～を・・・いただけませんか。」）",
        "viText": "Ở công ty, bạn muốn làm công việc về Marketing/Thiết kế/Bảo trì. Bạn sẽ nói gì với Trưởng phòng? Hãy nói một cách lịch sự. (※ Sử dụng mẫu câu nhờ vả: '～いただけませんか。')",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.10.mp3"
    },
    {
        "lesson": 49,
        "id": "49-1",
        "text": "（<ruby>日本人<rt>にほんじん</rt></ruby>）<ruby>先生<rt>せんせい</rt></ruby>に、いつベトナムに<ruby>来<rt>き</rt></ruby>たか、<ruby>聞<rt>き</rt></ruby>いてください。",
        "viText": "Hãy hỏi giáo viên (người Nhật) xem thầy/cô đến Việt Nam từ khi nào.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.1.mp3"
    },
    {
        "lesson": 49,
        "id": "49-2",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>に、<ruby>朝<rt>あさ</rt></ruby>ごはんは<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べたか、<ruby>聞<rt>き</rt></ruby>いてください。",
        "viText": "Hãy hỏi giáo viên xem sáng nay thầy/cô đã ăn gì.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.2.mp3"
    },
    {
        "lesson": 49,
        "id": "49-3",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>に、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしているか、<ruby>聞<rt>き</rt></ruby>いてください。",
        "viText": "Hãy hỏi giáo viên xem vào ngày nghỉ thầy/cô thường làm gì.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.3.mp3"
    },
    {
        "lesson": 49,
        "id": "49-4",
        "text": "<ruby>敬語<rt>けいご</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って<ruby>先生<rt>せんせい</rt></ruby>に<ruby>質問<rt>しつもん</rt></ruby>を２つしてください。",
        "viText": "Hãy dùng kính ngữ để đặt 2 câu hỏi cho giáo viên.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.4.mp3"
    },
    {
        "lesson": 49,
        "id": "49-6",
        "text": "<ruby>初<rt>はじ</rt></ruby>めて<ruby>会<rt>あ</rt></ruby>った<ruby>人<rt>ひと</rt></ruby>に<ruby>名前<rt>なまえ</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く<ruby>場合<rt>ばあい</rt></ruby>、<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>聞<rt>き</rt></ruby>いてください。",
        "viText": "Khi hỏi tên người mới gặp lần đầu thì nói thế nào? Hãy hỏi một cách lịch sự.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.6.mp3"
    },
    {
        "lesson": 49,
        "id": "49-7",
        "text": "<ruby>初<rt>はじ</rt></ruby>めて<ruby>会<rt>あ</rt></ruby>った<ruby>人<rt>ひと</rt></ruby>に、どんな<ruby>料理<rt>りょうり</rt></ruby>が<ruby>好<rt>す</rt></ruby>きか<ruby>聞<rt>き</rt></ruby>いてください。",
        "viText": "Hãy hỏi người mới gặp lần đầu xem họ thích món ăn như thế nào.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.7.mp3"
    },
    {
        "lesson": 49,
        "id": "49-8",
        "text": "お<ruby>客様<rt>きゃくさま</rt></ruby>に、「<ruby>座<rt>すわ</rt></ruby>ってください。」と<ruby>言<rt>い</rt></ruby>ってください。",
        "viText": "Hãy nói 'Xin mời ngồi' với khách hàng (bằng cách nói lịch sự).",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.8.mp3"
    },
    {
        "lesson": 49,
        "id": "49-9",
        "text": "お<ruby>客様<rt>きゃくさま</rt></ruby>に、「<ruby>住所<rt>じゅうしょ</rt></ruby>と<ruby>名前<rt>なまえ</rt></ruby>を<ruby>書<rt>か</rt></ruby>いてください。」と<ruby>言<rt>い</rt></ruby>ってください。",
        "viText": "Hãy nói 'Xin vui lòng viết địa chỉ và họ tên' với khách hàng (bằng cách nói lịch sự).",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.9.mp3"
    },
    {
        "lesson": 49,
        "id": "49-10",
        "text": "<ruby>会<rt>あ</rt></ruby>いたい<ruby>有名人<rt>ゆうめいじん</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>ですか。その<ruby>人<rt>ひと</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>か<ruby>質問<rt>しつもん</rt></ruby>してください。",
        "viText": "Người nổi tiếng mà bạn muốn gặp là ai? Hãy đặt một câu hỏi cho người đó.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.10.mp3"
    },
    {
        "lesson": 50,
        "id": "50-1",
        "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>にいます。<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>自己紹介<rt>じこしょうかい</rt></ruby>をしてください。　（※<ruby>名前<rt>なまえ</rt></ruby>と<ruby>出身<rt>しゅっしん</rt></ruby>を<ruby>言<rt>い</rt></ruby>う。）",
        "viText": "Hiện tại bạn đang ở Nhật. Hãy giới thiệu bản thân ngắn gọn. (※ Nêu họ tên và quê quán.)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.1.mp3"
    },
    {
        "lesson": 50,
        "id": "50-2",
        "text": "<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>上司<rt>じょうし</rt></ruby>に<ruby>聞<rt>き</rt></ruby>かれました。<ruby>謙譲語<rt>けんじょうご</rt></ruby>で<ruby>答<rt>こた</rt></ruby>えてください。：「これ、<ruby>食<rt>た</rt></ruby>べますか。」",
        "viText": "Bạn được sếp hỏi ở công ty. Hãy trả lời bằng khiêm nhường ngữ. 'Cậu có ăn cái này không?'",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.2.mp3"
    },
    {
        "lesson": 50,
        "id": "50-3",
        "text": "<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>上司<rt>じょうし</rt></ruby>に<ruby>聞<rt>き</rt></ruby>かれました。<ruby>謙譲語<rt>けんじょうご</rt></ruby>で<ruby>答<rt>こた</rt></ruby>えてください。：「これ、<ruby>知<rt>し</rt></ruby>っていますか。」",
        "viText": "Được sếp hỏi ở công ty. Hãy trả lời bằng khiêm nhường ngữ. 'Cậu có biết cái này không?'",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.3.mp3"
    },
    {
        "lesson": 50,
        "id": "50-4",
        "text": "<ruby>上司<rt>じょうし</rt></ruby>が、<ruby>忙<rt>いそが</rt></ruby>しそうなので、<ruby>手伝<rt>てつだ</rt></ruby>いたいです。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。　（※「～ます/ましょうか。」）",
        "viText": "Thấy cấp trên có vẻ bận nên bạn muốn giúp một tay. Bạn sẽ nói thế nào? (※ Dùng đuôi ~masu/mashou-ka)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.4.mp3"
    },
    {
        "lesson": 50,
        "id": "50-5",
        "text": "<ruby>社長<rt>しゃちょう</rt></ruby>がちょっと<ruby>疲<rt>つか</rt></ruby>れているようです。<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>を<ruby>持<rt>も</rt></ruby>ってきます。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。　※ （<ruby>謙譲語<rt>けんじょうご</rt></ruby>）ましょうか。（<ruby>尊敬語<rt>そんけいご</rt></ruby>）ますか。",
        "viText": "Giám đốc có vẻ hơi mệt. Bạn muốn đi lấy đồ uống cho giám đốc. Bạn sẽ nói thế nào? ※ (Khiêm nhường ngữ) ~mashou-ka? (Tôn kính ngữ) ~ masuka?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.5.mp3"
    },
    {
        "lesson": 50,
        "id": "50-6",
        "text": "<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>が、<ruby>道<rt>みち</rt></ruby>がわからなくて<ruby>困<rt>こま</rt></ruby>っているので<ruby>案内<rt>あんない</rt></ruby>したいです。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。　（※「～ます/ましょうか」）",
        "viText": "Giáo viên người Nhật không biết đường và đang gặp rắc rối, bạn muốn dẫn đường giúp. Bạn sẽ nói thế nào? (※ Dùng đuôi ~masu/mashou-ka)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.6.mp3"
    },
    {
        "lesson": 50,
        "id": "50-7",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>に<ruby>行<rt>い</rt></ruby>きたいです。<ruby>行<rt>い</rt></ruby>ってもいいか<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>聞<rt>き</rt></ruby>いてください。　（※「～よろしいですか。」）",
        "viText": "Bạn muốn đến nhà giáo viên chơi. Hãy hỏi xin phép thật lịch sự xem có được không. (※Dùng ~yoroshii-desuka?)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.7.mp3"
    },
    {
        "lesson": 50,
        "id": "50-8",
        "text": "<ruby>謙譲語<rt>けんじょうご</rt></ruby>で<ruby>答<rt>こた</rt></ruby>えてください。：「どちらに<ruby>住<rt>す</rt></ruby>んでいらっしゃいますか。」",
        "viText": "Hãy trả lời câu hỏi sau bằng khiêm nhường ngữ: 'Anh/chị đang sống ở đâu ạ?'",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.8.mp3"
    },
    {
        "lesson": 50,
        "id": "50-9",
        "text": "<ruby>謙譲語<rt>けんじょうご</rt></ruby>で<ruby>答<rt>こた</rt></ruby>えてください。：「どうぞ、<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がってください。」",
        "viText": "Hãy trả lời câu hỏi/lời mời sau bằng khiêm nhường ngữ: 'Xin mời anh/chị dùng bữa.'",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.9.mp3"
    },
    {
        "lesson": 50,
        "id": "50-10",
        "text": "<ruby>会<rt>あ</rt></ruby>いたかった<ruby>有名人<rt>ゆうめいじん</rt></ruby>に<ruby>会<rt>あ</rt></ruby>えました。<ruby>嬉<rt>うれ</rt></ruby>しい<ruby>気持<rt>きも</rt></ruby>ちを<ruby>伝<rt>つた</rt></ruby>えたいです。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。　（※「お<ruby>目に<rt>め</rt></ruby>にかかれて～。」/「お<ruby>会<rt>あ</rt></ruby>いできて～。」）",
        "viText": "Bạn đã gặp được người nổi tiếng mà mình hằng mong ước. Bạn muốn bày tỏ niềm vui sướng đó. Bạn sẽ nói thế nào? (※ Dùng 「お<ruby>目に<rt>め</rt></ruby>にかかれて～。」/「お<ruby>会<rt>あ</rt></ruby>いできて～。」)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.10.mp3"
    }

    ];
