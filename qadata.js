    // =============================================================================
    // DATA-PART: QUESTION DATA VARIABLE (qadata.js) Ver3.01c
    // =============================================================================
    const questions = [
        // ==================== LESSON 1 ====================
        { "lesson": 1, "id": "1-1a", "text": "お<ruby>名前<rt>なまえ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。/ <ruby>名前<rt>なまえ</rt></ruby>を <ruby>言<rt>い</rt></ruby>ってください/ おしえてください。", "viText": "Tên bạn là gì? / Hãy đọc tên của bạn / Hãy cho tôi biết tên của bạn. ", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.1a.mp3" },
        { "lesson": 1, "id": "1-1b", "text": "お<ruby>名前<rt>なまえ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。/ <ruby>名前<rt>なまえ</rt></ruby>を <ruby>言<rt>い</rt></ruby>ってください/ おしえてください。", "viText": "Tên bạn là gì? / Hãy đọc tên của bạn / Hãy cho tôi biết tên của bạn. ", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/1.1b.mp3" },
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
        { "lesson": 3, "id": "3-7b", "text": "あなたの<ruby>教室<rt>きょうしつ</rt></ruby>／<ruby>事務所<rt>じむしょ</rt></ruby>／<ruby>食堂<rt>しょくどう</rt></ruby>は 1<ruby>階<rt>かい</rt></ruby>／2<ruby>階<rt>かい</rt></ruby>／3<ruby>階<rt>かい</rt></ruby>ですか。", "viText": "Phòng học / văn phòng / nhà ăn của bạn 〇〇 ở tầng 1 / tầng 2 / tầng 3 phải không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/3.7b.mp3" },
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
        { "lesson": 6, "id": "6-4a", "text": "<ruby>今朝<rt>けさ</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましたか。<br>※食いない<ruby>場合<rt>ばあい</rt></ruby>：<ruby>昨日<rt>きのう</rt></ruby>、食ましたか。", "viText": "Sáng nay bạn đã ăn gì? *Trường hợp chưa ăn: Hôm qua bạn có ăn không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.4a.mp3" },
        { "lesson": 6, "id": "6-4b", "text": "<ruby>今朝<rt>けさ</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べましたか。<br>※食いない<ruby>場合<rt>ばあい</rt></ruby>：<ruby>昨日<rt>きのう</rt></ruby>、<ruby>何<rt>なに</rt></ruby>を食ましたか。", "viText": "Sáng nay bạn đã ăn gì? *Trường hợp chưa ăn: Hôm qua bạn đã ăn gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.4b.mp3" },
        { "lesson": 6, "id": "6-5", "text": "あなたは たばこを <ruby>吸<rt>す</rt></ruby>いますか。お<ruby>酒<rt>さけ</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みますか。", "viText": "Bạn 〇〇 có hút thuốc không? Có uống rượu không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.5.mp3" },
        { "lesson": 6, "id": "6-6", "text": "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>、いつも <ruby>何時<rt>なんじ</rt></ruby>に <ruby>起<rt>お</rt></ruby>きますか。", "viText": "Vào ngày nghỉ, bạn thường thức dậy lúc mấy giờ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.6.mp3" },
        { "lesson": 6, "id": "6-7a", "text": "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>、<ruby>勉強<rt>べんきょう</rt></ruby>しましたか／テレビを<ruby>見<rt>み</rt></ruby>ましたか／<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きましたか。", "viText": "Vào ngày nghỉ, bạn có học bài / xem tivi / nghe nhạc không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.7a.mp3" },
        { "lesson": 6, "id": "6-7b", "text": "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>、<ruby>勉強<rt>べんきょう</rt></ruby>しましたか／テレビを<ruby>見<rt>み</rt></ruby>ましたか／<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きましたか。", "viText": "Vào ngày nghỉ, bạn có học bài / xem tivi / nghe nhạc không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.7b.mp3" },
        { "lesson": 6, "id": "6-8", "text": "<ruby>日曜日<rt>にちようび</rt></ruby>、<ruby>誰<rt>だれ</rt></ruby>に <ruby>会<rt>あ</rt></ruby>いましたか。", "viText": "Chủ nhật bạn đã gặp ai?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.8.mp3" },
        { "lesson": 6, "id": "6-9", "text": "<ruby>昨日<rt>きのう</rt></ruby>、どこで <ruby>晩<rt>ばん</rt></ruby>ごはんを<ruby>食<rt>た</rt></ruby>べましたか。", "viText": "Hôm qua bạn ăn cơm tối ở đâu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.9.mp3" },
        { "lesson": 6, "id": "6-10", "text": "<ruby>次<rt>つぎ</rt></ruby>の<ruby>土曜日<rt>どようび</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしますか。", "viText": "Thứ bảy tới bạn sẽ làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/6.10.mp3" },

        // ==================== LESSON 7 ====================
        { "lesson": 7, "id": "7-1", "text": "<ruby>誕生日<rt>たんじょうび</rt></ruby>は <ruby>何<rt>なん</rt></ruby><ruby>月<rt>がつ</rt></ruby>／いつですか。", "viText": "Sinh nhật của bạn 〇〇 là tháng mấy / khi nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.1.mp3" },
        { "lesson": 7, "id": "7-2", "text": "（<ruby>去年<rt>きょねん</rt></ruby>の）<ruby>誕生日<rt>たんじょうび</rt></ruby>にプレゼントをもらいましたか。", "viText": "Bạn có nhận được quà vào sinh nhật (năm ngoái) không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.2.mp3" },
        { "lesson": 7, "id": "7-3", "text": "はい → <ruby>誰<rt>だれ</rt></ruby>に もらいましたか。<br>いいえ → あなたは、<ruby>去年<rt>きょねん</rt></ruby><ruby>誰<rt>だれ</rt></ruby>にプレゼントをあげましたか。", "viText": "Nếu có -> Bạn nhận từ ai? Nếu không -> Năm ngoái bạn 〇〇 đã tặng quà cho ai?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.3.mp3" },
        { "lesson": 7, "id": "7-4", "text": "<ruby>何<rt>なに</rt></ruby>をもらいましたか／<ruby>何<rt>なに</rt></ruby>をあげましたか。<br><ruby>何<rt>なに</rt></ruby>もあげませんでした → <ruby>今年<rt>ことし</rt></ruby>、<ruby>誰<rt>だれ</rt></ruby>にプレゼントをあげますか。", "viText": "Bạn đã nhận được gì / đã tặng gì? Nếu không tặng gì -> Năm nay bạn định tặng quà cho ai?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.4.mp3" },
        { "lesson": 7, "id": "7-5", "text": "それは、どんなプレゼントですか。（お<ruby>金<rt>かね</rt></ruby>：いくら もらいましたか）<br>※あげません → <ruby>家族<rt>かぞく</rt></ruby>にあげませんか。", "viText": "Món quà đó như thế nào? (Nếu là tiền: Nhận được bao nhiêu?) *Nếu không tặng -> Bạn không tặng cho gia đình à?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.5.mp3" },
        { "lesson": 7, "id": "7-6", "text": "<ruby>次<rt>つぎ</rt></ruby>は「9<ruby>課<rt>か</rt></ruby>」の<ruby>勉強<rt>べんきょう</rt></ruby>をしますね。<br>もう（ことば）の<ruby>予習<rt>よしゅう</rt></ruby>／<ruby>勉強<rt>べんきょう</rt></ruby>をしましたか。<br>※ はい、もう～ました  いいえ、まだです。／まだ～ていません。", "viText": "Tiếp theo chúng ta sẽ học (Bài 9) nhé. Bạn đã chuẩn bị từ vựng / học trước chưa? *Có, đã... / Chưa, tôi chưa làm", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.6.mp3" },
        { "lesson": 7, "id": "7-7", "text": "これは（<ruby>消<rt>け</rt></ruby>しゴムやボールペンなどを<ruby>持<rt>も</rt></ruby>ちながら）ベトナム<ruby>語<rt>ご</rt></ruby>で<ruby>何<rt>なん</rt></ruby>ですか。<br>（<ruby>物<rt>もの</rt></ruby>を<ruby>渡<rt>わた</rt></ruby>して）<ruby>日本語<rt>にほんご</rt></ruby>がわかりません。<ruby>私<rt>わたし</rt></ruby>に<ruby>質問<rt>しつもん</rt></ruby>してください。", "viText": "Cái này (cầm cục tẩy, bút bi...) tiếng Việt gọi là gì? (Đưa đồ vật) Bạn không biết tiếng Nhật, hãy đặt câu hỏi cho tôi đi.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.7.mp3" },
        { "lesson": 7, "id": "7-8", "text": "<ruby>日本人<rt>にほんじん</rt></ruby>は<ruby>箸<rt>はし</rt></ruby>でご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。<br>ベトナム<ruby>人<rt>じん</rt></ruby>は<ruby>何<rt>なに</rt></ruby>でご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べますか。", "viText": "Người Nhật ăn cơm bằng đũa. Người Việt Nam ăn cơm bằng gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.8.mp3" },
        { "lesson": 7, "id": "7-9", "text": "いつも、ケータイで<ruby>何<rt>なに</rt></ruby>をしますか。", "viText": "Bạn thường làm gì trên điện thoại di động?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.9.mp3" },
        { "lesson": 7, "id": "7-10", "text": "それ（Q9の<ruby>回答<rt>かいとう</rt></ruby>）は おもしろいですか／どうですか／どんな〇〇を～ますか", "viText": "(Nội dung trả lời ở câu 9) có thú vị không / như thế nào / bạn làm như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/7.10.mp3" },

        // ==================== LESSON 8 ====================
        { "lesson": 8, "id": "8-1", "text": "<ruby>出身地<rt>しゅっしんち</rt></ruby>はどこ／どちらですか。ここから<ruby>近<rt>ちか</rt></ruby>いですか。", "viText": "Quê của bạn 〇〇 ở đâu? Có gần đây không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.1.mp3" },
        { "lesson": 8, "id": "8-2", "text": "そこ（<ruby>出身地<rt>しゅっしんち</rt></ruby>）は <ruby>便利<rt>べんり</rt></ruby>なところですか。", "viText": "(Quê của bạn) có phải là một nơi tiện lợi không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.2.mp3" },
        { "lesson": 8, "id": "8-3", "text": "<ruby>出身地<rt>しゅっしんち</rt></ruby>は、どんなところですか。", "viText": "(Quê của bạn) là một nơi như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.3.mp3" },
        { "lesson": 8, "id": "8-4", "text": "あなたの<ruby>大学<rt>だいがく</rt></ruby>は <ruby>新<rt>あたら</rt></ruby>しいですか。", "viText": "Trường đại học của bạn có mới không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.4.mp3" },
        { "lesson": 8, "id": "8-5", "text": "あなたの<ruby>大学<rt>だいがく</rt></ruby>は どんな ところですか。", "viText": "Trường đại học của bạn là một nơi như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.5.mp3" },
        { "lesson": 8, "id": "8-6", "text": "<ruby>日本語<rt>にほんご</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しいですか。", "viText": "Tiếng Nhật có khó không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.6.mp3" },
        { "lesson": 8, "id": "8-7", "text": "どの<ruby>勉強<rt>べんきょう</rt></ruby>が おもしろいですか。", "viText": "Môn học nào làm bạn cảm thấy thú vị?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.7.mp3" },
        { "lesson": 8, "id": "8-8a", "text": "<ruby>毎日<rt>まいにち</rt></ruby>は どうですか。", "viText": "Việc học hàng ngày thì như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.8a.mp3" },
        { "lesson": 8, "id": "8-8b", "text": "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>は どうですか。", "viText": "Việc học tiếng Nhật thì như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.8b.mp3" },
        { "lesson": 8, "id": "8-9", "text": "クラスで だれが <ruby>親切<rt>しんせつ</rt></ruby>ですか／<ruby>元気<rt>げんき</rt></ruby>ですか／おもしろいですか。", "viText": "Trong lớp ai là người thân thiện / khỏe khoắn, năng động / thú vị nhất?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.9.mp3" },
        { "lesson": 8, "id": "8-10", "text": "どれがいいですか?　<ruby>赤<rt>あか</rt></ruby>、<ruby>青<rt>あお</rt></ruby>、<ruby>白<rt>しろ</rt></ruby>、<ruby>黒<rt>くろ</rt></ruby>?（…<ruby>赤<rt>あか</rt></ruby>がいいです／<ruby>赤<rt>あか</rt></ruby>いのがいいです） ※「これです」の<ruby>場合<rt>ばあい</rt></ruby>→これは<ruby>何色<rt>なにいろ</rt></ruby>ですか。", "viText": "(Cho xem các đồ vật khác màu) Bạn thích cái nào? (...Tôi thích cái màu đỏ) Nếu câu trả lời là tôi thích 'màu này' thì hỏi tiếp màu này là màu gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/8.10.mp3" },

        // ==================== LESSON 9 ====================
        { "lesson": 9, "id": "9-1a", "text": "あなたは、（①スポーツ②アニメ ③<ruby>音楽<rt>おんがく</rt></ruby>）が<ruby>好<rt>す</rt></ruby>きですか。<br>※いいえ：もう一つ<ruby>聞<rt>き</rt></ruby>く<br>※どれも<ruby>好<rt>す</rt></ruby>きでない → <ruby>何<rt>なに</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。（ゲーム、<ruby>旅行<rt>りょこう</rt></ruby>、<ruby>料理<rt>りょうり</rt></ruby>）", "viText": "Bạn 〇〇 có thích (① Thể thao ② Anime ③ Âm nhạc) không? *Nếu không: Hỏi sang cái khác. *Nếu không thích cái nào -> Hỏi: Vậy bạn thích cái gì? (Game, du lịch, nấu ăn...)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.1a.mp3" },
        { "lesson": 9, "id": "9-1b", "text": "あなたは、（①スポーツ②アニメ ③<ruby>音楽<rt>おんがく</rt></ruby>）が<ruby>好<rt>す</rt></ruby>きですか。<br>※いいえ：もう一つ<ruby>聞<rt>き</rt></ruby>く<br>※どれも<ruby>好<rt>す</rt></ruby>きでない → <ruby>何<rt>なに</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。（ゲーム、<ruby>旅行<rt>りょこう</rt></ruby>、<ruby>料理<rt>りょうり</rt></ruby>）", "viText": "Bạn 〇〇 có thích (① Thể thao ② Anime ③ Âm nhạc) không? *Nếu không: Hỏi sang cái khác. *Nếu không thích cái nào -> Hỏi: Vậy bạn thích cái gì? (Game, du lịch, nấu ăn...)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.1b.mp3" },
        { "lesson": 9, "id": "9-2a", "text": "どんなスポーツ／アニメ／<ruby>音楽<rt>おんがく</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。", "viText": "Bạn thích thể loại thể thao / anime / âm nhạc như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.2a.mp3" },
        { "lesson": 9, "id": "9-2b", "text": "どんなスポーツ／アニメ／<ruby>音楽<rt>おんがく</rt></ruby>が<ruby>好<rt>す</rt></ruby>きですか。", "viText": "Bạn thích thể loại thể thao / anime / âm nhạc như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.2b.mp3" },
        { "lesson": 9, "id": "9-3a", "text": "いつ しますか／<ruby>見<rt>み</rt></ruby>ますか／<ruby>聞<rt>き</rt></ruby>きますか。", "viText": "Bạn thường chơi / xem / nghe khi nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.3a.mp3" },
        { "lesson": 9, "id": "9-3b", "text": "いつ しますか／<ruby>見<rt>み</rt></ruby>ますか／<ruby>聞<rt>き</rt></ruby>きますか。", "viText": "Bạn thường chơi / xem / nghe khi nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.3b.mp3" },
        { "lesson": 9, "id": "9-4a", "text": "あなたは、<ruby>料理<rt>りょうり</rt></ruby>／<ruby>歌<rt>うた</rt></ruby>／<ruby>絵<rt>え</rt></ruby>／バドミントンが <ruby>上手<rt>じょうず</rt></ruby>ですか。", "viText": "Bạn 〇〇 có giỏi nấu ăn / ca hát / vẽ / cầu lông không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.4a.mp3" },
        { "lesson": 9, "id": "9-4b", "text": "あなたは、<ruby>料理<rt>りょうり</rt></ruby>／<ruby>歌<rt>うた</rt></ruby>／<ruby>絵<rt>え</rt></ruby>／バドミントンが <ruby>上手<rt>じょうず</rt></ruby>ですか。", "viText": "Bạn 〇〇 có giỏi nấu ăn / ca hát / vẽ / cầu lông không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.4b.mp3" },
        { "lesson": 9, "id": "9-5a", "text": "はい → だれに <ruby>習<rt>なら</rt></ruby>いましたか。", "viText": "Nếu giỏi -> Bạn học từ ai? Nếu không -> Ai giỏi ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.5a.mp3" },
        { "lesson": 9, "id": "9-5b", "text": "いいえ → だれが <ruby>上手<rt>じょうず</rt></ruby>ですか。", "viText": "Nếu giỏi -> Bạn học từ ai? Nếu không -> Ai giỏi ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.5b.mp3" },
        { "lesson": 9, "id": "9-6", "text": "<ruby>今週<rt>こんしゅう</rt></ruby>、<ruby>試験<rt>しけん</rt></ruby>がありますか。", "viText": "Tuần này bạn có bài kiểm tra / kì thi nào không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.6.mp3" },
        { "lesson": 9, "id": "9-7a", "text": "はい → <ruby>何時<rt>なんじ</rt></ruby>からですか。<ruby>何<rt>なん</rt></ruby>の<ruby>試験<rt>しけん</rt></ruby>ですか。", "viText": "Nếu có -> Từ mấy giờ? Thi môn gì? Nếu không -> Khi nào sẽ có bài thi? Thi môn gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.7a.mp3" },
        { "lesson": 9, "id": "9-7b", "text": "いいえ → いつ<ruby>試験<rt>しけん</rt></ruby>がありますか。<ruby>何<rt>なん</rt></ruby>の<ruby>試験<rt>しけん</rt></ruby>ですか。", "viText": "Nếu có -> Từ mấy giờ? Thi môn gì? Nếu không -> Khi nào sẽ có bài thi? Thi môn gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.7b.mp3" },
        { "lesson": 9, "id": "9-8", "text": "<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>約束<rt>やくそく</rt></ruby>がありますか。", "viText": "Vào ngày nghỉ, bạn có hẹn trước với bạn bè không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.8.mp3" },
        { "lesson": 9, "id": "9-9a", "text": "はい → だれと <ruby>約束<rt>やくそく</rt></ruby>しましたか。どんな<ruby>約束<rt>やくそく</rt></ruby>ですか。", "viText": "Nếu có -> Hẹn với ai / hẹn làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.9a.mp3" }, 
        { "lesson": 9, "id": "9-9b", "text": "いいえ → では、<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>、<ruby>時間<rt>じかん</rt></ruby>がありますか。", "viText": "Nếu không -> Vậy vào ngày nghỉ bạn có thời gian rảnh không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.9b.mp3" },
        { "lesson": 9, "id": "9-10", "text": "<ruby>私<rt>わたし</rt></ruby>（<ruby>先生<rt>せんせい</rt></ruby>）の<ruby>日本語<rt>にほんご</rt></ruby>が、わかりますか。<br>※「わかります」だけの<ruby>回答<rt>かいとう</rt></ruby>：ぜんぶ わかりますか。（よく、だいたい、あまり～ を<ruby>使<rt>つか</rt></ruby>った<ruby>回答<rt>かいとう</rt></ruby>が<ruby>望<rt>のぞ</rt></ruby>ましい）", "viText": "Bạn có hiểu tiếng Nhật của tôi (Thầy/Cô) không? *Nếu chỉ trả lời 'Hiểu': Bạn hiểu hết chứ? (Nên dùng phó từ như yoku, daitai, amari...)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/9.10.mp3" },

        // ==================== LESSON 10 ====================
        { "lesson": 10, "id": "10-1", "text": "あなた／<ruby>担任<rt>たんにん</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>／あなたの<ruby>家族<rt>かぞく</rt></ruby> は いまどこに いますか。", "viText": "Bạn 〇〇 / Thầy Cô 〇〇 / Gia đình bạn 〇〇 bây giờ đang ở đâu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.1.mp3" },
        { "lesson": 10, "id": "10-2", "text": "いま、（Q1<ruby>以外<rt>いがい</rt></ruby>の）<ruby>場所<rt>ばしょ</rt></ruby>／この<ruby>教室<rt>きょうしつ</rt></ruby>／この<ruby>部屋<rt>へや</rt></ruby>／この<ruby>部屋<rt>へや</rt></ruby>の<ruby>外<rt>そと</rt></ruby>）に だれが いますか。", "viText": "Bây giờ, ở (phòng học / phòng này / bên ngoài phòng này) có ai ở đó không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.2.mp3" },
        { "lesson": 10, "id": "10-3a", "text": "<ruby>教室<rt>きょうしつ</rt></ruby>で、あなたの <ruby>前<rt>まえ</rt></ruby>／<ruby>後<rt>うし</rt></ruby>ろ／となりの<ruby>人<rt>ひと</rt></ruby>／は <ruby>誰<rt>だれ</rt></ruby>ですか。", "viText": "(Trong lớp) Người ngồi trước / sau / bên cạnh bạn 〇〇 là ai?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.3a.mp3" },
        { "lesson": 10, "id": "10-3b", "text": "<ruby>教室<rt>きょうしつ</rt></ruby>で、あなたの <ruby>前<rt>まえ</rt></ruby>／<ruby>後<rt>うし</rt></ruby>ろ／となりの<ruby>人<rt>ひと</rt></ruby>／は <ruby>誰<rt>だれ</rt></ruby>ですか。", "viText": "(Trong lớp) Người ngồi trước / sau / bên cạnh bạn 〇〇 là ai?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.3b.mp3" },
        { "lesson": 10, "id": "10-4a", "text": "<ruby>教室<rt>きょうしつ</rt></ruby>の どこに ホワイトボード／テレビ／ごみばこ がありますか。", "viText": "Bảng trắng / tivi / thùng rác nằm ở đâu (trong phòng học)?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.4a.mp3" },
        { "lesson": 10, "id": "10-4b", "text": "<ruby>教室<rt>きょうしつ</rt></ruby>の どこに ホワイトボード／テレビ／ごみばこ がありますか。", "viText": "Bảng trắng / tivi / thùng rác nằm ở đâu (trong phòng học)?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.4b.mp3" },
        { "lesson": 10, "id": "10-5a", "text": "あなたの／<ruby>先生<rt>せんせい</rt></ruby>の <ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>／<ruby>中<rt>なか</rt></ruby>／<ruby>下<rt>した</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>がありますか。", "viText": "Trên / trong / dưới bàn của bạn 〇〇 / của Thầy Cô có cái gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.5a.mp3" },
        { "lesson": 10, "id": "10-5b", "text": "あなたの／<ruby>先生<rt>せんせい</rt></ruby>の <ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>／<ruby>中<rt>なか</rt></ruby>／<ruby>下<rt>した</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>がありますか。", "viText": "Trên / trong / dưới bàn của bạn 〇〇 / của Thầy Cô có cái gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.5b.mp3" },
        { "lesson": 10, "id": "10-6", "text": "<ruby>大学<rt>だいがく</rt></ruby>／<ruby>短大<rt>たんだい</rt></ruby>は ベトナムのどこにありますか。<br>※<ruby>都市名<rt>としめい</rt></ruby>が<ruby>言<rt>い</rt></ruby>える。", "viText": "Trường Đại học 〇〇 / Cao đẳng 〇〇 nằm ở đâu tại Việt Nam? *Yêu cầu trả lời được tên thành phố.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.6.mp3" },
        { "lesson": 10, "id": "10-7", "text": "そこ（Q1<ruby>回答<rt>かいとう</rt></ruby>）に、 <ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>がありますか。<br>※はい、あります／いいえ、ありません。", "viText": "Ở (Nơi vừa trả lời ở câu 1) có địa điểm nào nổi tiếng không? *Có, có / Không, không có.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.7.mp3" },
        { "lesson": 10, "id": "10-8", "text": "（Q2<ruby>回答<rt>かいとう</rt></ruby>に）それはどこですか。<br>※<ruby>場所<rt>ばしょ</rt></ruby>の<ruby>名称<rt>めいしょう</rt></ruby>を<ruby>答<rt>こた</rt></ruby>える。", "viText": "(Địa danh nổi tiếng vừa nhắc tới) Đó là nơi nào? *Trả lời tên cụ thể của địa điểm đó.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.8.mp3" },
        { "lesson": 10, "id": "10-9", "text": "<ruby>大学<rt>だいがく</rt></ruby>の<ruby>近く<rt>ちか</rt></ruby>に <ruby>何<rt>なに</rt></ruby>が ありますか。", "viText": "Ở gần trường Đại học 〇〇 có cái gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.9.mp3" },
        { "lesson": 10, "id": "10-10", "text": "あなたの<ruby>出身地<rt>しゅっしんち</rt></ruby>は どこですか。それは ベトナムのどの<ruby>辺<rt>へん</rt></ruby>にありますか。<br>（ベトナムの<ruby>北部<rt>ほくぶ</rt></ruby>／<ruby>中部<rt>ちゅうぶ</rt></ruby>／<ruby>南部<rt>なんぶ</rt></ruby> です。）", "viText": "Quê của bạn 〇〇 ở đâu? Nó nằm ở khu vực nào của Việt Nam? (Miền Bắc / Miền Trung / Miền Nam).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/10.10.mp3" },
// ==================== LESSON 11 ====================
        { "lesson": 11, "id": "11-1a", "text": "<ruby>家族<rt>かぞく</rt></ruby>は<ruby>何人<rt>なんにん</rt></ruby>いますか。／<ruby>兄弟<rt>きょうだい</rt></ruby>は<ruby>何人<rt>なんにん</rt></ruby>ですか。／<ruby>何人<rt>なんにん</rt></ruby> <ruby>兄弟<rt>きょうだい</rt></ruby>ですか。", "viText": "Gia đình bạn có mấy người? / Bạn có mấy anh chị em? / Nhà có mấy anh em?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.1a.mp3" },
        { "lesson": 11, "id": "11-1b", "text": "<ruby>家族<rt>かぞく</rt></ruby>は<ruby>何人<rt>なんにん</rt></ruby>いますか。／<ruby>兄弟<rt>きょうだい</rt></ruby>は<ruby>何人<rt>なんにん</rt></ruby>ですか。／<ruby>何人<rt>なんにん</rt></ruby> <ruby>兄弟<rt>きょうだい</rt></ruby>ですか。", "viText": "Gia đình bạn có mấy người? / Bạn có mấy anh chị em? / Nhà có mấy anh em?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.1b.mp3" },
        { "lesson": 11, "id": "11-2a", "text": "<ruby>誰<rt>だれ</rt></ruby>がいますか。", "viText": "Gia đình gồm những ai?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.2a.mp3" },
        { "lesson": 11, "id": "11-2b", "text": "<ruby>お父<rt>とう</rt></ruby>さん／<ruby>お母<rt>かあ</rt></ruby>さん／お<ruby>兄<rt>にい</rt></ruby>さん／お<ruby>姉<rt>ねえ</rt></ruby>さん／<ruby>妹<rt>いもうと</rt></ruby>さん／<ruby>弟<rt>おとうと</rt></ruby>さんは、どんな<ruby>人<rt>ひと</rt></ruby>ですか。", "viText": "Bố / Mẹ / Anh / Chị / Em gái / Em trai của bạn là người như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.2b.mp3" },
        { "lesson": 11, "id": "11-3", "text": "ここから<ruby>家<rt>うち</rt></ruby>まで <ruby>何<rt>なに</rt></ruby>で <ruby>帰<rt>かえ</rt></ruby>りますか。（※「〜で帰ります」）", "viText": "Từ đây về nhà bạn đi bằng gì? (*Yêu cầu trả lời mẫu: 'Về bằng...')", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.3.mp3" },
        { "lesson": 11, "id": "11-4a", "text": "<ruby>片道<rt>かたみち</rt></ruby>／<ruby>往復<rt>おうふく</rt></ruby> いくらかかりますか。", "viText": "Đi một chiều / khứ hồi hết bao nhiêu tiền?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.4a.mp3" },
        { "lesson": 11, "id": "11-4b", "text": "<ruby>片道<rt>かたみち</rt></ruby>／<ruby>往復<rt>おうふく</rt></ruby> どのぐらい（なん<ruby>時間<rt>じかん</rt></ruby>ぐらい）かかりますか。", "viText": "Đi một chiều / khứ hồi Mất bao lâu (khoảng mấy tiếng)?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/11.4b.mp3" },
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
        { "lesson": 12, "id": "12-6a", "text": "あなたの<ruby>出身<rt>しゅっしん</rt></ruby>はどこですか。そこ（<ruby>出身地<rt>しゅっしんち</rt></ruby>）と ハノイ（<ruby>現在地<rt>げんざいち</rt></ruby>）と どちらが<ruby>好<rt>す</rt></ruby>きですか。<br>※<ruby>同<rt>おな</rt></ruby>じ<ruby>場合<rt>ばあい</rt></ruby>、<ruby>他<rt>ほか</rt></ruby>の<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>都市<rt>とし</rt></ruby>と<ruby>比<rt>くら</rt></ruby>べる", "viText": "Quê của bạn 〇〇 ở đâu? Giữa (Quê hương) và (Nơi ở hiện tại), bạn thích nơi nào hơn? *Nếu trùng nhau: So sánh với thành phố nổi tiếng khác.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.6a.mp3" },
        { "lesson": 12, "id": "12-6b", "text": "あなたの<ruby>出身<rt>しゅっしん</rt></ruby>はどこですか。そこ（<ruby>出身地<rt>しゅっしんち</rt></ruby>）と ホーチミン（<ruby>現在地<rt>げんざいち</rt></ruby>）と どちらが<ruby>好<rt>す</rt></ruby>きですか。<br>※<ruby>同<rt>おな</rt></ruby>じ<ruby>場合<rt>ばあい</rt></ruby>、<ruby>他<rt>ほか</rt></ruby>の<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>都市<rt>とし</rt></ruby>と<ruby>比<rt>くら</rt></ruby>べる", "viText": "Quê của bạn 〇〇 ở đâu? Giữa (Quê hương) và (Nơi ở hiện tại), bạn thích nơi nào hơn? *Nếu trùng nhau: So sánh với thành phố nổi tiếng khác.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.6b.mp3" },
        { "lesson": 12, "id": "12-7", "text": "どうしてですか。", "viText": "Tại sao lại như thế?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.7.mp3" },
        { "lesson": 12, "id": "12-8a", "text": "（HN／DN／HCM）で <ruby>何月<rt>なんがつ</rt></ruby>がいちばん<ruby>暑<rt>あつ</rt></ruby>いですか。", "viText": "Tháng mấy ở (HN/DN/HCM) là nóng nhất?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.8a.mp3" },
        { "lesson": 12, "id": "12-8b", "text": "（HN／DN／HCM）で <ruby>何月<rt>なんがつ</rt></ruby>がいちばん<ruby>暑<rt>あつ</rt></ruby>いですか。", "viText": "Tháng mấy ở (HN/DN/HCM) là nóng nhất?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.8b.mp3" },
        { "lesson": 12, "id": "12-9", "text": "あなたは、<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>で<ruby>何<rt>なに</rt></ruby>がいちばん<ruby>好<rt>す</rt></ruby>きですか。<br>※（ベトナム<ruby>語<rt>ご</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>OK）が好です。", "viText": "Về đồ ăn, bạn 〇〇 thích món nào nhất? *Trả lời bằng tiếng Việt (tên món ăn) cũng được chấp nhận.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.9.mp3" },
        { "lesson": 12, "id": "12-10a", "text": "クラスで <ruby>誰<rt>だれ</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby> <ruby>歌<rt>うた</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>／<ruby>背<rt>せ</rt></ruby>が<ruby>高<rt>た</rt></ruby>かい／おもしろい／<ruby>元気<rt>げんき</rt></ruby> ですか。", "viText": "Trong lớp ai là người hát hay nhất / cao nhất / thú vị nhất / năng nổ nhất?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.10a.mp3" },
        { "lesson": 12, "id": "12-10b", "text": "クラスで <ruby>誰<rt>だれ</rt></ruby>が<ruby>一番<rt>いちばん</rt></ruby> <ruby>歌<rt>うた</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>／<ruby>背<rt>せ</rt></ruby>が<ruby>高<rt>た</rt></ruby>かい／おもしろい／<ruby>元気<rt>げんき</rt></ruby> ですか。", "viText": "Trong lớp ai là người hát hay nhất / cao nhất / thú vị nhất / năng nổ nhất?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/12.10b.mp3" },

        // ==================== LESSON 13 ====================
        { "lesson": 13, "id": "13-1", "text": "お<ruby>金<rt>かね</rt></ruby>と<ruby>時間<rt>じかん</rt></ruby>と どちらが <ruby>欲<rt>ほ</rt></ruby>しいですか。", "viText": "Giữa tiền bạc và thời gian, bạn muốn cái nào hơn?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.1.mp3" },
        { "lesson": 13, "id": "13-2a", "text": "いま、（Q1の<ruby>回答<rt>かいとう</rt></ruby>）が たくさん あります。<ruby>何<rt>なに</rt></ruby>をしますか。", "viText": "Bây giờ nếu có thật nhiều (cái vừa trả lời ở câu 1), bạn sẽ làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.2a.mp3" },
        { "lesson": 13, "id": "13-2b", "text": "いま、（Q1の<ruby>回答<rt>かいとう</rt></ruby>）が たくさん あります。<ruby>何<rt>なに</rt></ruby>をしますか。", "viText": "Bây giờ nếu có thật nhiều (cái vừa trả lời ở câu 1), bạn sẽ làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.2b.mp3" },
        { "lesson": 13, "id": "13-3", "text": "いま、<ruby>何<rt>なに</rt></ruby>が いちばん <ruby>欲<rt>ほ</rt></ruby>しいですか。（お<ruby>金<rt>かね</rt></ruby>はダメです。）", "viText": "Bây giờ bạn muốn cái gì nhất? (Không trả lời là tiền)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.3.mp3" },
        { "lesson": 13, "id": "13-4", "text": "どんなの（Q3<ruby>回答<rt>かいとう</rt></ruby>）が<ruby>欲<rt>ほ</rt></ruby>しいですか。", "viText": "Bạn muốn một (thứ vừa trả lời ở câu 3) như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.4.mp3" },
        { "lesson": 13, "id": "13-5a", "text": "<ruby>喉<rt>のど</rt></ruby>が <ruby>渇<rt>かわ</rt></ruby>きましたか", "viText": "Bạn có khát nước không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.5a.mp3" },
        { "lesson": 13, "id": "13-5b", "text": "お<ruby>腹<rt>なか</rt></ruby>が<ruby>空<rt>す</rt></ruby>きましたか。", "viText": "Bạn có đói bụng không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.5b.mp3" },
        { "lesson": 13, "id": "13-6a", "text": "あなたは、いつ<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きますか。<ruby>何<rt>なに</rt></ruby>をしに<ruby>行<rt>い</rt></ruby>きますか。", "viText": "Khi nào bạn 〇〇 đi Nhật? Đi để làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.6a.mp3" },
        { "lesson": 13, "id": "13-6b", "text": "<ruby>早<rt>はや</rt></ruby>く<ruby>日本<rt>にほん</rt></ruby>へ行きたいですか。", "viText": "Bạn có muốn nhanh chóng đi Nhật không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/13.6b.mp3" },
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
        { "lesson": 14, "id": "14-6", "text": "<ruby>復唱<rt>ふくしょう</rt></ruby>してください。「<ruby>明日<rt>あした</rt></ruby>（8時に）<ruby>来<rt>き</rt></ruby>てください。」、『<ruby>明日<rt>あした</rt></ruby>8<ruby>時<rt>じ</rt></ruby>に<ruby>来<rt>き</rt></ruby>ますね。』", "viText": "Hãy nhắc lại theo tôi: Ngày mai hãy đến lúc 8 giờ nhé. (Ngày mai tôi sẽ đến lúc 8 giờ).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.6.mp3" },
        { "lesson": 14, "id": "14-7", "text": "<ruby>復唱<rt>ふくしょう</rt></ruby>してください。「ドア／<ruby>窓<rt>まど</rt></ruby> を <ruby>開<rt>あ</rt></ruby>けてください。」『窓を 開けますね。』", "viText": "Hãy nhắc lại theo tôi: Hãy mở cửa chính / cửa sổ ra giúp tôi. (Tôi mở cửa sổ nhé).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.7.mp3" },
        { "lesson": 14, "id": "14-8", "text": "ここに <ruby>自分<rt>じぶん</rt></ruby>の<ruby>大学名<rt>だいがくめい</rt></ruby>／<ruby>短期大学名<rt>たんきだいがくめい</rt></ruby>を<ruby>書<rt>か</rt></ruby>いて。<br>（※<ruby>実際<rt>じっさい</rt></ruby>に<ruby>書<rt>か</rt></ruby>くUTT<ruby>大学<rt>だいがく</rt></ruby>／LIC<ruby>短大<rt>たんだい</rt></ruby>など<ruby>省略可<rt>しょうりゃくか</rt></ruby>）", "viText": "Hãy viết tên trường Đại học / Cao đẳng của mình vào đây. (Thực hành viết thực tế, có thể viết tắt ví dụ UTT, LIC...)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.8.mp3" },
        { "lesson": 14, "id": "14-9", "text": "<ruby>立<rt>た</rt></ruby>って／<ruby>座<rt>すわ</rt></ruby>って／<ruby>後<rt>うし</rt></ruby>ろを<ruby>見<rt>み</rt></ruby>て／<ruby>手<rt>て</rt></ruby>を<ruby>見<rt>み</rt></ruby>せて／<ruby>手<rt>て</rt></ruby>を<ruby>上<rt>あ</rt></ruby>げて など（※<ruby>実際<rt>じっさい</rt></ruby>に<ruby>動<rt>うご</rt></ruby>く）", "viText": "Hãy đứng dậy / ngồi xuống / nhìn ra sau / cho tôi xem tay / giơ tay lên... (Học sinh thực hiện hành động thực tế)", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.9.mp3" },
        { "lesson": 14, "id": "14-10", "text": "<ruby>先生<rt>せんせい</rt></ruby>／<ruby>同<rt>おな</rt></ruby>じ<ruby>教室<rt>きょうしつ</rt></ruby>にいる<ruby>人<rt>ひと</rt></ruby> は いま <ruby>何<rt>なに</rt></ruby>をしていますか。", "viText": "Thầy/Cô/Người đang ở cùng phòng học này/ hiện tại đang làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/14.10.mp3" },

        // ==================== LESSON 15 ====================
        { "lesson": 15, "id": "15-1", "text": "あなたの／〇〇さんの  <ruby>家族<rt>かぞく</rt></ruby>は、どこに<ruby>住<rt>す</rt></ruby>んでいますか。", "viText": "Bạn 〇〇 / gia đình của bạn 〇〇 đang sinh sống ở đâu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.1.mp3" },
        { "lesson": 15, "id": "15-2a", "text": "お<ruby>父<rt>とう</rt></ruby>さんは/お<ruby>母<rt>かあ</rt></ruby>さんは、<ruby>何<rt>なん</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>をしていますか。<br>※「〜をしています」と<ruby>答<rt>こた</rt></ruby>える<br><ruby>兄弟<rt>きょうだい</rt></ruby>がいる<ruby>場合<rt>ばあい</rt></ruby>：お<ruby>兄<rt>にい</rt></ruby>さん/お<ruby>姉<rt>ねえ</rt></ruby>さんは<ruby>結婚<rt>けっこん</rt></ruby>していますか。", "viText": "Bố / Mẹ bạn đang làm công việc gì? *Yêu cầu trả lời đuôi '~ wo shiteimasu'. Nếu có anh chị: Anh / Chị của bạn đã kết hôn chưa?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.2a.mp3" },
        { "lesson": 15, "id": "15-2b", "text": "お<ruby>父<rt>とう</rt></ruby>さんは/お<ruby>母<rt>かあ</rt></ruby>さんは、<ruby>何<rt>なん</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>をしていますか。<br>※「〜をしています」と<ruby>答<rt>こた</rt></ruby>える<br><ruby>兄弟<rt>きょうだい</rt></ruby>がいる<ruby>場合<rt>ばあい</rt></ruby>：お<ruby>兄<rt>にい</rt></ruby>さん/お<ruby>姉<rt>ねえ</rt></ruby>さんは<ruby>結婚<rt>けっこん</rt></ruby>していますか。", "viText": "Bố / Mẹ bạn đang làm công việc gì? *Yêu cầu trả lời đuôi '~ wo shiteimasu'. Nếu có anh chị: Anh / Chị của bạn đã kết hôn chưa?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.2b.mp3" },
        { "lesson": 15, "id": "15-3", "text": "どうやって<ruby>家<rt>うち</rt></ruby>まで<ruby>帰<rt>かえ</rt></ruby>りますか。<br>※バスでかえります。（<ruby>詳細<rt>しょうさい</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>）<br><ruby>毎日<rt>まいにち</rt></ruby>どうやってセンターに<ruby>来<rt>き</rt></ruby>ていますか。<br>※バイクで来います（詳細は不要）", "viText": "Bạn đi về nhà bằng cách nào? *Ví dụ: Về bằng xe buýt (không cần chi tiết). Hàng ngày bạn đến trung tâm bằng cách nào? *Ví dụ: Đến bằng xe máy.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.3.mp3" },
        { "lesson": 15, "id": "15-4", "text": "あなたの<ruby>大学<rt>だいがく</rt></ruby>の<ruby>住所<rt>じゅうしょ</rt></ruby>を<ruby>知<rt>し</rt></ruby>っていますか。", "viText": "Bạn có biết địa chỉ của trường đại học không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.4.mp3" },
        { "lesson": 15, "id": "15-5a", "text": "<ruby>日本<rt>にほん</rt></ruby>に<ruby>友<rt>とも</rt></ruby>だちはいますか。<br>はい→<ruby>友<rt>とも</rt></ruby>だちはどこに<ruby>住<rt>す</rt></ruby>んでいますか。", "viText": "Bạn có bạn bè ở Nhật Bản không? Nếu có -> Bạn của bạn sống ở đâu? Nếu không -> Bạn có muốn có bạn là người Nhật không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.5a.mp3" },
        { "lesson": 15, "id": "15-5b", "text": "<ruby>日本<rt>にほん</rt></ruby>に<ruby>友<rt>とも</rt></ruby>だちはいますか。<br>いいえ→ 日本人の<ruby>友<rt>とも</rt></ruby>だちがほしいですか。", "viText": "Bạn có bạn bè ở Nhật Bản không? Nếu có -> Bạn của bạn sống ở đâu? Nếu không -> Bạn có muốn có bạn là người Nhật không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/15.5b.mp3" },
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
        { "lesson": 16, "id": "16-9", "text": "N4を<ruby>取<rt>と</rt></ruby>ってから<ruby>日本<rt>にほん</rt></ruby>へいきますか。<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってからN4を<ruby>取<rt>と</rt></ruby>りますか。", "viText": "Bạn định lấy N4 rồi mới đi Nhật, hay đi Nhật rồi mới thi lấy bằng N4?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.9.mp3" },
        { "lesson": 16, "id": "16-10a", "text": "<ruby>問<rt>とい</rt></ruby>9の<ruby>答<rt>こた</rt></ruby>え： はい、<ruby>行<rt>い</rt></ruby>きます。→<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってから、<ruby>何<rt>なに</rt></ruby>を したいですか。", "viText": "Nếu đồng ý đi Nhật -> Sau khi sang Nhật bạn muốn làm gì? ", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.10a.mp3" },
        { "lesson": 16, "id": "16-10b", "text": "<ruby>問<rt>とい</rt></ruby>9の<ruby>答<rt>こた</rt></ruby>え： いいえ、<ruby>行<rt>い</rt></ruby>きません。→<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>を<ruby>出<rt>で</rt></ruby>てから、<ruby>何<rt>なに</rt></ruby>をしたいですか。", "viText": "Nếu không đi -> Sau khi tốt nghiệp Đại học/Cao đẳng bạn muốn làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/16.10b.mp3" },

        // ==================== LESSON 17 ====================
        { "lesson": 17, "id": "17-1", "text": "<ruby>教室<rt>きょうしつ</rt></ruby>で<ruby>友達<rt>ともだち</rt></ruby>がたばこを<ruby>吸<rt>す</rt></ruby>っています。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>※たばこを<ruby>吸<rt>す</rt></ruby>わないでください / たばこを<ruby>吸<rt>す</rt></ruby>ってはいけません", "viText": "Bạn cùng lớp đang hút thuốc trong lớp. Bạn sẽ nói gì nhắc nhở? *Xin đừng hút thuốc / Không được hút thuốc ở đây.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.1.mp3" },
        { "lesson": 17, "id": "17-2", "text": "<ruby>試験<rt>しけん</rt></ruby>をしています。<ruby>友達<rt>ともだち</rt></ruby>があなたの<ruby>答<rt>こた</rt></ruby>えをみています。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>※<ruby>見<rt>み</rt></ruby>ないでください", "viText": "Trong giờ thi, một người bạn đang nhìn đáp án của bạn. Bạn sẽ nói thế nào? *Xin đừng nhìn bài của tôi.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.2.mp3" },
        { "lesson": 17, "id": "17-3", "text": "きょう、5<ruby>時<rt>じ</rt></ruby>までに<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>らなければなりませんか。<br>※はい、帰らなければなりません / 帰らなくてもいいです。", "viText": "Hôm nay bạn có phải về nhà trước 5 giờ không? *Vâng, tôi phải về nhà / tôi không cần phải về nhà.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.3.mp3" },
        { "lesson": 17, "id": "17-4", "text": "<ruby>日本<rt>にほん</rt></ruby>に<ruby>住<rt>す</rt></ruby>みます。<ruby>何<rt>なん</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>しなければなりませんか。<br>※日本のルールを<ruby>守<rt>まも</rt></ruby>らなければ / ごみの<ruby>捨<rt>す</rt></ruby>て<ruby>方<rt>かた</rt></ruby>に<ruby>注意<rt>ちゅうい</rt></ruby>しなければ / まじめに<ruby>働<rt>はたら</rt></ruby>かなければ", "viText": "Khi sống ở Nhật Bản, bạn cần phải chú ý điều gì? *Phải tuân thủ luật lệ Nhật / phải chú ý cách đổ rác / phải làm việc chăm chỉ.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.4.mp3" },
        { "lesson": 17, "id": "17-5", "text": "<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くまでに、<ruby>何<rt>なに</rt></ruby>をしなければなりませんか。<br>※「30<ruby>課<rt>か</rt></ruby>」まで<ruby>勉強<rt>べんきょう</rt></ruby>しなければ / N5を<ruby>取<rt>と</rt></ruby>らなければ / もっと<ruby>勉強<rt>べんきょう</rt></ruby>しなければなりません", "viText": "Trước khi sang Nhật Bản, bạn bắt buộc phải làm gì? *Phải học xong (đến bài 30) / Phải lấy được N5 / Phải học chăm chỉ hơn nữa.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.5.mp3" },
        { "lesson": 17, "id": "17-6a", "text": "ひだり/みぎ/うえ/した/まえ/うしろ/<ruby>私<rt>わたし</rt></ruby>の<ruby>顔<rt>かお</rt></ruby> / を <ruby>見<rt>み</rt></ruby>て。", "viText": "Hãy nhìn sang trái / sang phải / lên trên / xuống dưới / nhìn về trước / nhìn ra sau / nhìn thẳng mặt tôi.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.6a.mp3" },
        { "lesson": 17, "id": "17-6b", "text": "ひだり/みぎ/うえ/した/まえ/うしろ/<ruby>私<rt>わたし</rt></ruby>の<ruby>顔<rt>かお</rt></ruby> / を <ruby>見<rt>み</rt></ruby>て。", "viText": "Hãy nhìn sang trái / sang phải / lên trên / xuống dưới / nhìn về trước / nhìn ra sau / nhìn thẳng mặt tôi.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.6b.mp3" },
        { "lesson": 17, "id": "17-7", "text": "<ruby>立<rt>た</rt></ruby>って、<ruby>座<rt>すわ</rt></ruby>らないで。", "viText": "Hãy đứng lên, đừng ngồi, hãy ngồi xuống, đừng đứng... xin hãy đứng lên (Hành động phản xạ theo lệnh).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.7.mp3" },
        { "lesson": 17, "id": "17-8a", "text": "ひだりて/みぎて/りょうて/ひだりあし/みぎあし 　あげて/おろして/あげないで。", "viText": "Hãy đưa/hạ/đừng đưa tay trái/phải/cả hai tay/chân trái/ chân phải lên.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.8a.mp3" },
        { "lesson": 17, "id": "17-8b", "text": "ひだりて/みぎて/りょうて/ひだりあし/みぎあし　 あげて/おろして/あげないで。", "viText": "Hãy đưa/hạ/đừng đưa tay trái/phải/cả hai tay/chân trái/ chân phải lên.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.8b.mp3" },
        { "lesson": 17, "id": "17-9a", "text": "<ruby>耳<rt>みみ</rt></ruby>/<ruby>鼻<rt>はな</rt></ruby>/<ruby>目<rt>め</rt></ruby>/<ruby>口<rt>くち</rt></ruby>/<ruby>頭<rt>あたま</rt></ruby>/<ruby>首<rt>くび</rt></ruby>/<ruby>肩<rt>かた</rt></ruby>/お<ruby>腹<rt>なか</rt></ruby>　<ruby>手<rt>て</rt></ruby>で<ruby>触<rt>さわ</rt></ruby>って。", "viText": "Hãy dùng tay chạm vào tai / mũi / mắt / miệng / đầu / cổ / vai / bụng (Học sinh chỉ bộ phận cơ thể thực tế).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.9a.mp3" },
        { "lesson": 17, "id": "17-9b", "text": "<ruby>耳<rt>みみ</rt></ruby>/<ruby>鼻<rt>はな</rt></ruby>/<ruby>目<rt>め</rt></ruby>/<ruby>口<rt>くち</rt></ruby>/<ruby>頭<rt>あたま</rt></ruby>/<ruby>首<rt>くび</rt></ruby>/<ruby>肩<rt>かた</rt></ruby>/お<ruby>腹<rt>なか</rt></ruby>　<ruby>手<rt>て</rt></ruby>で<ruby>触<rt>さわ</rt></ruby>って。", "viText": "Hãy dùng tay chạm vào tai / mũi / mắt / miệng / đầu / cổ / vai / bụng (Học sinh chỉ bộ phận cơ thể thực tế).", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.9b.mp3" },
        { "lesson": 17, "id": "17-10", "text": "<ruby>前<rt>まえ</rt></ruby>/<ruby>横<rt>よこ</rt></ruby>/<ruby>後<rt>うし</rt></ruby>ろを <ruby>見<rt>み</rt></ruby>ないでください。<ruby>話<rt>はな</rt></ruby>さないで。 こっちを見て。", "viText": "Xin đừng nhìn lên trước / sang ngang / ra sau. Đừng nói chuyện. Hãy nhìn về phía tôi.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/17.10.mp3" },

        // ==================== LESSON 18 ====================
        { "lesson": 18, "id": "18-1a", "text": "<ruby>車<rt>くるま</rt></ruby>の<ruby>運転<rt>うんてん</rt></ruby>ができますか。バイクは<ruby>運転<rt>うんてん</rt></ruby>できますか。<ruby>自転車<rt>じてんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ることができますか。<br>車:できない→バイク:できない", "viText": "Bạn có thể lái ô tô không? Bạn có thể lái xe máy không? Bạn có thể đi xe đạp không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.1a.mp3" },
        { "lesson": 18, "id": "18-1b", "text": "<ruby>車<rt>くるま</rt></ruby>の<ruby>運転<rt>うんてん</rt></ruby>ができますか。バイクは<ruby>運転<rt>うんてん</rt></ruby>できますか。<ruby>自転車<rt>じてんしゃ</rt></ruby>に<ruby>乗<rt>の</rt></ruby>ることができますか。<br>車:できない→バイク:できない", "viText": "Bạn có thể lái ô tô không? Bạn có thể lái xe máy không? Bạn có thể đi xe đạp không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.1b.mp3" },
        { "lesson": 18, "id": "18-2", "text": "スマホで 何ができますか / 何することができますか。", "viText": "Bạn có thể làm được những việc gì trên chiếc điện thoại di động thông minh của mình?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.2.mp3" },
        { "lesson": 18, "id": "18-3", "text": "あなたの<ruby>出身地<rt>しゅっしんち</rt></ruby> / (<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>) で 何することができますか。", "viText": "Tại quê hương của bạn / tại địa điểm nổi tiếng thì có thể làm những gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.3.mp3" },
        { "lesson": 18, "id": "18-4", "text": "ベトナムでは できません。日本で、何することができますか。", "viText": "Điều gì không thể làm ở Việt Nam nhưng có thể làm ở Nhật Bản?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/18.4.mp3" },
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
        { "lesson": 21, "id": "21-4a", "text": "「よく<ruby>聞<rt>き</rt></ruby>いてください/これを<ruby>見<rt>み</rt></ruby>てください/・・・」 <ruby>今<rt>いま</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いましたか。", "viText": " 'Hãy nghe kỹ / hãy nhìn cái này....' Vừa rồi tôi đã nói câu gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.4a.mp3" },
        { "lesson": 21, "id": "21-4b", "text": "「よく<ruby>聞<rt>き</rt></ruby>いてください/これを<ruby>見<rt>み</rt></ruby>てください/・・・」 <ruby>今<rt>いま</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いましたか。", "viText": " 'Hãy nghe kỹ / hãy nhìn cái này....' Vừa rồi tôi đã nói câu gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.4b.mp3" },
        { "lesson": 21, "id": "21-5", "text": "<ruby>日本語<rt>にほんご</rt></ruby>はかんたんでしょう？", "viText": "Tiếng Nhật đơn giản đúng không?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.5.mp3" },
        { "lesson": 21, "id": "21-6a", "text": "<ruby>今日<rt>きょう</rt></ruby>は <ruby>暑<rt>あつ</rt></ruby>い/いい<ruby>天気<rt>てんき</rt></ruby>ですね/<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っていますね。 <ruby>明日<rt>あした</rt></ruby>も〜と<ruby>思<rt>おも</rt></ruby>いますか。", "viText": "Hôm nay trời nóng/đẹp/mưa nhỉ. Bạn nghĩ mai cũng thế chứ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.6a.mp3" },
        { "lesson": 21, "id": "21-6b", "text": "<ruby>今日<rt>きょう</rt></ruby>は <ruby>暑<rt>あつ</rt></ruby>い/いい<ruby>天気<rt>てんき</rt></ruby>ですね/<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っていますね。 <ruby>明日<rt>あした</rt></ruby>も〜と<ruby>思<rt>おも</rt></ruby>いますか。", "viText": "Hôm nay trời nóng/đẹp/mưa nhỉ. Bạn nghĩ mai cũng thế chứ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.6b.mp3" },
        { "lesson": 21, "id": "21-7a", "text": "<ruby>今<rt>いま</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>ですか。あなたのお<ruby>父<rt>とう</rt></ruby>さん/お<ruby>母<rt>かあ</rt></ruby>さんは<ruby>今<rt>いま</rt></ruby><ruby>何<rt>なに</rt></ruby>をしていると<ruby>思<rt>おも</rt></ruby>いますか。", "viText": "Bây giờ là mấy giờ? Bạn nghĩ bố / mẹ của bạn 〇〇 đang làm gì ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.7a.mp3" },
        { "lesson": 21, "id": "21-7b", "text": "<ruby>今<rt>いま</rt></ruby><ruby>何時<rt>なんじ</rt></ruby>ですか。あなたのお<ruby>父<rt>とう</rt></ruby>さん/お<ruby>母<rt>かあ</rt></ruby>さんは<ruby>今<rt>いま</rt></ruby><ruby>何<rt>なに</rt></ruby>をしていると<ruby>思<rt>おも</rt></ruby>いますか。", "viText": "Bây giờ là mấy giờ? Bạn nghĩ bố / mẹ của bạn 〇〇 đang làm gì ?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.7b.mp3" },
        { "lesson": 21, "id": "21-8", "text": "あなたの<ruby>大学<rt>だいがく</rt></ruby>/あなたの<ruby>短大<rt>たんだい</rt></ruby>についてどう<ruby>思<rt>おも</rt></ruby>いますか。", "viText": "Bạn nghĩ thế nào về trường Đại học / Cao đẳng 〇〇 của mình?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.8.mp3" },
        { "lesson": 21, "id": "21-9", "text": "あなたの<ruby>友達<rt>ともだち</rt></ruby>はだれですか。 その<ruby>友達<rt>ともだち</rt></ruby>について、どう<ruby>思<rt>おも</rt></ruby>いますか。（2つ以上 〜くて 〜で）", "viText": "Bạn thân của bạn là ai? Bạn nghĩ thế nào về người bạn đó? *Đưa ra từ 2 nhận xét trở lên nối đuôi tính từ dạng thể Te.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/21.9.mp3" },
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
        { "lesson": 23, "id": "23-5", "text": "<ruby>何<rt>なに</rt></ruby>をしているときが<ruby>一番<rt>いちばん</rt></ruby><ruby>楽<rt>たの</rt></ruby>しいですか。", "viText": "Bạn vui nhất là khi đang làm gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.5.mp3" },
        { "lesson": 23, "id": "23-6", "text": "（エアコンのリモコンを<ruby>見<rt>み</rt></ruby>せながら） <ruby>暑<rt>あつ</rt></ruby>いですね/ <ruby>消<rt>け</rt></ruby>したいです  どうしますか。<br>リモコンの<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。<br>※〜を・・と、いいですよ/<ruby>涼<rt>すず</rt></ruby>しくなります。", "viText": "(Cầm điều khiển) Trời nóng/muốn tắt điều hòa thì làm thế nào? <br>Hãy chỉ cho tôi cách sử dụng điều khiển từ xa. <br>*Gợi ý cấu trúc: Nếu nhấn/vặn cái này thì sẽ mát lên đấy.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.6.mp3" },
        { "lesson": 23, "id": "23-7", "text": "（<ruby>学生<rt>がくせい</rt></ruby>のスマホを<ruby>見<rt>み</rt></ruby>ながら） どうすると、ケータイで<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く ことができますか。<ruby>教<rt>おし</rt></ruby>えてください。", "viText": "(Nhìn điện thoại học sinh) Phải làm sao để nghe nhạc?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.7.mp3" },
        { "lesson": 23, "id": "23-8", "text": "<ruby>私<rt>わたし</rt></ruby>はベトナムを<ruby>旅行<rt>りょこう</rt></ruby>したいです。<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べるといいですか。<ruby>教<rt>おし</rt></ruby>えてください。<br>※〜を〜といいです。", "viText": "Tôi muốn du lịch Việt Nam. Nên ăn món gì thì tốt? Hãy chỉ cho tôi? *Mẫu khuyên bảo đuôi '~ to ii desu'.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.8.mp3" },
        { "lesson": 23, "id": "23-9", "text": "<ruby>病気<rt>びょうき</rt></ruby>のとき/<ruby>元気<rt>げんき</rt></ruby>がないとき、<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べるといいですか。<ruby>教<rt>おし</rt></ruby>えてください。<br>※〜を〜といいです。", "viText": "Khi bị ốm/mệt, nên ăn gì thì tốt? Hãy chỉ cho tôi? *Dùng đuôi khuyên bảo '~ to ii desu'.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.9.mp3" },
        { "lesson": 23, "id": "23-10", "text": "あなたは<ruby>誰<rt>だれ</rt></ruby>と<ruby>話<rt>はな</rt></ruby>すと、<ruby>楽<rt>たの</rt></ruby>しいですか。<br>※〜さんと<ruby>話<rt>はな</rt></ruby>すと<ruby>楽<rt>たの</rt></ruby>しいです。", "viText": "Bạn nói chuyện với ai thì thấy vui? *Mẫu điều kiện: Cứ hễ nói chuyện với... thì thấy vui.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/23.10.mp3" },

        // ==================== LESSON 24 ====================
        { "lesson": 24, "id": "24-1", "text": "いつも<ruby>誰<rt>だれ</rt></ruby>に<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてもらいますか。<br>※〜に<ruby>教<rt>おし</rt></ruby>えてもらいます。", "viText": "Bạn thường được ai dạy tiếng Nhật cho? *Mẫu hành động nhận lợi ích đuôi '~ ni oshiete moraimasu'.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.1.mp3" },
        { "lesson": 24, "id": "24-2", "text": "<ruby>子<rt>こ</rt></ruby>どもの<ruby>時<rt>とき</rt></ruby>, <ruby>誰<rt>だれ</rt></ruby>がごはんを<ruby>作<rt>つく</rt></ruby>って/いっしょに<ruby>遊<rt>あそ</rt></ruby>んでくれましたか。<br>※〜が〜てくれました。", "viText": "Hồi nhỏ, ai nấu cơm/chơi đùa cùng bạn? *Mẫu ai đó làm điều tốt cho mình đuôi '~ ga ~ te kuremashita'.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.2.mp3" },
        { "lesson": 24, "id": "24-3", "text": "〇〇さんが<ruby>病気<rt>びょうき</rt></ruby>のとき、<ruby>誰<rt>だれ</rt></ruby>が<ruby>何<rt>なに</rt></ruby>をしてくれましたか？", "viText": "Khi bạn bị ốm, bạn được ai làm gì cho?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.3.mp3" },
        { "lesson": 24, "id": "24-4", "text": "<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>く<ruby>前<rt>まえ</rt></ruby>に、<ruby>誰<rt>だれ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をしてもらいたい？", "viText": "Trước khi đi Nhật, bạn muốn ai làm gì cho bạn?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.4.mp3" },
        { "lesson": 24, "id": "24-5", "text": "<ruby>将来<rt>しょうらい</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>/<ruby>恋人<rt>こいびと</rt></ruby>に<ruby>何<rt>なに</rt></ruby>をしてあげたい？", "viText": "(Tương lai) Bạn muốn làm gì cho gia đình/người yêu?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.5.mp3" },
        { "lesson": 24, "id": "24-6", "text": "<ruby>昨日<rt>きのう</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>が <ruby>傘<rt>かさ</rt></ruby>を <ruby>貸<rt>か</rt></ruby>してくれました。お<ruby>礼<rt>れい</rt></ruby>を<ruby>言<rt>い</rt></ruby>って<ruby>返<rt>かえ</rt></ruby>してください。<br>※<ruby>傘<rt>かさ</rt></ruby>を<ruby>貸<rt>か</rt></ruby>してくれてありがとう。", "viText": "Hôm qua, 1 người bạn đã cho bạn mượn ô. Hãy nói lời cảm ơn đi.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.6.mp3" },
        { "lesson": 24, "id": "24-7", "text": "<ruby>誰<rt>だれ</rt></ruby>かにお<ruby>礼<rt>れい</rt></ruby>を<ruby>言<rt>い</rt></ruby>ってください。<br>※あなた、〜くれてありがとう。", "viText": "Hãy nói lời cảm ơn đến ai đó. *Mẫu câu: Bạn 〇〇, cảm ơn vì đã làm việc gì cho mình.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.7.mp3" },
        { "lesson": 24, "id": "24-8", "text": "<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>読<rt>よみ</rt></ruby><ruby>方<rt>かた</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてもらいたいです。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。<br>※〜くれませんか/もらえませんか  「〜ください」→<ruby>他<rt>ほか</rt></ruby>の<ruby>言<rt>い</rt></ruby>い<ruby>方<rt>かた</rt></ruby>で", "viText": "Bạn muốn nhờ chỉ cách đọc chữ Hán. Bạn sẽ nói như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.8.mp3" },
        { "lesson": 24, "id": "24-9a", "text": "<ruby>友達<rt>ともだち</rt></ruby>に、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>って/ <ruby>部屋<rt>へや</rt></ruby>を<ruby>掃除<rt>そうじ</rt></ruby>して/<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>って/もらいたいとき、<ruby>何<rt>なん</rt></ruby>て<ruby>言<rt>い</rt></ruby>う？", "viText": "Bạn muốn nhờ bạn chụp ảnh/dọn phòng/nấu ăn, bạn sẽ nói như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.9a.mp3" },
        { "lesson": 24, "id": "24-9b", "text": "<ruby>友達<rt>ともだち</rt></ruby>に、<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>って/ <ruby>部屋<rt>へや</rt></ruby>を<ruby>掃除<rt>そうじ</rt></ruby>して/<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>って/もらいたいとき、<ruby>何<rt>なん</rt></ruby>て<ruby>言<rt>い</rt></ruby>う？", "viText": "Bạn muốn nhờ bạn chụp ảnh/dọn phòng/nấu ăn, bạn sẽ nói như thế nào?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.9b.mp3" },
        { "lesson": 24, "id": "24-10", "text": "どんなとき「ありがとう」って<ruby>言<rt>い</rt></ruby>う？<br>※〜もらったとき、<ruby>言<rt>い</rt></ruby>います。", "viText": "Khi nào thì bạn nói 'cảm ơn'? *Mẫu trả lời: Nói câu đó những khi nhận được sự giúp đỡ.", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/24.10.mp3" },

        // ==================== LESSON 25 ====================
        { "lesson": 25, "id": "25-1a", "text": "いつ<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きますか。<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったら、どんな<ruby>仕事<rt>しごと</rt></ruby>をしますか。<br>※<ruby>行<rt>い</rt></ruby>かない<ruby>人<rt>ひと</rt></ruby>→ もし <ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>かないとしたら、どんな<ruby>仕事<rt>しごと</rt></ruby>をしたいですか/<ruby>何<rt>なに</rt></ruby>をしたいですか。", "viText": "Khi nào bạn đi Nhật? Sang Nhật bạn làm việc gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.1a.mp3" },
        { "lesson": 25, "id": "25-1b", "text": "いつ<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きますか。<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったら、どんな<ruby>仕事<rt>しごと</rt></ruby>をしますか。<br>※<ruby>行<rt>い</rt></ruby>かない<ruby>人<rt>ひと</rt></ruby>→ もし <ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>かないとしたら、どんな<ruby>仕事<rt>しごと</rt></ruby>をしたいですか/<ruby>何<rt>なに</rt></ruby>をしたいですか。", "viText": "Khi nào bạn đi Nhật? Sang Nhật bạn làm việc gì?", "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/25.1b.mp3" },
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
        "viText": "Tôi nên nói gì khi người Nhật nói nhanh như vậy?　(※ Nói \"~ Bạn có thể vui lòng lấy nó không?\".) ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.1.mp3"
    },
    {
        "lesson": 26,
        "id": "26-2",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>の<ruby>言<rt>い</rt></ruby>ったことが<ruby>良<rt>よ</rt></ruby>くわからない<ruby>時<rt>とき</rt></ruby>、<ruby>何<rt>なん</rt></ruby>と <ruby>言<rt>い</rt></ruby>ったらいいですか。　（※「～んですが、Vていただけませんか。」）",
        "viText": "Tôi nên nói gì khi tôi không thực sự hiểu những gì giáo viên nói?　(※ \"~n, nhưng bạn có thể làm hài lòng V không?\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.2.mp3"
    },
    {
        "lesson": 26,
        "id": "26-3",
        "text": "<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>がわかりませんでした。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>ったらいいですか。　（※　「もう<ruby>一度<rt>いちど</rt></ruby><ruby>名前<rt>なまえ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えていただけませんか。」）",
        "viText": "Tôi không thể xác định tên tiếng Nhật. Tôi nên đặt nó như thế nào?　(※ \"Bạn có thể vui lòng cho tôi biết tên của bạn một lần nữa không?\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.3.mp3"
    },
    {
        "lesson": 26,
        "id": "26-4",
        "text": "ごみの<ruby>捨<rt>す</rt></ruby>て<ruby>方<rt>かた</rt></ruby>がわかりません。<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>たらいいですか。　（※ 「ごみの<ruby>捨<rt>す</rt></ruby>て<ruby>方<rt>かたが</rt></ruby>わからないんですが、<ruby>教<rt>おし</rt></ruby>えていただけませんか。」/「どうやって<ruby>捨<rt>す</rt></ruby>てたらいいですか。」）",
        "viText": "Tôi không biết làm thế nào để vứt rác. Tôi nên đặt nó như thế nào?　(※ \"Tôi không biết cách vứt rác, bạn có thể dạy tôi được không?\") / \"Tôi nên vứt nó đi như thế nào?\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.4.mp3"
    },
    {
        "lesson": 26,
        "id": "26-5",
        "text": "　「これ、<ruby>読<rt>よ</rt></ruby>んで」 / 「○○」と<ruby>書<rt>か</rt></ruby>いて。　　　（※　「<ruby>読<rt>よ</rt></ruby>み<ruby>方<rt>かた</rt></ruby>/<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>がわからないんですが、<ruby>教<rt>おし</rt></ruby>えていただけませんか。」",
        "viText": "　\"Đọc cái này\" / Viết \"○○.\"　　　(※ \"Tôi không biết đọc hay viết, bạn có thể dạy tôi được không?\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.5.mp3"
    },
    {
        "lesson": 26,
        "id": "26-6",
        "text": "<ruby>授業中<rt>じゅぎょうちゅう</rt></ruby>、お<ruby>腹<rt>なか</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>く / <ruby>気分<rt>きぶん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くなりました。トイレに<ruby>行<rt>い</rt></ruby>きたいです。/ちょっと<ruby>休<rt>やす</rt></ruby>みたいです。 <ruby>先生<rt>せんせい</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。（※「～んですが、～てもいいですか。」）",
        "viText": "Trong giờ học, tôi bị đau dạ dày / tôi cảm thấy không khỏe. Tôi muốn đi vệ sinh. /Tôi muốn nghỉ ngơi một chút. Bạn sẽ nói gì với giáo viên? (※ \"~ nhưng, có ổn không nếu ~?\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.6.mp3"
    },
    {
        "lesson": 26,
        "id": "26-6a",
        "text": "<ruby>仕事中<rt>しごとちゅう</rt></ruby>、お<ruby>腹<rt>なか</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>くなりました。トイレに<ruby>行<rt>い</rt></ruby>きたいです。<ruby>上司<rt>じょうし</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。。（※「～んですが、～てもいいですか。」）",
        "viText": "Trong quá trình làm việc, tôi bị đau bụng. Tôi muốn đi vệ sinh. Bạn nói gì với sếp của mình? (※ \"~ nhưng, có ổn không nếu ~?\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.6a.mp3"
    },
    {
        "lesson": 26,
        "id": "26-6b",
        "text": "<ruby>仕事中<rt>しごとちゅう</rt></ruby>、<ruby>気分<rt>きぶん</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くなりました。ちょっと<ruby>休<rt>やす</rt></ruby>みたいです。 <ruby>上司<rt>じょうし</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。（※「～んですが、～てもいいですか。」）",
        "viText": "Tôi bắt đầu cảm thấy không khỏe trong quá trình làm việc. Tôi muốn nghỉ ngơi một chút. Bạn nói gì với sếp của mình? (※ \"~ nhưng, có ổn không nếu ~?\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.6b.mp3"
    },
    {
        "lesson": 26,
        "id": "26-7",
        "text": "<ruby>熱<rt>ねつ</rt></ruby>があります/とても<ruby>頭<rt>あたま</rt></ruby>が<ruby>痛<rt>いた</rt></ruby>いです/とても<ruby>調子<rt>ちょうし</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>いです。　<ruby>早<rt>はや</rt></ruby>く<ruby>帰<rt>かえ</rt></ruby>りたいです。<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と<ruby>言<rt>い</rt></ruby>いますか。（※「～んですが、～てもいいですか。」）",
        "viText": "Tôi bị sốt / Tôi bị đau đầu dữ dội / Tôi cảm thấy rất không khỏe. Tôi muốn về nhà sớm. Bạn sẽ nói gì với giáo viên? (※ \"~ nhưng, có ổn không nếu ~?\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.7.mp3"
    },
    {
        "lesson": 26,
        "id": "26-8",
        "text": "アルバイトで、ひとつ<ruby>仕事<rt>しごと</rt></ruby>が<ruby>終<rt>お</rt></ruby>わりました。<ruby>次<rt>つぎ</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いてください。　（※「<ruby>次<rt>つぎ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしたらいいですか。」）",
        "viText": "Tôi đã hoàn thành một nhiệm vụ tại một công việc bán thời gian. Hỏi về công việc tiếp theo.　(※ \"Tôi nên làm gì tiếp theo?\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.8.mp3"
    },
    {
        "lesson": 26,
        "id": "26-9",
        "text": "となりの<ruby>人<rt>ひと</rt></ruby>が<ruby>元気<rt>げんき</rt></ruby>がありません。<ruby>何<rt>なん</rt></ruby>て<ruby>言<rt>い</rt></ruby>う？　（※「どうしたんですか。<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですか。」<ruby>他<rt>ほか</rt></ruby>）",
        "viText": "Người bên cạnh tôi không khỏe. Tôi nên nói gì?　(※ \"Có chuyện gì vậy? Bạn không sao chứ?\" Anh ấy)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.9.mp3"
    },
    {
        "lesson": 26,
        "id": "26-10",
        "text": "<ruby>日本<rt>にほん</rt></ruby>で<ruby>旅行<rt>りょこう</rt></ruby>したいです。どこがいいか<ruby>聞<rt>き</rt></ruby>いてください。　（※「～んですが、どこへ<ruby>行<rt>い</rt></ruby>ったらいいですか。」/「～を<ruby>教<rt>おし</rt></ruby>えていただけませんか。」）",
        "viText": "Tôi muốn đi du lịch ở Nhật Bản. Hỏi xem nó tốt ở đâu.　(※ \"~, nhưng tôi nên đi đâu?\"/ \"Bạn có thể nói cho tôi biết ~ được không?\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/26.10.mp3"
    },
    {
        "lesson": 27,
        "id": "27-1",
        "text": "＜２<ruby>問<rt>もん</rt></ruby>＞<ruby>日本語<rt>にほんご</rt></ruby>の / <ruby>英語<rt>えいご</rt></ruby>の <ruby>歌<rt>うた</rt></ruby>が<ruby>歌<rt>うた</rt></ruby>えますか。<ruby>誰<rt>だれ</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>が<ruby>歌<rt>うた</rt></ruby>えますか。　（※（<ruby>歌手名<rt>かしゅめい</rt></ruby>）の（<ruby>曲名<rt>きょくめい</rt></ruby>）が<ruby>歌<rt>うた</rt></ruby>えます。）",
        "viText": "< 2 câu hỏi> Bạn có thể hát các bài hát tiếng Nhật / tiếng Anh không? Bạn có thể hát bài hát của ai?　(※ Bạn có thể hát tên bài hát của (tên ca sĩ). ）\n",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.1.mp3"
    },
    {
        "lesson": 27,
        "id": "27-2",
        "text": "<ruby>何<rt>なに</rt></ruby>かスポーツが<ruby>出来<rt>でき</rt></ruby>ますか。 どんなスポーツが<ruby>出来<rt>でき</rt></ruby>ますか。（※「～ができます。」/「<ruby>得意<rt>とくい</rt></ruby>です。」） ",
        "viText": "Bạn có thể chơi bất kỳ môn thể thao nào không? Bạn có thể chơi loại thể thao nào? (※ \"Tôi có thể làm ~.\" / \"Tôi giỏi về nó.\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.2.mp3"
    },
    {
        "lesson": 27,
        "id": "27-3a",
        "text": "<ruby>漢字<rt>かんじ</rt></ruby>が<ruby>読<rt>よ</rt></ruby>め/<ruby>書<rt>か</rt></ruby>けますか。（※「はい、～ます。」）",
        "viText": "Bạn có thể đọc hoặc viết kanji không? (※ \"Vâng, ~masu.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.3a.mp3"
    },
    {
        "lesson": 27,
        "id": "27-3b",
        "text": "どれくらい<ruby>読<rt>よ</rt></ruby>め/<ruby>書<rt>か</rt></ruby>けますか。（※「〇くらい～ます。」）",
        "viText": "Bạn có thể đọc/viết bao nhiêu? (※ \"Giới thiệu 〇 khoảng ~\".\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.3b.mp3"
    },
    {
        "lesson": 27,
        "id": "27-4",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>はどれくらい<ruby>話<rt>はな</rt></ruby>せますか。（※「<ruby>少<rt>すこ</rt></ruby>し～ます。」/「<ruby>少<rt>すこ</rt></ruby>ししか～ません。」）",
        "viText": "Bạn có thể nói được bao nhiêu tiếng Nhật? (※ \"Chỉ một chút~.\" / \"Chỉ một chút~.\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.4.mp3"
    },
    {
        "lesson": 27,
        "id": "27-5",
        "text": "あなたが<ruby>出来<rt>でき</rt></ruby>ることを<ruby>教<rt>おし</rt></ruby>てください。",
        "viText": "Xin hãy cho tôi biết bạn có thể làm gì.\n",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.5.mp3"
    },
    {
        "lesson": 27,
        "id": "27-6",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ってから、<ruby>新<rt>あたら</rt></ruby>しい<ruby>友達<rt>ともだち</rt></ruby>が<ruby>出来<rt>でき</rt></ruby>ました？それは<ruby>誰<rt>だれ</rt></ruby>？ （※「はい、～」）",
        "viText": "Kể từ khi vào đại học/cao đẳng, bạn đã có những người bạn mới chưa? Đó là ai? (*\"Vâng, ~\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.6.mp3"
    },
    {
        "lesson": 27,
        "id": "27-7a",
        "text": "<ruby>部屋<rt>へや</rt></ruby>の<ruby>窓<rt>まど</rt></ruby>から<ruby>何<rt>なに</rt></ruby>か<ruby>見<rt>み</rt></ruby>える？",
        "viText": "Bạn có thể nhìn thấy thứ gì đó từ cửa sổ phòng không?",
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
        "viText": "Bạn có thể làm gì với điện thoại của mình?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/27.8.mp3"
    },
    {
        "lesson": 27,
        "id": "27-9",
        "text": "<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったら<ruby>何<rt>なに</rt></ruby>ができると<ruby>思<rt>おも</rt></ruby>う？",
        "viText": "Bạn nghĩ bạn có thể làm gì nếu bạn đến Nhật Bản?",
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
        "viText": "Theo quy tắc giao thông Nhật Bản, vừa đi xe đạp vừa sử dụng điện thoại thông minh có sao không?　(※ \"Không, đừng làm ~trong khi ~\".)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.1.mp3"
    },
    {
        "lesson": 28,
        "id": "28-2",
        "text": "<ruby>何<rt>なに</rt></ruby>をしながら<ruby>歩<rt>ある</rt></ruby>くと、<ruby>危<rt>あぶ</rt></ruby>ないですか/よくないですか。　（※「スマホを<ruby>使<rt>つか</rt></ruby>いながら/<ruby>電話<rt>でんわ</rt></ruby>しながら/タバコを<ruby>吸<rt>す</rt></ruby>いながら、<ruby>歩<rt>ある</rt></ruby>くとよくないです。」）",
        "viText": "Đi bộ trong khi làm điều gì đó có nguy hiểm hay xấu?　(※ \"Đi bộ trong khi sử dụng điện thoại thông minh, điện thoại hoặc hút thuốc lá là không tốt.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.2.mp3"
    },
    {
        "lesson": 28,
        "id": "28-3",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>や<ruby>上司<rt>じょうし</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く<ruby>時<rt>とき</rt></ruby>、<ruby>何<rt>なに</rt></ruby>をしながら<ruby>聞<rt>き</rt></ruby>くといいですか。　（※「メモをしながら<ruby>聞<rt>き</rt></ruby>くといいです。」）",
        "viText": "Khi lắng nghe giáo viên hoặc người giám sát, bạn nên làm gì trong khi nghe?　(※ \"Thật tốt khi vừa nghe vừa ghi chép.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.3.mp3"
    },
    {
        "lesson": 28,
        "id": "28-4",
        "text": "<ruby>暇<rt>ひま</rt></ruby>な<ruby>時<rt>とき</rt></ruby>、いつも<ruby>何<rt>なに</rt></ruby>していますか。　（※「～ています。」）",
        "viText": "Bạn thường làm gì khi có thời gian rảnh?　(※ \"~desu.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.4.mp3"
    },
    {
        "lesson": 28,
        "id": "28-5",
        "text": "いつも<ruby>何時<rt>なんじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きていますか。　（※「～ています。」）",
        "viText": "Bạn thường thức dậy lúc mấy giờ?　(※ \"~desu.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.5.mp3"
    },
    {
        "lesson": 28,
        "id": "28-5a",
        "text": "いつもどうやって<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>へ<ruby>来<rt>き</rt></ruby>ていますか。　（※「～ています。」）",
        "viText": "Làm thế nào để bạn thường đến được đại học / cao đẳng cơ sở?　(※ \"~desu.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.5a.mp3"
    },
    {
        "lesson": 28,
        "id": "28-5b",
        "text": "いつも<ruby>朝<rt>あさ</rt></ruby>ごはんに<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>たべ</rt></ruby>ていますか。　（※「～ています。」）",
        "viText": "Bạn thường ăn gì vào bữa sáng?　(※ \"~desu.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.5b.mp3"
    },
    {
        "lesson": 28,
        "id": "28-6",
        "text": "<ruby>今<rt>いま</rt></ruby>、ベトナムで<ruby>人気<rt>にんき</rt></ruby>があるベトナム<ruby>人<rt>じん</rt></ruby>や<ruby>日本人<rt>にほんじん</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えて。その<ruby>人<rt>ひと</rt></ruby>は<ruby>何<rt>なに</rt></ruby>している<ruby>人<rt>ひと</rt></ruby>？　（※「〇〇さんです。」/「～です。」、「～をしています。」）",
        "viText": "Hãy cho tôi biết về những người Việt Nam và Nhật Bản đang nổi tiếng ở Việt Nam hiện nay. Người đó đang làm gì?　(※ \"Đây là Mr. 〇〇.\" / \"~\" \"~\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.6.mp3"
    },
    {
        "lesson": 28,
        "id": "28-7",
        "text": "その<ruby>人<rt>ひと</rt></ruby>は、どうして<ruby>人気<rt>にんき</rt></ruby>があるの？　※（「その<ruby>人<rt>ひと</rt></ruby>は、〜し、〜し、それで、<ruby>人気<rt>にんき</rt></ruby>があります。」）",
        "viText": "Tại sao người đó lại nổi tiếng như vậy?　※ (\"Người đó là, và vì điều đó, anh ấy nổi tiếng.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.7.mp3"
    },
    {
        "lesson": 28,
        "id": "28-8",
        "text": "あなたが、よくごはんを<ruby>食<rt>た</rt></ruby>べに<ruby>行<rt>い</rt></ruby>く<ruby>店<rt>みせ</rt></ruby>はどこ？　どうしてそこによく<ruby>行<rt>い</rt></ruby>くの？",
        "viText": "Bạn thường đi ăn ở đâu tại nhà hàng?　Tại sao bạn đến đó thường xuyên?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.8.mp3"
    },
    {
        "lesson": 28,
        "id": "28-9",
        "text": "<ruby>日本<rt>にほん</rt></ruby>のアニメで<ruby>何<rt>なに</rt></ruby>が<ruby>好<rt>す</rt></ruby>き？　どうしてそのアニメが<ruby>好<rt>す</rt></ruby>きなの？",
        "viText": "Bạn thích điều gì ở anime Nhật Bản?　Tại sao bạn thích anime đó?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.9.mp3"
    },
    {
        "lesson": 28,
        "id": "28-10",
        "text": "あなたは<ruby>誰<rt>だれ</rt></ruby><ruby>が一番<rt>いちばん</rt></ruby><ruby>好<rt>す</rt></ruby>き？　どうしてその<ruby>人<rt>ひと</rt></ruby>が<ruby>好<rt>す</rt></ruby>きなの？",
        "viText": "Bạn thích ai nhất?　Tại sao bạn thích người đó?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/28.10.mp3"
    },
    {
        "lesson": 29,
        "id": "29-1a",
        "text": "<ruby>今<rt>いま</rt></ruby>、ドアはどうですか。　（※「<ruby>開い<rt>ひらい</rt></ruby>ています。/<ruby>閉ま<rt>しま</rt></ruby>っています。」）",
        "viText": "Còn cánh cửa bây giờ thì sao?　(※ \"Nó đang mở. / Nó đã đóng.\") ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.1a.mp3"
    },
    {
        "lesson": 29,
        "id": "29-1b",
        "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>窓<rt>まど</rt></ruby>は　どうですか。　（※「<ruby>開い<rt>ひらい</rt></ruby>ています。/<ruby>閉ま<rt>しま</rt></ruby>っています。」）",
        "viText": "Còn các cửa sổ bây giờ thì sao?　(※ \"Nó đang mở. / Nó đã đóng.\") ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.1b.mp3"
    },
    {
        "lesson": 29,
        "id": "29-2a",
        "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>電気<rt>でんき</rt></ruby>は/エアコンは　どうですか。（※「<ruby>付い<rt>つい</rt></ruby>ています。/<ruby>消え<rt>きえ</rt></ruby>ています。」）",
        "viText": "Điện và điều hòa không khí bây giờ thì sao? (※ \"Đính kèm. / Biến mất.\") ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.2a.mp3"
    },
    {
        "lesson": 29,
        "id": "29-2b",
        "text": "<ruby>今<rt>いま</rt></ruby>、エアコンは　どうですか。（※「<ruby>付い<rt>つい</rt></ruby>ています。/<ruby>消え<rt>きえ</rt></ruby>ています。」）",
        "viText": "Còn điều hòa không khí bây giờ thì sao? (※ \"Đính kèm. / Biến mất.\") ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.2b.mp3"
    },
    {
        "lesson": 29,
        "id": "29-3",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>に<ruby>来る<rt>くる</rt></ruby><ruby>時<rt>とき</rt></ruby>、<ruby>道<rt>みち</rt></ruby>はどうですか。\n。※　<ruby>混ん<rt>こん</rt></ruby>でいます/<ruby>混ん<rt>こん</rt></ruby>でいません/<ruby>空い<rt>あい</rt></ruby>ています",
        "viText": "Khi bạn đến một trường đại học hoặc cao đẳng cơ sở, con đường như thế nào?\n* Đông đúc / Không đông đúc / Trống rỗng",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.3.mp3"
    },
    {
        "lesson": 29,
        "id": "29-4",
        "text": "この<ruby>車<rt>くるま</rt></ruby>を<ruby>説明し<rt>せつめいし</rt></ruby>てください。　（※２つ<ruby>答え<rt>こたえ</rt></ruby>る　「<ruby>汚い<rt>きたない</rt></ruby>です」でもOK。）",
        "viText": "Vui lòng mô tả chiếc xe này.　(* Câu trả lời 2: \"Nó bẩn\" cũng được.) ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.4.mp3"
    },
    {
        "lesson": 29,
        "id": "29-5",
        "text": "コーヒーです。<ruby>取り<rt>とり</rt></ruby><ruby>替え<rt>かえ</rt></ruby>たいです。<ruby>何と<rt>なんと</rt></ruby><ruby>言<rt>いい</rt></ruby>ますか。　（※「～ていますから、<ruby>取り<rt>とり</rt></ruby>かえてください。」）",
        "viText": "Đó là cà phê. Tôi muốn thay thế nó. Tôi nên đặt nó như thế nào?　(※ \"~, vì vậy vui lòng thay thế nó.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.5.mp3"
    },
    {
        "lesson": 29,
        "id": "29-6",
        "text": "28<ruby>課<rt>か</rt></ruby>のことばや<ruby>文法<rt>ぶんぽう</rt></ruby>はもう<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>覚え<rt>おぼえ</rt></ruby>た？　（※「はい、<ruby>覚え<rt>おぼえ</rt></ruby>てしまいました。/<ruby>覚え<rt>おぼえ</rt></ruby>ました。」）",
        "viText": "Bạn đã ghi nhớ tất cả các từ vựng và ngữ pháp từ Bài 28 chưa?　(※ \"Vâng, tôi nhớ. / Tôi đã nhớ.\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.6.mp3"
    },
    {
        "lesson": 29,
        "id": "29-7",
        "text": "あなたは<ruby>今日<rt>きょう</rt></ruby><ruby>遅刻<rt>ちこく</rt></ruby>しました。「どうして<ruby>遅刻<rt>ちこく</rt></ruby>しましたか。」　（※「<ruby>寝坊<rt>ねぼう</rt></ruby>してしまいました。」/「<ruby>事故<rt>じこ</rt></ruby>で<ruby>遅れ<rt>おくれ</rt></ruby>てしまいました。」など。）",
        "viText": "Hôm nay anh đến muộn. \"Tại sao bạn lại đến muộn?\" (※ \"Tôi đã ngủ quên.\") /\"Tôi đã đến muộn do tai nạn\", v.v. ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.7.mp3"
    },
    {
        "lesson": 29,
        "id": "29-9",
        "text": "<ruby>他の<rt>ほかの</rt></ruby><ruby>人<rt>ひと</rt></ruby>の<ruby>物<rt>もの</rt></ruby>を<ruby>壊し<rt>こわし</rt></ruby>てしまいました。<ruby>謝っ<rt>あやまっ</rt></ruby>てください。　（※「○○をこわしてしまいました。」（<ruby>割る<rt>わる</rt></ruby>、<ruby>破る<rt>やぶる</rt></ruby>、<ruby>汚す<rt>よごす</rt></ruby>などもOK））",
        "viText": "Cuối cùng tôi đã làm hỏng đồ đạc của người khác. Xin lỗi nhé.　(※ \"Tôi đã phá vỡ ○○.\" (Vỡ, rách, bẩn, v.v.)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.9.mp3"
    },
    {
        "lesson": 29,
        "id": "29-10",
        "text": "<ruby>仕事中<rt>しごとちゅう</rt></ruby>、<ruby>機械<rt>きかい</rt></ruby>が<ruby>止まり<rt>どまり</rt></ruby>ました。<ruby>課長<rt>かちょう</rt></ruby>に<ruby>何と<rt>なんと</rt></ruby><ruby>言<rt>いい</rt></ruby>ますか。　（※「<ruby>機械<rt>きかい</rt></ruby>が<ruby>止ま<rt>とま</rt></ruby>ってしまいました。どうしたらいいですか。」）",
        "viText": "Trong quá trình làm việc, máy dừng lại. Bạn sẽ nói gì với trưởng bộ phận?　(※ \"Máy đã dừng. Tôi nên làm gì?\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/29.10.mp3"
    },
    {
        "lesson": 30,
        "id": "30-1",
        "text": "もう３１<ruby>課<rt>か</rt></ruby>の<ruby>予習<rt>よしゅう</rt></ruby>をしてある？",
        "viText": "Bạn đã chuẩn bị cho Bài học 31 chưa?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.1.mp3"
    },
    {
        "lesson": 30,
        "id": "30-2a",
        "text": "この<ruby>教室<rt>きょうしつ</rt></ruby>/クラス/○○さんの<ruby>部屋<rt>へや</rt></ruby>の　<ruby>壁<rt>かべ</rt></ruby>/ホワイトボード/…に、<ruby>何<rt>なに</rt></ruby>がはってある？\n？",
        "viText": "Lớp học / lớp học này / ○○-san tường phòng / bảng trắng / ... Có gì trên đó?\n",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.2a.mp3"
    },
    {
        "lesson": 30,
        "id": "30-3",
        "text": "あなたの<ruby>部屋<rt>へや</rt></ruby>には、<ruby>何か<rt>なにか</rt></ruby><ruby>掛け<rt>かけ</rt></ruby>たり、<ruby>貼っ<rt>はっ</rt></ruby>たりしてある？　（※「はい、～がはってあります。」/「いいえ、<ruby>何も<rt>なにも</rt></ruby>かけてありません。」）",
        "viText": "Bạn có treo hoặc dán bất cứ thứ gì trong phòng của bạn không?　(※ \"Có, ~ đang ở trên đó.\"/\"Không, không có gì trên đó.\") ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.3.mp3"
    },
    {
        "lesson": 30,
        "id": "30-4",
        "text": "この<ruby>紙<rt>かみ</rt></ruby>に<ruby>何て<rt>なんて</rt></ruby><ruby>書い<rt>かい</rt></ruby>てありますか。　（※「～と<ruby>書い<rt>かい</rt></ruby>てあります。」）",
        "viText": "Bài báo này nói gì?　(※ Nó nói \"~.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.4.mp3"
    },
    {
        "lesson": 30,
        "id": "30-5",
        "text": "あなたはもうパスポートを<ruby>作っ<rt>つくっ</rt></ruby>てありますか。　どこにしまってありますか。/おいてありますか。（※「はい、<ruby>作っ<rt>つくっ</rt></ruby>てあります。」、「いいえ、まだです。まだ<ruby>作っ<rt>つくっ</rt></ruby>ていません。/<ruby>作っ<rt>つくっ</rt></ruby>てありません。」）",
        "viText": "Bạn đã làm hộ chiếu chưa?　Nó được lưu trữ ở đâu? /Nó có sẵn không? (※ \"Vâng, nó đã được thực hiện.\", \"Không, chưa.) Tôi vẫn chưa làm được. /Tôi chưa làm được.\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.5.mp3"
    },
    {
        "lesson": 30,
        "id": "30-6",
        "text": "<ruby>会話<rt>かいわ</rt></ruby><ruby>反応<rt>はんのう</rt></ruby>チェック/テストの<ruby>前<rt>まえ</rt></ruby>に<ruby>練習<rt>れんしゅう</rt></ruby>しておいた？　（※「はい、<ruby>練習<rt>れんしゅう</rt></ruby>してお<ruby>来ま<rt>きま</rt></ruby>した。」）",
        "viText": "Bạn đã thực hành trước khi kiểm tra/kiểm tra phản hồi hội thoại chưa?　(※ \"Vâng, tôi đến để tu luyện.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.6.mp3"
    },
    {
        "lesson": 30,
        "id": "30-7",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>のクラスに<ruby>入る<rt>いる</rt></ruby><ruby>前<rt>まえ</rt></ruby>に ひらがな / <ruby>日本語<rt>にほんご</rt></ruby> を<ruby>覚え<rt>おぼえ</rt></ruby>ておいた？",
        "viText": "Bạn đã ghi nhớ hiragana / tiếng Nhật trước khi tham gia lớp học tiếng Nhật chưa?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.7.mp3"
    },
    {
        "lesson": 30,
        "id": "30-8",
        "text": "いつ<ruby>卒業<rt>そつぎょう</rt></ruby>しますか。　<ruby>卒業<rt>そつぎょう</rt></ruby>する<ruby>前<rt>まえ</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>しておきたいですか。",
        "viText": "Khi nào bạn sẽ tốt nghiệp?　Bạn muốn làm gì trước khi tốt nghiệp?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.8.mp3"
    },
    {
        "lesson": 30,
        "id": "30-9",
        "text": "<ruby>日本<rt>にほん</rt></ruby>へ<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行き<rt>いき</rt></ruby>ます。<ruby>旅行<rt>りょこう</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に、<ruby>何<rt>なに</rt></ruby>しておきますか。",
        "viText": "Tôi sẽ đi du lịch Nhật Bản. Bạn nên làm gì trước chuyến đi của mình?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.9.mp3"
    },
    {
        "lesson": 30,
        "id": "30-10",
        "text": "<ruby>日本<rt>にほん</rt></ruby>へ<ruby>働き<rt>はたらき</rt></ruby>に<ruby>行き<rt>いき</rt></ruby>ます。 <ruby>行<rt>いく</rt></ruby><ruby>前<rt>まえ</rt></ruby>に、どれくらい<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>しておいたらいいと<ruby>思い<rt>おもい</rt></ruby>ますか。（※「〇<ruby>課<rt>か</rt></ruby>まで<ruby>勉強<rt>べんきょう</rt></ruby>して/N5・４を<ruby>取っ<rt>とっ</rt></ruby>て　おいたら/おくと　いいと<ruby>思い<rt>おもい</rt></ruby>ます。」）",
        "viText": "Tôi sẽ đến Nhật Bản để làm việc. Bạn nghĩ mình nên học bao nhiêu tiếng Nhật trước khi đi? (※ \"Học đến Phần X / Nhận N5 và 4 / Nếu bạn có chúng, tôi nghĩ giữ chúng là tốt.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/30.10.mp3"
    },
    {
        "lesson": 31,
        "id": "31-1",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>を<ruby>卒業<rt>そつぎょう</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>はいつですか？※○○に<ruby>卒業<rt>そつぎょう</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>です",
        "viText": "Khi nào bạn dự định tốt nghiệp đại học/cao đẳng? * Tôi dự định tốt nghiệp ○○",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.1.mp3"
    },
    {
        "lesson": 31,
        "id": "31-2",
        "text": "<ruby>卒業<rt>そつぎょう</rt></ruby>したら、<ruby>何<rt>なに</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>/つもりですか？",
        "viText": "Bạn dự định làm gì sau khi tốt nghiệp?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.2.mp3"
    },
    {
        "lesson": 31,
        "id": "31-3a",
        "text": "Q2の<ruby>答え<rt>こたえ</rt></ruby>：<ruby>日本<rt>にほん</rt></ruby>に<ruby>行<rt>いく</rt></ruby>：どのぐらい<ruby>日本<rt>にほん</rt></ruby>で<ruby>働こ<rt>はたらこ</rt></ruby>うと<ruby>思って<rt>おもって</rt></ruby>いますか。 <ruby>他の<rt>ほかの</rt></ruby><ruby>答え<rt>こたえ</rt></ruby>：<ruby>日本<rt>にほん</rt></ruby>に<ruby>行こ<rt>いこ</rt></ruby>うと<ruby>思って<rt>おもって</rt></ruby>いますか。",
        "viText": "Câu trả lời Q2: Đến Nhật Bản: Bạn dự định làm việc tại Nhật Bản trong bao lâu? Một câu trả lời khác: Bạn đang nghĩ đến việc đến Nhật Bản?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.3a.mp3"
    },
    {
        "lesson": 31,
        "id": "31-3b",
        "text": "Q2の<ruby>答え<rt>こたえ</rt></ruby>：<ruby>他の<rt>ほかの</rt></ruby><ruby>答え<rt>こたえ</rt></ruby>：<ruby>日本<rt>にほん</rt></ruby>に<ruby>行こ<rt>いこ</rt></ruby>うと<ruby>思って<rt>おもって</rt></ruby>いますか。",
        "viText": "Câu trả lời Q2: Các câu trả lời khác: Bạn đang nghĩ đến việc đến Nhật Bản?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.3b.mp3"
    },
    {
        "lesson": 31,
        "id": "31-4",
        "text": "JLPTはN1まで<ruby>受け<rt>うけ</rt></ruby>ようと<ruby>思って<rt>おもって</rt></ruby>いますか。　（※「はい、<ruby>受け<rt>うけ</rt></ruby>ようと<ruby>思って<rt>おもって</rt></ruby>います。」/「いいえ、N2まで<ruby>受け<rt>うけ</rt></ruby>ようと<ruby>思って<rt>おもって</rt></ruby>います。」）",
        "viText": "Bạn có dự định thi JLPT lên N1 không?　(※ \"Có, tôi dự định thi nó.\"/\"Không, tôi dự định nâng cấp N2.\") ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.4.mp3"
    },
    {
        "lesson": 31,
        "id": "31-5",
        "text": "もし、<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行った<rt>いった</rt></ruby>ら、<ruby>何<rt>なに</rt></ruby>しようと<ruby>思って<rt>おもって</rt></ruby>いますか。",
        "viText": "Nếu bạn đến Nhật Bản, bạn sẽ làm gì tiếp theo?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.5.mp3"
    },
    {
        "lesson": 31,
        "id": "31-6",
        "text": "この<ruby>試験<rt>しけん</rt></ruby>の<ruby>後<rt>のち</rt></ruby>、<ruby>何<rt>なに</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>？",
        "viText": "Bạn dự định làm gì sau kỳ thi này?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.6.mp3"
    },
    {
        "lesson": 31,
        "id": "31-7",
        "text": "\n<ruby>次の<rt>つぎの</rt></ruby><ruby>休み<rt>やすみ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>しようと<ruby>思って<rt>おもって</rt></ruby>る？",
        "viText": "\nBạn dự định làm gì vào ngày nghỉ tới?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.7.mp3"
    },
    {
        "lesson": 31,
        "id": "31-8",
        "text": "もうN4は<ruby>合格<rt>ごうかく</rt></ruby>した？　（※「はい、<ruby>合格<rt>ごうかく</rt></ruby>しました。」/「いいえ、まだ<ruby>合格<rt>ごうかく</rt></ruby>していません。」）",
        "viText": "Bạn đã vượt qua N4 chưa?　(※ \"Vâng, tôi đã đỗ.\") / \"Không, tôi vẫn chưa đỗ.\") ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.8.mp3"
    },
    {
        "lesson": 31,
        "id": "31-9a",
        "text": "いつN3を<ruby>受ける<rt>うける</rt></ruby>つもり？",
        "viText": "Khi nào bạn dự định dùng N3?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.9a.mp3"
    },
    {
        "lesson": 31,
        "id": "31-9b",
        "text": "いつN3を<ruby>受ける<rt>うける</rt></ruby><ruby>予定<rt>よてい</rt></ruby>？",
        "viText": "Khi nào bạn dự định dùng N3?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.9b.mp3"
    },
    {
        "lesson": 31,
        "id": "31-10",
        "text": "<ruby>将来<rt>しょうらい</rt></ruby>、どこに<ruby>住む<rt>すむ</rt></ruby>つもり？",
        "viText": "Bạn dự định sống ở đâu trong tương lai?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/31.10.mp3"
    },
    {
        "lesson": 32,
        "id": "32-1",
        "text": "のどが<ruby>痛い<rt>いたい</rt></ruby><ruby>時<rt>とき</rt></ruby>、<ruby>冷たい<rt>つめたい</rt></ruby><ruby>水<rt>みず</rt></ruby>を<ruby>飲ん<rt>のん</rt></ruby>でもいいですか？/<ruby>辛い<rt>つらい</rt></ruby>ものを<ruby>食<rt>たべて</rt></ruby>もいいですか？/<ruby>何<rt>なに</rt></ruby>したほうが いいですか？　（※「いいえ、(～<ruby>時<rt>とき</rt></ruby>)～ないほうがいいです。」）",
        "viText": "Uống nước lạnh khi đau họng có sao không? /Tôi ăn cay có sao không? /Tôi nên làm gì?　(※ \"Không, tốt hơn hết là không nên có (~thời gian)~.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.1.mp3"
    },
    {
        "lesson": 32,
        "id": "32-2",
        "text": "<ruby>風邪<rt>かぜ</rt></ruby>をひいた<ruby>時<rt>とき</rt></ruby>、①<ruby>何<rt>なに</rt></ruby>しない<ruby>方が<rt>ほうが</rt></ruby>いい？/②シャワーを<ruby>浴び<rt>あび</rt></ruby>てもいい？/③<ruby>運動<rt>うんどう</rt></ruby>しない<ruby>方が<rt>ほうが</rt></ruby>いい？",
        "viText": "Khi bị cảm lạnh, (1) Bạn nên tránh điều gì? /(2) Tắm có sao không? /(3) Tôi có nên tránh tập thể dục không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.2.mp3"
    },
    {
        "lesson": 32,
        "id": "32-3",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>クラスの<ruby>規則<rt>きそく</rt></ruby>を<ruby>守っ<rt>まもっ</rt></ruby>ていない<ruby>友達<rt>ともだち</rt></ruby>に、アドバイスをして。",
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
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>クラスの1<ruby>年生<rt>ねんせい</rt></ruby>/<ruby>後輩<rt>こうはい</rt></ruby>に <ruby>漢字<rt>かんじ</rt></ruby>や<ruby>文法<rt>ぶんぽう</rt></ruby>など、<ruby>何か<rt>なにか</rt></ruby>ひとつ<ruby>勉強<rt>べんきょう</rt></ruby>のアドバイスをしてください。",
        "viText": "Đối với sinh viên năm nhất hoặc sinh viên năm cuối trong lớp tiếng Nhật, vui lòng đưa ra một số lời khuyên về việc học kanji hoặc ngữ pháp.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.6.mp3"
    },
    {
        "lesson": 32,
        "id": "32-7",
        "text": "<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>がベトナムへ<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>来ま<rt>きま</rt></ruby>す。アドバイスをしてください。（※「～を～たほうが」/「～ないほうが」いいですよ。",
        "viText": "Một người bạn Nhật Bản đang đi du lịch Việt Nam. Xin hãy cho tôi một số lời khuyên. (※ '~o~tahoga' / '~naihoga' tốt hơn.)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.7.mp3"
    },
    {
        "lesson": 32,
        "id": "32-8",
        "text": "<ruby>今日は<rt>こんにちは</rt></ruby><ruby>朝<rt>あさ</rt></ruby>、<ruby>雨<rt>あめ</rt></ruby>が<ruby>降り<rt>おり</rt></ruby>ましたね。　<ruby>明日<rt>あした</rt></ruby>はどうですか。　（※「たぶん、/きっと～と<ruby>思い<rt>おもい</rt></ruby>ます。/～かもしれません。」）",
        "viText": "Sáng nay trời mưa.　Còn ngày mai thì sao?　(*\"Có thể, / Tôi nghĩ~. /~ có thể.\") ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.8.mp3"
    },
    {
        "lesson": 32,
        "id": "32-9",
        "text": "<ruby>日本<rt>にほん</rt></ruby>の<ruby>交通<rt>こうつう</rt></ruby>ルールを<ruby>知ら<rt>しら</rt></ruby>ないで<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行った<rt>いった</rt></ruby>ら、どうなると<ruby>思い<rt>おもい</rt></ruby>ますか。（※「～と<ruby>思い<rt>おもい</rt></ruby>ます。/～かもしれません。」）　",
        "viText": "Bạn nghĩ điều gì sẽ xảy ra nếu bạn đến Nhật Bản mà không biết luật giao thông của Nhật Bản? (※ \"Tôi nghĩ ~. /~ có thể.\" ）　",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.9.mp3"
    },
    {
        "lesson": 32,
        "id": "32-10a",
        "text": "ベトナムは、これから<ruby>車<rt>くるま</rt></ruby>が<ruby>多く<rt>おおく</rt></ruby>なる/バイクが<ruby>少なく<rt>すくなく</rt></ruby>なる/<ruby>地下鉄<rt>ちかてつ</rt></ruby>ができる…でしょうか。（※「たぶん～と<ruby>思い<rt>おもい</rt></ruby>ます。/～かもしれません。」）",
        "viText": "Việt Nam sẽ chứng kiến nhiều ô tô hơn và ít xe máy hơn trong tương lai, và việc xây dựng tàu điện ngầm... Tôi tự hỏi. (※ \"Tôi nghĩ có lẽ~. /~\". ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.10a.mp3"
    },
    {
        "lesson": 32,
        "id": "32-10b",
        "text": "ベトナムは、これからどうなる…でしょうか。（※「たぶん～と<ruby>思い<rt>おもい</rt></ruby>ます。/～かもしれません。」）",
        "viText": "Điều gì sẽ xảy ra với Việt Nam từ bây giờ... Tôi tự hỏi. (※ \"Tôi nghĩ có lẽ~. /~\". ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/32.10b.mp3"
    },
    {
        "lesson": 33,
        "id": "33-1",
        "text": "これは、<ruby>何と<rt>なんと</rt></ruby> <ruby>書い<rt>かい</rt></ruby>てありますか。（※２つ<ruby>答え<rt>こたえ</rt></ruby>る）",
        "viText": "Điều này nói lên điều gì? (*Câu trả lời 2)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.1.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.1..jpg"
    },
    {
        "lesson": 33,
        "id": "33-2",
        "text": "これは、<ruby>何と<rt>なんと</rt></ruby> <ruby>読み<rt>よみ</rt></ruby>ますか。（※１つ<ruby>答え<rt>こたえ</rt></ruby>る）",
        "viText": "Điều này có nghĩa là gì? (*Câu trả lời 1)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.2.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.2..jpg"
    },
    {
        "lesson": 33,
        "id": "33-3",
        "text": "（２から）これはどういう<ruby>意味<rt>いみ</rt></ruby>ですか。（※「～という<ruby>意味<rt>いみ</rt></ruby>です。」）",
        "viText": "(Từ 2) Điều này có nghĩa là gì? (*Có nghĩa là \"~.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.3.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.3..jpg"
    },
    {
        "lesson": 33,
        "id": "33-4",
        "text": "<ruby>私<rt>わたし</rt></ruby>にこの<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>読み方<rt>よみかた</rt></ruby>を<ruby>聞い<rt>きい</rt></ruby>てください。",
        "viText": "Hỏi tôi làm thế nào để đọc chữ kanji này.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.4.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.4..jpg"
    },
    {
        "lesson": 33,
        "id": "33-5",
        "text": "（４から）<ruby>私<rt>わたし</rt></ruby>にこの<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>を<ruby>聞い<rt>きい</rt></ruby>てください。",
        "viText": "(Từ 4) Xin hãy hỏi ý nghĩa của chữ kanji này.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.5.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.5..jpg"
    },
    {
        "lesson": 33,
        "id": "33-6",
        "text": "<ruby>教師<rt>きょうし</rt></ruby>の<ruby>指示<rt>しじ</rt></ruby>（<ruby>命令形<rt>めいれいけい</rt></ruby>・<ruby>禁止<rt>きんし</rt></ruby><ruby>形<rt>かたち</rt></ruby>）で<ruby>動く<rt>うごく</rt></ruby>　（※４<ruby>問<rt>とん</rt></ruby>）　「<ruby>立て<rt>たて</rt></ruby>/あっちへ<ruby>行け<rt>いけ</rt></ruby>/すわれ/○○を<ruby>持っ<rt>もっ</rt></ruby>てこい。」、「<ruby>座る<rt>すわる</rt></ruby>な/こっちへ<ruby>来る<rt>くる</rt></ruby>な/<ruby>見る<rt>みる</rt></ruby>な。」",
        "viText": "Di chuyển theo hướng dẫn của giáo viên (hình thức mệnh lệnh hoặc cấm đoán) (※4 câu hỏi) \"Đứng lên/Đi qua đó/Trượt/Mang theo ○○\", \"Đừng ngồi/ Đừng đến đây đường/Đừng nhìn.\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.6.mp3"
    },
    {
        "lesson": 33,
        "id": "33-8",
        "text": "これは、どういう<ruby>意味<rt>いみ</rt></ruby>ですか。（<ruby>交通標識<rt>こうつうひょうしき</rt></ruby>やマーク） （※２<ruby>問<rt>とん</rt></ruby>）（※「これは～という<ruby>意味<rt>いみ</rt></ruby>です。」）\n",
        "viText": "Điều này có nghĩa là gì? (Biển báo và vạch kẻ giao thông) (*2 câu hỏi) (*Điều này có nghĩa là ~.)\n",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.8.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.8..jpg"
    },
    {
        "lesson": 33,
        "id": "33-10",
        "text": "これをあの<ruby>人<rt>ひと</rt></ruby>(その<ruby>教室<rt>きょうしつ</rt></ruby>にいる<ruby>人<rt>ひと</rt></ruby>/<ruby>画面<rt>がめん</rt></ruby>にいる<ruby>人<rt>ひと</rt></ruby>)に<ruby>伝え<rt>つたえ</rt></ruby>ていただけませんか。（※「○○さん、＊＊<ruby>先生<rt>せんせい</rt></ruby>が～と<ruby>言って<rt>いって</rt></ruby>いました。」）",
        "viText": "Bạn có thể vui lòng truyền đạt điều này cho người đó (người trong lớp học hoặc người trên màn hình) không? (*\"Ông ○○, **Giáo viên nói ~.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.10.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/33.10..jpg"
    },
    {
        "lesson": 34,
        "id": "34-1",
        "text": "<ruby>出か<rt>でか</rt></ruby>ける<ruby>時<rt>とき</rt></ruby>、いつも  <ruby>何<rt>なに</rt></ruby><ruby>持っ<rt>もっ</rt></ruby>て　<ruby>出か<rt>でか</rt></ruby>けますか。",
        "viText": "Bạn luôn mang theo những gì khi ra ngoài?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.1.mp3"
    },
    {
        "lesson": 34,
        "id": "34-2a",
        "text": "いつも、<ruby>扇風機<rt>せんぷうき</rt></ruby>/エアコン/<ruby>電気<rt>でんき</rt></ruby>を…<ruby>消し<rt>けし</rt></ruby>て、<ruby>寝ま<rt>ねま</rt></ruby>すか。",
        "viText": "Tôi luôn chạy quạt, điều hòa, điện... Tắt nó và đi ngủ.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.2a.mp3"
    },
    {
        "lesson": 34,
        "id": "34-2b",
        "text": "いつも、<ruby>扇風機<rt>せんぷうき</rt></ruby>/エアコン/<ruby>電気<rt>でんき</rt></ruby>を…<ruby>消さ<rt>けさ</rt></ruby>ないで、<ruby>寝ま<rt>ねま</rt></ruby>すか。",
        "viText": "Tôi luôn chạy quạt, điều hòa, điện... Đừng xóa nó, hãy đi ngủ.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.2b.mp3"
    },
    {
        "lesson": 34,
        "id": "34-3",
        "text": "いつもヘルメットをかぶってバイクに<ruby>乗り<rt>のり</rt></ruby>ますか。",
        "viText": "Bạn có luôn đội mũ bảo hiểm khi đi xe đạp không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.3.mp3"
    },
    {
        "lesson": 34,
        "id": "34-4",
        "text": "あなたは、<ruby>寿司<rt>すし</rt></ruby>/<ruby>刺身<rt>さしみ</rt></ruby>/マンゴー/<ruby>西瓜<rt>すいか</rt></ruby>　に、　<ruby>何<rt>なに</rt></ruby>つけて<ruby>食<rt>たべ</rt></ruby>ますか。",
        "viText": "Bạn sẽ nhúng gì vào sushi, sashimi, xoài hoặc dưa hấu?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.4.mp3"
    },
    {
        "lesson": 34,
        "id": "34-5",
        "text": "どんな<ruby>服<rt>ふく</rt></ruby>を<ruby>着て<rt>きて</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行き<rt>いき</rt></ruby>ますか。",
        "viText": "Bạn sẽ mặc những bộ quần áo nào khi đến Nhật Bản?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.5.mp3"
    },
    {
        "lesson": 34,
        "id": "34-6",
        "text": "<ruby>私<rt>わたし</rt></ruby>が<ruby>言う<rt>いう</rt></ruby>とおりに<ruby>言って<rt>いって</rt></ruby>ください。（※<ruby>復唱<rt>ふくしょう</rt></ruby>の<ruby>練習<rt>れんしゅう</rt></ruby>）　※<ruby>教師<rt>きょうし</rt></ruby>：「<ruby>明日<rt>あした</rt></ruby>８<ruby>時に<rt>ときに</rt></ruby><ruby>来い<rt>こい</rt></ruby>。」（<ruby>命令形<rt>めいれいけい</rt></ruby>）…<ruby>学生<rt>がくせい</rt></ruby>：「<ruby>明日<rt>あした</rt></ruby>８<ruby>時に<rt>ときに</rt></ruby><ruby>来ま<rt>きま</rt></ruby>す。」（<ruby>丁寧<rt>ていねい</rt></ruby><ruby>形<rt>かたち</rt></ruby>）　\n　 <ruby>右手<rt>みぎて</rt></ruby>をあげろ…<ruby>右手<rt>みぎて</rt></ruby>をあげます　",
        "viText": "Chỉ cần nói như tôi nói. (*Thực hành lặp lại bài tụng) *Sư phụ: \"Ngày mai hãy đến lúc 8 giờ.\" (Hình thức mệnh lệnh)... Học sinh: \"Tôi sẽ đến lúc 8 giờ ngày mai.\" (lịch sự)　\n　 Giơ tay phải lên... Giơ tay phải của bạn　",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.6.mp3"
    },
    {
        "lesson": 34,
        "id": "34-7",
        "text": "<ruby>私<rt>わたし</rt></ruby>が<ruby>言う<rt>いう</rt></ruby>とおりに<ruby>言って<rt>いって</rt></ruby>ください。（※<ruby>復唱<rt>ふくしょう</rt></ruby>の<ruby>練習<rt>れんしゅう</rt></ruby>）　※<ruby>教師<rt>きょうし</rt></ruby>：「<ruby>右手<rt>みぎて</rt></ruby>を<ruby>上げ<rt>あげ</rt></ruby>ろ。」（<ruby>命令形<rt>めいれいけい</rt></ruby>）…<ruby>学生<rt>がくせい</rt></ruby>：「<ruby>右手<rt>みぎて</rt></ruby>を<ruby>上げ<rt>あげ</rt></ruby>ます。」（<ruby>丁寧<rt>ていねい</rt></ruby><ruby>形<rt>かたち</rt></ruby>）　\n　 <ruby>右手<rt>みぎて</rt></ruby>をあげろ…<ruby>右手<rt>みぎて</rt></ruby>をあげます　",
        "viText": "Chỉ cần nói như tôi nói. (*Thực hành trì tụng) *Sư phụ: \"Giơ tay phải.\" (Hình thức mệnh lệnh)... Học sinh: \"Tôi giơ tay phải.\" (hình thức lịch sự)　\n　 Giơ tay phải lên... Giơ tay phải của bạn　",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.7.mp3"
    },
    {
        "lesson": 34,
        "id": "34-8",
        "text": "<ruby>私<rt>わたし</rt></ruby>が<ruby>言った<rt>いった</rt></ruby>とおりに<ruby>書い<rt>かい</rt></ruby>てください。（※メモ<ruby>取り<rt>とり</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>　<ruby>要点<rt>ようてん</rt></ruby>を<ruby>書く<rt>かく</rt></ruby>）　※「 <ruby>明日<rt>あした</rt></ruby>、<ruby>午後<rt>ごご</rt></ruby>3<ruby>時<rt>とき</rt></ruby>から<ruby>会議<rt>かいぎ</rt></ruby>があります。」",
        "viText": "Viết như tôi đã nói. (*Thực hành ghi chú: viết những điểm chính) *\"Ngày mai có một cuộc họp từ 3:00 chiều.\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.8.mp3"
    },
    {
        "lesson": 34,
        "id": "34-9",
        "text": "<ruby>私<rt>わたし</rt></ruby>が<ruby>言った<rt>いった</rt></ruby>とおりに<ruby>書い<rt>かい</rt></ruby>てください。（※メモ<ruby>取り<rt>とり</rt></ruby><ruby>練習<rt>れんしゅう</rt></ruby>　<ruby>要点<rt>ようてん</rt></ruby>を<ruby>書く<rt>かく</rt></ruby>）　※「 9<ruby>月<rt>がつ</rt></ruby>25<ruby>日<rt>にち</rt></ruby>、10<ruby>時に<rt>ときに</rt></ruby><ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>。」",
        "viText": "",
        "audioUrl": ""
    },
    {
        "lesson": 34,
        "id": "34-10",
        "text": "○○さんは、いつシャワーを<ruby>浴び<rt>あび</rt></ruby>ますか？…<ruby>寝る<rt>ねる</rt></ruby><ruby>前<rt>まえ</rt></ruby>ですか、<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>後で<rt>あとで</rt></ruby>すか。/ いつ<ruby>宿題<rt>しゅくだい</rt></ruby>をしますか？…<ruby>食事<rt>しょくじ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>/<ruby>後<rt>のち</rt></ruby>/、<ruby>寝る<rt>ねる</rt></ruby><ruby>前<rt>まえ</rt></ruby>…ですか。（※「～の<ruby>後で<rt>あとで</rt></ruby>/<ruby>前<rt>まえ</rt></ruby>に～します。」）",
        "viText": "Khi nào anh đi tắm, anh ○○? … Trước khi đi ngủ, sau bữa ăn? / Khi nào bạn làm bài tập về nhà? … Trước và sau bữa ăn, trước khi đi ngủ... Có phải vậy không? (※ \"Sau ~ / Trước ~ Tôi sẽ làm điều đó.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/34.10.mp3"
    },
    {
        "lesson": 35,
        "id": "35-1",
        "text": "<ruby>何<rt>なに</rt></ruby>すれば、<ruby>会話<rt>かいわ</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>になると<ruby>思い<rt>おもい</rt></ruby>ますか。",
        "viText": "Em nghĩ mình nên làm gì để trở nên giỏi hơn trong cuộc trò chuyện?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.1.mp3"
    },
    {
        "lesson": 35,
        "id": "35-2",
        "text": "<ruby>日本<rt>にほん</rt></ruby>で、<ruby>日本語<rt>にほんご</rt></ruby>/<ruby>漢字<rt>かんじ</rt></ruby>/<ruby>道<rt>みち</rt></ruby>　がわからない<ruby>時<rt>とき</rt></ruby>、どうすればいいと<ruby>思い<rt>おもい</rt></ruby>ますか。",
        "viText": "Bạn nghĩ bạn nên làm gì nếu bạn không hiểu tiếng Nhật/kanji/way ở Nhật Bản?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.2.mp3"
    },
    {
        "lesson": 35,
        "id": "35-3",
        "text": "<ruby>日本<rt>にほん</rt></ruby>で、<ruby>困っ<rt>こまっ</rt></ruby>た<ruby>時<rt>とき</rt></ruby>、<ruby>誰<rt>だれ</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>すれば いいと<ruby>思い<rt>おもい</rt></ruby>ますか。",
        "viText": "Bạn nghĩ bạn nên tham khảo ý kiến của ai khi gặp khó khăn ở Nhật Bản?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.3.mp3"
    },
    {
        "lesson": 35,
        "id": "35-4",
        "text": "<ruby>何<rt>なに</rt></ruby>があれば/<ruby>何<rt>なに</rt></ruby>ができれば、<ruby>日本<rt>にほん</rt></ruby>の<ruby>生活<rt>せいかつ</rt></ruby>で<ruby>困ら<rt>こまら</rt></ruby>ないと<ruby>思い<rt>おもい</rt></ruby>ますか。",
        "viText": "Bạn nghĩ điều gì có thể tránh được những khó khăn trong cuộc sống ở Nhật Bản?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.4.mp3"
    },
    {
        "lesson": 35,
        "id": "35-5a",
        "text": "<ruby>何<rt>なに</rt></ruby>があれば<ruby>嬉しい<rt>うれしい</rt></ruby>ですか。",
        "viText": "Bạn sẽ hạnh phúc về điều gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.5a.mp3"
    },
    {
        "lesson": 35,
        "id": "35-5b",
        "text": "<ruby>誰<rt>だれが</rt></ruby>いれば　<ruby>幸せ<rt>しあわせ</rt></ruby>ですか。",
        "viText": "Ai sẽ hạnh phúc nếu bạn có nó?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.5b.mp3"
    },
    {
        "lesson": 35,
        "id": "35-6",
        "text": "<ruby>天気<rt>てんき</rt></ruby>が<ruby>悪く<rt>わるく</rt></ruby>ても、<ruby>出か<rt>でか</rt></ruby>けますか。",
        "viText": "Ngay cả khi thời tiết xấu, bạn có ra ngoài không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.6.mp3"
    },
    {
        "lesson": 35,
        "id": "35-7",
        "text": "<ruby>欲しい<rt>ほしい</rt></ruby>ものは、<ruby>高く<rt>たかく</rt></ruby>ても<ruby>買い<rt>かい</rt></ruby>ますか。　（※「はい、<ruby>高く<rt>たかく</rt></ruby>ても<ruby>買い<rt>かい</rt></ruby>ます。/いいえ、<ruby>高け<rt>たかけ</rt></ruby>れば<ruby>買い<rt>かい</rt></ruby>ません。」）",
        "viText": "Nếu bạn muốn một cái gì đó, bạn có sẵn sàng mua nó ngay cả khi nó đắt không?　(※ \"Vâng, tôi sẽ mua nó ngay cả khi nó đắt. / Không, tôi sẽ không mua nếu nó đắt.\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.7.mp3"
    },
    {
        "lesson": 35,
        "id": "35-8",
        "text": "あなたの<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>に<ruby>何<rt>なに</rt></ruby>があれば、<ruby>便利<rt>べんり</rt></ruby>だ / いい　と<ruby>思い<rt>おもい</rt></ruby>ますか。",
        "viText": "Bạn nghĩ trường đại học / cao đẳng của bạn sẽ hữu ích hoặc tốt như thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.8.mp3"
    },
    {
        "lesson": 35,
        "id": "35-9",
        "text": "ベトナムで<ruby>海<rt>うみ</rt></ruby>と<ruby>山<rt>やま</rt></ruby>へ<ruby>行き<rt>いき</rt></ruby>たいです。<ruby>海<rt>うみ</rt></ruby>ならどこですか、<ruby>山<rt>やま</rt></ruby>ならどこですか？」：（※２つ<ruby>答え<rt>こたえ</rt></ruby>る）",
        "viText": "Tôi muốn đi biển và núi ở Việt Nam. Biển ở đâu, núi ở đâu?\" :(*Câu trả lời 2)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.9.mp3"
    },
    {
        "lesson": 35,
        "id": "35-10a",
        "text": "ベトナムを<ruby>旅行<rt>りょこう</rt></ruby>します。どこへ<ruby>行って<rt>いって</rt></ruby><ruby>何<rt>なに</rt></ruby><ruby>食<rt>たべ</rt></ruby>ればいいですか。<ruby>教<rt>おしえ</rt></ruby>てください。　（※「Aなら～/Bなら～。」（２つ<ruby>答え<rt>こたえ</rt></ruby>る））",
        "viText": "Du lịch tại Việt Nam. Bạn nên đi đâu và nên ăn gì? Xin hãy cho tôi biết.　(※ \"Nếu là A~/Nếu là B~.\" (Câu trả lời hai))",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.10a.mp3"
    },
    {
        "lesson": 35,
        "id": "35-10a",
        "text": "ベトナムを<ruby>旅行<rt>りょこう</rt></ruby>します。どこへ<ruby>行って<rt>いって</rt></ruby><ruby>何<rt>なに</rt></ruby><ruby>見れ<rt>みれ</rt></ruby>ばいいですか。<ruby>教<rt>おしえ</rt></ruby>てください。　（※「Aなら～/Bなら～。」（２つ<ruby>答え<rt>こたえ</rt></ruby>る））",
        "viText": "Du lịch tại Việt Nam. Bạn nên đi đâu và bạn nên xem gì? Xin hãy cho tôi biết.　(※ \"Nếu là A~/Nếu là B~.\" (Câu trả lời hai))",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/35.10a.mp3"
    },
    {
        "lesson": 36,
        "id": "36-1a",
        "text": "<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>部屋<rt>へや</rt></ruby>を<ruby>掃除<rt>そうじ</rt></ruby>する/<ruby>洗濯<rt>せんたく</rt></ruby>する　ようにしていますか。　",
        "viText": "Bạn có đảm bảo dọn dẹp hoặc giặt giũ hàng ngày không?　",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.1a.mp3"
    },
    {
        "lesson": 36,
        "id": "36-1b",
        "text": "<ruby>毎日<rt>まいにち</rt></ruby>、<ruby>部屋<rt>へや</rt></ruby>を<ruby>掃除<rt>そうじ</rt></ruby>する/<ruby>洗濯<rt>せんたく</rt></ruby>する　ようにしていますか。　",
        "viText": "Bạn có đảm bảo dọn dẹp hoặc giặt giũ hàng ngày không?　",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.1b.mp3"
    },
    {
        "lesson": 36,
        "id": "36-2",
        "text": "メモ<ruby>帳<rt>ちょう</rt></ruby>を<ruby>持っ<rt>もっ</rt></ruby>ていますか。どうしてメモしますか。（※「はい、<ruby>持っ<rt>もっ</rt></ruby>ています。<ruby>忘れ<rt>わすれ</rt></ruby>ないようにメモします。」）",
        "viText": "Bạn có sổ tay không? Tại sao bạn ghi chép? (※ \"Vâng, tôi có nó. Tôi sẽ đảm bảo rằng tôi không quên.\") ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.2.mp3"
    },
    {
        "lesson": 36,
        "id": "36-3",
        "text": "<ruby>毎日<rt>まいにち</rt></ruby><ruby>何時間<rt>なんじかん</rt></ruby>、<ruby>自分<rt>じぶん</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>するようにしていますか。（※「〇<ruby>時間<rt>じかん</rt></ruby>、<ruby>勉強<rt>べんきょう</rt></ruby>するようにしています。」）",
        "viText": "Bạn tự học bao nhiêu giờ mỗi ngày? (※ \"Tôi cố gắng học X giờ.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.3.mp3"
    },
    {
        "lesson": 36,
        "id": "36-4",
        "text": "あなたが、<ruby>気を<rt>きを</rt></ruby>つけていること、<ruby>毎日<rt>まいにち</rt></ruby>がんばっていることは<ruby>何で<rt>なんで</rt></ruby>すか。（※「<ruby>毎日<rt>まいにち</rt></ruby>/できるだけ～ようにしています。」）",
        "viText": "Bạn đang chú ý đến điều gì, và bạn đang làm việc gì mỗi ngày? (※ \"Mỗi ngày / Tôi cố gắng làm hết sức mình ~ càng nhiều càng tốt.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.4.mp3"
    },
    {
        "lesson": 36,
        "id": "36-5",
        "text": "（Q2）それは、どうしてですか。（※「<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>になるように/<ruby>日本<rt>にほん</rt></ruby>で<ruby>働け<rt>はたらけ</rt></ruby>るように/<ruby>元気<rt>げんき</rt></ruby>でいられるように、～ています。」）",
        "viText": "(Q2) Tại sao vậy? (*\"Tôi đang làm việc để có thể cải thiện tiếng Nhật / làm việc tại Nhật Bản / giữ gìn sức khỏe, ~.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.5.mp3"
    },
    {
        "lesson": 36,
        "id": "36-6",
        "text": "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>大学名<rt>だいがくめい</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby><ruby>名<rt>めい</rt></ruby>/<ruby>会社名<rt>かいしゃめい</rt></ruby>/<ruby>組合<rt>くみあい</rt></ruby><ruby>名<rt>めい</rt></ruby>/<ruby>住所<rt>じゅうしょ</rt></ruby>が<ruby>漢字<rt>かんじ</rt></ruby>で<ruby>書け<rt>かけ</rt></ruby>るようになった？",
        "viText": "Bạn có thể viết tên trường đại học, tên trường cao đẳng, tên công ty, tên công đoàn hoặc địa chỉ bằng chữ Hán không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.6.mp3"
    },
    {
        "lesson": 36,
        "id": "36-7",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>に<ruby>話せ<rt>はなせ</rt></ruby>るようになった？　※「はい、<ruby>話せ<rt>はなせ</rt></ruby>るようになりました。」/「<ruby>少し<rt>すこし</rt></ruby>～。」/「 いいえ、まだ<ruby>話せ<rt>はなせ</rt></ruby>ません。」/「まだ、<ruby>話せ<rt>はなせ</rt></ruby>るようになりません。」",
        "viText": "Bạn đã trở nên giỏi nói tiếng Nhật chưa?　* \"Vâng, tôi có thể nói chuyện ngay bây giờ.\" / \"Chỉ một chút thôi~.\" /\"Không, tôi chưa thể nói.\"/\"Tôi vẫn không thể nói.\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.7.mp3"
    },
    {
        "lesson": 36,
        "id": "36-8",
        "text": "どうすれば、<ruby>上手<rt>じょうず</rt></ruby>に<ruby>話せ<rt>はなせ</rt></ruby>るようになると<ruby>思う<rt>おもう</rt></ruby>？　（※「・・・すれば、<ruby>話せ<rt>はなせ</rt></ruby>るようになると<ruby>思い<rt>おもい</rt></ruby>ます。」）",
        "viText": "Làm thế nào để bạn có thể nói tốt?　(※ \"...Nếu cậu làm điều này, tôi nghĩ cậu sẽ có thể nói chuyện.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.8.mp3"
    },
    {
        "lesson": 36,
        "id": "36-9",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>に<ruby>入っ<rt>いっっ</rt></ruby>て、<ruby>何<rt>なに</rt></ruby>ができるようになった？",
        "viText": "Bạn đã có thể làm gì kể từ khi vào đại học / cao đẳng cơ sở?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.9.mp3"
    },
    {
        "lesson": 36,
        "id": "36-10",
        "text": "<ruby>子ども<rt>こども</rt></ruby>の<ruby>時<rt>とき</rt></ruby>、<ruby>出来な<rt>できな</rt></ruby>くて、<ruby>今<rt>いま</rt></ruby>、<ruby>出来る<rt>できる</rt></ruby>ようになったことは<ruby>何<rt>なに</rt></ruby>？",
        "viText": "Những điều bạn không thể làm khi còn nhỏ nhưng bây giờ có thể làm được là gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/36.10.mp3"
    },
    {
        "lesson": 37,
        "id": "37-1",
        "text": "<ruby>両親<rt>りょうしん</rt></ruby>に<ruby>叱ら<rt>しから</rt></ruby>れたことがありますか。　<ruby>何<rt>なに</rt></ruby>して <ruby>叱ら<rt>しから</rt></ruby>れましたか。",
        "viText": "Bạn đã bao giờ bị cha mẹ mắng chưa?　Bạn đã làm gì và bị mắng?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.1.mp3"
    },
    {
        "lesson": 37,
        "id": "37-2",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>で ほめられたことが ありますか。どうしてほめられましたか。",
        "viText": "Bạn đã bao giờ được khen ngợi tại một trường đại học hoặc cao đẳng chưa? Tại sao bạn được khen ngợi?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.2.mp3"
    },
    {
        "lesson": 37,
        "id": "37-3",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>で<ruby>注意<rt>ちゅうい</rt></ruby>されたことが　ありますか。<ruby>何と<rt>なんと</rt></ruby><ruby>注意<rt>ちゅうい</rt></ruby>されましたか。",
        "viText": "Bạn đã bao giờ được cảnh báo về trường đại học hoặc cao đẳng cơ sở của mình chưa? Bạn đã bị khiển trách điều gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.3.mp3"
    },
    {
        "lesson": 37,
        "id": "37-4",
        "text": "<ruby>友達<rt>ともだち</rt></ruby>に　<ruby>何<rt>なに</rt></ruby>されたら、<ruby>困り<rt>こまり</rt></ruby>ますか。/<ruby>嫌で<rt>いやで</rt></ruby>すか。　（※「バイクを<ruby>壊さ<rt>こわさ</rt></ruby>れたら / <ruby>服<rt>ふく</rt></ruby>を<ruby>汚さ<rt>よごさ</rt></ruby>れたら / <ruby>殴ら<rt>なぐら</rt></ruby>れたら / ・・・。」）",
        "viText": "Bạn sẽ gặp rắc rối gì nếu bạn bè làm điều gì đó với bạn? /Bạn không thích nó?　(※ \"Nếu xe đạp của bạn bị hỏng / Nếu quần áo của bạn bị bẩn / Nếu bạn bị va chạm / ...\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.4.mp3"
    },
    {
        "lesson": 37,
        "id": "37-5",
        "text": "<ruby>友達<rt>ともだち</rt></ruby>が<ruby>何<rt>なに</rt></ruby>してくれたら、<ruby>嬉しい<rt>うれしい</rt></ruby>ですか。　（※「<ruby>一緒に<rt>いっしょに</rt></ruby><ruby>遊んで<rt>あそんで</rt></ruby>くれたら / <ruby>料理<rt>りょうり</rt></ruby>を<ruby>作っ<rt>つくっ</rt></ruby>てくれたら・・・。」）",
        "viText": "Điều gì sẽ khiến bạn hạnh phúc nếu bạn bè của bạn làm điều đó cho bạn?　(※ \"Nếu bạn chơi với tôi / Nếu bạn nấu ăn cho tôi...\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.5.mp3"
    },
    {
        "lesson": 37,
        "id": "37-6",
        "text": "<ruby>今日<rt>きょう</rt></ruby>、<ruby>担任<rt>たんにん</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何か<rt>なにか</rt></ruby><ruby>言わ<rt>いわ</rt></ruby>れました？　<ruby>何て<rt>なんて</rt></ruby><ruby>言わ<rt>いわ</rt></ruby>れた？",
        "viText": "Hôm nay giáo viên chủ nhiệm của bạn có nói gì với bạn không?　Họ đã nói gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.6.mp3"
    },
    {
        "lesson": 37,
        "id": "37-7",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>でどんなイベントが<ruby>行わ<rt>おこなわ</rt></ruby>れている？",
        "viText": "Những loại sự kiện nào được tổ chức tại các trường đại học và cao đẳng cơ sở?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.7.mp3"
    },
    {
        "lesson": 37,
        "id": "37-8",
        "text": "ベトナムでは <ruby>漢字<rt>かんじ</rt></ruby>が <ruby>使わ<rt>つかわ</rt></ruby>れてる？\n？",
        "viText": "Kanji có được sử dụng ở Việt Nam không?\n",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.8.mp3"
    },
    {
        "lesson": 37,
        "id": "37-9",
        "text": "ベトナムでは フォーを<ruby>食<rt>たべ</rt></ruby>るね。フォーは <ruby>何か<rt>なにか</rt></ruby>ら　<ruby>作ら<rt>つくら</rt></ruby>れているの？",
        "viText": "Ở Việt Nam, chúng ta ăn phở. Phở được làm từ gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.9.mp3"
    },
    {
        "lesson": 37,
        "id": "37-10",
        "text": "ベトナムでは、<ruby>何<rt>なに</rt></ruby>がたくさん<ruby>作ら<rt>つくら</rt></ruby>れている？　（※「<ruby>米<rt>こめ</rt></ruby>、<ruby>果物<rt>くだもの</rt></ruby>、コーヒー　が<ruby>作ら<rt>つくら</rt></ruby>れています。」）\n",
        "viText": "Những gì đang được sản xuất nhiều ở Việt Nam?　(※ \"Cơm, trái cây và cà phê đang được làm.\")\n",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/37.10.mp3"
    },
    {
        "lesson": 38,
        "id": "38-1a",
        "text": "（２<ruby>問<rt>とん</rt></ruby>）サッカーをするのが<ruby>好<rt>す</rt></ruby>ですか。<ruby>見る<rt>みる</rt></ruby>のが<ruby>好<rt>す</rt></ruby>ですか。\n。",
        "viText": "(Câu hỏi 2) Bạn có thích chơi bóng đá không? Bạn có thích xem không?\n",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.1a.mp3"
    },
    {
        "lesson": 38,
        "id": "38-1b",
        "text": "（２<ruby>問<rt>とん</rt></ruby>）<ruby>歌を<rt>うたを</rt></ruby><ruby>歌う<rt>うたう</rt></ruby>のが/<ruby>歌を<rt>うたを</rt></ruby><ruby>聴く<rt>きく</rt></ruby>のが/<ruby>絵<rt>え</rt></ruby>を<ruby>見る<rt>みる</rt></ruby>のが/<ruby>絵<rt>え</rt></ruby>を<ruby>描く<rt>えがく</rt></ruby>のが/ダンスをするのが/…<ruby>好<rt>す</rt></ruby>ですか。\n。",
        "viText": "(2 câu hỏi) Ca hát / Nghe hát / Ngắm tranh / Vẽ / Nhảy múa / ... Bạn có thích nó không?\n",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.1b.mp3"
    },
    {
        "lesson": 38,
        "id": "38-2",
        "text": "（Q1から）どうしてですか。",
        "viText": "(Từ Q1) Tại sao vậy?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.2.mp3"
    },
    {
        "lesson": 38,
        "id": "38-3a",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>で、<ruby>漢字<rt>かんじ</rt></ruby>を<ruby>書く<rt>かく</rt></ruby>のは<ruby>難しい<rt>むずかしい</rt></ruby>ですか。　<ruby>何<rt>なに</rt></ruby>するのは <ruby>難しい<rt>むずかしい</rt></ruby>ですか。 ※（「はい、<ruby>難しい<rt>むずかしい</rt></ruby>です。/<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>難しい<rt>むずかしい</rt></ruby>です。」）",
        "viText": "Viết kanji khi học tiếng Nhật có khó không?　Điều gì là khó làm? ※(\"Vâng, nó khó. / Mọi thứ đều khó khăn.\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.3a.mp3"
    },
    {
        "lesson": 38,
        "id": "38-3b",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>で、<ruby>何<rt>なに</rt></ruby>するのは<ruby>難しく<rt>むずかしく</rt></ruby>ないですか。 ※（「<ruby>話す<rt>はなす</rt></ruby>のは<ruby>難しく<rt>むずかしく</rt></ruby>ないです。/<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>難しい<rt>むずかしい</rt></ruby>です。」）",
        "viText": "Không khó để làm bất cứ điều gì trong học tiếng Nhật? ※(\"Không khó để nói về. / Mọi thứ đều khó khăn.\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.3b.mp3"
    },
    {
        "lesson": 38,
        "id": "38-4a",
        "text": "あなたは　<ruby>何<rt>なに</rt></ruby>するのが<ruby>早い<rt>はやい</rt></ruby>ですか。",
        "viText": "Bạn làm gì nhanh?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.4a.mp3"
    },
    {
        "lesson": 38,
        "id": "38-4b",
        "text": "あなたは　<ruby>何<rt>なに</rt></ruby>するのが<ruby>遅い<rt>おそい</rt></ruby>ですか。",
        "viText": "Bạn chậm làm gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.4b.mp3"
    },
    {
        "lesson": 38,
        "id": "38-5",
        "text": "あなたは  <ruby>何<rt>なに</rt></ruby>するのが <ruby>嫌い<rt>きらい</rt></ruby>ですか。",
        "viText": "Bạn không thích làm gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.5.mp3"
    },
    {
        "lesson": 38,
        "id": "38-6",
        "text": "あなたは<ruby>今<rt>いま</rt></ruby>どこに<ruby>住ん<rt>すん</rt></ruby>でいるの？　<ruby>生まれ<rt>うまれ</rt></ruby>たのもそこ（<ruby>学生<rt>がくせい</rt></ruby>の<ruby>回答<rt>かいとう</rt></ruby>）ですか？　（※「いいえ、<ruby>生まれ<rt>うまれ</rt></ruby>たのは＊＊です。」）",
        "viText": "Bây giờ bạn sống ở đâu?　Đó cũng là nơi bạn sinh ra (phản ứng của sinh viên)?　(※ \"Không, tôi được sinh ra **.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.6.mp3"
    },
    {
        "lesson": 38,
        "id": "38-7",
        "text": "▲<ruby>月<rt>がつ</rt></ruby>から<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>を<ruby>始め<rt>はじめ</rt></ruby>たんだね？（※<ruby>違う<rt>ちがう</rt></ruby><ruby>月<rt>がつ</rt></ruby>を<ruby>言う<rt>いう</rt></ruby>：「いいえ、<ruby>勉強<rt>べんきょう</rt></ruby>を<ruby>始め<rt>はじめ</rt></ruby>たのは〇<ruby>月<rt>がつ</rt></ruby>からです。」）",
        "viText": "▲ Bạn bắt đầu học tiếng Nhật trong tháng, phải không? (※ Nói một tháng khác: \"Không, tôi bắt đầu học vào tháng XX.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.7.mp3"
    },
    {
        "lesson": 38,
        "id": "38-8",
        "text": "（<ruby>去年<rt>きょねん</rt></ruby>の）▲<ruby>月<rt>がつ</rt></ruby>から　<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>に<ruby>入っ<rt>いっっ</rt></ruby>たんだね。（※<ruby>違う<rt>ちがう</rt></ruby><ruby>月<rt>がつ</rt></ruby>を<ruby>言う<rt>いう</rt></ruby>：「いいえ、<ruby>入っ<rt>いっっ</rt></ruby>たのは▲<ruby>月<rt>がつ</rt></ruby>です。」）",
        "viText": "(Năm ngoái) ▲ tháng, bạn vào đại học / cao đẳng cơ sở, phải không? (※ Nói một tháng khác: \"Không, tháng nhập là ▲ tháng.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.8.mp3"
    },
    {
        "lesson": 38,
        "id": "38-9",
        "text": "<ruby>今<rt>いま</rt></ruby>、あなたが<ruby>一番<rt>いちばん</rt></ruby><ruby>欲しい<rt>ほしい</rt></ruby>もの、<ruby>二番目<rt>にばんめ</rt></ruby>に<ruby>欲しい<rt>ほしい</rt></ruby>ものを<ruby>教<rt>おしえ</rt></ruby>て。　（※「<ruby>一番<rt>いちばん</rt></ruby><ruby>欲しい<rt>ほしい</rt></ruby>のは●です。<ruby>二番目<rt>にばんめ</rt></ruby>に<ruby>欲しい<rt>ほしい</rt></ruby>のは▲です。」）",
        "viText": "Bây giờ, hãy nói cho tôi biết bạn muốn gì nhất, và thứ hai bạn muốn gì.　(※ \"Mong muốn nhất là ●. Mong muốn thứ hai là ▲.\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.9.mp3"
    },
    {
        "lesson": 38,
        "id": "38-10",
        "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>何<rt>なに</rt></ruby>するのが<ruby>楽しみ<rt>たのしみ</rt></ruby>？　（※「～のが<ruby>楽しみ<rt>たのしみ</rt></ruby>です。」）",
        "viText": "Bạn mong muốn làm gì bây giờ?　(※ \"Tôi đang mong đợi ~ một.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/38.10.mp3"
    },
    {
        "lesson": 39,
        "id": "39-1",
        "text": "<ruby>最近<rt>さいきん</rt></ruby>  どんなことで　<ruby>嬉しか<rt>うれしか</rt></ruby>った？　（※「～て、<ruby>嬉しか<rt>うれしか</rt></ruby>ったです。」）",
        "viText": "Gần đây bạn hạnh phúc về điều gì?　(*\"~, tôi rất hạnh phúc.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.1.mp3"
    },
    {
        "lesson": 39,
        "id": "39-2",
        "text": "どんなことで　びっくりした？　（※「～て、びっくりしました。」）",
        "viText": "Điều gì khiến bạn ngạc nhiên?　(※ \"~, tôi thực sự ngạc nhiên.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.2.mp3"
    },
    {
        "lesson": 39,
        "id": "39-3",
        "text": "どんなことで　がっかりした？　（※「～て、がっかりしました。」）",
        "viText": "Điều gì khiến bạn thất vọng?　(※ \"~Nhưng, tôi thất vọng.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.3.mp3"
    },
    {
        "lesson": 39,
        "id": "39-4",
        "text": "どんなことで　<ruby>残念<rt>ざんねん</rt></ruby>だった？　（※「～て、<ruby>残念<rt>ざんねん</rt></ruby>でした。」）",
        "viText": "Điều gì đáng thất vọng về nó?　(*\"~, thật đáng tiếc.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.4.mp3"
    },
    {
        "lesson": 39,
        "id": "39-5",
        "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>困っ<rt>こまっ</rt></ruby>ていること 　ある？　（※「～て、<ruby>困っ<rt>こまっ</rt></ruby>ています。」、「いいえ、ありません。」）",
        "viText": "Bạn hiện đang gặp sự cố?　(※ \"~, tôi gặp rắc rối.\", \"Không, tôi không.\") ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.5.mp3"
    },
    {
        "lesson": 39,
        "id": "39-6",
        "text": "<ruby>事故<rt>じこ</rt></ruby>がありました。<ruby>会社<rt>かいしゃ</rt></ruby>に/<ruby>学校<rt>がっこう</rt></ruby>に<ruby>遅れ<rt>おくれ</rt></ruby>ました。<ruby>何と<rt>なんと</rt></ruby>いいますか。（※「『<ruby>事故<rt>じこ</rt></ruby>で/<ruby>事故<rt>じこ</rt></ruby>があって、<ruby>遅れ<rt>おくれ</rt></ruby>ました。すみません。』と<ruby>言<rt>いい</rt></ruby>ます。」）",
        "viText": "Có một tai nạn. Tôi đã đi làm / đi học muộn. Tôi nên đặt nó như thế nào? (※ \"'Do tai nạn / Đã xảy ra tai nạn và tôi đã đến muộn. Xin lỗi.') anh ấy nói. ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.6.mp3"
    },
    {
        "lesson": 39,
        "id": "39-7",
        "text": "<ruby>今日<rt>きょう</rt></ruby>、<ruby>会社<rt>かいしゃ</rt></ruby>/<ruby>大学<rt>だいがく</rt></ruby>を<ruby>休み<rt>やすみ</rt></ruby>たいです。<ruby>理由<rt>りゆう</rt></ruby>を<ruby>言って<rt>いって</rt></ruby>、<ruby>連絡<rt>れんらく</rt></ruby>してください。　（※「～ので、<ruby>休ん<rt>やすん</rt></ruby>でもいいですか。/<ruby>休ま<rt>やすま</rt></ruby>せてください。」）",
        "viText": "Hôm nay, tôi muốn nghỉ làm hoặc đại học. Hãy đưa ra lý do của bạn và liên hệ với chúng tôi.　(※ \"~ vậy, tôi có thể nghỉ một ngày không? / Xin hãy để tôi nghỉ ngơi.\") ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.7.mp3"
    },
    {
        "lesson": 39,
        "id": "39-8",
        "text": "<ruby>早く<rt>はやく</rt></ruby><ruby>帰り<rt>かえり</rt></ruby>たいです。<ruby>課長<rt>かちょう</rt></ruby>に　<ruby>理由<rt>りゆう</rt></ruby>を<ruby>言って<rt>いって</rt></ruby>　<ruby>許可<rt>きょか</rt></ruby>/OK　を  もらってください。 （※「～ので、<ruby>帰っ<rt>かえっ</rt></ruby>てもいいですか。/<ruby>帰ら<rt>かえら</rt></ruby>せてください。」",
        "viText": "Tôi muốn về nhà sớm. Vui lòng giải thích lý do của bạn với người quản lý và xin phép/chấp thuận. (※ \"~ vậy, tôi có thể về nhà được không? / Xin hãy để tôi đi.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.8.mp3"
    },
    {
        "lesson": 39,
        "id": "39-9",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>で、ケガをした<ruby>人<rt>ひと</rt></ruby>がいます。　<ruby>誰か<rt>だれか</rt></ruby>を<ruby>呼ん<rt>よん</rt></ruby>でください。　（※「○○さんがケガをした/ケガをた<ruby>人<rt>ひと</rt></ruby>がいる　ので、<ruby>来<rt>きて</rt></ruby>ください。」）",
        "viText": "Có một người đã bị thương tại một trường đại học hoặc cao đẳng cơ sở.　Gọi cho ai đó.　(※ \"Ông ○○ bị thương / Có người bị thương, vì vậy hãy đến.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.9.mp3"
    },
    {
        "lesson": 39,
        "id": "39-10",
        "text": "<ruby>友達<rt>ともだち</rt></ruby>に<ruby>誘わ<rt>さそわ</rt></ruby>れましたが、<ruby>行け<rt>いけ</rt></ruby>ません。うまく <ruby>返事<rt>へんじ</rt></ruby>をしてください。：「<ruby>今晩<rt>こんばん</rt></ruby>、<ruby>食事<rt>しょくじ</rt></ruby>にいきませんか」　（※「ちょっと<ruby>約束<rt>やくそく</rt></ruby>があって・・・/があるので、<ruby>行け<rt>いけ</rt></ruby>ません。」など。）",
        "viText": "Một người bạn mời tôi, nhưng tôi không thể đi. Xin hãy trả lời tốt. : \"Bạn có muốn đi ăn tối tối nay không?\" (※ \"Tôi có một chút cam kết... / Tôi không thể đi.\") ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/39.10.mp3"
    },
    {
        "lesson": 40,
        "id": "40-1",
        "text": "スイッチ/<ruby>電源<rt>でんげん</rt></ruby>　がどこにあるかわかりません。<ruby>聞い<rt>きい</rt></ruby>てください。（※「～か、<ruby>教<rt>おしえ</rt></ruby>てください。」）",
        "viText": "Tôi không biết công tắc / nguồn điện ở đâu. Lắng nghe. (※ \"~ka, xin hãy nói cho tôi biết.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.1.mp3"
    },
    {
        "lesson": 40,
        "id": "40-2",
        "text": "１つ<ruby>仕事<rt>しごと</rt></ruby>が<ruby>終わり<rt>おわり</rt></ruby>ました。<ruby>次<rt>つぎ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>したらいいですか。わかりません。<ruby>聞い<rt>きい</rt></ruby>てください。　（※「<ruby>次<rt>つぎ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>したらいいか/すればいいか、<ruby>教<rt>おしえ</rt></ruby>てください。」）",
        "viText": "Một nhiệm vụ đã được hoàn thành. Tôi nên làm gì tiếp theo? Tôi không biết. Lắng nghe.　(※ \"Tôi nên làm gì tiếp theo/Tôi nên làm gì tiếp theo? Vui lòng cho tôi biết.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.2.mp3"
    },
    {
        "lesson": 40,
        "id": "40-3",
        "text": "<ruby>燃え<rt>もえ</rt></ruby>るゴミは<ruby>何曜日<rt>なんようび</rt></ruby>に<ruby>捨て<rt>すて</rt></ruby>ますか。わかりません。<ruby>聞い<rt>きい</rt></ruby>てください。　（※「～か、<ruby>教<rt>おしえ</rt></ruby>てください。」）",
        "viText": "Bạn vứt rác có thể đốt vào ngày nào? Tôi không biết. Lắng nghe.　(※ \"~ka, xin hãy nói cho tôi biết.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.3.mp3"
    },
    {
        "lesson": 40,
        "id": "40-4",
        "text": "いつも<ruby>出か<rt>でか</rt></ruby>ける<ruby>前<rt>まえ</rt></ruby>に、<ruby>何<rt>なに</rt></ruby><ruby>確か<rt>たしか</rt></ruby>めますか。　（※ケータイをもっているかどうか/<ruby>鍵<rt>かぎ</rt></ruby>をかけたかどうか/<ruby>電気<rt>でんき</rt></ruby>を<ruby>消し<rt>けし</rt></ruby>たかどうか・・・。）",
        "viText": "Bạn luôn kiểm tra những gì trước khi ra ngoài?　(※ Cho dù bạn có điện thoại di động, khóa hay tắt đèn...) ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.4.mp3"
    },
    {
        "lesson": 40,
        "id": "40-5",
        "text": "１０<ruby>年後<rt>ねんご</rt></ruby>、あなたは<ruby>何<rt>なに</rt></ruby>していますか。　/どこに<ruby>住ん<rt>すん</rt></ruby>でいますか（※「～かわかりません。」、「～に<ruby>住ん<rt>すん</rt></ruby>でいます。/～をしています。」）",
        "viText": "Bạn sẽ làm gì trong mười năm tới?　/Bạn sống ở đâu? (※ \"Tôi không biết ~,\" \"Tôi sống ở ~.\" /~. ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.5.mp3"
    },
    {
        "lesson": 40,
        "id": "40-6",
        "text": "<ruby>新しい<rt>あたらしい</rt></ruby><ruby>服<rt>ふく</rt></ruby>を<ruby>買う<rt>かう</rt></ruby><ruby>前<rt>まえ</rt></ruby>に、<ruby>服<rt>ふく</rt></ruby>を<ruby>着た<rt>きた</rt></ruby>い<ruby>時<rt>とき</rt></ruby>、<ruby>店<rt>みせ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>何と<rt>なんと</rt></ruby><ruby>言う<rt>いう</rt></ruby>？",
        "viText": "Trước khi mua quần áo mới, khi muốn mặc, bạn nói gì với nhân viên cửa hàng?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.6.mp3"
    },
    {
        "lesson": 40,
        "id": "40-7",
        "text": "<ruby>新しい<rt>あたらしい</rt></ruby><ruby>靴<rt>くつ</rt></ruby>を<ruby>買う<rt>かう</rt></ruby><ruby>前<rt>まえ</rt></ruby>に、<ruby>靴<rt>くつ</rt></ruby>を<ruby>履き<rt>はき</rt></ruby>たい<ruby>時<rt>とき</rt></ruby>、<ruby>店<rt>みせ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>何と<rt>なんと</rt></ruby><ruby>言う<rt>いう</rt></ruby>？",
        "viText": "Trước khi mua giày mới, khi muốn xỏ vào, bạn nói gì với nhân viên cửa hàng?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.7.mp3"
    },
    {
        "lesson": 40,
        "id": "40-8",
        "text": "<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行った<rt>いった</rt></ruby>ら、<ruby>何<rt>なに</rt></ruby><ruby>食<rt>たべて</rt></ruby>みたい？/<ruby>何<rt>なに</rt></ruby>してみたい？",
        "viText": "Bạn muốn thử gì khi đến thăm Nhật Bản? /Bạn muốn thử gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.8.mp3"
    },
    {
        "lesson": 40,
        "id": "40-9",
        "text": "どこへ<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行って<rt>いって</rt></ruby>みたい？",
        "viText": "Bạn muốn đi du lịch ở đâu?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.9.mp3"
    },
    {
        "lesson": 40,
        "id": "40-10",
        "text": "<ruby>誰<rt>だれ</rt></ruby>に<ruby>会っ<rt>あっ</rt></ruby>てみたい？",
        "viText": "Bạn muốn gặp ai?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/40.10.mp3"
    },
    {
        "lesson": 41,
        "id": "41-1",
        "text": "クラスの<ruby>友達<rt>ともだち</rt></ruby>から<ruby>何か<rt>なにか</rt></ruby>もらったことがありますか。<ruby>誰<rt>だれ</rt></ruby>に<ruby>何<rt>なに</rt></ruby>もらいましたか。　（※「はい、あります。○さんに●をもらいました。」、「いいえ、ありません。」）",
        "viText": "Bạn đã bao giờ nhận được bất cứ điều gì từ các bạn cùng lớp chưa? Ai đã cho tôi những gì tôi nhận được?　(※ \"Vâng, vâng, có. Tôi đã nhận được ● từ ○-san.\" \"Không, không, tôi không.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.1.mp3"
    },
    {
        "lesson": 41,
        "id": "41-2",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>から<ruby>何か<rt>なにか</rt></ruby>もらったことがありますか。それは<ruby>何で<rt>なんで</rt></ruby>すか。　（※はい、あります。○○をいただ<ruby>来ま<rt>きま</rt></ruby>した。」/「いいえ、ありません。」）",
        "viText": "Bạn đã bao giờ nhận được bất cứ điều gì từ giáo viên của mình chưa? Nó là gì?　(※Có.) Tôi đã nhận được ○○.\" /\"Không, không.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.2.mp3"
    },
    {
        "lesson": 41,
        "id": "41-3",
        "text": "<ruby>誰<rt>だれ</rt></ruby><ruby>が大学<rt>だいがく</rt></ruby>の<ruby>学費<rt>がくひ</rt></ruby>を<ruby>払っ<rt>はらっ</rt></ruby>てくれますか。　　",
        "viText": "Ai trả học phí đại học?　　",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.3.mp3"
    },
    {
        "lesson": 41,
        "id": "41-4",
        "text": "<ruby>今まで<rt>いままで</rt></ruby><ruby>誰<rt>だれ</rt></ruby><ruby>が日本語<rt>にほんご</rt></ruby>を<ruby>教<rt>おしえ</rt></ruby>てくれましたか。",
        "viText": "Ai đã dạy bạn tiếng Nhật cho đến bây giờ?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.4.mp3"
    },
    {
        "lesson": 41,
        "id": "41-5",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>にもう<ruby>一度<rt>いちど</rt></ruby><ruby>説明し<rt>せつめいし</rt></ruby>てもらいたい<ruby>時<rt>とき</rt></ruby>、<ruby>何と<rt>なんと</rt></ruby><ruby>言<rt>いい</rt></ruby>ますか。　（※「～んですが、～くださいませんか。/いただけませんか。」）",
        "viText": "Khi bạn muốn giáo viên giải thích lại, bạn sẽ nói gì?　(※ \"~, nhưng, bạn có thể làm ơn ~? / Bạn có thể vui lòng chấp nhận nó không?\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.5.mp3"
    },
    {
        "lesson": 41,
        "id": "41-6",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何<rt>なに</rt></ruby><ruby>教<rt>おしえ</rt></ruby>てもらいたいですか。（<ruby>文法<rt>ぶんぽう</rt></ruby>、<ruby>言葉<rt>ことば</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>の<ruby>文化<rt>ぶんか</rt></ruby>など）　（※「～いただきたいです。」）",
        "viText": "Em muốn giáo viên dạy em điều gì? (Ngữ pháp, ngôn ngữ, văn hóa Nhật Bản, v.v.) (※ \"~Itadakimashisu.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.6.mp3"
    },
    {
        "lesson": 41,
        "id": "41-7",
        "text": "<ruby>漢字<rt>かんじ</rt></ruby>の<ruby>意味<rt>いみ</rt></ruby>がわかりません。<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何と<rt>なんと</rt></ruby><ruby>言<rt>いい</rt></ruby>ますか。　（※「～んですが、～くださいませんか。/いただけませんか。」）",
        "viText": "Tôi không hiểu ý nghĩa của chữ kanji. Bạn sẽ nói gì với giáo viên?　(※ \"~, nhưng, bạn có thể làm ơn ~? / Bạn có thể vui lòng chấp nhận nó không?\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.7.mp3"
    },
    {
        "lesson": 41,
        "id": "41-8",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>が<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>説明し<rt>せつめいし</rt></ruby>てくれました。<ruby>何と<rt>なんと</rt></ruby>お<ruby>礼<rt>れい</rt></ruby>を<ruby>言<rt>いい</rt></ruby>ますか。　（※「～くださって、…。」）",
        "viText": "Bác sĩ giải thích mọi thứ một cách cẩn thận. Làm thế nào tôi có thể nói lời cảm ơn?　(※ \"~Vui lòng 、...。\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.8.mp3"
    },
    {
        "lesson": 41,
        "id": "41-9a",
        "text": "あなたの<ruby>妹<rt>いもうと</rt></ruby>の<ruby>誕生日<rt>たんじょうび</rt></ruby>です。<ruby>何<rt>なに</rt></ruby>してあげたいですか。",
        "viText": "Đó là sinh nhật của em gái bạn. Bạn muốn làm gì cho họ?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.9a.mp3"
    },
    {
        "lesson": 41,
        "id": "41-9b",
        "text": "あなたの<ruby>弟<rt>おとうと</rt></ruby>の<ruby>誕生日<rt>たんじょうび</rt></ruby>です。<ruby>何<rt>なに</rt></ruby>してあげたいですか。",
        "viText": "Đó là sinh nhật của anh trai bạn. Bạn muốn làm gì cho họ?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.9b.mp3"
    },
    {
        "lesson": 41,
        "id": "41-10",
        "text": "<ruby>雨<rt>あめ</rt></ruby>が<ruby>降ら<rt>ふら</rt></ruby>なくて、<ruby>花や<rt>はなや</rt></ruby><ruby>野菜<rt>やさい</rt></ruby>の<ruby>元気<rt>げんき</rt></ruby>がない<ruby>時<rt>とき</rt></ruby>、どうしますか。",
        "viText": "Bạn sẽ làm gì khi trời không mưa và hoa và rau không tốt cho sức khỏe?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/41.10.mp3"
    },
    {
        "lesson": 42,
        "id": "42-1",
        "text": "<ruby>健康<rt>けんこう</rt></ruby>のために、<ruby>何<rt>なに</rt></ruby>していますか。",
        "viText": "Bạn đang làm gì cho sức khỏe của mình?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.1.mp3"
    },
    {
        "lesson": 42,
        "id": "42-2a",
        "text": "<ruby>風邪<rt>かぜ</rt></ruby>をひいた<ruby>時<rt>とき</rt></ruby>、<ruby>早く<rt>はやく</rt></ruby>　<ruby>治す<rt>なおす</rt></ruby>ために、<ruby>何<rt>なに</rt></ruby>　したらいいですか。",
        "viText": "Khi bị cảm lạnh, bạn nên làm gì để nhanh chóng hồi phục?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.2a.mp3"
    },
    {
        "lesson": 42,
        "id": "42-2b",
        "text": "<ruby>好<rt>す</rt></ruby>な　<ruby>仕事<rt>しごと</rt></ruby>を　するために、<ruby>何<rt>なに</rt></ruby>　したらいいですか。",
        "viText": "Tôi nên làm gì để làm công việc mình yêu thích?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.2b.mp3"
    },
    {
        "lesson": 42,
        "id": "42-3",
        "text": "<ruby>何の<rt>なんの</rt></ruby>ために、<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>を<ruby>始め<rt>はじめ</rt></ruby>ましたか。",
        "viText": "Tại sao bạn bắt đầu học tiếng Nhật?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.3.mp3"
    },
    {
        "lesson": 42,
        "id": "42-4",
        "text": "<ruby>日本<rt>にほん</rt></ruby>で<ruby>働く<rt>はたらく</rt></ruby>ためには、どのぐらい<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>すればいいと<ruby>思い<rt>おもい</rt></ruby>ますか。\n。",
        "viText": "Bạn nghĩ mình cần học tiếng Nhật bao nhiêu để làm việc tại Nhật Bản?\n",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.4.mp3"
    },
    {
        "lesson": 42,
        "id": "42-5",
        "text": "この<ruby>会話<rt>かいわ</rt></ruby><ruby>反応<rt>はんのう</rt></ruby>チェックは、<ruby>何の<rt>なんの</rt></ruby>ためにしていると<ruby>思い<rt>おもい</rt></ruby>ますか。",
        "viText": "Bạn nghĩ mục đích của việc kiểm tra phản hồi cuộc trò chuyện này là gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.5.mp3"
    },
    {
        "lesson": 42,
        "id": "42-6a",
        "text": "<ruby>都会<rt>とかい</rt></ruby>/（<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>）は <ruby>何<rt>なに</rt></ruby>するのに<ruby>便利<rt>べんり</rt></ruby>な ところだと<ruby>思い<rt>おもい</rt></ruby>ますか。",
        "viText": "Bạn nghĩ điều gì là thuận tiện cho việc làm trong thành phố / (địa điểm nổi tiếng)?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.6a.mp3"
    },
    {
        "lesson": 42,
        "id": "42-6b",
        "text": "<ruby>田舎<rt>いなか</rt></ruby>/（<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>）は <ruby>何<rt>なに</rt></ruby>するのにいい ところだと<ruby>思い<rt>おもい</rt></ruby>ますか。",
        "viText": "Bạn nghĩ đâu là một nơi tốt để làm ở nông thôn (những địa điểm nổi tiếng)?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.6b.mp3"
    },
    {
        "lesson": 42,
        "id": "42-7",
        "text": "１<ruby>日<rt>にち</rt></ruby><ruby>自由<rt>じゆう</rt></ruby>な<ruby>時間<rt>じかん</rt></ruby>があります。その<ruby>時間<rt>じかん</rt></ruby>を<ruby>何<rt>なに</rt></ruby>に<ruby>使い<rt>つかい</rt></ruby>ますか。",
        "viText": "Bạn có một ngày rảnh rỗi. Bạn dành thời gian đó để làm gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.7.mp3"
    },
    {
        "lesson": 42,
        "id": "42-8",
        "text": "100<ruby>万<rt>まん</rt></ruby>VNDあります。<ruby>誰<rt>だれ</rt></ruby>のために、<ruby>何の<rt>なんの</rt></ruby>ために<ruby>使い<rt>つかい</rt></ruby>ますか。",
        "viText": "Có 1.000.000 đồng. Vì ai, và vì mục đích gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.8.mp3"
    },
    {
        "lesson": 42,
        "id": "42-9",
        "text": "あなたは、いつも<ruby>何<rt>なに</rt></ruby>するためにスマホを<ruby>使って<rt>つかって</rt></ruby>いますか。",
        "viText": "Bạn thường sử dụng điện thoại thông minh của mình để làm gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.9.mp3"
    },
    {
        "lesson": 42,
        "id": "42-10",
        "text": "スマホはパソコンより<ruby>何<rt>なに</rt></ruby>するのに、<ruby>便利<rt>べんり</rt></ruby>ですか。どうしてですか。",
        "viText": "Những thứ tiện lợi hơn cho điện thoại thông minh so với máy tính là gì? Tại sao vậy?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/42.10.mp3"
    },
    {
        "lesson": 43,
        "id": "43-1",
        "text": "この<ruby>絵<rt>え</rt></ruby>を<ruby>見て<rt>みて</rt></ruby>、「Vそうですよ」で、<ruby>注意<rt>ちゅうい</rt></ruby>してください。　（※「Vそうですよ。」）",
        "viText": "Nhìn vào bức ảnh này và nói, \"V đúng\", vì vậy hãy cẩn thận.　(※ \"V Đúng vậy.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.1.mp3"
    },
    {
        "lesson": 43,
        "id": "43-2",
        "text": "<ruby>今週<rt>こんしゅう</rt></ruby>はどんな<ruby>天気<rt>てんき</rt></ruby>になりそうですか。",
        "viText": "Dự kiến sẽ có loại thời tiết nào trong tuần này?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.2.mp3"
    },
    {
        "lesson": 43,
        "id": "43-3",
        "text": "<ruby>今<rt>いま</rt></ruby>、JLPTのN4/N3を<ruby>受け<rt>うけ</rt></ruby>たら<ruby>合格<rt>ごうかく</rt></ruby>できそうですか。",
        "viText": "Nếu tôi thi JLPT N4 / N3 bây giờ, bạn có nghĩ rằng tôi có thể vượt qua không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.3.mp3"
    },
    {
        "lesson": 43,
        "id": "43-4",
        "text": "この<ruby>人<rt>ひと</rt></ruby>を<ruby>見て<rt>みて</rt></ruby>どう<ruby>思い<rt>おもい</rt></ruby>ますか。",
        "viText": "Bạn nghĩ gì về người này?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.4.mp3",
        "imageUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.4..jpg"
    },
    {
        "lesson": 43,
        "id": "43-5",
        "text": "（４の<ruby>人<rt>ひと</rt></ruby>に）この<ruby>人<rt>ひと</rt></ruby>に<ruby>何と<rt>なんと</rt></ruby><ruby>言<rt>いい</rt></ruby>ますか/<ruby>話<rt>はなし</rt></ruby>かけますか。　（※「～そうですね。どうしたんですか。」）",
        "viText": "(Đối với người 4) Bạn sẽ nói gì với người này / nói chuyện với họ?　(※ \"~Đúng vậy. Có chuyện gì vậy?\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.5.mp3"
    },
    {
        "lesson": 43,
        "id": "43-6",
        "text": "ベトナムで<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>する<ruby>人<rt>ひと</rt></ruby>は、これから<ruby>増え<rt>ふえ</rt></ruby>ますか。<ruby>減り<rt>へり</rt></ruby>ますか。どうなりそうですか。\n。",
        "viText": "Số lượng người học tiếng Nhật tại Việt Nam sẽ tăng lên trong tương lai? Nó sẽ giảm? Bạn nghĩ điều gì sẽ xảy ra?\n",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.6.mp3"
    },
    {
        "lesson": 43,
        "id": "43-7",
        "text": "ベトナムで、これからどんな<ruby>仕事<rt>しごと</rt></ruby>が<ruby>人気<rt>にんき</rt></ruby>になりそうですか。",
        "viText": "Những loại công việc nào ở Việt Nam dường như sẽ trở nên phổ biến trong tương lai?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.7.mp3"
    },
    {
        "lesson": 43,
        "id": "43-8",
        "text": "<ruby>今日は<rt>こんにちは</rt></ruby>、100<ruby>円<rt>えん</rt></ruby>が〇〇ドンです。<ruby>日本<rt>にほん</rt></ruby>の<ruby>円<rt>えん</rt></ruby>は　これから　どうなりそうですか。",
        "viText": "Hôm nay, 100 yên là 〇〇 don. Bạn nghĩ điều gì sẽ xảy ra với đồng yên Nhật từ đây?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.8.mp3"
    },
    {
        "lesson": 43,
        "id": "43-9",
        "text": "<ruby>家<rt>いえ</rt></ruby>に<ruby>名札<rt>なふだ</rt></ruby>／スマホ／<ruby>財布<rt>さいふ</rt></ruby>をわすれて<ruby>来ま<rt>きま</rt></ruby>した。まだ<ruby>家<rt>いえ</rt></ruby>の<ruby>近く<rt>ちかく</rt></ruby>にいます。どうしますか。",
        "viText": "Tôi quên thẻ tên, điện thoại thông minh và ví tiền ở nhà. Vẫn gần nhà. Bạn nên làm gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.9.mp3"
    },
    {
        "lesson": 43,
        "id": "43-10",
        "text": "<ruby>友達<rt>ともだち</rt></ruby>がコンビニへ<ruby>行き<rt>いき</rt></ruby>ます。あなたは<ruby>飲み物<rt>のみもの</rt></ruby>がほしいです。<ruby>買い物<rt>かいもの</rt></ruby>を<ruby>頼ん<rt>たのん</rt></ruby>でください。",
        "viText": "Bạn tôi đi đến cửa hàng tiện lợi. Bạn muốn một thức uống. Vui lòng đặt mua sắm.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/43.10.mp3"
    },
    {
        "lesson": 44,
        "id": "44-1",
        "text": "ボールペンとシャープペンとどちらが<ruby>使い<rt>つかい</rt></ruby>やすいですか。　（※「～のほうが・・・。」）",
        "viText": "Cái nào dễ sử dụng hơn, bút bi hay bút chì cơ?　(※ \"~ tốt hơn...\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.1.mp3"
    },
    {
        "lesson": 44,
        "id": "44-2",
        "text": "<ruby>教室<rt>きょうしつ</rt></ruby>と<ruby>家<rt>いえ</rt></ruby>とどちらが<ruby>勉強<rt>べんきょう</rt></ruby>しやすいですか。　（※「～のほうが…。」）",
        "viText": "Cái nào dễ học hơn, trong lớp học hay ở nhà?　(※ \"~ tốt hơn...\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.2.mp3"
    },
    {
        "lesson": 44,
        "id": "44-3",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>でどんな<ruby>言葉<rt>ことば</rt></ruby>が<ruby>覚え<rt>おぼえ</rt></ruby>にくいですか。",
        "viText": "Những loại từ nào trong tiếng Nhật khó nhớ?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.3.mp3"
    },
    {
        "lesson": 44,
        "id": "44-4",
        "text": "<ruby>聴解<rt>ちょうかい</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>で、<ruby>音<rt>おと</rt></ruby>が<ruby>少し<rt>すこし</rt></ruby><ruby>小さい<rt>ちーさい</rt></ruby><ruby>時<rt>とき</rt></ruby>、<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何と<rt>なんと</rt></ruby>　<ruby>言<rt>いい</rt></ruby>ますか。　　（※「～ので、Aに／Aく していただけませんか。」）",
        "viText": "Trong lớp nghe, khi âm thanh hơi nhỏ, bạn nói gì với giáo viên?　　(※ \"Bạn có thể làm ơn /A-ku đến A, vậy ~?\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.4.mp3"
    },
    {
        "lesson": 44,
        "id": "44-5",
        "text": "<ruby>宿題<rt>しゅくだい</rt></ruby>が　<ruby>難しす<rt>むつかしす</rt></ruby>ぎます/<ruby>多す<rt>おおす</rt></ruby>ぎます。<ruby>先生<rt>せんせい</rt></ruby>に <ruby>何と<rt>なんと</rt></ruby> <ruby>頼み<rt>たのみ</rt></ruby>ますか。　（※「Aく/Aに　していただけませんか。」）　　",
        "viText": "Bài tập về nhà quá khó hoặc quá nhiều. Bạn muốn hỏi giáo viên điều gì?　(※ \"Bạn có thể làm cho nó là A-ku/A không?\")　　",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.5.mp3"
    },
    {
        "lesson": 44,
        "id": "44-6",
        "text": "どの<ruby>漢字<rt>かんじ</rt></ruby>と どの<ruby>漢字<rt>かんじ</rt></ruby>が<ruby>間違え<rt>まちがえ</rt></ruby>やすいと<ruby>思い<rt>おもい</rt></ruby>ますか。 （※「〇の<ruby>漢字<rt>かんじ</rt></ruby>と◎の<ruby>漢字<rt>かんじ</rt></ruby>が<ruby>間違え<rt>まちがえ</rt></ruby>やすいです。」）",
        "viText": "Bạn nghĩ kanji nào có nhiều khả năng sai nhất? (※ \"Thật dễ dàng để có được chữ kanji cho 〇 và ◎ cho kanji.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.6.mp3"
    },
    {
        "lesson": 44,
        "id": "44-7",
        "text": "<ruby>何<rt>なに</rt></ruby>しすぎると、<ruby>体<rt>からだ</rt></ruby>によくないと<ruby>思い<rt>おもい</rt></ruby>ますか。",
        "viText": "Bạn nghĩ điều gì có hại cho cơ thể khi bạn làm quá nhiều?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.7.mp3"
    },
    {
        "lesson": 44,
        "id": "44-8",
        "text": "（１の<ruby>回答<rt>かいとう</rt></ruby>）それをし<ruby>過ぎ<rt>すぎ</rt></ruby>たことがありますか。どうなりましたか。（※ない<ruby>場合<rt>ばあい</rt></ruby>→どうなると<ruby>思い<rt>おもい</rt></ruby>ますか。）",
        "viText": "(Câu trả lời 1) Bạn đã bao giờ làm điều đó quá nhiều chưa? Chuyện gì đã xảy ra? (※ Bạn nghĩ điều gì sẽ xảy ra nếu không có →? ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.8.mp3"
    },
    {
        "lesson": 44,
        "id": "44-9",
        "text": "この<ruby>大学<rt>だいがく</rt></ruby>の<ruby>近く<rt>ちかく</rt></ruby>は<ruby>住み<rt>すみ</rt></ruby>やすいですか。<ruby>住み<rt>すみ</rt></ruby>にくいですか。それはどうしてですか。",
        "viText": "Sống gần trường đại học này có thoải mái không? Sống có khó không? Tại sao vậy?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.9.mp3"
    },
    {
        "lesson": 44,
        "id": "44-10",
        "text": "<ruby>今日<rt>きょう</rt></ruby>の<ruby>昼<rt>ひる</rt></ruby>ご<ruby>飯<rt>めし</rt></ruby>/<ruby>晩<rt>ばん</rt></ruby>ごはんは　<ruby>何<rt>なに</rt></ruby>にしますか。",
        "viText": "Bạn muốn gì cho bữa trưa hoặc bữa tối hôm nay?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/44.10.mp3"
    },
    {
        "lesson": 45,
        "id": "45-1",
        "text": "<ruby>交通事故<rt>こうつうじこ</rt></ruby>にあった<ruby>場合<rt>ばあい</rt></ruby>、どうすればいいですか。",
        "viText": "Bạn nên làm gì nếu bạn bị tai nạn giao thông?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.1.mp3"
    },
    {
        "lesson": 45,
        "id": "45-2a",
        "text": "<ruby>消防車<rt>しょうぼうしゃ</rt></ruby>を<ruby>呼ぶ<rt>よぶ</rt></ruby>のは、どんな<ruby>場合<rt>ばあい</rt></ruby>ですか。",
        "viText": "Bạn nên gọi xe cứu hỏa trong những tình huống nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.2a.mp3"
    },
    {
        "lesson": 45,
        "id": "45-2b",
        "text": "<ruby>救急車<rt>きゅうきゅうしゃ</rt></ruby>を<ruby>呼ぶ<rt>よぶ</rt></ruby>のは、どんな<ruby>場合<rt>ばあい</rt></ruby>ですか。",
        "viText": "Khi nào bạn nên gọi xe cứu thương?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.2b.mp3"
    },
    {
        "lesson": 45,
        "id": "45-3",
        "text": "<ruby>会社<rt>かいしゃ</rt></ruby>が<ruby>始ま<rt>はじま</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>に、<ruby>連絡<rt>れんらく</rt></ruby>しなければならないのは、どんな<ruby>場合<rt>ばあい</rt></ruby>ですか。",
        "viText": "Trong những trường hợp nào bạn cần liên hệ với công ty trước khi nó bắt đầu?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.3.mp3"
    },
    {
        "lesson": 45,
        "id": "45-4",
        "text": "<ruby>部屋<rt>へや</rt></ruby>を<ruby>借り<rt>かり</rt></ruby>ます。どんな<ruby>部屋<rt>へや</rt></ruby>は<ruby>借り<rt>かり</rt></ruby>たくないですか。　（※「～のに、～へやは<ruby>借り<rt>かり</rt></ruby>たくないです。」",
        "viText": "Thuê phòng. Bạn không muốn thuê loại phòng nào?　(※ \"Mặc dù ~, tôi không muốn thuê ~heya.\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.4.mp3"
    },
    {
        "lesson": 45,
        "id": "45-5",
        "text": "どんな<ruby>時<rt>とき</rt></ruby>、とても<ruby>残念<rt>ざんねん</rt></ruby>だと<ruby>思い<rt>おもい</rt></ruby>ますか。　（※「～のに～<ruby>時<rt>とき</rt></ruby>です。」）",
        "viText": "Khi nào bạn cảm thấy thực sự thất vọng?　(※ \"~Mặc dù ~ đã đến lúc.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.5.mp3"
    },
    {
        "lesson": 45,
        "id": "45-6",
        "text": "どんな<ruby>場合<rt>ばあい</rt></ruby>、<ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>休ん<rt>やすん</rt></ruby>でもいいと<ruby>思い<rt>おもい</rt></ruby>ますか。",
        "viText": "Bạn nghĩ trong những tình huống nào có thể trốn học?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.6.mp3"
    },
    {
        "lesson": 45,
        "id": "45-7",
        "text": "<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲ん<rt>のん</rt></ruby>だのに、<ruby>風邪<rt>かぜ</rt></ruby>が<ruby>良く<rt>よく</rt></ruby>ならない<ruby>場合<rt>ばあい</rt></ruby>、どうしますか。",
        "viText": "Điều gì sẽ xảy ra nếu bạn uống thuốc nhưng cảm lạnh của bạn không thuyên giảm?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.7.mp3"
    },
    {
        "lesson": 45,
        "id": "45-8a",
        "text": "<ruby>何<rt>なに</rt></ruby><ruby>買う<rt>かう</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>しますか。（※「〇を<ruby>買う<rt>かう</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>、<ruby>家族<rt>かぞく</rt></ruby>に<ruby>相談<rt>そうだん</rt></ruby>します。」）",
        "viText": "Khi mua thứ gì đó, bạn có tham khảo ý kiến của gia đình không? (※ \"Nếu bạn muốn mua 〇, hãy tham khảo ý kiến của gia đình bạn.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.8a.mp3"
    },
    {
        "lesson": 45,
        "id": "45-8b",
        "text": "<ruby>何<rt>なに</rt></ruby><ruby>買う<rt>かう</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>、ひとりで<ruby>決め<rt>きめ</rt></ruby>ますか。　（※「〇を<ruby>買う<rt>かう</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>、ひとりで<ruby>決め<rt>きめ</rt></ruby>ます。」）",
        "viText": "Khi bạn quyết định mua gì, bạn có tự quyết định không?　(*\"Nếu bạn muốn mua 〇, bạn tự quyết định.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.8b.mp3"
    },
    {
        "lesson": 45,
        "id": "45-9",
        "text": "<ruby>食た<rt>たべた</rt></ruby>かったものを<ruby>家族<rt>かぞく</rt></ruby>が<ruby>全部<rt>ぜんぶ</rt></ruby><ruby>食<rt>たべて</rt></ruby>しまいました。\n。「～のに」を<ruby>使って<rt>つかって</rt></ruby>、<ruby>残念<rt>ざんねん</rt></ruby>な<ruby>気持ち<rt>きもち</rt></ruby>を<ruby>伝え<rt>つたえ</rt></ruby>てください。",
        "viText": "Gia đình tôi cuối cùng đã ăn tất cả những gì tôi muốn ăn.\nSử dụng \"~ noni\" để truyền đạt sự hối tiếc của bạn.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.9.mp3"
    },
    {
        "lesson": 45,
        "id": "45-10b",
        "text": "<ruby>高い<rt>たかい</rt></ruby>パソコンを<ruby>買い<rt>かい</rt></ruby>ましたが、すぐ<ruby>壊れ<rt>こわれ</rt></ruby>ました。お<ruby>店<rt>みせ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に<ruby>文句<rt>もんく</rt></ruby>/クレームを<ruby>言って<rt>いって</rt></ruby>ください。",
        "viText": "Tôi đã mua một chiếc máy tính đắt tiền, nhưng nó bị hỏng nhanh chóng. Vui lòng khiếu nại hoặc khiếu nại với nhân viên.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/45.10b.mp3"
    },
    {
        "lesson": 46,
        "id": "46-1",
        "text": "<ruby>大学<rt>だいがく</rt></ruby>/<ruby>短期大学<rt>たんきだいがく</rt></ruby>へ<ruby>入っ<rt>いっっ</rt></ruby>たばかりの<ruby>時<rt>とき</rt></ruby>、どうでしたか。",
        "viText": "Khi bạn lần đầu tiên vào đại học / cao đẳng như thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.1.mp3"
    },
    {
        "lesson": 46,
        "id": "46-2",
        "text": "46<ruby>課<rt>か</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>は<ruby>終わり<rt>おわり</rt></ruby>ましたか。　（※「～ところです。」）",
        "viText": "Bạn đã học xong Bài 46 chưa?　(*\"~desu.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.2.mp3"
    },
    {
        "lesson": 46,
        "id": "46-3",
        "text": "<ruby>電話<rt>でんわ</rt></ruby>が<ruby>来ま<rt>きま</rt></ruby>した。「～ところ」を<ruby>使って<rt>つかって</rt></ruby><ruby>答え<rt>こたえ</rt></ruby>てください。:「もしもし、<ruby>今<rt>いま</rt></ruby><ruby>何<rt>なに</rt></ruby>していますか。」",
        "viText": "Một cuộc điện thoại đến. Trả lời bằng \"~ところ\". \"Xin chào, bạn đang làm gì bây giờ?\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.3.mp3"
    },
    {
        "lesson": 46,
        "id": "46-4",
        "text": "<ruby>電話<rt>でんわ</rt></ruby>が<ruby>来ま<rt>きま</rt></ruby>した。「～ところ」を<ruby>使って<rt>つかって</rt></ruby>、「No」の<ruby>返事<rt>へんじ</rt></ruby>をしてください。：「もしもし、これから<ruby>食事<rt>しょくじ</rt></ruby>にいきませんか。」",
        "viText": "Một cuộc điện thoại đến. Sử dụng \"~place\" để trả lời \"Không\". \"Xin chào, bây giờ chúng ta đi ăn nhé?\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.4.mp3"
    },
    {
        "lesson": 46,
        "id": "46-5a",
        "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>出発<rt>しゅっぱつ</rt></ruby>したら○○に、<ruby>何時<rt>なんじ</rt></ruby>ごろ<ruby>着<rt>ちゃく</rt></ruby>ますか。  （※「～はずです」を<ruby>使って<rt>つかって</rt></ruby><ruby>答え<rt>こたえ</rt></ruby>てください。）",
        "viText": "Nếu tôi rời đi bây giờ, khi nào tôi sẽ đến ○○?  (※ Vui lòng trả lời bằng \"~shizuru\".) ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.5a.mp3"
    },
    {
        "lesson": 46,
        "id": "46-5b",
        "text": "<ruby>田中<rt>たなか</rt></ruby>さんと<ruby>話<rt>はなし</rt></ruby>たいですが、<ruby>今<rt>いま</rt></ruby>どこにいますか。 （※「～はずです」を<ruby>使って<rt>つかって</rt></ruby><ruby>答え<rt>こたえ</rt></ruby>てください。）",
        "viText": "Tôi muốn nói chuyện với ông Tanaka - bây giờ ông đang ở đâu? (※ Vui lòng trả lời bằng \"~shizuru\".) ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.5b.mp3"
    },
    {
        "lesson": 46,
        "id": "46-6",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>を<ruby>始め<rt>はじめ</rt></ruby>たばかりの<ruby>時<rt>とき</rt></ruby>、どうでしたか。",
        "viText": "Khi mới bắt đầu học tiếng Nhật như thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.6.mp3"
    },
    {
        "lesson": 46,
        "id": "46-7a",
        "text": "<ruby>専門<rt>せんもん</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>と<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>とどちらが<ruby>難しい<rt>むずかしい</rt></ruby>ですか。",
        "viText": "Cái nào khó hơn: học chuyên ngành hay học tiếng Nhật?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.7a.mp3"
    },
    {
        "lesson": 46,
        "id": "46-7b",
        "text": "<ruby>専門<rt>せんもん</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>と<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>とどちらがおもしろいですか。",
        "viText": "Học chuyên ngành hay học tiếng Nhật cái nào thú vị hơn?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.7b.mp3"
    },
    {
        "lesson": 46,
        "id": "46-8",
        "text": "あなたは、<ruby>日本語<rt>にほんご</rt></ruby>の<ruby>勉強<rt>べんきょう</rt></ruby>をどれぐらい<ruby>頑張っ<rt>がんばっ</rt></ruby>ていると<ruby>思い<rt>おもい</rt></ruby>ますか。　パーセントで<ruby>答え<rt>こたえ</rt></ruby>てください。",
        "viText": "Bạn nghĩ mình đang học tiếng Nhật chăm chỉ như thế nào?　Trả lời bằng tỷ lệ phần trăm.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.8.mp3"
    },
    {
        "lesson": 46,
        "id": "46-9",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>してよかったと<ruby>思った<rt>おもった</rt></ruby>ことはありますか。それはどんな<ruby>時<rt>とき</rt></ruby>ですか。",
        "viText": "Bạn đã bao giờ cảm thấy vui vì học tiếng Nhật là một điều tốt chưa? Đó là những thời điểm như thế nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.9.mp3"
    },
    {
        "lesson": 46,
        "id": "46-10",
        "text": "<ruby>最近<rt>さいきん</rt></ruby><ruby>覚え<rt>おぼえ</rt></ruby>た<ruby>好<rt>す</rt></ruby>な<ruby>言葉<rt>ことば</rt></ruby>や、<ruby>好<rt>す</rt></ruby>な<ruby>漢字<rt>かんじ</rt></ruby>を<ruby>教<rt>おしえ</rt></ruby>てください。",
        "viText": "Vui lòng cho chúng tôi biết về những từ hoặc chữ kanji yêu thích của bạn mà bạn đã học gần đây.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/46.10.mp3"
    },
    {
        "lesson": 47,
        "id": "47-1",
        "text": "あなたは<ruby>天気予報<rt>てんきよほう</rt></ruby>を<ruby>聞き<rt>きき</rt></ruby>ました。<ruby>明日<rt>あした</rt></ruby>の<ruby>天気<rt>てんき</rt></ruby>を<ruby>私<rt>わたし</rt></ruby>に<ruby>教<rt>おしえ</rt></ruby>てください。",
        "viText": "Bạn đã nghe dự báo thời tiết. Xin hãy cho tôi biết thời tiết ngày mai.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.1.mp3"
    },
    {
        "lesson": 47,
        "id": "47-2",
        "text": "あなたが<ruby>他の<rt>ほかの</rt></ruby><ruby>人<rt>ひと</rt></ruby>から<ruby>聞い<rt>きい</rt></ruby>た<ruby>話<rt>はなし</rt></ruby>を<ruby>教<rt>おしえ</rt></ruby>てください。 （※<ruby>詳しい<rt>くわしい</rt></ruby><ruby>内容<rt>ないよう</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>、「<ruby>誰<rt>だれ</rt></ruby><ruby>が何<rt>なに</rt></ruby>する。/した。」「どこで<ruby>何<rt>なに</rt></ruby>がある。/あった。」など<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>内容<rt>ないよう</rt></ruby>が<ruby>言え<rt>いえ</rt></ruby>ればよい）",
        "viText": "Hãy kể cho tôi nghe về những câu chuyện bạn đã nghe từ những người khác. (* Không cần nội dung chi tiết, \"Ai đã làm gì?\" \"Cái gì ở đâu, cái gì là...\" Sẽ rất tốt nếu có thể nói điều gì đó đơn giản.)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.2.mp3"
    },
    {
        "lesson": 47,
        "id": "47-3",
        "text": "あなたが<ruby>他の<rt>ほかの</rt></ruby><ruby>人<rt>ひと</rt></ruby>から<ruby>聞い<rt>きい</rt></ruby>た<ruby>話<rt>はなし</rt></ruby>をもうひとつ<ruby>教<rt>おしえ</rt></ruby>てください。 （※<ruby>詳しい<rt>くわしい</rt></ruby><ruby>内容<rt>ないよう</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>、「<ruby>誰<rt>だれ</rt></ruby><ruby>が何<rt>なに</rt></ruby>する。/した。」「どこで<ruby>何<rt>なに</rt></ruby>がある。/あった。」など<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>内容<rt>ないよう</rt></ruby>が<ruby>言え<rt>いえ</rt></ruby>ればよい）",
        "viText": "Hãy kể cho tôi nghe một câu chuyện khác mà bạn đã nghe từ những người khác. (* Không cần nội dung chi tiết, \"Ai đã làm gì?\" \"Cái gì ở đâu, cái gì là...\" Sẽ rất tốt nếu có thể nói điều gì đó đơn giản.)",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.3.mp3"
    },
    {
        "lesson": 47,
        "id": "47-4",
        "text": "<ruby>私<rt>わたし</rt></ruby>が<ruby>言った<rt>いった</rt></ruby>ことに「～ようです」を<ruby>使って<rt>つかって</rt></ruby><ruby>応え<rt>こたえ</rt></ruby>てください。：「<ruby>教室<rt>きょうしつ</rt></ruby>に/<ruby>店<rt>みせ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<ruby>人<rt>ひと</rt></ruby>が<ruby>集ま<rt>あつま</rt></ruby>っていますね。」",
        "viText": "Vui lòng trả lời những gì tôi đã nói với \"~ có vẻ như.\" \"Mọi người đang tụ tập trước lớp học hoặc cửa hàng.\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.4.mp3"
    },
    {
        "lesson": 47,
        "id": "47-5",
        "text": "<ruby>私<rt>わたし</rt></ruby>が<ruby>言った<rt>いった</rt></ruby>ことに「～ようです」を<ruby>使って<rt>つかって</rt></ruby><ruby>応え<rt>こたえ</rt></ruby>てください。：「<ruby>外<rt>そと</rt></ruby>がにぎやかですね。/<ruby>今<rt>いま</rt></ruby>、<ruby>大きい<rt>おおきい</rt></ruby><ruby>音<rt>おと</rt></ruby>がしましたね。」",
        "viText": "Vui lòng trả lời những gì tôi đã nói với \"~ có vẻ như.\" \"Bên ngoài rất sôi động. / Vừa rồi có một tiếng động lớn.\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.5.mp3"
    },
    {
        "lesson": 47,
        "id": "47-6",
        "text": "JLPT N4はもう<ruby>受け<rt>うけ</rt></ruby>ましたか。これから<ruby>受ける<rt>うける</rt></ruby><ruby>予定<rt>よてい</rt></ruby>ですか。",
        "viText": "Bạn đã thi JLPT N4 chưa? Bạn có dự định tham gia kỳ thi từ bây giờ không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.6.mp3"
    },
    {
        "lesson": 47,
        "id": "47-7",
        "text": "<ruby>合格<rt>ごうかく</rt></ruby><ruby>出来そ<rt>できそ</rt></ruby>うですか、どうですか。　<ruby>合格<rt>ごうかく</rt></ruby>している<ruby>人<rt>ひと</rt></ruby>は<ruby>点数<rt>てんすう</rt></ruby>を<ruby>教<rt>おしえ</rt></ruby>てください。　（※これからの<ruby>人<rt>ひと</rt></ruby>：「<ruby>受け<rt>うけ</rt></ruby>たら、<ruby>合格<rt>ごうかく</rt></ruby>できそうですか。」）",
        "viText": "Bạn có nghĩ rằng bạn có thể vượt qua không? Nó như thế nào?　Nếu bạn đỗ, vui lòng cho tôi biết điểm của bạn.　(※Đối với những người sắp bắt đầu: \"Nếu tôi tham gia kỳ thi, bạn có nghĩ rằng tôi có thể đậu không?\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.7.mp3"
    },
    {
        "lesson": 47,
        "id": "47-8",
        "text": "<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>何<rt>なに</rt></ruby>が<ruby>出来る<rt>できる</rt></ruby>ようになるのが<ruby>目標<rt>もくひょう</rt></ruby>ですか。",
        "viText": "Mục tiêu của bạn để có thể học tiếng Nhật là gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.8.mp3"
    },
    {
        "lesson": 47,
        "id": "47-9",
        "text": "<ruby>将来<rt>しょうらい</rt></ruby>、<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>使う<rt>つかう</rt></ruby><ruby>仕事<rt>しごと</rt></ruby>をしたいですか。どんな<ruby>仕事<rt>しごと</rt></ruby>がしたいですか。/どんな<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>働き<rt>はたらき</rt></ruby>たいですか。",
        "viText": "Bạn có muốn làm việc trong tương lai bằng tiếng Nhật không? Bạn muốn làm loại công việc nào? /Bạn muốn làm việc cho loại công ty nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.9.mp3"
    },
    {
        "lesson": 47,
        "id": "47-10",
        "text": "<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>大学生<rt>だいがくせい</rt></ruby>と<ruby>友達<rt>ともだち</rt></ruby>になったら、どんなことを<ruby>話<rt>はなし</rt></ruby>てみたいですか。",
        "viText": "Nếu bạn trở thành bạn của một sinh viên đại học Nhật Bản, bạn muốn nói về điều gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/47.10.mp3"
    },
    {
        "lesson": 48,
        "id": "48-1",
        "text": "<ruby>授業中<rt>じゅぎょうちゅう</rt></ruby>、<ruby>先生<rt>せんせい</rt></ruby>はみなさんに<ruby>日本語<rt>にほんご</rt></ruby>で<ruby>話<rt>はなし</rt></ruby>をさせますか。ベトナム<ruby>語<rt>ご</rt></ruby>で<ruby>話<rt>はなし</rt></ruby>をさせますか。",
        "viText": "Trong giờ học, giáo viên có yêu cầu bạn nói tiếng Nhật không? Tôi có nên nói tiếng Việt không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.1.mp3"
    },
    {
        "lesson": 48,
        "id": "48-2",
        "text": "<ruby>他に<rt>ほかに</rt></ruby>、<ruby>授業中<rt>じゅぎょうちゅう</rt></ruby>、<ruby>先生<rt>せんせい</rt></ruby>はどんなことをさせますか。",
        "viText": "Giáo viên yêu cầu họ làm gì khác trong lớp?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.2.mp3"
    },
    {
        "lesson": 48,
        "id": "48-3",
        "text": "<ruby>嫌い<rt>きらい</rt></ruby>な<ruby>食物<rt>たべもの</rt></ruby>がありますか。 <ruby>子供<rt>こども</rt></ruby>の<ruby>時<rt>とき</rt></ruby>、<ruby>両親<rt>りょうしん</rt></ruby>は<ruby>嫌い<rt>きらい</rt></ruby>な<ruby>物<rt>もの</rt></ruby>をあなたに<ruby>食<rt>たべ</rt></ruby>させましたか。　（※ない<ruby>場合<rt>ばあい</rt></ruby>　たくさんごはんを<ruby>食<rt>たべ</rt></ruby>させましたか。）",
        "viText": "Có món ăn nào bạn không thích không? Khi bạn còn nhỏ, cha mẹ bạn có cho bạn ăn những thứ bạn không thích không?　(※ Nếu không, bạn có cho chúng ăn nhiều gạo không? ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.3.mp3"
    },
    {
        "lesson": 48,
        "id": "48-4",
        "text": "<ruby>子ども<rt>こども</rt></ruby>の<ruby>時<rt>とき</rt></ruby>、<ruby>両親<rt>りょうしん</rt></ruby>はあなたに<ruby>家<rt>いえ</rt></ruby>の<ruby>手伝い<rt>てつだい</rt></ruby>をさせましたか。<ruby>何<rt>なに</rt></ruby>させましたか。",
        "viText": "Khi bạn còn nhỏ, cha mẹ bạn có để bạn giúp việc nhà không? Bạn đã bắt tôi làm gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.4.mp3"
    },
    {
        "lesson": 48,
        "id": "48-5",
        "text": "<ruby>熱<rt>ねつ</rt></ruby>があるので、<ruby>今日<rt>きょう</rt></ruby><ruby>授業<rt>じゅぎょう</rt></ruby>を<ruby>休み<rt>やすみ</rt></ruby>たいです。<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何と<rt>なんと</rt></ruby><ruby>言<rt>いい</rt></ruby>ますか。<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>頼ん<rt>たのん</rt></ruby>でください。",
        "viText": "Tôi bị sốt nên hôm nay tôi muốn trốn học. Bạn sẽ nói gì với giáo viên? Vui lòng đặt hàng một cách lịch sự.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.5.mp3"
    },
    {
        "lesson": 48,
        "id": "48-6",
        "text": "<ruby>親<rt>おや</rt></ruby>になったら、<ruby>子ども<rt>こども</rt></ruby>に<ruby>何<rt>なに</rt></ruby><ruby>習わ<rt>ならわ</rt></ruby>せたいですか。",
        "viText": "Khi trở thành cha mẹ, bạn muốn con mình học gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.6.mp3"
    },
    {
        "lesson": 48,
        "id": "48-7",
        "text": "<ruby>親<rt>おや</rt></ruby>になったら、<ruby>子ども<rt>こども</rt></ruby>を<ruby>留学<rt>りゅうがく</rt></ruby>させますか。<ruby>留学<rt>りゅうがく</rt></ruby>させる<ruby>場合<rt>ばあい</rt></ruby>、どの<ruby>国<rt>くに</rt></ruby>に<ruby>行か<rt>いか</rt></ruby>せたいですか。",
        "viText": "Khi trở thành cha mẹ, tôi có cho con đi du học không? Nếu bạn gửi con mình ra nước ngoài, bạn muốn chúng đến quốc gia nào?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.7.mp3"
    },
    {
        "lesson": 48,
        "id": "48-8",
        "text": "<ruby>両親<rt>りょうしん</rt></ruby>はあなたのやりたいことをやらせてくれましたか。それはどんなことですか。",
        "viText": "Cha mẹ bạn có để bạn làm những gì bạn muốn không? Điều đó có nghĩa là gì?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.8.mp3"
    },
    {
        "lesson": 48,
        "id": "48-9",
        "text": "<ruby>用事<rt>ようじ</rt></ruby>があって、<ruby>早く<rt>はやく</rt></ruby><ruby>帰り<rt>かえり</rt></ruby>たいです。<ruby>先生<rt>せんせい</rt></ruby>に<ruby>何と<rt>なんと</rt></ruby>た<ruby>言<rt>いい</rt></ruby>ますか。<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>話<rt>はなし</rt></ruby>てください。",
        "viText": "Tôi có một số việc vặt và muốn rời đi sớm. Tôi nên nói gì với giáo viên? Vui lòng nói chuyện lịch sự.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.9.mp3"
    },
    {
        "lesson": 48,
        "id": "48-10",
        "text": "<ruby>会社<rt>かいしゃ</rt></ruby>で、マーケティング/<ruby>設計<rt>せっけい</rt></ruby>/<ruby>整備<rt>せいび</rt></ruby>　の<ruby>仕事<rt>しごと</rt></ruby>がやりたいです。<ruby>課長<rt>かちょう</rt></ruby>に<ruby>何と<rt>なんと</rt></ruby><ruby>言<rt>いい</rt></ruby>ますか。<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>話<rt>はなし</rt></ruby>てください。　（※「～に～を・・・いただけませんか。」）",
        "viText": "Tôi muốn làm việc trong lĩnh vực tiếp thị, thiết kế và bảo trì tại một công ty. Bạn sẽ nói gì với trưởng bộ phận? Vui lòng nói chuyện lịch sự.　(※ \"Bạn có thể làm ơn ~ni~?\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/48.10.mp3"
    },
    {
        "lesson": 49,
        "id": "49-1",
        "text": "（<ruby>日本人<rt>にほんじん</rt></ruby>）<ruby>先生<rt>せんせい</rt></ruby>に、いつベトナムに<ruby>来た<rt>きた</rt></ruby>か、<ruby>聞い<rt>きい</rt></ruby>てください。",
        "viText": "(Tiếng Nhật) Cô giáo, xin hỏi khi bạn đến Việt Nam.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.1.mp3"
    },
    {
        "lesson": 49,
        "id": "49-2",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>に、<ruby>朝ごはん<rt>あさごはん</rt></ruby>は<ruby>何<rt>なに</rt></ruby><ruby>食た<rt>たべた</rt></ruby>か、<ruby>聞い<rt>きい</rt></ruby>てください。",
        "viText": "Hỏi giáo viên họ ăn gì cho bữa sáng.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.2.mp3"
    },
    {
        "lesson": 49,
        "id": "49-3",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>に、<ruby>休み<rt>やすみ</rt></ruby>の<ruby>日<rt>にち</rt></ruby>は<ruby>何<rt>なに</rt></ruby>しているか、<ruby>聞い<rt>きい</rt></ruby>てください。",
        "viText": "Hỏi giáo viên họ làm gì vào những ngày nghỉ.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.3.mp3"
    },
    {
        "lesson": 49,
        "id": "49-4",
        "text": "<ruby>敬語<rt>けいご</rt></ruby>を<ruby>使って<rt>つかって</rt></ruby><ruby>先生<rt>せんせい</rt></ruby>に<ruby>質問<rt>しつもん</rt></ruby>を２つしてください。",
        "viText": "Vui lòng hỏi giáo viên hai câu hỏi bằng cách sử dụng kính ngữ.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.4.mp3"
    },
    {
        "lesson": 49,
        "id": "49-6",
        "text": "<ruby>初めて<rt>はじめて</rt></ruby><ruby>会っ<rt>あっ</rt></ruby>た<ruby>人<rt>ひと</rt></ruby>に<ruby>名前<rt>なまえ</rt></ruby>を<ruby>聞<rt>きく</rt></ruby><ruby>場合<rt>ばあい</rt></ruby>、<ruby>何と<rt>なんと</rt></ruby>いいますか。<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>聞い<rt>きい</rt></ruby>てください。",
        "viText": "Bạn nên nói gì khi hỏi ai đó mà bạn gặp lần đầu tiên tên của họ? Hãy lắng nghe cẩn thận.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.6.mp3"
    },
    {
        "lesson": 49,
        "id": "49-7",
        "text": "<ruby>初めて<rt>はじめて</rt></ruby><ruby>会っ<rt>あっ</rt></ruby>た<ruby>人<rt>ひと</rt></ruby>に、どんな<ruby>料理<rt>りょうり</rt></ruby>が<ruby>好<rt>す</rt></ruby>か　<ruby>聞い<rt>きい</rt></ruby>てください。",
        "viText": "Hỏi ai đó mà bạn gặp lần đầu tiên họ thích loại thức ăn nào.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.7.mp3"
    },
    {
        "lesson": 49,
        "id": "49-8",
        "text": "お<ruby>客様<rt>きゃくさま</rt></ruby>に、「<ruby>座っ<rt>すわっ</rt></ruby>てください」と<ruby>言って<rt>いって</rt></ruby>ください。",
        "viText": "Nói với khách hàng, \"Vui lòng ngồi.\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.8.mp3"
    },
    {
        "lesson": 49,
        "id": "49-9",
        "text": "お<ruby>客様<rt>きゃくさま</rt></ruby>に、「<ruby>住所<rt>じゅうしょ</rt></ruby>と<ruby>名前<rt>なまえ</rt></ruby>を<ruby>書い<rt>かい</rt></ruby>てください」と<ruby>言って<rt>いって</rt></ruby>ください。",
        "viText": "Nói với khách hàng, \"Vui lòng viết địa chỉ và tên của bạn.\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.9.mp3"
    },
    {
        "lesson": 49,
        "id": "49-10",
        "text": "<ruby>会い<rt>あい</rt></ruby>たい<ruby>有名人<rt>ゆうめいじん</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>ですか。その<ruby>人<rt>ひと</rt></ruby>に、<ruby>何か<rt>なにか</rt></ruby><ruby>質問<rt>しつもん</rt></ruby>してください。",
        "viText": "Những người nổi tiếng mà bạn muốn gặp là ai? Hỏi người đó một câu hỏi.",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/49.10.mp3"
    },
    {
        "lesson": 50,
        "id": "50-1",
        "text": "<ruby>今<rt>いま</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>にいます。<ruby>簡単<rt>かんたん</rt></ruby>な<ruby>自己紹介<rt>じこしょうかい</rt></ruby>してください。　（※<ruby>名前<rt>なまえ</rt></ruby>と<ruby>出身<rt>しゅっしん</rt></ruby>を<ruby>言う<rt>いう</rt></ruby>。）",
        "viText": "Tôi hiện đang ở Nhật Bản. Hãy giới thiệu ngắn gọn về bản thân.　(*Vui lòng nêu rõ tên và nơi xuất xứ của bạn.) ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.1.mp3"
    },
    {
        "lesson": 50,
        "id": "50-2a",
        "text": "<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>上司<rt>じょうし</rt></ruby>に<ruby>聞か<rt>きか</rt></ruby>れました。<ruby>謙譲語<rt>けんじょうご</rt></ruby>で<ruby>答え<rt>こたえ</rt></ruby>てください。：「これ、<ruby>食<rt>たべ</rt></ruby>ますか。」",
        "viText": "Tôi đã được sếp của tôi hỏi tại nơi làm việc. Trả lời bằng ngôn ngữ khiêm tốn. \"Con có muốn ăn món này không?\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.2a.mp3"
    },
    {
        "lesson": 50,
        "id": "50-2b",
        "text": "<ruby>会社<rt>かいしゃ</rt></ruby>で<ruby>上司<rt>じょうし</rt></ruby>に<ruby>聞か<rt>きか</rt></ruby>れました。<ruby>謙譲語<rt>けんじょうご</rt></ruby>で<ruby>答え<rt>こたえ</rt></ruby>てください。：「これ、<ruby>知って<rt>しって</rt></ruby>いますか。」",
        "viText": "Tôi đã được sếp của tôi hỏi tại nơi làm việc. Trả lời bằng ngôn ngữ khiêm tốn. \"Anh có biết điều này không?\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.2b.mp3"
    },
    {
        "lesson": 50,
        "id": "50-4",
        "text": "<ruby>上司<rt>じょうし</rt></ruby>が、<ruby>忙しそ<rt>いそがしそ</rt></ruby>うなので、<ruby>手伝い<rt>てつだい</rt></ruby>たいです。<ruby>何と<rt>なんと</rt></ruby><ruby>言<rt>いい</rt></ruby>ますか。　（※「～ます/ましょうか。」）",
        "viText": "Sếp của tôi có vẻ bận, vì vậy tôi muốn giúp đỡ. Tôi nên đặt nó như thế nào?　(※ \"~masu/masuka.\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.4.mp3"
    },
    {
        "lesson": 50,
        "id": "50-5",
        "text": "<ruby>社長<rt>しゃちょう</rt></ruby>がちょっと<ruby>疲れ<rt>つかれ</rt></ruby>ているようです。<ruby>飲み物<rt>のみもの</rt></ruby>を<ruby>持っ<rt>もっ</rt></ruby>てきます。<ruby>何と<rt>なんと</rt></ruby><ruby>言<rt>いい</rt></ruby>ますか。　※ （<ruby>謙譲語<rt>けんじょうご</rt></ruby>）ましょうか。（<ruby>尊敬語<rt>そんけいご</rt></ruby>）ますか。",
        "viText": "Tổng thống có vẻ hơi mệt mỏi. Tôi sẽ mang đồ uống của tôi. Tôi nên đặt nó như thế nào?　* (Biểu hiện khiêm tốn) Chúng ta được không? (Kính ngữ) Chúng ta phải không?",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.5.mp3"
    },
    {
        "lesson": 50,
        "id": "50-6",
        "text": "<ruby>日本人<rt>にほんじん</rt></ruby>の<ruby>先生<rt>せんせい</rt></ruby>が、<ruby>道<rt>みち</rt></ruby>がわからなくて<ruby>困っ<rt>こまっ</rt></ruby>ているので<ruby>案内<rt>あんない</rt></ruby>したいです。<ruby>何と<rt>なんと</rt></ruby><ruby>言<rt>いい</rt></ruby>ますか。　（※「～ます/ましょうか」）",
        "viText": "Một giáo viên tiếng Nhật đang gặp rắc rối vì tôi không biết đường, vì vậy tôi muốn hướng dẫn họ. Tôi nên đặt nó như thế nào?　(※ \"~masu/shouka\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.6.mp3"
    },
    {
        "lesson": 50,
        "id": "50-7",
        "text": "<ruby>先生<rt>せんせい</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>に<ruby>行き<rt>いき</rt></ruby>たいです。<ruby>行って<rt>いって</rt></ruby>もいいか<ruby>丁寧<rt>ていねい</rt></ruby>に<ruby>聞い<rt>きい</rt></ruby>てください。　（※「～よろしいですか。」）",
        "viText": "Tôi muốn đến thăm nhà giáo viên. Hãy hỏi kỹ xem có thể đi không.　(※ \"~ Không sao chứ?\")",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.7.mp3"
    },
    {
        "lesson": 50,
        "id": "50-8",
        "text": "<ruby>謙譲語<rt>けんじょうご</rt></ruby>で<ruby>答え<rt>こたえ</rt></ruby>てください。：「どちらに<ruby>住ん<rt>すん</rt></ruby>でいらっしゃいますか。」",
        "viText": "Trả lời bằng ngôn ngữ khiêm tốn. \"Anh sống ở đâu?\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.8.mp3"
    },
    {
        "lesson": 50,
        "id": "50-９",
        "text": "<ruby>謙譲語<rt>けんじょうご</rt></ruby>で<ruby>答え<rt>こたえ</rt></ruby>てください。：「どうぞ、<ruby>召し<rt>めし</rt></ruby><ruby>上が<rt>あが</rt></ruby>ってください。」",
        "viText": "Trả lời bằng ngôn ngữ khiêm tốn. \"Làm ơn, hãy thưởng thức.\"",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.９.mp3"
    },
    {
        "lesson": 50,
        "id": "50-10",
        "text": "<ruby>会い<rt>あい</rt></ruby>たかった<ruby>有名人<rt>ゆうめいじん</rt></ruby>に<ruby>会え<rt>あえ</rt></ruby>ました。<ruby>嬉しい<rt>うれしい</rt></ruby><ruby>気持ち<rt>きもち</rt></ruby>を<ruby>伝え<rt>つたえ</rt></ruby>たいです。<ruby>何と<rt>なんと</rt></ruby>いいますか。　（※「お<ruby>目に<rt>めに</rt></ruby>かかれて～。」/「お<ruby>会い<rt>あい</rt></ruby>できて～。」）",
        "viText": "Tôi đã có thể gặp người nổi tiếng mà tôi muốn gặp. Tôi muốn bày tỏ hạnh phúc của mình. Tôi nên đặt nó như thế nào?　(※ \"Rất vui được gặp bạn~.\" / \"Rất vui được gặp bạn~.\" ）",
        "audioUrl": "https://itm-kaiwa.github.io/CheckKaiwaU/50.10.mp3"
    }

    
    ];
