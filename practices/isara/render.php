<?php

function render($path)
{
    if (PathManager::isIndexUri($path)) {
        $methodName = 'index';
    } 
    else {
        $methodName = $path[0];
    }

    return $methodName($path);
}


function index($path)
{
    $database = new Database();

    $requestPage = $path[1];
    if ($requestPage == "") {
        $requestPage = 1;
    }
    $lastArticleNum = $requestPage * Database::MAX_ARTICLES_PER_PAGE;
    $firstArticleNum = $lastArticleNum - Database::MAX_ARTICLES_PER_PAGE;
    $maxPage = ceil(count($database->articleList) / Database::MAX_ARTICLES_PER_PAGE);

    $articleList = [];
    for ($i = $firstArticleNum; $i < $lastArticleNum; $i++) {
        $articleList[] = $database->articleList[$i];
    }

    $maxPageButtonNum = 3;
    $pageList = [];
    if ($requestPage == 1) {
        for($i=1; $i <= $maxPageButtonNum; $i++) {
            $pageList[] = $i;
        }
        $nextPage = 2;
        $prevPage = 0;
    }
    elseif ($requestPage == $maxPage) {
        for($i=$maxPage-2; $i <= $maxPageButtonNum; $i++) {
            $pageList[] = $i;
        }
        $nextPage = 0;
        $prevPage = $maxPageButtonNum - 1;
    }
    else {
        for($i=$requestPage-1; $i <= $requestPage+1; $i++) {
            $pageList[] = $i;
        }
        $nextPage = $requestPage + 1;
        $prevPage = $requestPage - 1;
    }

    $recentArticleList = [
        $database->articleList[0],
        $database->articleList[1],
        $database->articleList[2],
    ];

    $args = [
        "articleList" => $articleList,
        "currentPage" => $requestPage,
        "nextPage" => $nextPage,
        "prevPage" => $prevPage,
        "pageList" => $pageList,
        "recentArticleList" => $recentArticleList,
    ];

    $filePath = 'src/pug/index.pug';
    return [
        'filePath' => $filePath,
        'args' => $args,
    ];
}

function typography($path) {
    $database = new Database();
    $recentArticleList = [
        $database->articleList[0],
        $database->articleList[1],
        $database->articleList[2],
    ];
    $filePath = 'src/pug/typography.pug';
    $args = [
        "recentArticleList" => $recentArticleList,
    ];
    return [
        'filePath' => $filePath,
        'args' => $args,
    ];
}

function contact($path) {
    $database = new Database();
    $recentArticleList = [
        $database->articleList[0],
        $database->articleList[1],
        $database->articleList[2],
    ];
    $filePath = 'src/pug/contact.pug';
    $args = [
        "recentArticleList" => $recentArticleList,
    ];
    return [
        'filePath' => $filePath,
        'args' => $args,
    ];
}


class PathManager {
    public static function isIndexUri(array $path)
    {
        if (count($path) == 1 && ($path[0] == "" || is_numeric($path[0]))) {
            return true;
        }
        return false;
    }
}

class Article {
    public $date;
    public $title;
    public $summary;
    public $content;

    public function __construct($date, $title, $summary, $content)
    {
        $this->date = $date;
        $this->title = $title;
        $this->summary = $summary;
        $this->contetn = $content;
    }
}

class Database {
    const MAX_ARTICLES_PER_PAGE = 6;
    public $articleList;

    public function __construct()
    {
        $this->articleList = [];
        $this->articleList[] = new Article(
            '2018年9月1日',
            '書くためのテーマ',
            'Writeは文章を書く人のためのミニマルなWordPressテーマです。装飾を極限まで省いたデザインは、あなたの文章を主役にします。',
            ''
        );
        $this->articleList[] = new Article(
            '2018年3月5日',
            '画像付きの投稿',
            '吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。',
            ''
        );
        $this->articleList[] = new Article(
            '2018年3月5日',
            '引用付きの投稿',
            '吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれ…',
            ''
        );
        $this->articleList[] = new Article(
            '2018年3月5日',
            'コメント付きの投稿',
            '吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれ…',
            ''
        );
        $this->articleList[] = new Article(
            '2018年3月3日',
            '吾輩は猫である',
            '吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれ…',
            ''
        );
        $this->articleList[] = new Article(
            '2018年3月3日',
            '名前はまだ無い。どこで生まれたかとんと見当がつかぬ',
            '吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれ…',
            ''
        );
        $this->articleList[] = new Article(
            '2018年3月3日',
            '何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している',
            '吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれ…',
            ''
        );
        $this->articleList[] = new Article(
            '2018年2月12日',
            '投稿フォーマット；ギャラリー(Tiled)',
            '投稿フォーマット：ギャラリー – 画像ギャラリー。ギャラリーショートコードと添付画像を含む投稿など。',
            ''
        );
        $this->articleList[] = new Article(
            '2018年2月12日',
            '投稿フォーマット；画像',
            '投稿フォーマット：画像 – 単独の画像。投稿本文内の最初の <img /> タグが画像と見なされる。',
            ''
        );
        $this->articleList[] = new Article(
            '2018年2月12日',
            '投稿フォーマット；引用',
            '投稿フォーマット：引用 – 引用。多くの場合、引用文を囲うblockquoteを含む。 投稿フォーマット',
            ''
        );
        $this->articleList[] = new Article(
            '2018年2月12日',
            '投稿フォーマット；動画(YouTube)',
            '投稿フォーマット：動画 – 単独の動画。投稿本文内の最初の <video /> タグまたは object/embed が動画と見なされる。 詳しくは oEmbed を参照して下…',
            ''
        );
        $this->articleList[] = new Article(
            '2018年2月12日',
            '投稿フォーマット；音声(SoundCloud)',
            '投稿フォーマット：音声 – 音声ファイル。 詳しくは oEmbed を参照して下さい。',
            ''
        );
        $this->articleList[] = new Article(
            '2018年2月12日',
            '投稿フォーマット；ステータス',
            '投稿フォーマット：ステータス – 短い近況アップデート。Twitter のツイートのようなもの。',
            ''
        );
        $this->articleList[] = new Article(
            '2018年2月12日',
            '投稿フォーマット；アサイド',
            '投稿フォーマット：アサイド – 通常タイトルなしで表示。Facebook の Notes のようなもの。',
            ''
        );
        $this->articleList[] = new Article(
            '2018年2月12日',
            '投稿フォーマット；リンク',
            '投稿フォーマット：リンク – 他サイトへのリンク。他サイトへのリンク。投稿本文内の一つ目の <a href=””> タグがその投稿の外部リンクと見なされる。',
            ''
        );
        $this->articleList[] = new Article(
            '2018年2月12日',
            '投稿フォーマット；チャット',
            '投稿フォーマット：チャット – チャット履歴。例えば以下のようなもの。 太郎: やあ！ 花子: 元気？ 一郎: おう！',
            ''
        );
    }
}