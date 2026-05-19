(function () {

  function H(title) {
    return '<header class="slide-header"><h2 class="slide-h2">' + title + '</h2></header>';
  }

  /* ===================== SLIDES ===================== */
  window.SLIDE_SLUG = 'image2-1on1-v2';

  /* --- COVER --- */
  function slide01() {
    return '<section class="slide slide-cover" data-section="cover" data-title="タイトル" data-notes="本日はお越しいただきありがとうございます。よろず支援拠点担当の上村と申します。（少し間）今日は1対1でお時間をいただけたので、〇〇さんのお仕事に合わせた形で一緒に考えられればと思っています。今日の55分が終わった時に、明日から使えるものを持ち帰っていただけるようにやります。">' +
      '<div class="slide-cover-bar">' +
        '<div class="slide-cover-tag">よろず支援拠点 AI活用1on1勉強会</div>' +
        '<h1 class="slide-cover-title">ChatGPT image2で<br>自社の販促を変える</h1>' +
      '</div>' +
      '<div class="slide-cover-body">' +
        '<p class="slide-cover-sub">〜 汎用AIを捨てて、自分のお店に刺さる画像を作る 〜</p>' +
        '<div class="slide-cover-meta">2026.05 ｜ 1対1形式・55分</div>' +
      '</div>' +
    '</section>';
  }

  /* --- IMPACT --- */
  function slide02() {
    return '<section class="slide slide-impact" data-section="cover" data-title="今日の核心" data-notes="今日一番お伝えしたいのは、これだけです。（少し間）汎用AIを捨てる。まずリサーチ。それだけで、出てくる画像が別物になります。この意味が分かると、今まで画像生成で微妙な結果だった理由もはっきりします。">' +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-impact-tag">TODAY</div>' +
        '<p class="s-impact-main">汎用AIを捨てる。<br>まずリサーチ。<br>それだけで変わる。</p>' +
      '</div>' +
    '</section>';
  }

  /* --- PHASE 1 SECTION --- */
  function slide03() {
    return '<section class="slide slide-section" data-section="hearing" data-title="Phase 1 ヒアリング" data-notes="">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">PHASE 01</div>' +
        '<h1 class="s-section-title">ヒアリング</h1>' +
        '<p class="s-section-lead">お仕事のことを少し聞かせてください</p>' +
      '</div>' +
    '</section>';
  }

  /* --- 5問ヒアリング --- */
  function slide04() {
    return '<section class="slide" data-section="hearing" data-title="5問ヒアリング" data-notes="〇〇さんのお仕事に合わせて進めたいので、最初に少しだけ聞かせてもらえますか。5問だけ、気軽に教えてください。（少し間）まず、どんなお仕事をされていますか？スタッフの方は何名くらいいらっしゃいますか？">' +
      H('最初に5問、聞かせてください') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">Q1 どんなお仕事を？スタッフは何名くらいいますか？</li>' +
          '<li class="s-list-arrow">Q2 ChatGPTなどのAIツールは今どのくらい使っていますか？</li>' +
          '<li class="s-list-arrow">Q3 今日の勉強会に来たきっかけや、期待することは？</li>' +
          '<li class="s-list-arrow">Q4 今、事業で一番困っていること・解決したいことは？</li>' +
          '<li class="s-list-arrow">Q5 今日これだけ持ち帰れたら嬉しい、というものは？</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* --- ゴール共同設定（スパース→視覚強化） --- */
  function slide05() {
    return '<section class="slide" data-section="hearing" data-title="ゴール共同設定" data-notes="ありがとうございます。今日は〇〇さんの[Q1の業種とQ4の課題を引用]に合わせながら進めます。（少し間）今日の55分で目指すのは——[Q5の回答を言い直す]——ここまで持ち帰っていただくことをゴールにしますね。では今日の流れをざっくり説明します。">' +
      H('今日のゴールを一緒に決めましょう') +
      '<div class="slide-content">' +
        '<ul class="s-list" style="font-size:1.12em; gap:1.6rem;">' +
          '<li class="s-list-callout">〇〇さんの業種・課題に合わせて進めます</li>' +
          '<li class="s-list-arrow">目指すのは——[Q5の回答を引用してゴール設定]</li>' +
          '<li class="s-list-arrow">55分で持ち帰る</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* --- 本日の流れ --- */
  function slide06() {
    return '<section class="slide" data-section="hearing" data-title="今日の流れ" data-notes="今日は大きく4つのパートで進めます。最初にお話を聞いて——今ここですね——そのあと画像生成の使い方を一緒に確認して、実際に動かしてみて、最後に今日の気づきを整理する時間を取ります。">' +
      H('今日の流れ（55分）') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">①</div><div><div class="s-step-text"><strong>ヒアリング</strong>（今ここ）</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">②</div><div><div class="s-step-text"><strong>座学</strong>：ChatGPT image2で販促を変える方法</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">③</div><div><div class="s-step-text"><strong>ハンズオン</strong>：実際に動かしてみる</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">④</div><div><div class="s-step-text"><strong>振り返り</strong>・宿題・次回へ</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* --- PHASE 2 SECTION --- */
  function slide07() {
    return '<section class="slide slide-section" data-section="study" data-title="Phase 2 座学" data-notes="">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">PHASE 02</div>' +
        '<h1 class="s-section-title">座学</h1>' +
        '<p class="s-section-lead">ChatGPT image2で販促を変える方法</p>' +
      '</div>' +
    '</section>';
  }

  /* --- ① 現状確認 --- */
  function slide08() {
    return '<section class="slide" data-section="study" data-title="① 現状確認" data-notes="まず〇〇さんに聞かせてください。今、InstagramやFacebookなど、SNSで自社の情報を発信していますか？（少し間）発信している方も、できていない方も、どちらでも大丈夫です。正直に教えていただければ、それに合わせて進めます。">' +
      H('今、SNS発信はどのくらいできていますか？') +
      '<div class="slide-content">' +
        '<div class="s-compare">' +
          '<div class="s-compare-col positive">' +
            '<div class="s-compare-badge">発信できている方</div>' +
            '<div class="s-compare-title">週に何回？1投稿に何時間？</div>' +
            '<ul class="s-compare-items"><li>集客・問い合わせにつながっていますか？</li><li>発信にかかっている時間は？</li></ul>' +
          '</div>' +
          '<div class="s-compare-col negative">' +
            '<div class="s-compare-badge">できていない方</div>' +
            '<div class="s-compare-title">どこで止まっていますか？</div>' +
            '<ul class="s-compare-items"><li>写真？文章？時間？</li><li>今日、一緒に解決します。</li></ul>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* --- ② 表面課題 --- */
  function slide09() {
    return '<section class="slide" data-section="study" data-title="② SNS発信が続かない理由" data-notes="SNS発信、正直しんどくないですか？投稿しようと思ったら、まず写真撮る。撮ったら加工する。加工したらキャプション考える。ハッシュタグ調べて、投稿時間考えて——気づいたら2時間経ってる。（少し間）しかも、その2時間使って、反応が来ない。いいねが数個、フォロワーは増えない、問い合わせは来ない。（フック強め）これ、全部やってることが悪いんじゃないんです。やり方の問題なんです。">' +
      H('SNS発信が続かない本当の理由') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">時間はかかるのに、頻度が上がらない</li>' +
          '<li class="s-list-arrow">写真→加工→キャプション→ハッシュタグ… 気づいたら2時間</li>' +
          '<li class="s-list-arrow">デザイナーへの依頼 → 1枚5,000円〜、しかも「なんか違う」</li>' +
          '<li class="s-list-arrow">AI画像を試したが「微妙だった」</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* --- ③ 本質課題 --- */
  function slide10() {
    return '<section class="slide" data-section="study" data-title="AIで微妙な結果になった理由" data-notes="AIで画像を作ってみたけど微妙だった方、ほぼ全員に共通する原因があります。（少し間）「おしゃれな料理の写真を作って」——この指示で出てくる画像は、どこのお店にも使える画像です。つまり、〇〇さんのお店には使えない画像なんです。（フック強め）Instagramでスクロールを止める画像は、0.3秒で「この店に行きたい」という感情を引き起こさないといけない。汎用的なおしゃれ写真では、その感情は動きません。">' +
      H('AIで微妙な結果になった理由は2つ') +
      '<div class="slide-content">' +
        '<div class="s-risk-list">' +
          '<div class="s-risk-item">' +
            '<div class="s-risk-header"><span class="s-risk-badge high">問題①</span><span class="s-risk-title">自社の強み・ターゲット・世界観が指示に入っていない</span></div>' +
            '<div class="s-risk-body">「おしゃれな料理写真を作って」= どこのお店にも使える = 〇〇さんのお店には使えない</div>' +
          '</div>' +
          '<div class="s-risk-item">' +
            '<div class="s-risk-header"><span class="s-risk-badge high">問題②</span><span class="s-risk-title">自分のビジネスをAIに正しく理解させていない</span></div>' +
            '<div class="s-risk-body">感覚で指示を作っても、AIには「〇〇さんのお店」が分からない</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* --- ④ 順番を変えるだけ --- */
  function slide11() {
    return '<section class="slide" data-section="study" data-title="③ 順番を変えるだけ" data-notes="答えはシンプルです。（少し間）先に、ChatGPTに自分の会社を徹底リサーチさせる。その分析結果を使ってプロンプトを作る。これだけです。（少し間）順番が変わるんです。今までは感覚でプロンプトを作っていた。これからはリサーチが先。しかもこのリサーチ、ChatGPTがやります。〇〇さんはURLと商品の特徴を教えるだけ。あとはChatGPTが全部分析してくれます。">' +
      H('順番を変えるだけです') +
      '<div class="slide-content">' +
        '<div class="s-compare">' +
          '<div class="s-compare-col negative">' +
            '<div class="s-compare-badge">今まで</div>' +
            '<div class="s-compare-title">なんとなく感覚でプロンプト</div>' +
            '<ul class="s-compare-items"><li>感覚で指示を作る</li><li>画像生成</li><li>微妙な結果</li></ul>' +
          '</div>' +
          '<div class="s-compare-col positive">' +
            '<div class="s-compare-badge">これから</div>' +
            '<div class="s-compare-title">リサーチファースト</div>' +
            '<ul class="s-compare-items"><li>リサーチ（URLを渡すだけ）</li><li>自社専用プロンプト作成</li><li>刺さる画像</li></ul>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* --- ⑤ 3ステップフレームワーク --- */
  function slide12() {
    return '<section class="slide" data-section="study" data-title="④ 3ステップフレームワーク" data-notes="具体的に3ステップです。Step 1はリサーチ。ChatGPTに会社名とURLと商品特徴を渡して、事業モデル・強み・ターゲット・競合・AI活用ポイントを全部出してもらいます。所要時間は約5分、プロンプトを貼るだけです。Step 2は活用ランキング確認。リサーチ結果の中に難易度と効果のランキングが出てきます。「まずInstagramバナーから」という方針が決まります。Step 3はプロンプト量産。選んだ活用に合わせて、バナー用プロンプトを20本生成します。合計最初の1回で約10分。でもこの型を一回作れば、次からは変数を変えるだけです。">' +
      H('3ステップで自社専用画像ができる') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">1</div><div><div class="s-step-text"><strong>リサーチ</strong> — 会社名・URL・商品特徴を渡して徹底分析（約5分）</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">2</div><div><div class="s-step-text"><strong>活用ランキング確認</strong> — 何から始めるかAIが教えてくれる（約2分）</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">3</div><div><div class="s-step-text"><strong>プロンプト量産</strong> — Instagramバナー用プロンプトを20本生成（約2分）</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* --- ⑥ 活用事例（業種別） --- */
  function slide13() {
    return '<section class="slide" data-section="study" data-title="⑤ 活用事例（業種別）" data-notes="〇〇さんは[Q1の業種]とおっしゃっていたので、まさに同じような事業者さんがこのフレームワークをこう使っています。（少し間）同じ商品でも、ターゲットと用途が変わると全然違う画像になる。贈答需要を取りにいくと客単価も変わってきます。">' +
      H('〇〇さんと同じ業種の使い方') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-head">飲食店</li>' +
          '<li class="s-list-arrow">来店促進バナー + 季節メニュー + テイクアウト需要を3パターンで量産</li>' +
          '<li class="s-list-head">美容室・サービス業</li>' +
          '<li class="s-list-arrow">メニュー別バナー + ギフト利用 + 新メニュー告知を月替わりで更新</li>' +
          '<li class="s-list-head">整骨院・士業・工務店</li>' +
          '<li class="s-list-arrow">課題別（腰痛・相続・リフォーム等）バナーで問い合わせ増加</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* --- ⑦ 3点まとめ（スパース→視覚強化） --- */
  function slide14() {
    return '<section class="slide" data-section="study" data-title="⑥ 今日覚えて帰ってほしい3点" data-notes="今日覚えてほしいのは3つだけです。（少し間）一つ目、汎用プロンプトは〇〇さんのお店には刺さらない。二つ目、リサーチが先。URLを渡すだけです。三つ目、プロンプトは20本まとめて作る。この3つが頭に入れば、今日のハンズオンが全部つながります。">' +
      H('今日覚えてほしいのは3つだけ') +
      '<div class="slide-content">' +
        '<ul class="s-list" style="font-size:1.12em; gap:1.6rem;">' +
          '<li class="s-list-callout">汎用プロンプトは〇〇さんのお店には刺さらない</li>' +
          '<li class="s-list-callout">リサーチが先。URLを渡すだけでChatGPTが分析してくれる</li>' +
          '<li class="s-list-callout">プロンプトは20本まとめて作る。使い回しで毎週使える</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* --- ⑧ ハンズオンへのブリッジ --- */
  function slide15() {
    return '<section class="slide" data-section="study" data-title="⑦ 実際に動かしてみましょう" data-notes="ここまでで何か疑問はありますか？（確認して答える）では実際に動かしてみましょう。一つ確認させてください。ChatGPTはお使いになれる状態ですか？課金はされていますか？（回答を聞く）（少し間）分かりました。では[分岐に応じてA/B/Cを選択]で進めます。">' +
      H('実際に動かしてみましょう——分岐確認') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">ChatGPTはお使いになれる状態ですか？課金はされていますか？</li>' +
          '<li class="s-list-arrow">Yes・課金あり → 〇〇さん操作で一緒にやります（分岐A）</li>' +
          '<li class="s-list-arrow">Yes・課金なし → 私の画面を使いながら一緒に考えます（分岐B）</li>' +
          '<li class="s-list-arrow">PCなし → 画面を見ながら方向性を一緒に決めましょう（分岐C）</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* --- PHASE 3 SECTION --- */
  function slide16() {
    return '<section class="slide slide-section" data-section="handson" data-title="Phase 3 ハンズオン" data-notes="">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">PHASE 03</div>' +
        '<h1 class="s-section-title">ハンズオン</h1>' +
        '<p class="s-section-lead">〇〇さんのビジネスで実際に動かしてみる</p>' +
      '</div>' +
    '</section>';
  }

  /* --- Step1 リサーチ --- */
  function slide17() {
    return '<section class="slide" data-section="handson" data-title="Step 1：リサーチ" data-notes="では実際にやってみましょう。今日はサンプルの会社を想定して進めます。〇〇さんには「自分のビジネスだったらどうなるか」を一緒に考えてもらえると嬉しいです。（少し間）このプロンプトを貼ります。会社名とURLと商品特徴、3つ入れるだけです。貼って送るだけ。難しいことは何もありません。">' +
      H('Step 1：リサーチプロンプトを入れる') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">1</div><div><div class="s-step-text">会社名・URL・商品特徴の3つを入力</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">2</div><div><div class="s-step-text">プロンプトをChatGPTに貼って送信</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">3</div><div><div class="s-step-text">事業分析 + AI活用ポイントが難易度ランキングで出てくる</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* --- Step2 活用選定（スパース→視覚強化） --- */
  function slide18() {
    return '<section class="slide" data-section="handson" data-title="Step 2：活用ランキング確認" data-notes="出てきました。見てください——まず事業モデルの分析が来て、次に商品特性、そしてAI活用ポイントが難易度ランキングで出てきます。（少し間）一番難易度が低くて効果が高いものが上位に来ています。今回の場合はInstagramバナーが第1位です。これが「まず何から始めるか」の答えです。迷わなくていい。ChatGPTが優先順位を出してくれる。">' +
      H('Step 2：ランキングの上位を確認する') +
      '<div class="slide-content">' +
        '<ul class="s-list" style="font-size:1.12em; gap:1.6rem;">' +
          '<li class="s-list-callout">難易度低 × 効果高 が上位に来る</li>' +
          '<li class="s-list-arrow">今回 → Instagramバナーが第1位</li>' +
          '<li class="s-list-arrow">迷わなくていい。ChatGPTが優先順位を出してくれる</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* --- Step3 プロンプト量産（スパース→視覚強化） --- */
  function slide19() {
    return '<section class="slide" data-section="handson" data-title="Step 3：プロンプト20本生成" data-notes="では画像プロンプトを20本作ります。さっきのリサーチ結果を踏まえた上で、追加指示を入れます。（少し間）出てきました！カテゴリ別に20本。来店を取りにいくバナー、贈り物需要のバナー、季節限定バナー——切り口が違う20本が一気に出てきました。これ、全部〇〇さんのお店の強みとターゲットが入ったプロンプトです。汎用の「おしゃれな画像」じゃない。">' +
      H('Step 3：自社専用プロンプトを20本作る') +
      '<div class="slide-content">' +
        '<ul class="s-list" style="font-size:1.12em; gap:1.6rem;">' +
          '<li class="s-list-callout">リサーチ結果を踏まえた「〇〇さん専用」プロンプト</li>' +
          '<li class="s-list-arrow">カテゴリ別（来店・贈答・季節限定 etc.）に分かれて出てくる</li>' +
          '<li class="s-list-arrow">汎用「おしゃれ画像」とは全然違う——〇〇さんのお店だけの画像</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* --- Step4 画像生成 --- */
  function slide20() {
    return '<section class="slide" data-section="handson" data-title="Step 4：image2で生成" data-notes="では、この中の1本を使って実際に画像を作ります。まず参考画像を添付します。そしてこのプロンプトを貼ります——（送信する）できました——（少し間）どうですか？「おしゃれな料理写真を作って」で出てくる画像と比べてみてください。全然違うんです。ちゃんとこの会社っぽい、このターゲットに刺さる画像になっています。〇〇さんのビジネスでやってみたら、どんな画像が出そうですか？">' +
      H('Step 4：参考画像と一緒にimage2へ') +
      '<div class="slide-content">' +
        '<div class="s-steps">' +
          '<div class="s-step-row"><div class="s-step-num">1</div><div><div class="s-step-text">参考画像（雰囲気を伝える1枚）を添付</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">2</div><div><div class="s-step-text">20本の中から1本選んでプロンプトを貼る</div></div></div>' +
          '<div class="s-step-row"><div class="s-step-num">3</div><div><div class="s-step-text">送信 → 数秒で〇〇さん専用画像が完成</div></div></div>' +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* --- ハンズオンまとめ（metric） --- */
  function slide21() {
    return '<section class="slide slide-metric" data-section="handson" data-title="まとめ：10分でここまでできた" data-notes="今日やったことを整理します。リサーチプロンプトを貼るだけで約5分。活用ランキングの確認が1分。プロンプト20本の生成が2分。画像生成が1枚30秒。合計、最初の1回で約10分。（少し間）でもこの型を一回作れば、次からは変数を変えるだけで使い回せます。">' +
      '<div class="slide-content slide-content-center">' +
        '<p class="s-metric-lead">最初の1回で</p>' +
        '<div class="s-metric-value">約10分</div>' +
        '<p class="s-metric-desc">Step1 リサーチ（5分）+ Step2 確認（1分）<br>+ Step3 量産（2分）+ Step4 生成（30秒/枚）</p>' +
        '<p class="s-metric-source">この型を作ったら、次は変数を変えるだけ</p>' +
      '</div>' +
    '</section>';
  }

  /* --- PHASE 4 SECTION --- */
  function slide22() {
    return '<section class="slide slide-section" data-section="wrap" data-title="Phase 4 アウトプット" data-notes="">' +
      '<div class="slide-content">' +
        '<div class="s-section-accent-bar"></div>' +
        '<div class="s-section-chapter">PHASE 04</div>' +
        '<h1 class="s-section-title">アウトプット</h1>' +
        '<p class="s-section-lead">今日の気づきを言葉にして持ち帰る</p>' +
      '</div>' +
    '</section>';
  }

  /* --- 学び言語化 --- */
  function slide23() {
    return '<section class="slide" data-section="wrap" data-title="今日の気づきを整理する" data-notes="少し振り返る時間を取りましょう。〇〇さんに聞かせてください。今日一番使えそうだと思ったことは何ですか？（参加者が答えるまで待つ）（少し間）そうですよね、まさにそこです。自分の仕事にどう使えそうですか？具体的な場面は思い浮かびますか？（少し間）最初に「今日これだけ持ち帰れたら嬉しい」とおっしゃっていたこと、今日は得られましたか？">' +
      H('今日の気づきを整理しましょう') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">今日一番使えそうだと思ったことは何ですか？</li>' +
          '<li class="s-list-arrow">自分の仕事にどう使えそうですか？具体的なシーンは？</li>' +
          '<li class="s-list-arrow">最初の期待（Q5）は今日得られましたか？</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* --- 宿題設定（スパース→視覚強化） --- */
  function slide24() {
    return '<section class="slide" data-section="wrap" data-title="今週試すこと、1つ決めましょう" data-notes="せっかくなので、今日学んだことを今週1つ試してみてください。どんな小さいことでも大丈夫です。（少し間）〇〇さんが来週試したいと思うこと、1つ決めてもらえますか？私が決めるんじゃなくて、〇〇さん自身に決めてほしいんです。（参加者が答えるまで待つ）いいですね。では〇〇を試してみてください。どうなったか、ぜひ教えてください。">' +
      H('宿題は〇〇さんが決める') +
      '<div class="slide-content">' +
        '<ul class="s-list" style="font-size:1.12em; gap:1.6rem;">' +
          '<li class="s-list-callout">今週試したいこと、1つだけ決めてください</li>' +
          '<li class="s-list-arrow">どんな小さいことでも大丈夫です</li>' +
          '<li class="s-list-arrow">「やってみた」結果を次回教えてください</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* --- 次回予約（スパース→視覚強化） --- */
  function slide25() {
    return '<section class="slide" data-section="wrap" data-title="続きはここで" data-notes="今日はChatGPT image2の基礎と最初の一歩を体験してもらいました。実はここから自社に合わせてカスタマイズするのが本番で、そこが一番面白い部分です。（少し間）〇〇さんが試してみた結果、どうなったか教えてもらえますか。うまくいったことも、詰まったことも、どちらも次に活かせますので。続きをやりましょう。2〜3週間後くらいで都合はいかがですか？">' +
      H('〇〇の結果を報告に来てください') +
      '<div class="slide-content">' +
        '<ul class="s-list" style="font-size:1.12em; gap:1.6rem;">' +
          '<li class="s-list-callout">うまくいっても、詰まっても、続きをやりましょう</li>' +
          '<li class="s-list-arrow">今日は入口。自社に合った形は次回一緒に仕上げましょう</li>' +
          '<li class="s-list-arrow">2〜3週間後で都合はいかがですか？</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* --- よろず案内 --- */
  function slide26() {
    return '<section class="slide" data-section="wrap" data-title="よろず支援拠点のご案内" data-notes="よろず支援拠点は今日みたいなAI・デジタル活用以外にも、資金繰りや労務・マーケティングなど色んな専門家が担当しています。他に気になることがあれば、その分野の担当をご紹介することもできますので、気軽にご相談ください。（少し間）私は毎週水曜日担当ですので、次回もお声がけいただければ。">' +
      H('よろず支援拠点でできること') +
      '<div class="slide-content">' +
        '<ul class="s-list">' +
          '<li class="s-list-callout">今日みたいなAI・デジタル活用以外にも対応しています</li>' +
          '<li class="s-list-arrow">資金繰り・補助金・助成金 → 専門担当に繋ぎます</li>' +
          '<li class="s-list-arrow">労務・人事・就業規則 → 社労士担当に相談できます</li>' +
          '<li class="s-list-arrow">マーケティング・広告・SNS戦略 → 専門家に繋ぎます</li>' +
          '<li class="s-list-sub">私は毎週水曜日担当です。次回もお声がけください</li>' +
        '</ul>' +
      '</div>' +
    '</section>';
  }

  /* --- CTA（impact） --- */
  function slide27() {
    return '<section class="slide slide-impact" data-section="wrap" data-title="また来てください" data-notes="（締めは前向きに）今日はありがとうございました。今週、ぜひリサーチプロンプトを自分のビジネスに入れ替えて試してみてください。どうなったか、次回教えてください。よろず支援拠点、またお待ちしています。">' +
      '<div class="slide-content slide-content-center">' +
        '<div class="s-impact-tag">SEE YOU</div>' +
        '<p class="s-impact-main">また来てください。<br>続きはここで。</p>' +
      '</div>' +
    '</section>';
  }

  /* ===================== REGISTER ===================== */

  window.slideFactories = [
    slide01, slide02, slide03, slide04, slide05,
    slide06, slide07, slide08, slide09, slide10,
    slide11, slide12, slide13, slide14, slide15,
    slide16, slide17, slide18, slide19, slide20,
    slide21, slide22, slide23, slide24, slide25,
    slide26, slide27
  ];

})();
