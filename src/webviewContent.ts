import { Uri } from "vscode";

export function getWebviewContent(cspSource: string, assetsPath: Uri) {
  return /*html*/ `<!doctype html>
	<html lang="en">

	<head>
		<meta charset="utf-8">
		<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${cspSource}; script-src ${cspSource}">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

		<title>Git Cheatsheet</title>

		<link rel="stylesheet" href="${assetsPath}/custom.css">
	</head>

	<body>

		<h1 id="algebra-zavr-ni">ALGEBRA ZAVRŠNI</h1>

		<h2 id="-a-name-html-a-html-mdash-struktura-i-sadr-aj"><a name="html"></a>HTML &mdash; struktura i sadržaj</h2>

		<h3 id="-a-name-sto-je-html-a-to-je-html-"><a name="#sto-je-html"></a>Što je HTML?</h3>

		<ul>
			<li><strong>HTML</strong> - <strong>HyperText Markup Language</strong>:</li>
			<li>prezentacijski jezik (jezik označavanja) za kreiranje web stranica</li>
			<li>aktualna verzija: HTML5</li>
			<li>služi za definiciju pojedinih komponenti od kojih se sastoji web stranica<ul>
			<li>struktura dokumenta (layout)</li>
			<li>sadržaj dokumenta i njegove karakteristike</li>
		</ul>
		</li>
		</ul>
		<h3 id="-a-name-sto-je-html-a-html-elementi"><a name="sto-je-html"></a>HTML elementi</h3>
		<ul>
		<li>web stranica se gradi pomoću HTML elemenata</li>
		<li>tip elementa određuje njegova oznaka (tag)<ul>
		<li>označava sadržaj elementa - daje informaciju što sadržaj predstavlja</li>
		<li>ključne riječi unutar uglatih zagrada: <code>&lt;title&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, ...<ul>
		<li>obično dolaze u paru: <code>&lt;title&gt; &lt;/title&gt;</code></li>
		</ul>
		</li>
		<li>neki elementi nemaju sadržaj ili ne mogu sadržavati pod elemente -&gt; definiraju se samo s jednom oznakom &rarr; npr. <code>&lt;br&gt;</code> ili <code>&lt;br /&gt;</code><div align="center">
		<img src="./media/htmlTree.jpg" alt="HTML drvo" style="width:50%">
		</div>

		</li>
		</ul>
		</li>
		</ul>
		<h3 id="-a-name-html-atributi-a-html-atributi"><a name="HTML-atributi"></a>HTML atributi</h3>
		<ul>
		<li>HTML elementi mogu sadržavati atribute<ul>
		<li>pružaju dodatne informacije o HTML elementu</li>
		<li>uvijek se definiraju u početnoj oznaci (početnom tagu)</li>
		<li>definicija:<ul>
		<li>naziv=“vrijednost”</li>
		<li>naziv</li>
		</ul>
		</li>
		</ul>
		</li>
		<li>lista atributa: <a href="https://www.w3schools.com/tags/ref_attributes.asp">https://www.w3schools.com/tags/ref_attributes.asp</a></li>
		</ul>
		<h3 id="anatomija-struktura-html-elementa">Anatomija (struktura) HTML elementa</h3>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"description"</span>&gt;</span> sadrzaj elementa <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
		</code></pre>
		<ul>
		<li><code>&lt;p ... &gt; ... &lt;/p&gt;</code> - html oznake, početna i završna  (tagovi)</li>
		<li><code>class=&quot;description&quot;</code> - atribut: naziv=&quot;vrijednost&quot;</li>
		</ul>
		<h3 id="struktura-i-sadr-aj-html-dokumenta">Struktura i sadržaj HTML dokumenta</h3>
		<pre><code class="lang-HTML"><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"hr"</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Naziv dokumenta<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
				Sadržaj dokumenta
		<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
		</code></pre>
		<h3 id="meta-oznake">Meta oznake</h3>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span> /&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"author"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"Pero Perić"</span> /&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"keywords"</span> <span class="hljs-attr">content</span>= <span class="hljs-string">"ključne riječi"</span> /&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"description"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"opis stranice"</span> /&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"viewport"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /&gt;</span>
		</code></pre>
		<h3 id="elementi-za-ozna-avanje-teksta">Elementi za označavanje teksta</h3>
		<ul>
		<li>naslovi</li>
		</ul>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>naslov 1. razine<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">h2</span>&gt;</span>naslov 2. razine<span class="hljs-tag">&lt;/<span class="hljs-name">h2</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Naslov 3. razine<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>Naslov 4. razine<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>Naslov 5. razine<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">h6</span>&gt;</span>Naslov 6. razine<span class="hljs-tag">&lt;/<span class="hljs-name">h6</span>&gt;</span>
		</code></pre>
		<ul>
		<li>paragraf</li>
		</ul>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span> ... <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
		</code></pre>
		<ul>
		<li>unaprijed oblikovan tekst</li>
		</ul>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">pre</span>&gt;</span> ... <span class="hljs-tag">&lt;/<span class="hljs-name">pre</span>&gt;</span>
		</code></pre>
		<ul>
		<li>novi red</li>
		</ul>
		<pre><code class="lang-HTML"><span class="hljs-section">&lt;br /&gt;</span>
		</code></pre>
		<ul>
		<li>Vodoravna linija</li>
		</ul>
		<pre><code class="lang-html"><span class="hljs-section">&lt;hr /&gt;</span>
		</code></pre>
		<ul>
		<li>oblikovanje teksta</li>
		</ul>
		<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">b</span>&gt;</span> podebljano <span class="hljs-tag">&lt;/<span class="hljs-name">b</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span> naglašeno važno <span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">i</span>&gt;</span> ukošeno <span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">em</span>&gt;</span> naglašeno koso <span class="hljs-tag">&lt;/<span class="hljs-name">em</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">mark</span>&gt;</span> markirano <span class="hljs-tag">&lt;/<span class="hljs-name">mark</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">small</span>&gt;</span> mala slova <span class="hljs-tag">&lt;/<span class="hljs-name">small</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">del</span>&gt;</span> prekriženo <span class="hljs-tag">&lt;/<span class="hljs-name">del</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">ins</span>&gt;</span> ubačeno <span class="hljs-tag">&lt;/<span class="hljs-name">ins</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">sub</span>&gt;</span> malo dolje <span class="hljs-tag">&lt;/<span class="hljs-name">sub</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">sup</span>&gt;</span> malo gore <span class="hljs-tag">&lt;/<span class="hljs-name">sup</span>&gt;</span>
		</code></pre>
		<ul>
		<li>Simbolička lista</li>
		</ul>
		<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>Lorem ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>Lorem ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span>
		</code></pre>
		<ul>
		<li>Brojčana lista</li>
		</ul>
		<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">ol</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>Lorem ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>Lorem ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span>
		</code></pre>
		<ul>
		<li>Opisna lista</li>
		</ul>
		<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">dl</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">dt</span>&gt;</span>Lorem ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">dt</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">dd</span>&gt;</span>Lorem ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">dd</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">dt</span>&gt;</span>Lorem ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">dt</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">dd</span>&gt;</span>Lorem ipsum<span class="hljs-tag">&lt;/<span class="hljs-name">dd</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">dl</span>&gt;</span>
		</code></pre>
		<h3 id="multimedijski-sadr-aj">Multimedijski sadržaj</h3>
		<ul>
		<li><p>Kod dohvaćanja vanjske datoteke upisujemo putanju (URL) do nje:</p>
		<ul>
		<li>apsolutna putanja<ul>
		<li>sadrži URL adresu datoteke smještene u vanjskoj web domeni<ul>
		<li>ne upravljamo datotekom koja nije smještena u našoj web mapi</li>
		<li>da li kršimo autorska prava?</li>
		</ul>
		</li>
		</ul>
		</li>
		<li>primjer:</li>
		</ul>
		<pre><code class="lang-html">&lt;<span class="hljs-selector-tag">img</span> src=<span class="hljs-string">"https://www.algebra.hr/mapa/slika.jpg"</span> /&gt;
		</code></pre>
		<ul>
		<li>relativna putanja<ul>
		<li>putanja od HTML dokumenta iz kojeg želimo dohvatiti datoteku do same datoteke</li>
		<li>datoteka je smještena u našoj web mapi te mi njome upravljamo</li>
		<li>kraći zapis putanje</li>
		<li>primjer:</li>
		</ul>
		</li>
		</ul>
		<pre><code class="lang-HTML">&lt;<span class="hljs-selector-tag">img</span> src=<span class="hljs-string">"mapa/slika.jpg"</span> /&gt;
		</code></pre>
		</li>
		<li><p>grafike</p>
		<pre><code class="lang-HTML">&lt;img src=<span class="hljs-string">"slike/logo.jpg"</span> alt=<span class="hljs-string">"Logo naše ustanove"</span> <span class="hljs-built_in">width</span>=<span class="hljs-string">"600"</span> <span class="hljs-built_in">height</span>=<span class="hljs-string">"400"</span> /&gt;

		&lt;picture&gt;
			&lt;source media=<span class="hljs-string">""</span> srcset=<span class="hljs-string">""</span> <span class="hljs-built_in">width</span>=<span class="hljs-string">""</span> <span class="hljs-built_in">height</span>=<span class="hljs-string">""</span> /&gt;
			&lt;source media=<span class="hljs-string">""</span> srcset=<span class="hljs-string">""</span> <span class="hljs-built_in">width</span>=<span class="hljs-string">""</span> <span class="hljs-built_in">height</span>=<span class="hljs-string">""</span> /&gt;
			&lt;img src=<span class="hljs-string">""</span> alt=<span class="hljs-string">""</span> <span class="hljs-built_in">width</span>=<span class="hljs-string">""</span> <span class="hljs-built_in">height</span>=<span class="hljs-string">""</span> /&gt;
		&lt;/picture&gt;
		</code></pre>
		</li>
		<li><p>Video sadržaj</p>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">video</span> <span class="hljs-attr">controls</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"560"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"320"</span> <span class="hljs-attr">poster</span>=<span class="hljs-string">"slike/promo.jpg"</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"video/promo-video.mp4"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"video/mp4"</span> /&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"video/promo-video.ogv"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"video/ogg"</span> /&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"video/promo-video.webm"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"video/webm"</span> /&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">video</span>&gt;</span>

		<span class="hljs-tag">&lt;<span class="hljs-name">video</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"video/promo-video.mp4"</span> <span class="hljs-attr">controls</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"560"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"320"</span> <span class="hljs-attr">poster</span>=<span class="hljs-string">"slike/promo.jpg"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">video</span>&gt;</span>
		</code></pre>
		</li>
		<li><p>Audio sadržaj</p>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">audio</span> <span class="hljs-attr">controls</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"audio/promo-audio.mp3"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"audio/mpeg"</span> /&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"audio/promo-audio.oga"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"audio/ogg"</span> /&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"audio/promo-audio.wav"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"audio/wav"</span> /&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">audio</span>&gt;</span>

		<span class="hljs-tag">&lt;<span class="hljs-name">audio</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"audio/promo-audio.mp3"</span> <span class="hljs-attr">controls</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">audio</span>&gt;</span>
		</code></pre>
		</li>
		</ul>
		<h3 id="poveznice">Poveznice</h3>
		<ul>
		<li><p>vrste poveznica:</p>
		<ul>
		<li><p>unutarnje poveznice</p>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"dokumenti/o-nama.html"</span>&gt;</span> O nama <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
		</code></pre>
		</li>
		<li><p>vanjske poveznice</p>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://algebra.hr/"</span>&gt;</span> Algebra <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
		</code></pre>
		</li>
		<li><p>poveznice prema elektroničkoj pošti ili za uspostavljanje tel. poziva</p>
		<pre><code class="lang-HTML">&lt;<span class="hljs-keyword">a</span> href=<span class="hljs-string">"mailto:info@algebra.hr"</span>&gt;Kontakt&lt;/<span class="hljs-keyword">a</span>&gt;<span class="hljs-comment"> // e-mail</span>
		&lt;<span class="hljs-keyword">a</span> href=<span class="hljs-string">"tel:+123456789"</span>&gt; +<span class="hljs-number">123456789</span> &lt;/<span class="hljs-keyword">a</span>&gt;<span class="hljs-comment"> // telefon</span>
		</code></pre>
		</li>
		<li><p>poveznice unutar samog HTML dokumenta - sidra prema elementu s određenim ID-em</p>
		<pre><code class="lang-HTML">&lt;<span class="hljs-selector-tag">a</span> href=<span class="hljs-string">"#p3"</span>&gt;Skok na Poglavlje <span class="hljs-number">3</span>&lt;/a&gt; <span class="hljs-comment">// link prema</span>
			...
		&lt;<span class="hljs-selector-tag">h2</span> id=<span class="hljs-string">"p3"</span>&gt;Poglavlje <span class="hljs-number">3</span>&lt;/h2&gt;
		</code></pre>
		</li>
		</ul>
		</li>
		<li><p>primjeri dodatnih atributa:</p>
		<ul>
		<li><p>download:</p>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"images/image.jpg"</span> <span class="hljs-attr">download</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
		</code></pre>
		</li>
		<li><p>target:</p>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"https://www.algebra.hr"</span> <span class="hljs-attr">target</span>=<span class="hljs-string">"_blank"</span> <span class="hljs-attr">hreflang</span>=<span class="hljs-string">"hr"</span>&gt;</span>Algebra<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
		</code></pre>
		</li>
		<li><p>media:</p>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"ispis.asp?output=print"</span> <span class="hljs-attr">media</span>=<span class="hljs-string">"print and (resolution:300dpi)"</span>&gt;</span>Ispiši<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
		</code></pre>
		</li>
		<li><p>rel=&quot;nofollow&quot;:</p>
		<pre><code class="lang-HTML">&lt;<span class="hljs-keyword">a</span> <span class="hljs-built_in">rel</span>=<span class="hljs-string">"nofollow"</span> href=<span class="hljs-string">"http://www.example.com/"</span>&gt;Hello World&lt;/<span class="hljs-keyword">a</span>&gt;
		</code></pre>
		</li>
		<li><p>rel=&quot;noreferrer noopener&quot;:</p>
		<pre><code class="lang-HTML">&lt;<span class="hljs-keyword">a</span> <span class="hljs-built_in">rel</span>=<span class="hljs-string">"noreferrer noopener"</span> href=<span class="hljs-string">"http://www.example.com/"</span>&gt;Hello World&lt;/<span class="hljs-keyword">a</span>&gt;
		</code></pre>
		</li>
		</ul>
		</li>
		</ul>
		<h3 id="rad-s-tablicama">Rad s tablicama</h3>
		<ul>
		<li><p>definiranje tablice</p>
		<pre><code class="lang-HTML">  <span class="hljs-params">&lt;table&gt;</span><span class="hljs-params">&lt;/table&gt;</span>,      <span class="hljs-comment">// tablica</span>
			<span class="hljs-params">&lt;tr&gt;</span><span class="hljs-params">&lt;/tr&gt;</span>,            <span class="hljs-comment">// redak - table raw</span>
			<span class="hljs-params">&lt;th&gt;</span><span class="hljs-params">&lt;/th&gt;</span>,            <span class="hljs-comment">// naglašena ćelija - table head</span>
			<span class="hljs-params">&lt;td&gt;</span><span class="hljs-params">&lt;/td&gt;</span>,            <span class="hljs-comment">// ćelija (podatak) - table data</span>
			<span class="hljs-params">&lt;caption&gt;</span><span class="hljs-params">&lt;/caption&gt;</span>   <span class="hljs-comment">// natpis</span>
		</code></pre>
		<pre><code class="lang-HTML">  <span class="hljs-params">&lt;thead&gt;</span><span class="hljs-params">&lt;/thead&gt;</span>,      <span class="hljs-comment">// zaglavlje</span>
			<span class="hljs-params">&lt;tbody&gt;</span><span class="hljs-params">&lt;/tbody&gt;</span>,      <span class="hljs-comment">// tijelo tablice</span>
			<span class="hljs-params">&lt;tfoot&gt;</span><span class="hljs-params">&lt;/tfoot&gt;</span>       <span class="hljs-comment">// footer tablice</span>
		</code></pre>
		</li>
		<li><p>atributi za tablice:</p>
		<ul>
		<li><strong>colspan</strong> - Spajanje ćelija na razini reda (vodoravno). - za <code>&lt;th&gt;&lt;/th&gt;, &lt;td&gt;&lt;/td&gt;</code></li>
		<li><strong>rowspan</strong> - Spajanje ćelija na razini kolone ili stupca (okomito). - za <code>&lt;th&gt;&lt;/th&gt;, &lt;td&gt;&lt;/td&gt;</code></li>
		<li><strong>border</strong> - Dodavanje okvira tablici (bolje rješenje: CSS). - za <code>&lt;table&gt;&lt;/table&gt;, ...</code></li>
		</ul>
		</li>
		<li><p>Anatomija tablice</p>
		</li>
		</ul>
		<pre><code class="lang-HTML"><span class="hljs-params">&lt;table border="<span class="hljs-number">1</span>"&gt;</span>  <span class="hljs-comment">// granica jedan pixel</span>
			<span class="hljs-params">&lt;caption&gt;</span>Naslov<span class="hljs-params">&lt;/caption&gt;</span> <span class="hljs-comment">// naslov</span>
			<span class="hljs-params">&lt;thead&gt;</span>           <span class="hljs-comment">// header koj ima jedan redak</span>
				<span class="hljs-params">&lt;tr&gt;</span>            <span class="hljs-comment">// redak koji ima tri ćelije (stupda)</span>
					<span class="hljs-params">&lt;th&gt;</span><span class="hljs-number">1</span><span class="hljs-params">&lt;/th&gt;</span>    <span class="hljs-comment">// ćelija</span>
					<span class="hljs-params">&lt;th&gt;</span><span class="hljs-number">2</span><span class="hljs-params">&lt;/th&gt;</span>
					<span class="hljs-params">&lt;th&gt;</span><span class="hljs-number">3</span><span class="hljs-params">&lt;/th&gt;</span>
				<span class="hljs-params">&lt;/tr&gt;</span>
			<span class="hljs-params">&lt;/thead&gt;</span>
			<span class="hljs-params">&lt;tbody&gt;</span>           <span class="hljs-comment">// body od jednog retka</span>
				<span class="hljs-params">&lt;tr&gt;</span>            <span class="hljs-comment">// redak s tri ćelije</span>
					<span class="hljs-params">&lt;td&gt;</span><span class="hljs-number">4</span><span class="hljs-params">&lt;/td&gt;</span>    <span class="hljs-comment">// ćelija</span>
					<span class="hljs-params">&lt;td&gt;</span><span class="hljs-number">5</span><span class="hljs-params">&lt;/td&gt;</span>
					<span class="hljs-params">&lt;td&gt;</span><span class="hljs-number">6</span><span class="hljs-params">&lt;/td&gt;</span>
				<span class="hljs-params">&lt;/tr&gt;</span>
			<span class="hljs-params">&lt;/tbody&gt;</span>
			<span class="hljs-params">&lt;tfoot&gt;</span>           <span class="hljs-comment">// footer s jednim retkom</span>
				<span class="hljs-params">&lt;tr&gt;</span>            <span class="hljs-comment">// redak s tri ćelije</span>
					<span class="hljs-params">&lt;td&gt;</span><span class="hljs-number">7</span><span class="hljs-params">&lt;/td&gt;</span>    <span class="hljs-comment">// ćelija</span>
					<span class="hljs-params">&lt;td&gt;</span><span class="hljs-number">8</span><span class="hljs-params">&lt;/td&gt;</span>
					<span class="hljs-params">&lt;td&gt;</span><span class="hljs-number">9</span><span class="hljs-params">&lt;/td&gt;</span>
				<span class="hljs-params">&lt;/tr&gt;</span>
			<span class="hljs-params">&lt;/tfoot&gt;</span>
		<span class="hljs-params">&lt;/table&gt;</span>
		</code></pre>
		<h3 id="obrasci">Obrasci</h3>
		<ul>
		<li><p>obrazac (forma)</p>
		<pre><code class="lang-HTML">&lt;<span class="hljs-keyword">form</span> action=<span class="hljs-string">""</span> method=<span class="hljs-string">"post"</span> enctype=<span class="hljs-string">"text/plain"</span> autocomplete=<span class="hljs-string">"on"</span>&gt;
			<span class="hljs-comment">// tu idu elementi obrasca</span>
		&lt;/<span class="hljs-keyword">form</span>&gt;
		</code></pre>
		</li>
		<li><p>primjeri elemenata obrasca</p>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"elID"</span>&gt;</span>tekst<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
					// tekst uz element s id-em elID
		<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span>&gt;</span>
					// jednoredni tekstualan unos
		<span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">name</span>=<span class="hljs-string">""</span> <span class="hljs-attr">id</span>=<span class="hljs-string">""</span> <span class="hljs-attr">cols</span>=<span class="hljs-string">"30"</span> <span class="hljs-attr">rows</span>=<span class="hljs-string">"10"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
					// višeredni tekstualni unos
		<span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">name</span>=<span class="hljs-string">""</span> <span class="hljs-attr">id</span>=<span class="hljs-string">""</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">option</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
					// padajući izbornik s opcijama
		<span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
					// gumb
		<span class="hljs-tag">&lt;<span class="hljs-name">datalist</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"elID"</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">""</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">""</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">datalist</span>&gt;</span>
					// lista opcija za tekstualan unos s id-em elID
		</code></pre>
		<div align="center">
		<img src="./media/htmlForm.jpg" alt="HTML obrazac" style="width:50%;">
		</div>

		</li>
		</ul>
		<h1 id="strukturiranje-sadr-aja-semanti-ki-elementi-">Strukturiranje sadržaja (semantički elementi)</h1>
		<ul>
		<li>podjela elemenata:<ul>
		<li>elementi bloka - div: <code>&lt;div&gt;&lt;/div&gt;</code> - sadržaj koji grupiramo isključivo za stiliziranje u css-u</li>
		<li>elementi reda - span: <code>&lt;span&gt;&lt;/span&gt;</code></li>
		</ul>
		</li>
		</ul>
		<div align="center">
				<img src="./media/htmlStruktura1.jpg" alt="HTML obrazac" style="height:200px;">
		</div>

		<ul>
		<li><p>semantički elementi:</p>
		<ul>
		<li><code>&lt;header&gt;&lt;/header&gt;</code> - header - uvodni sadržaj</li>
		<li><code>&lt;footer&gt;&lt;/footer&gt;</code> - footer - sadrži podatke o autorskim pravima, kontakt podatke, dodatne linkove i slično</li>
		<li><code>&lt;nav&gt;&lt;/nav&gt;</code> - nav - glavna navigacija</li>
		<li><code>&lt;main&gt;&lt;/main&gt;</code> - main - glavni sadržaj stranice</li>
		<li><code>&lt;section&gt;&lt;/section&gt;</code> - section - tematski grupiran sadržaj, u vezi s ostatkom sadržaja stranice</li>
		<li><code>&lt;article&gt;&lt;/article&gt;</code> - article - cjelina neovisnog samostalnog sadržaja</li>
		<li><code>&lt;aside&gt;&lt;/aside&gt;</code> - aside - sadržaj koji nije direktno povezan sa sadržajem koji ga okružuje</li>
		<li><code>&lt;figure&gt;&lt;/figure&gt;</code> - figure - ilustracija, dijagram, fotografija, kod kao zasebna cjelina</li>
		<li><code>&lt;address&gt;&lt;/address&gt;</code> - address - kontakt informacije</li>
		<li><code>&lt;details&gt;&lt;/details&gt;</code> - details - dodatni podaci (mogu se zatvoriti)</li>
		<li><code>&lt;summary&gt;&lt;/summary&gt;</code> - summary - vidljiv naslov za details</li>
		</ul>
		<div align="center">
			<img src="./media/htmlStruktura2.jpg" alt="HTML obrazac" style="height:200px;">
		</div>

		</li>
		</ul>
		<h3 id="temelji-pristupa-nosti-internetskih-stranica">Temelji pristupačnosti internetskih stranica</h3>
		<ul>
		<li>Pristupačnost web rješenja:<ul>
		<li>mogućnost da se web rješenje koristi prema potrebama i mogućnostima korisnika</li>
		</ul>
		</li>
		<li>Postiže se:<ul>
		<li>primjenom semantičkih HTML elemenata</li>
		<li>pravilnom definicijom HTML atributa (npr. &quot;alt&quot; kao zamjenski tekst za grafike, &quot;role&quot; za davanje značenja elementima, &quot;lang&quot; kao oznaka jezika sadržaja itd.)</li>
		<li>osiguranjem tekstualnog sadržaja kao alternative za ne-tekstualni sadržaj (npr. tekstualni transkript za audio sadržaj)</li>
		<li>omogućavanjem korisnicima da prilagode vlastito sučelje (veličinu znakova, boje itd.)</li>
		<li>više: <a href="https://www.w3.org/WAI/fundamentals/accessibility-principles/">https://www.w3.org/WAI/fundamentals/accessibility-principles/</a></li>
		</ul>
		</li>
		</ul>
		<h2 id="html-zadaci">HTML Zadaci</h2>
		<h3 id="zadatak">Zadatak</h3>
		<p>Na zadanom primjeru objasnite razliku između HTML oznake i atributa:</p>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">audio</span> <span class="hljs-attr">controls</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"glazba/jingl.mp3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">audio</span>&gt;</span>
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<ul>
		<li>HTML <strong>oznaka</strong> (audio) - Određuje tip HTML elementa te daje značenje njegovom sadržaju</li>
		<li>HTML <strong>atributi</strong> (controls, src) - pruža dodatne informacije o sadržaju HTML elementa</li>
		</ul>
		<h3 id="zadatak">Zadatak</h3>
		<p>Potrebno je HTML dokumentu dodijeliti metapodatak koji opisuje njegov sadržaj u formi sljedeće rečenice &quot;Službene stranice Učilišta Algebra&quot;. Što je potrebno napisati unutar <code>&lt;head&gt;</code> oznake HTML dokumenta kako bi se to postiglo?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-HTML">&lt;meta <span class="hljs-built_in">name</span>=<span class="hljs-string">"description"</span> content=<span class="hljs-string">"Službene stranice Učilišta Algebra"</span> /&gt;
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Potrebno je HTML dokumentu dodijeliti oznaku jezika sadržaja &quot;en&quot;. Koji atribut je potrebno dodijeliti elementu <html> kako bi se to postiglo?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Kod otvaranja HTML dokumenta u web pregledniku u njegovom zaglavlju ispisuje se naslov &quot;Učilište Algebra&quot;. Pomoću kojeg HTML elementa je naslov dokumenta postavljen?</p>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Učilište Algebra<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Zadan je sadržaj: <a href="https://example.com/movie.mp4">https://example.com/movie.mp4</a></p>
		<p>Pomoću HTML-a objavite video sadržaj s kontrolama za upravljanje reprodukcijom sadržaja. Video formi dodijelite dimenzije 600 x 400 px. (zadatak riješiti u dostupnom code editoru).</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-HTML">&lt;<span class="hljs-selector-tag">video</span> src=<span class="hljs-string">"https://example.com/movie.mp4"</span> controls <span class="hljs-attribute">width</span>=<span class="hljs-string">"600"</span> height=<span class="hljs-string">"400"</span>&gt;&lt;/video&gt;
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Zadan je sadržaj na sljedećoj relativnoj putanji:
		galerija/panorama-grada.jpg</p>
		<p>Pomoću HTML-a objavite grafiku te joj dodijelite dimenzije 720 x 500 px. Postavite zamjenski tekst &quot;Panorama grada&quot; (zadatak riješiti u dostupnom code editoru).</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-HTML">&lt;<span class="hljs-selector-tag">img</span> src=<span class="hljs-string">"galerija/panorama-grada.jpg"</span> alt=<span class="hljs-string">"Panorama grada"</span> <span class="hljs-attribute">width</span>=<span class="hljs-string">"720"</span> height=<span class="hljs-string">"500"</span> /&gt;
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Koji element koristimo za označavanje sadržaja koji predstavlja podnožje tijela stranice ili podnožje određene sekcije (sadrži autorska prava, kontakt podatke itd.)?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-HTML"><span class="hljs-section">&lt;footer&gt;</span><span class="hljs-section">&lt;/footer&gt;</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Koji element koristimo za označavanje sadržaja koji predstavlja cjelinu neovisnog (samostalnog) sadržaja u dokumentu?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-HTML"><span class="hljs-section">&lt;article&gt;</span><span class="hljs-section">&lt;/article&gt;</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Koji element koristimo za grupiranje sadržaja isključivo radi stiliziranja pomoću CSS-a (bez da mu damo značenje)?</p>
		<pre><code class="lang-HTML"><span class="hljs-section">&lt;div&gt;</span><span class="hljs-section">&lt;/div&gt;</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Koji element koristimo za tematsko grupiranje sadržaja?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-HTML"><span class="hljs-section">&lt;section&gt;</span><span class="hljs-section">&lt;/section&gt;</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što predstavlja pristupačnost web rješenja? Navedite nekoliko primjera kako se ona postiže.</p>
		<h4 id="rje-enje-">Rješenje:</h4>
		<ul>
		<li>Mogućnost da se web rješenje koristi prema potrebama i mogućnostima korisnika.</li>
		<li>Postiže se:<ul>
		<li>primjenom semantičkih HTML elemenata</li>
		<li>pravilnom definicijom HTML atributa (npr. &quot;alt&quot; kao zamjenski tekst za grafike, &quot;role&quot; za davanje značenja elementima, &quot;lang&quot; kao oznaka jezika sadržaja itd.)</li>
		<li>osiguranjem tekstualnog sadržaja kao alternative za ne-tekstualni sadržaj (npr. tekstualni transkript za audio sadržaj)</li>
		<li>omogućavanjem korisnicima da prilagode vlastito sučelje (veličinu znakova, boje itd.)</li>
		<li>više: <a href="https://www.w3.org/WAI/fundamentals/accessibility-principles/">https://www.w3.org/WAI/fundamentals/accessibility-principles/</a></li>
		</ul>
		</li>
		</ul>
		<h2 id="css-izgled-i-dizajn">CSS - izgled i dizajn</h2>
		<h3 id="-to-je-css">Što je CSS</h3>
		<ul>
		<li><strong>CSS - Cascading Style Sheets</strong><ul>
		<li>aktualna verzija: CSS3</li>
		</ul>
		</li>
		<li>računalni jezik koji koristimo za definiciju načina na koji će pojedini HTML elementi web stranice biti prikazani<ul>
		<li>izgled i format HTML elemenata web stranice</li>
		<li>dopunjuje HTML</li>
		<li>objavljen sadržaj dobiva skroman, unaprijed postavljen stil</li>
		<li>daljnje uređivanje vrši se CSS jezikom</li>
		</ul>
		</li>
		<li>omogućuje razdvajanje sadržaja dokumenta (definiranog HTML-om) od prezentacije (stila) dokumenta<ul>
		<li>pojednostavljuje te unaprjeđuje razvoj web stranica</li>
		</ul>
		</li>
		</ul>
		<h3 id="pravila-css-a">Pravila CSS-a</h3>
		<ul>
		<li>sintaksa:<ul>
		<li><code>selektor {deklaracijski blok}</code></li>
		<li><code>selektor { deklaracija; deklaracija }</code></li>
		<li><code>selektor { svojstvo : vrijednost; svojstvo : vrijednost; }</code></li>
		</ul>
		</li>
		<li><p>pr.:</p>
		<pre><code class="lang-CSS"><span class="hljs-selector-tag">p</span> { <span class="hljs-attribute">color</span>:blue; <span class="hljs-attribute">font-size</span>:<span class="hljs-number">16px</span>; }
		</code></pre>
		</li>
		</ul>
		<h3 id="kako-primijeniti-css-na-html-">Kako primijeniti CSS na HTML?</h3>
		<ol>
		<li><p>Linijski CSS</p>
		<ul>
		<li>unutar HTML oznaka -&gt; dodavanje atributa &quot;style&quot; HTML elementu<ul>
		<li>ne koriste se selektori</li>
		<li>ograničava primjenu CSS pravila samo na element u kojemu su napisana</li>
		<li>daje nepregledan kod</li>
		</ul>
		</li>
		<li><p>pr.:</p>
		<pre><code class="lang-CSS"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color:red;font-size:16px;"</span>&gt;</span>Odlomak teksta<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
		</code></pre>
		</li>
		</ul>
		</li>
		<li><p>Unutarnji CSS</p>
		<ul>
		<li><p>pisanje u zaglavlju HTML dokumenta, unutar elementa <code>&lt;style&gt;&lt;/style&gt;</code></p>
		<ul>
		<li>traži upotrebu selektora</li>
		<li>ograničava primjenu CSS pravila samo na HTML dokument u kojemu su napisana<ul>
		<li>uređivanje jedne web stranice na specifičan način</li>
		</ul>
		</li>
		<li><p>pr.:</p>
		<pre><code class="lang-CSS"><span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
		 <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
		 <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>HTML dokument<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
		 <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
			 <span class="hljs-selector-tag">p</span> {
				 <span class="hljs-attribute">color</span>: red;
				 <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;
			 }
		 </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
		...
		</code></pre>
		</li>
		</ul>
		</li>
		</ul>
		</li>
		<li><p>Vanjski CSS</p>
		<ul>
		<li>pisanje u zasebnoj vanjskoj datoteci<ul>
		<li>traži upotrebu selektora</li>
		<li>optimalna metoda pisanja CSS-a<ul>
		<li>omogućuje istovremeno uređivanje više HTML datoteka &rarr;  manje koda</li>
		<li>razdvajanje sadržaja dokumenta (definiranog HTML-om) od prezentacije dokumenta</li>
		<li>vanjska CSS datoteka se sprema u memoriji web preglednika &rarr; bolje performanse</li>
		<li>viša ocjena web rješenja kod indeksiranja od strane tražilica</li>
		</ul>
		</li>
		</ul>
		</li>
		<li><p>pr.:</p>
		<pre><code class="lang-CSS">...
		<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
		 <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>&gt;</span>
		 <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>HTML dokument<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
		 <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet“ href="</span><span class="hljs-attr">style.css</span>"&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
		...
		</code></pre>
		</li>
		</ul>
		</li>
		</ol>
		<h3 id="minifikacija-koda">Minifikacija koda</h3>
		<ul>
		<li>Prije objavljivanja web rješenja možemo minificirati CSS kod<ul>
		<li>s time ćemo smanjiti veličinu datoteke te ubrzati njeno preuzimanje sa poslužitelja</li>
		</ul>
		</li>
		<li><p>pr. prije:</p>
		<pre><code class="lang-CSS"><span class="hljs-selector-tag">body</span> {
			<span class="hljs-attribute">background-color</span>: azure;
			<span class="hljs-attribute">font-family</span>: Verdana, Geneva, Tahoma, sans-serif;
			<span class="hljs-attribute">font-size</span>: <span class="hljs-number">18px</span>;
			<span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
		}
		<span class="hljs-selector-id">#zaglavlje</span> <span class="hljs-selector-tag">img</span> {
			<span class="hljs-attribute">max-width</span>: <span class="hljs-number">100%</span>;
			<span class="hljs-attribute">height</span>: auto;
		}
		</code></pre>
		</li>
		<li><p>pr. poslije:</p>
		<pre><code class="lang-CSS"><span class="hljs-selector-tag">body</span>{<span class="hljs-attribute">background-color</span>:azure;<span class="hljs-attribute">font-family</span>:Verdana,Geneva,Tahoma,sans-
		serif;<span class="hljs-attribute">font-size</span>:<span class="hljs-number">18px</span>;<span class="hljs-attribute">color</span>:<span class="hljs-number">#333</span>}<span class="hljs-selector-id">#zaglavlje</span> <span class="hljs-selector-tag">img</span>{<span class="hljs-attribute">max-width</span>:<span class="hljs-number">100%</span>;<span class="hljs-attribute">height</span>:auto;}
		</code></pre>
		</li>
		</ul>
		<h3 id="selektori">Selektori</h3>
		<ul>
		<li>selektori određuju na koji će HTML element/e CSS pravilo biti primijenjeno<ul>
		<li>ne pišemo ih ako koristimo linijski zapis pravila - unutar HTML oznake</li>
		</ul>
		</li>
		<li>vrste selektora:<ul>
		<li>jednostavni selektori</li>
		<li>selektori atributa</li>
		<li>pseudoklase</li>
		<li>pseudo-elementi</li>
		<li>kontekstualni selektori</li>
		<li>grupni selektori</li>
		</ul>
		</li>
		<li><p>detaljan opis svih tipova selektora: <a href="https://www.w3schools.com/cssref/css_selectors.asp">https://www.w3schools.com/cssref/css_selectors.asp</a></p>
		</li>
		<li><p>Jednostavni selektori</p>
		<ul>
		<li><p>selektori HTML elemenata</p>
		<pre><code class="lang-CSS"><span class="hljs-selector-tag">h1</span> {
			 <span class="hljs-attribute">color</span>: red;
			 <span class="hljs-attribute">font-size</span>: <span class="hljs-number">32px</span>;
		}
		<span class="hljs-selector-tag">p</span> {
			 <span class="hljs-attribute">color</span>: blue;
			 <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;
		}
		<span class="hljs-selector-tag">ul</span> {
			 <span class="hljs-attribute">color</span>: green;
		}
		</code></pre>
		</li>
		<li><p>selektori atributa class (više elemenata mogu imati istu klasu)</p>
		<pre><code class="lang-CSS"><span class="hljs-selector-class">.stavka</span> {
			 <span class="hljs-attribute">color</span>: red;
		}
		</code></pre>
		</li>
		<li><p>selektori atributa id (ID jedinstven za element)</p>
		<pre><code class="lang-CSS"><span class="hljs-selector-id">#odlomak1</span> {
			 <span class="hljs-attribute">color</span>: red;
		}
		<span class="hljs-selector-id">#odlomak2</span> {
			 <span class="hljs-attribute">color</span>: green;
		}
		</code></pre>
		</li>
		</ul>
		</li>
		<li><p>Selektori atributa</p>
		<pre><code class="lang-CSS"> [attr]
		 [attr=val]
		 [attr~=val]
		 [attr^=val]
		 [attr|=val]
		 [attr$=val]
		 [attr*=val]
		</code></pre>
		</li>
		<li><p>Pseudoklase</p>
		<ul>
		<li><p>stil se dodjeljuje prema stanju ili poziciji elementa</p>
		<pre><code class="lang-CSS"><span class="hljs-symbol">:first-child</span>
		<span class="hljs-symbol">:last-child</span>
		<span class="hljs-symbol">:nth-child</span>()
		<span class="hljs-symbol">:first-of-type</span>
		<span class="hljs-symbol">:last-of-type</span>
		<span class="hljs-symbol">:nth-last-child</span>()
		</code></pre>
		</li>
		<li><p>poveznicama &rarr; omogućuju dodjeljivanje drugačijeg stila ovisno o njihovom stanju</p>
		<pre><code class="lang-CSS"><span class="hljs-symbol">:link</span>
		<span class="hljs-symbol">:visited</span>
		<span class="hljs-symbol">:hover</span>
		<span class="hljs-symbol">:focus</span>
		<span class="hljs-symbol">:active</span>
		</code></pre>
		</li>
		</ul>
		</li>
		<li><p>Pseudoelementi</p>
		<ul>
		<li>omogućuju postavljanje sadržaja iza ili ispred sadržaja elementa</li>
		<li><p>omogućuju uređivanje dijela sadržaja elementa</p>
		<pre><code class="lang-CSS"><span class="hljs-symbol">:</span><span class="hljs-symbol">:after</span>
		<span class="hljs-symbol">:</span><span class="hljs-symbol">:before</span>
		<span class="hljs-symbol">:</span><span class="hljs-symbol">:first-letter</span>
		<span class="hljs-symbol">:</span><span class="hljs-symbol">:first-line</span>
		<span class="hljs-symbol">:</span><span class="hljs-symbol">:selection</span>
		<span class="hljs-symbol">:</span><span class="hljs-symbol">:marker</span>
		</code></pre>
		</li>
		</ul>
		</li>
		<li><p>Kontekstualni selektori (Combinators)</p>
		<ul>
		<li>omogućuju dohvaćanje željenog elementa s obzirom na kontekst u kojem se nalazi<ul>
		<li>stil se dodjeljuje elementima s obzirom na njihovu poziciju unutar HTML koda</li>
		</ul>
		</li>
		<li>mogu uključiti sve tipove selektora</li>
		<li><p>primjeri - stil se dodjeljuje:</p>
		<pre><code class="lang-CSS"><span class="hljs-keyword">div</span> p <span class="hljs-meta">{...}</span>                         /* elementu p unutar elementa <span class="hljs-keyword">div</span> */
		<span class="hljs-keyword">div</span> &gt; p <span class="hljs-meta">{...}</span>                      /* elementu p kojemu je roditelj element <span class="hljs-keyword">div</span> */
		<span class="hljs-comment">#sadrzaj &gt; p a {...}         /* elementu a unutar elementa p kojemu je roditelj element s id-om sadrzaj*/</span>
		<span class="hljs-keyword">div</span> + p <span class="hljs-meta">{...}</span>                      /* svakom elementu p koji je smješten odmah iza elementa <span class="hljs-keyword">div</span> unutar istog roditelja */
		<span class="hljs-keyword">div</span> ~ p <span class="hljs-meta">{...}</span>                      /* svakom elementu p koji je smješten iza elementa <span class="hljs-keyword">div</span> unutar istog roditelja */
		</code></pre>
		</li>
		</ul>
		</li>
		<li><p>Grupiranje selektora</p>
		<ul>
		<li><p>pr.:</p>
		<pre><code class="lang-CSS">p, a, table<span class="hljs-meta">{...}</span>
		p, .element1, <span class="hljs-comment">#odlomak1{...}</span>
		[title], a[target=<span class="hljs-string">"_blank"</span>]<span class="hljs-meta">{...}</span>
		<span class="hljs-keyword">div</span> a, header a<span class="hljs-meta">{...}</span>
		...
		</code></pre>
		</li>
		</ul>
		</li>
		</ul>
		<h3 id="css-varijable">CSS varijable</h3>
		<ul>
		<li><p>Spremnik za vrijednost koja se može više puta iskoristiti unutar dokumenta</p>
		<ul>
		<li>naziv joj započinje sa znakom <code>&quot;--&quot;</code></li>
		<li>pristupa joj se preko funkcije <code>var()</code></li>
		<li><p>pr.:</p>
		<pre><code class="lang-CSS"><span class="hljs-selector-pseudo">:root</span> {
			 <span class="hljs-attribute">--blue</span>: <span class="hljs-number">#1e90ff</span>;
			 <span class="hljs-attribute">--white</span>: <span class="hljs-number">#ffffff</span>;
		}
		<span class="hljs-selector-tag">body</span> {
			 <span class="hljs-attribute">background-color</span>: <span class="hljs-built_in">var</span>(--blue);
		}
		</code></pre>
		</li>
		</ul>
		</li>
		</ul>
		<h3 id="ure-ivanje-fonta-znakova">Uređivanje fonta znakova</h3>
		<ul>
		<li>za uređivanje fonta znakova koristimo sljedeća svojstva:<ul>
		<li><code>font-family</code> &rarr; Određivanje obitelji fonta znakova - određuje stilska svojstva znakova.</li>
		<li><code>@font-face</code>  &rarr; Moguće je koristit fontove koji nisu instalirani na računalima korisnika.</li>
		<li><code>font-size</code> &rarr; Veličina znakova.</li>
		<li><code>font-style</code> &rarr; Prikaz nakošenih ili kurzivnih znakova.</li>
		<li><code>font-weight</code> &rarr; Debljina znakova.</li>
		<li><code>font-variant</code> &rarr; Veliki znakovi manjeg formata.</li>
		<li><code>line-height</code> &rarr; Visina linije znakova.</li>
		<li><strong><em>Kraći zapis</em></strong> &rarr; <code>font: font-style font-variant font-weight font-size/line-height font-family;</code></li>
		</ul>
		</li>
		</ul>
		<h3 id="ure-ivanje-teksta">Uređivanje teksta</h3>
		<ul>
		<li>za uređivanje teksta koristimo sljedeća svojstva::<ul>
		<li><code>color</code> &rarr; Boja znakova.</li>
		<li><code>text-align</code> &rarr; Poravnanje sadržaja unutar elementa (znakovi i pod elementi reda).</li>
		<li><code>text-decoration</code> &rarr; Dekoriranje znakova.</li>
		<li><code>text-transform</code> &rarr; Prikaz slovnih znakova u velikom ili malom formatu.</li>
		<li><code>text-shadow</code> &rarr; Primjena sjene nad znakovima - moguće postaviti više sjena.</li>
		<li><code>text-indent</code> &rarr; Uvlačenje prve linije znakova.</li>
		<li><code>word-spacing</code> &rarr; Razmak između riječi.</li>
		<li><code>letter-spacing</code> &rarr; Razmak između znakova.</li>
		<li><code>vertical-align</code> &rarr; Vertikalno poravnanje pod elementa reda.</li>
		<li><code>word-wrap</code> &rarr; Prijelom riječi koje ne stanu u jedan red.</li>
		</ul>
		</li>
		</ul>
		<h3 id="ure-ivanje-pozadine">Uređivanje pozadine</h3>
		<ul>
		<li>za uređivanje pozadine elemenata, koristimo sljedeća svojstva:<ul>
		<li><code>background-color</code> &rarr; Pozadinska boja.</li>
		<li><code>background-image</code> &rarr; Pozadinska slika (jedna ili više) te gradijent (linearni, radijalni i konusni).</li>
		<li><code>background-repeat</code> &rarr; Način ponavljanja pozadinske slike.</li>
		<li><code>background-attachment</code> &rarr; Da li je pozadinska slika fiksirana ili se pomiče s ostatkom sadržaja.</li>
		<li><code>background-position</code> &rarr; Pozicija pozadinske slike.</li>
		<li><code>background-size</code> &rarr; Veličina pozadinske slike.</li>
		<li><strong>kraći zapis</strong> &rarr; <code>background: bg-image1 bg-repeat1 position1/bg-size1 bg-attachment1, bg-color bg-image2 bg-repeat2 position2/bg-size2 bg-attachment2;</code></li>
		</ul>
		</li>
		</ul>
		<h3 id="box-model">BOX model</h3>
		<ul>
		<li>prikazuje strukturu HTML elementa</li>
		<li>HTML element može sadržavati:<ul>
		<li>sadržaj<ul>
		<li>tekst, slika ili drugi oblik sadržaja</li>
		</ul>
		</li>
		<li>ispunu<ul>
		<li>područje oko sadržaja, preuzima pozadinu elementa kojemu pripada</li>
		</ul>
		</li>
		<li>okvir<ul>
		<li>uokviruje ispunu i sadržaj</li>
		</ul>
		</li>
		<li>marginu<ul>
		<li>prazno područje oko okvira</li>
		<li>transparentna &mdash; na nju ne utječe pozadina elementa kojemu pripada</li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>
		<h3 id="pode-avanje-dimenzija-elementa">Podešavanje dimenzija elementa</h3>
		<ul>
		<li>za postavljanje dimenzija elementa koristimo sljedeća svojstva:<ul>
		<li><code>width</code> &mdash; Širina područja sadržaja elementa.</li>
		<li><code>height</code> &mdash;  Visina područja sadržaja elementa.</li>
		<li><code>max-width / max-height</code> &mdash; Maksimalna širina / visina područja sadržaja elementa.</li>
		<li><code>min-width / min-height</code> &mdash; Minimalna širina / visina područja sadržaja elementa.</li>
		<li><code>box-sizing</code> &mdash; Promjena zadanog načina računanja dimenzija elementa.</li>
		</ul>
		</li>
		</ul>
		<h3 id="pode-avanje-ispune-okvira-i-margine">Podešavanje ispune, okvira i margine</h3>
		<ul>
		<li>za postavljanje ispune, okvira i margine koristimo sljedeća svojstva:<ul>
		<li><code>padding</code> &mdash; Dimenzije ispune.</li>
		<li><code>padding-[top, right, bottom, left]</code> &mdash; Dimenzije pojedinih strana ispune.</li>
		<li><code>border-width</code> &mdash; Debljina okvira.</li>
		<li><code>border-style</code> &mdash; Stil okvira.</li>
		<li><code>border-color</code> &mdash; Boja okvira.</li>
		<li><code>border-[top-, right-, bottom-, left-]</code> &mdash; Podešavanje pojedinih strana okvira.</li>
		<li><code>margin</code> &mdash; Dimenzije margine.</li>
		<li><code>margin-[top, right, bottom, left]</code> &mdash; Dimenzije pojedinih strana margine.</li>
		</ul>
		</li>
		</ul>
		<h3 id="kako-su-elementi-prikazani">Kako su elementi prikazani</h3>
		<ul>
		<li><p>dvije osnovne skupine HTML elemenata:</p>
		<ul>
		<li>blok elementi<ul>
		<li>zauzima cijelu dostupnu širinu roditelja &mdash; može se utjecati na širinu i visinu</li>
		<li>iza i ispred elementa slijedi novi red</li>
		<li>moguće je utjecati na sve strane ispune i margine</li>
		</ul>
		</li>
		<li><p>elementi reda</p>
		<ul>
		<li>zauzima samo potrebnu širinu za prikaz sadržaja &mdash; ne može se utjecati na širinu i visinu<ul>
		<li>postoje iznimke &rarr;  img, video ...</li>
		</ul>
		</li>
		<li>moguće je postaviti druge elemente reda u isti red</li>
		<li>ne mogu sadržavati pod elemente iz grupe blok</li>
		<li><p>moguće je utjecati samo na lijevu i desnu stranu ispune i margine</p>
		<ul>
		<li><p>gornja i donja ispuna se mogu postaviti (pozadina i okvir okolo), ali neće utjecati na pozicije susjednih elemenata</p>
		<p><img src="./media/element-reda.png" alt="Element reda" style="width:50%;"/></p>
		</li>
		<li><p>postoje iznimke &rarr;  img, video ...</p>
		</li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>
		<h3 id="kako-su-elementi-prikazani">Kako su elementi prikazani</h3>
		<ul>
		<li><p>promjena načina kako su HTML elementi prikazani:</p>
		<ul>
		<li><p><code>display</code> &rarr; Način prikazivanja elementa (promjena grupe kojoj pripada)</p>
		<ul>
		<li><p>moguće vrijednosti: <code>inline</code> / <code>block</code> / <code>inline-block</code> / <code>flex</code> / <code>grid</code> / <code>none</code> / <code>...</code></p>
		<p><img src="./media/display1.png" alt="display: block, inline, inline-block" style="height:100px;">
		<img src="./media/display2.png" alt="display: flexbox, grid" style="height:100px;"></p>
		</li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>
		<h3 id="ure-ivanje-elemenata-mdash-dodatna-svojstva">Uređivanje elemenata &mdash; dodatna svojstva</h3>
		<ul>
		<li>dodatna svojstva:<ul>
		<li><code>border-radius</code> / <code>border-top-left-radius</code> /  <code>border-top-right-radius</code> / <code>border-bottom-right-radius</code> / <code>border-bottom-left-radius</code> &mdash; postavljanje zaobljenih kuteva</li>
		<li><code>box-shadow</code> &mdash; Postavljanje sjene elementu &mdash;  moguće postaviti više sjena.</li>
		<li><code>overflow</code> &mdash; Ponašanje elementa ako sadržaj prekoračuje njegove dimenzije.</li>
		<li><code>clip-path</code> &mdash; Isječak vidljivog dijela elementa.</li>
		<li><code>opacity</code> &mdash; Definiranje transparentnosti elementa</li>
		<li><code>resize</code> &mdash; Omogućuje promjenu dimenzije elementa od strane korisnika.</li>
		</ul>
		</li>
		</ul>
		<h3 id="metode-pozicioniranje-elemenata">Metode pozicioniranje elemenata</h3>
		<ul>
		<li><p>metode pozicioniranja:</p>
		<ul>
		<li><code>static</code> &mdash; statično pozicioniranje (unaprijed zadano, pomaci nemaju efekta)</li>
		<li><code>relative</code> &mdash; relativno pozicioniranje</li>
		<li><code>absolute</code> &mdash; apsolutno pozicioniranje</li>
		<li><code>fixed</code> &mdash; fiksno pozicioniranje</li>
		<li><code>sticky</code> &mdash; ljepljivo pozicioniranje (relative + fixed)</li>
		</ul>
		</li>
		<li><p>metodu pozicioniranja postavljamo svojstvom position:</p>
		<ul>
		<li><p>pr.:</p>
		<pre><code class="lang-CSS"><span class="hljs-selector-tag">header</span> {<span class="hljs-attribute">position</span>: fixed;}
		</code></pre>
		</li>
		</ul>
		</li>
		<li><p>nakon postavljanja metode, elementi se pozicioniraju sljedećim
		svojstvima</p>
		<ul>
		<li>horizontalni pomak (px, %, ...)<ul>
		<li><code>left</code></li>
		<li><code>right</code></li>
		</ul>
		</li>
		<li>vertikalni pomak (px, %, ...)<ul>
		<li><code>top</code></li>
		<li><code>bottom</code></li>
		</ul>
		</li>
		<li>preklapanje – jedan iza drugog (-10, -1, 0, 1, 10, ...)<ul>
		<li><code>z-index</code></li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>
		<h3 id="izrada-layout-a-flexible-box-layout">Izrada layout-a: Flexible Box Layout</h3>
		<div align="center">
			<img src="./media/flexbox1.png" alt="display: flexbox skica" style="width:80%;">
		</div>

		<ul>
		<li><p>pr.:</p>
		<pre><code class="lang-CSS">&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"flex-container"</span>&gt;
			&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"flex-item"</span>&gt;<span class="hljs-number">1</span>&lt;/<span class="hljs-keyword">div</span>&gt;
			&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"flex-item"</span>&gt;<span class="hljs-number">2</span>&lt;/<span class="hljs-keyword">div</span>&gt;
			&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"flex-item"</span>&gt;<span class="hljs-number">3</span>&lt;/<span class="hljs-keyword">div</span>&gt;
			&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"flex-item"</span>&gt;<span class="hljs-number">4</span>&lt;/<span class="hljs-keyword">div</span>&gt;
			&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"flex-item"</span>&gt;<span class="hljs-number">5</span>&lt;/<span class="hljs-keyword">div</span>&gt;
			&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"flex-item"</span>&gt;<span class="hljs-number">6</span>&lt;/<span class="hljs-keyword">div</span>&gt;
			&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"flex-item"</span>&gt;<span class="hljs-number">7</span>&lt;/<span class="hljs-keyword">div</span>&gt;
			&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"flex-item"</span>&gt;<span class="hljs-number">8</span>&lt;/<span class="hljs-keyword">div</span>&gt;
		&lt;/<span class="hljs-keyword">div</span>&gt;
		...
		.flex-container {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			justify-content: <span class="hljs-literal">space</span>-<span class="hljs-keyword">between</span>;
			align-content: <span class="hljs-literal">space</span>-<span class="hljs-keyword">between</span>;
			height: <span class="hljs-number">600</span>px;
		}
		.flex-<span class="hljs-built_in">item</span> {
			flex-basis: <span class="hljs-number">32</span>%;
			width: <span class="hljs-number">24</span>%;
		}
		.flex-<span class="hljs-built_in">item</span>:nth-child(<span class="hljs-number">4</span>n + <span class="hljs-number">1</span>) {
			flex-basis: <span class="hljs-number">100</span>%;
		}
		</code></pre>
		<div align="center">
			<img src="./media/flexbox2.png" alt="display: flexbox primjer" style="width:80%;">
		</div>

		</li>
		</ul>
		<h3 id="css-transformacije">CSS transformacije</h3>
		<ul>
		<li>omogućuju promjenu oblika, pozicije i veličine HTML elementa</li>
		<li>definicija:<ul>
		<li><code>transform: metoda();</code></li>
		<li><code>transform: metoda1() metoda2() ...;</code></li>
		</ul>
		</li>
		<li>postoje:<ul>
		<li>2D transformacije</li>
		<li>3D transformacije</li>
		</ul>
		</li>
		<li><p>Primjeri metoda transformacija:</p>
		<ul>
		<li><code>translate(x,y)</code> &mdash; Element se pomiče po x i y osi (px, %, ...).</li>
		<li><code>rotate(deg)</code> &mdash; Element se rotira (deg) – 2D rotacija.</li>
		<li><code>scale(x,y)</code> &mdash; Element se skalira u zadanom omjeru.</li>
		<li><code>skew(deg)</code> &mdash; Element se iskrivljava po x i y osi (deg).</li>
		<li><code>rotatex(deg)</code> &mdash; Element se rotira oko x osi (deg) &mdash; 3D rotacija.</li>
		<li><code>rotatey(deg)</code> &mdash; Element se rotira oko y osi (deg) &mdash; 3D rotacija.<ul>
		<li><strong>napomena</strong>: deg &rarr; stupnjevi</li>
		</ul>
		</li>
		<li><p>pr.:</p>
		<pre><code class="lang-CSS"><span class="hljs-selector-tag">div</span> {
		<span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(50px, 100px);
		}
		</code></pre>
		<p><img src="./media/transform.png" alt="transform: translate();" style="height:100px;"></p>
		</li>
		</ul>
		</li>
		</ul>
		<h3 id="css-tranzicije">CSS tranzicije</h3>
		<ul>
		<li>omogućuje prijelaz elementa iz jednog stila u drugi, koji se odvija postepeno u zadanom vremenskom trajanju</li>
		<li>prijelaz se aktivira:<ul>
		<li>pomoću pseudo klase<ul>
		<li><code>:hover</code> &rarr; promjena stila kada pokazivač miša prijeđe preko elementa</li>
		<li><code>:focus</code> &rarr; promjena stila kada element dobije fokus</li>
		</ul>
		</li>
		<li>pomoću skripte (JavaScript)</li>
		</ul>
		</li>
		<li>definicija (svojstva):<ul>
		<li><code>transition-property</code> &mdash; Svojstva nad kojima se primjenjuje tranzicija.</li>
		<li><code>transition-duration</code> &mdash; Vrijeme koliko dugo tranzicija traje (ms ili s).</li>
		<li><code>transition-timing-function</code> &mdash; Određuje krivulju brzine tranzicije.</li>
		<li><code>transition-delay</code> &mdash; Odgoda početka tranzicije (ms ili s).</li>
		<li><strong>Kraći zapis</strong>: <code>transition: property duration timing-function delay;</code></li>
		</ul>
		</li>
		<li><p>pr.:</p>
		<pre><code class="lang-CSS"> <span class="hljs-selector-tag">div</span> {
			 <span class="hljs-attribute">transition</span>: background <span class="hljs-number">1s</span> ease-in-out, transform <span class="hljs-number">0.5s</span> linear;
		 }
		 <span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:hover</span> {
			 <span class="hljs-attribute">background</span>: red;
			 <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">scale</span>(1.2, 2) <span class="hljs-built_in">skew</span>(10deg, 5deg);
		 }
		</code></pre>
		<p> <div align="center">
			 <img src="./media/transition1.png" alt="transform: translate();" style="width:50%;">
			 <img src="./media/transition2.png" alt="transform: translate();" style="width:50%;">
		 </div veličine i boje, one ne moraju biti u potpunosti točne></p>
		</li>
		</ul>
		<h3 id="css-animacije">CSS animacije</h3>
		<ul>
		<li>više povezanih tranzicija</li>
		<li>omogućuju da se stil HTML elementa postepeno mijenja iz
		jednog u drugi</li>
		<li>CSS animacije se definiraju u dva osnovna koraka:<ol>
		<li>pravilo <code>@keyframes</code> &rarr; definira samu animaciju, njezine ključne kadrove i svojstva koja se animiraju</li>
		<li>svojstvo <code>animation</code> &rarr; dodjeljuje animaciju određenom elementu i definira kako je animiran</li>
		</ol>
		</li>
		<li><p>svojstvoa animation:</p>
		<ul>
		<li><code>animation-name</code> &mdash; Naziv animacije.</li>
		<li><code>animation-duration</code> &mdash; Vrijeme trajanja ciklusa animacije (ms ili s).</li>
		<li><code>animation-timing-function</code> &mdash; Određuje krivulju brzine animacije.</li>
		<li><code>animation-delay</code> &mdash; Odgoda početka animacije (ms ili s).</li>
		<li><code>animation-iteration-count</code> &mdash; Broj koliko puta će se animacija izvršiti (infinite: neograničeno).</li>
		<li><code>animation-direction</code> &mdash; Smjer izvršavanja animacije.</li>
		<li><code>animation-fill-mode</code> &mdash; Određuje stil elementa u vremenu kada je animacija zaustavljena.</li>
		<li><code>animation-play-state</code> &mdash; Određuje da li se animacija izvršava.</li>
		<li><strong>Kraći zapis</strong> &rarr; <code>animation: name duration timing-function delay iteration-count direction fill-mode play-state;</code></li>
		</ul>
		</li>
		<li><p>pr.:</p>
		<pre><code class="lang-CSS">@<span class="hljs-keyword">keyframes</span> animacija1 {
			0% {
				<span class="hljs-attribute">top</span>: <span class="hljs-number">0px</span>;
				<span class="hljs-attribute">left</span>: <span class="hljs-number">0px</span>;
				<span class="hljs-attribute">background</span>: red;
			}
			50% {
				<span class="hljs-attribute">top</span>: <span class="hljs-number">100px</span>;
				<span class="hljs-attribute">left</span>: <span class="hljs-number">100px</span>;
				<span class="hljs-attribute">background</span>: yellow;
			}
			100% {
				<span class="hljs-attribute">top</span>: <span class="hljs-number">0px</span>;
				<span class="hljs-attribute">left</span>: <span class="hljs-number">0px</span>;
				<span class="hljs-attribute">background</span>: red;
			}
		}

			...

		<span class="hljs-selector-tag">div</span> {
			<span class="hljs-attribute">animation</span>: animacija1 <span class="hljs-number">5s</span> linear <span class="hljs-number">2s</span> infinite alternate;
		}
		</code></pre>
		</li>
		</ul>
		<h3 id="responzivni-web-dizajn">Responzivni web dizajn</h3>
		<ul>
		<li>Responzivni dizajn predstavlja standard suvremenog web razvoja</li>
		<li>Web rješenje je responzivno:<ul>
		<li>kada se prilagođava karakteristikama uređaja na kojemu se pregledava<ul>
		<li>najčešće veličini ekrana uređaja</li>
		</ul>
		</li>
		<li>kada omogućava dobro korisničko iskustvo, bez obzira na uređaj koji se koristi za njegovo pregledavanje</li>
		<li>kada se samo automatski prilagodi karakteristikama uređaja<ul>
		<li>izrađuje se samo jedna verzija web rješenja, što omogućava njegovo jednostavno održavanje i optimizaciju radu tražilica (SEO)</li>
		</ul>
		</li>
		</ul>
		</li>
		<li><p>Viewport:</p>
		<ul>
		<li>korisniku vidljivo područje web stranice &mdash; ovisi o karakteristikama uređaja na kojemu se stranica pregledava<ul>
		<li>jednako veličini prostora prozora web preglednika unutar kojeg se pregledava web stranica</li>
		</ul>
		</li>
		<li><p>HTML5 je omogućio kontrolu nad vidljivim područjem upotrebom <meta> elementa:</p>
		<ul>
		<li>daje uputu web pregledniku kako da kontrolira dimenzije web stranice i njeno skaliranje</li>
		</ul>
		<pre><code class="lang-CSS">&lt;meta <span class="hljs-built_in">name</span>=<span class="hljs-string">"viewport"</span> content=<span class="hljs-string">"width=device-width, initial-scale=1.0"</span> /&gt;
		</code></pre>
		<ul>
		<li><code>width</code> &mdash; Širina sučelja je jednaka širini zaslona uređaja</li>
		<li><code>initial-scale</code> &mdash; Početna razina zumiranja stranice kod njenog učitavanja u web preglednik</li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>
		<h3 id="media-queries">Media Queries</h3>
		<ul>
		<li>Media Query:<ul>
		<li>pomoću <code>@media</code> upita određeni CSS blok se uzima u obzir samo kod ispunjenja zadanog uvjeta<ul>
		<li>omogućuje primjenu drugačijih stilova stranice na uređajima različitih karakteristika</li>
		</ul>
		</li>
		<li>uvjet za primjenu definiranog stila može biti:<ul>
		<li>tip medija</li>
		<li>širina i visina vidljivog područja stranice (viewport)</li>
		<li>širina i visina zaslona uređaja</li>
		<li>orijentacija (portret ili pejzaž)</li>
		<li>rezolucija</li>
		<li>...</li>
		</ul>
		</li>
		</ul>
		</li>
		<li><p>primjena određenog CSS bloka samo ako je zadovoljeni zadani uvjet:</p>
		<pre><code class="lang-CSS">@<span class="hljs-keyword">media</span> not|only mediatype and (<span class="hljs-keyword">media</span> feature) and|, (<span class="hljs-keyword">media</span> feature) {
			<span class="hljs-selector-class">.my-code</span> { ... }
		}
		@<span class="hljs-keyword">media</span> (<span class="hljs-keyword">media</span> feature) {
			<span class="hljs-selector-class">.my-code</span> { ... }
		}
		</code></pre>
		</li>
		<li><p>primjena cijele vanjske CSS datoteke samo ako je zadovoljeni zadani uvjet:</p>
		<pre><code class="lang-CSS"><span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">media</span>=<span class="hljs-string">"mediatype and (media feature)"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"style.css"</span> /&gt;</span>
		</code></pre>
		</li>
		</ul>
		<h3 id="predprocesori">Predprocesori</h3>
		<ul>
		<li>Predprocesori<ul>
		<li>skriptni jezici koji proširuju zadane mogućnosti CSS-a</li>
		<li>omogućuju upotrebu logike, varijabli, ugnježđivanja, nasljeđivanja, funkcija te matematičkih operacija</li>
		<li>automatiziraju ponavljajuće zadatke, smanjuju broj pogrešaka, stvaraju dijelove koda za višekratnu upotrebu te osiguravaju kompatibilnost sa starijim verzijama web preglednika</li>
		<li>najpopularniji: <em>Sass</em>, <em>Less</em> i <em>Stylus</em></li>
		</ul>
		</li>
		<li>Ulazni kôd &rarr; compiler &rarr; CSS</li>
		<li><p>Varijable</p>
		<pre><code class="lang-SCSS">  <span class="hljs-variable">$red</span>: <span class="hljs-number">#833</span>;
			<span class="hljs-selector-tag">body</span> {
			 <span class="hljs-attribute">color</span>: <span class="hljs-variable">$red</span>;
			}
		</code></pre>
		</li>
		<li><p>Nesting</p>
		<pre><code class="lang-SCSS"><span class="hljs-selector-class">.markdown-body</span> {
			<span class="hljs-selector-tag">p</span> {
				<span class="hljs-attribute">color</span>: blue;
			}
		}
			&amp;:hover {
					<span class="hljs-attribute">color</span>: red;
			}
		}
		</code></pre>
		</li>
		<li><p>Extend</p>
		<pre><code class="lang-SCSS">.<span class="hljs-keyword">button</span> {
			...
		}
		.push-<span class="hljs-keyword">button</span> {
			@extend .<span class="hljs-keyword">button</span>;
		}
		</code></pre>
		</li>
		<li><p>Composing</p>
		<pre><code class="lang-SCSS">@<span class="hljs-keyword">import</span> <span class="hljs-string">'./other_sass_file'</span>;
		</code></pre>
		</li>
		<li><p>Mixins</p>
		<pre><code class="lang-SCSS">@<span class="hljs-keyword">mixin</span> heading-font {
			<span class="hljs-attribute">font-family</span>: sans-serif;
			<span class="hljs-attribute">font-weight</span>: bold;
		}
		<span class="hljs-selector-tag">h1</span> {
			@<span class="hljs-keyword">include</span> heading-font;
		}

		@<span class="hljs-keyword">mixin</span> font-size(<span class="hljs-variable">$n</span>) {
			<span class="hljs-attribute">font-size</span>: <span class="hljs-variable">$n</span> * <span class="hljs-number">1.2em</span>;
		}
		<span class="hljs-selector-tag">body</span> {
			@<span class="hljs-keyword">include</span> font-size(<span class="hljs-number">2</span>);
		}

		@<span class="hljs-keyword">mixin</span> pad(<span class="hljs-variable">$n</span>: 10px) {
			<span class="hljs-attribute">padding</span>: <span class="hljs-variable">$n</span>;
		}

		<span class="hljs-selector-tag">body</span> {
			@<span class="hljs-keyword">include</span> pad(<span class="hljs-number">15px</span>);
		}
		</code></pre>
		</li>
		<li><p>For loops</p>
		<pre><code class="lang-SCSS">@<span class="hljs-keyword">for</span> <span class="hljs-variable">$i</span> from 1 through 4 {
			<span class="hljs-selector-class">.item-</span>#{<span class="hljs-variable">$i</span>} { <span class="hljs-attribute">left</span>: <span class="hljs-number">20px</span> * <span class="hljs-variable">$i</span>; }
		}

		@<span class="hljs-keyword">mixin</span> pad(<span class="hljs-variable">$n</span>: 10px) {
			<span class="hljs-attribute">padding</span>: <span class="hljs-variable">$n</span>;
		}

		<span class="hljs-selector-tag">body</span> {
			@<span class="hljs-keyword">include</span> pad(<span class="hljs-number">15px</span>);
		}
		</code></pre>
		</li>
		<li><p>Each loops</p>
		<pre><code class="lang-SCSS"><span class="hljs-variable">$menu-items</span>: home about services contact;

		@<span class="hljs-keyword">each</span> <span class="hljs-variable">$item</span> in <span class="hljs-variable">$menu-items</span> {
			<span class="hljs-selector-class">.photo-</span>#{<span class="hljs-variable">$item</span>} {
				<span class="hljs-attribute">background</span>: url(<span class="hljs-string">'images/#{$item}.jpg'</span>);
			}
		}
		</code></pre>
		</li>
		<li><p>Conditionals</p>
		<pre><code class="lang-SCSS"><span class="hljs-variable">@if</span> $position == <span class="hljs-string">'left'</span> {
			<span class="hljs-attribute">position</span>: absolute;
			<span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;
		} <span class="hljs-variable">@else</span> {
			<span class="hljs-attribute">position</span>: static;
		}
		</code></pre>
		</li>
		<li><p>Maps</p>
		<pre><code class="lang-SCSS">$<span class="hljs-built_in">map</span>: (key1: value1, key2: value2, key3: value3);
		<span class="hljs-built_in">map</span>-<span class="hljs-built_in">get</span>($<span class="hljs-built_in">map</span>, key1)
		</code></pre>
		<h2 id="css-zadaci">CSS Zadaci</h2>
		</li>
		</ul>
		<h3 id="zadatak">Zadatak</h3>
		<p>Nadopunite isječak koda tako da elementu dodijelite crvenu boju znakova preko linijskog zapisa.</p>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Lorem ipsum dolor<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: red;"</span>&gt;</span>Lorem ipsum dolor<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Nadopunite isječak koda tako da u zaglavlju HTML dokumenta dohvatite vanjsku CSS datoteku sa sljedeće lokacije: css/style.css</p>
		<pre><code class="lang-HTML"><span class="hljs-section">&lt;head&gt;</span>
		<span class="hljs-section">&lt;/head&gt;</span>
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-HTML"><span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"css/style.css"</span> /&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve HTML elemente koji sadrže atribut title s točnom vrijednošću &quot;Učilište Algebra&quot;.</p>
		<pre><code class="lang-CSS">{
			<span class="hljs-attribute">display</span>: inline-block;
			<span class="hljs-attribute">padding</span>: <span class="hljs-number">2em</span>;
			<span class="hljs-attribute">color</span>: <span class="hljs-number">#eee</span>;
			<span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
		}
		</code></pre>
		<h4 id="rje-enje-">Rješenje:</h4>
		<pre><code class="lang-CSS"><span class="hljs-selector-attr">[title="Učilište Algebra"]</span> {
			<span class="hljs-attribute">display</span>: inline-block;
			<span class="hljs-attribute">padding</span>: <span class="hljs-number">2em</span>;
			<span class="hljs-attribute">color</span>: <span class="hljs-number">#eee</span>;
			<span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve HTML elemente koji sadrže atribut title u čijoj vrijednosti se bilo gdje nalazi izraz &quot;Algebra&quot;.</p>
		<pre><code class="lang-CSS">{
			<span class="hljs-attribute">display</span>: inline-block;
			<span class="hljs-attribute">padding</span>: <span class="hljs-number">2em</span>;
			<span class="hljs-attribute">color</span>: <span class="hljs-number">#eee</span>;
			<span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
		}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-CSS"><span class="hljs-selector-attr">[title*="Algebra"]</span> {
			<span class="hljs-attribute">display</span>: inline-block;
			<span class="hljs-attribute">padding</span>: <span class="hljs-number">2em</span>;
			<span class="hljs-attribute">color</span>: <span class="hljs-number">#eee</span>;
			<span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve HTML elemente koji sadrže atribut title na početku čije vrijednosti se nalazi izraz &quot;Algebra&quot;.</p>
		<pre><code class="lang-CSS">{
			<span class="hljs-attribute">display</span>: inline-block;
			<span class="hljs-attribute">padding</span>: <span class="hljs-number">2em</span>;
			<span class="hljs-attribute">color</span>: <span class="hljs-number">#eee</span>;
			<span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
		}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-CSS"><span class="hljs-selector-attr">[title^="Algebra"]</span> {
			<span class="hljs-attribute">display</span>: inline-block;
			<span class="hljs-attribute">padding</span>: <span class="hljs-number">2em</span>;
			<span class="hljs-attribute">color</span>: <span class="hljs-number">#eee</span>;
			<span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve posjećene poveznice <code>&lt;a&gt;</code> (one koje su već bile otvarane).</p>
		<pre><code class="lang-CSS">{
			<span class="hljs-attribute">display</span>: inline-block;
			<span class="hljs-attribute">padding</span>: <span class="hljs-number">2em</span>;
			<span class="hljs-attribute">color</span>: <span class="hljs-number">#eee</span>;
			<span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
		}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-CSS"><span class="hljs-selector-tag">a</span><span class="hljs-selector-pseudo">:visited</span> {
			<span class="hljs-attribute">display</span>: inline-block;
			<span class="hljs-attribute">padding</span>: <span class="hljs-number">2em</span>;
			<span class="hljs-attribute">color</span>: <span class="hljs-number">#eee</span>;
			<span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve slike <code>&lt;img&gt;</code> iznad kojih je postavljen pokazivač miša.</p>
		<pre><code class="lang-CSS">{
			<span class="hljs-attribute">transform</span>: <span class="hljs-built_in">scale</span>(1.1);
		}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-CSS"><span class="hljs-selector-tag">img</span><span class="hljs-selector-pseudo">:hover</span> {
			<span class="hljs-attribute">transform</span>: <span class="hljs-built_in">scale</span>(1.1);
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Nadopunite isječak koda odgovarajućim selektorom tako da dohvatite sve paragrafe <code>&lt;p&gt;</code> koji su prvo dijete, određenog tipa, svog roditelja.</p>
		<pre><code class="lang-CSS">{
			<span class="hljs-attribute">color</span>: <span class="hljs-number">#eee</span>;
			<span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
		}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-CSS"><span class="hljs-selector-tag">p</span><span class="hljs-selector-pseudo">:first-of-type</span> {
			<span class="hljs-attribute">color</span>: <span class="hljs-number">#eee</span>;
			<span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Nadopunite isječak koda odgovarajućim selektorom tako da ugradite sadržaj &quot;Upamti: &quot; sa zadanim stilovima prije postojećeg sadržaja naslova 1. razine <code>&lt;h1&gt;</code>.</p>
		<pre><code class="lang-CSS">{
			<span class="hljs-attribute">content</span>: <span class="hljs-string">"Upamti: "</span>;
			<span class="hljs-attribute">color</span>: red;
			<span class="hljs-attribute">background-color</span>: yellow;
		}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-CSS"><span class="hljs-selector-tag">h1</span><span class="hljs-selector-pseudo">::before</span> {
			<span class="hljs-attribute">content</span>: <span class="hljs-string">"Upamti: "</span>;
			<span class="hljs-attribute">color</span>: red;
			<span class="hljs-attribute">background-color</span>: yellow;
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Vrijednost varijable &quot;text-color&quot; postavite kao boju znakova svih paragrafa.</p>
		<pre><code class="lang-CSS"><span class="hljs-selector-pseudo">:root</span> {
			<span class="hljs-attribute">--text-color</span>: <span class="hljs-number">#333</span>;
		}
			<span class="hljs-selector-tag">p</span> {
		}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-CSS"><span class="hljs-selector-pseudo">:root</span> {
			<span class="hljs-attribute">--text-color</span>: <span class="hljs-number">#333</span>;
		}
		<span class="hljs-selector-tag">p</span> {
			<span class="hljs-attribute">color</span>: <span class="hljs-built_in">var</span>(--text-color);
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Zadan je <code>&lt;article&gt;</code> element koji sadrži tekstualni sadržaj. Koristeći CSS selektirajte element i uredite ga tako da odgovara obliku na slici (pomoću margina centrirajte područje sadržaja elementa). Pretpostavite veličine i boje, one ne moraju biti u potpunosti točne.</p>
		<div align="center">
			<img src="./media/article1.png" alt="transform: translate();" style="width:50%;">
		</div>

		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-CSS"><span class="hljs-selector-tag">article</span> {
			<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#eee</span>;
			<span class="hljs-attribute">text-align</span>: justify;
			<span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;
			<span class="hljs-attribute">border</span>: <span class="hljs-number">5px</span> solid <span class="hljs-number">#666</span>;
			<span class="hljs-attribute">margin</span>: <span class="hljs-number">2em</span> auto;
			<span class="hljs-attribute">padding</span>: <span class="hljs-number">2em</span>;
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Zadan je <code>&lt;article&gt;</code> element koji sadrži tekstualni sadržaj. Koristeći CSS selektirajte element i uredite ga tako da odgovara obliku na slici (pomoću margina područje sadržaja elementa postavite na desnu stranu). Pretpostavite veličine i boje, one ne moraju biti u potpunosti točne.</p>
		<div align="center">
			<img src="./media/article2.png" alt="transform: translate();" style="width:50%;">
		</div>

		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-CSS"><span class="hljs-selector-tag">article</span> {
			<span class="hljs-attribute">background-color</span>: <span class="hljs-number">#eee</span>;
			<span class="hljs-attribute">text-align</span>: justify;
			<span class="hljs-attribute">width</span>: <span class="hljs-number">25%</span>;
			<span class="hljs-attribute">border-left</span>: <span class="hljs-number">8px</span> double <span class="hljs-number">#666</span>;
			<span class="hljs-attribute">border-right</span>: <span class="hljs-number">5px</span> dashed <span class="hljs-number">#666</span>;
			<span class="hljs-attribute">margin</span>: <span class="hljs-number">2em</span> <span class="hljs-number">0</span> <span class="hljs-number">2em</span> auto;
			<span class="hljs-attribute">padding</span>: <span class="hljs-number">2em</span> <span class="hljs-number">4em</span>;
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Na prazno mjesto upišite izraz za poziv SCSS funkcije &quot;margin&quot; te joj dodijelite dva cjelobrojna argumenta.</p>
		<pre><code class="lang-SCSS">@<span class="hljs-keyword">function</span> margin($a, $b) {
			@<span class="hljs-keyword">return</span> $a * $b;
		}
		<span class="hljs-selector-tag">p</span> {
			<span class="hljs-attribute">margin-top</span>: ____________ * <span class="hljs-number">1px</span>;
		}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-SCSS">@<span class="hljs-keyword">function</span> margin($a, $b) {
			@<span class="hljs-keyword">return</span> $a * $b;
		}

		<span class="hljs-selector-tag">p</span> {
			<span class="hljs-attribute">margin-top</span>: <span class="hljs-built_in">margin</span>(3, 2) * <span class="hljs-number">1px</span>;
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Unutar pravila koje obuhvaća sve elemente tipa <code>&lt;section&gt;</code> primijenite SCSS mixin &quot;flex-container&quot;.</p>
		<pre><code class="lang-SCSS">@<span class="hljs-keyword">mixin</span> flex-container {
			<span class="hljs-attribute">display</span>: flex;
			<span class="hljs-attribute">flex-wrap</span>: wrap;
			<span class="hljs-attribute">justify-content</span>: space-between;
		}

		<span class="hljs-selector-tag">section</span> {

		}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-SCSS">@<span class="hljs-keyword">mixin</span> flex-container {
			<span class="hljs-attribute">display</span>: flex;
			<span class="hljs-attribute">flex-wrap</span>: wrap;
			<span class="hljs-attribute">justify-content</span>: space-between;
		}

		<span class="hljs-selector-tag">section</span> {
			@<span class="hljs-keyword">include</span> flex-container;
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Dohvatite &quot;partials&quot; datoteku sa sljedeće lokacije: <code>base/_color.scss</code></p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-SCSS">@<span class="hljs-keyword">import</span> <span class="hljs-string">"base/color"</span>;
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Kako se naziva proces prilagodbe CSS koda za produkciju, čime se smanjuje veličina datoteke te ubrzava njeno preuzimanje sa poslužitelja?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Proces se naziva minifikacija ili minimizacija CSS koda.</p>
		<h2 id="javascript-mdash-klijentsko-skriptiranje">JavaScript &mdash; klijentsko skriptiranje</h2>
		<h3 id="-to-je-javascript-">Što je JavaScript?</h3>
		<ul>
		<li>JavaScript:<ul>
		<li>skriptni jezik &mdash; programski jezik koji omogućuje upravljanje aplikacijom u koju je ubačen<ul>
		<li>automatizira izvršavanje zadataka</li>
		</ul>
		</li>
		<li>može se koristiti i na strani klijenta i na strani poslužitelja. Mi učimo njegovu primjenu na strani klijenta:<ul>
		<li>osigurava interaktivnost i dinamičnost HTML stranice<ul>
		<li>njime se programira ponašanje web stranice</li>
		</ul>
		</li>
		</ul>
		</li>
		<li>za napredniji rad dostupan je veliki broj razvojnih okvira i biblioteka (jQuery, React, ...)</li>
		</ul>
		</li>
		</ul>
		<h3 id="klasifikacija-jezika">Klasifikacija jezika</h3>
		<ul>
		<li>JavaScript je skriptni programski jezik visoke razine, dobar i za <strong>objektno-orijentirano</strong> i za <strong>funkcijsko</strong> programiranje.</li>
		<li>Skup funkcija koje pruža ovisi o okolini u kojoj se koristi</li>
		<li>JavaScript jezik se razvija prema <strong>ECMAScript specifikaciji</strong>:<ul>
		<li>opisuje sintaksu i ponašanje programskog jezika</li>
		<li>definira standard za implementaciju JavaScript jezika</li>
		</ul>
		</li>
		</ul>
		<h3 id="ugradnja-javascripta-u-html">Ugradnja JavaScripta u HTML</h3>
		<ol>
		<li>Linijski (inline), između oznaka <code>&lt;script&gt;</code> i <code>&lt;/script&gt;</code></li>
		<li>Iz vanjske datoteke definirane src atributom <code>&lt;script&gt;</code> elementa</li>
		<li>U atributu HTML elementa kojemu se dodjeljuje događaj (onclick, onmouseover itd.)</li>
		<li><p>U URI-u koji koristi poseban javascript: protokol (blokirano od strane modernih web preglednika)</p>
		<pre><code class="lang-HTML"> <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="undefined">
		 ...
		 </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
		 <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"script.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
		</code></pre>
		</li>
		</ol>
		<h3 id="sinkrone-asinkrone-i-odgo-ene-skripte">Sinkrone, asinkrone i odgođene skripte</h3>
		<p>Različiti tipovi učitavanja:</p>
		<ol>
		<li><strong>Sinkrono</strong> &mdash; uključenje JS skripte prije kraja <code>&lt;body&gt;</code> elementa - kad je 99% html-a već učitano</li>
		<li><strong>Asinkrono</strong> &mdash; stavljanjem <strong><code>async</code></strong> atributa na <code>&lt;script&gt;</code> element: load-anje skripte ne blokira dokument</li>
		<li><strong>Odgođeno</strong> &mdash; stavljanjem <strong><code>defer</code></strong> atributa na <code>&lt;script&gt;</code> element: ni load-anje ni izvođenje JS-a neće blokirati dokument</li>
		</ol>
		<h3 id="vrijednosti">Vrijednosti</h3>
		<ul>
		<li><p><strong>Literali</strong> su nepromjenjive vrijednosti, poput brojeva i teksta.</p>
		</li>
		<li><p><strong>Varijable</strong> su promjenjive i koriste se za spremanje podataka.</p>
		<ul>
		<li>koriste ključnu riječ <strong><code>var</code></strong> za deklaraciju</li>
		<li>koriste znak jednakosti <strong><code>=</code></strong> za dodjeljivanje vrijednosti</li>
		<li>puni izraz za varijablu <code>x</code><pre><code class="lang-JS"><span class="hljs-attribute">var x</span> = 1;
		</code></pre>
		</li>
		</ul>
		</li>
		</ul>
		<h3 id="deklaracija">Deklaracija</h3>
		<p>Djelokrug (doseg) varijabli:</p>
		<ul>
		<li>globalni djelokrug (<strong>globalne</strong> varijable)<ul>
		<li>definiraju se izvan funkcija</li>
		<li>mogu se koristiti u čitavom programu, zatvaranjem stranice brišu se</li>
		</ul>
		</li>
		<li>djelokrug funkcije (<strong>lokalne</strong> varijable)<ul>
		<li>definiraju se unutar funkcije te se mogu koristiti samo unutar nje</li>
		<li>izlaskom iz funkcije brišu se</li>
		</ul>
		</li>
		<li>djelokrug <strong>bloka</strong><ul>
		<li>definiraju se unutar bloka <code>{}</code> pomoću ključne riječi <code>let</code> ili <code>const</code></li>
		<li>dostupne su samo unutar bloka u kojemu su definirane</li>
		<li>moraju se deklarirati prije upotrebe te se ne mogu ponovo deklarirati</li>
		</ul>
		</li>
		</ul>
		<h3 id="imenovanje">Imenovanje</h3>
		<ul>
		<li><p><strong>Identifikator</strong> &mdash; jednostavno ime za imenovanje varijabli i funkcija i za pružanje oznaka za određene petlje u JavaScript kodu.</p>
		</li>
		<li><p>Ima par pravila kod imenovanja:</p>
		</li>
		<li>JavaScript razlikuje velika i mala slova</li>
		<li>Naziv mora početi sa <strong>slovom</strong>, <strong>podvlakom (_)</strong> ili <strong>znakom dolara ($)</strong></li>
		<li>Sljedeći znakovi mogu biti <strong>slova</strong>, <strong>znamenke</strong>, <strong>podvlake</strong> ili <strong>$</strong></li>
		<li>Ključne riječi se ne smiju koristiti kao identifikatori</li>
		</ul>
		<h3 id="tipovi-podataka-u-javascriptu">Tipovi podataka u JavaScriptu</h3>
		<ul>
		<li>Primitivni<ul>
		<li>brojevi</li>
		<li>znakovni nizovi</li>
		<li>logičke vrijednosti</li>
		<li>undefined</li>
		<li>null</li>
		</ul>
		</li>
		<li>Objektni<ul>
		<li>objekti</li>
		<li>nizovi</li>
		<li>funkcije</li>
		</ul>
		</li>
		</ul>
		<h3 id="string">String</h3>
		<ul>
		<li><p><strong>String</strong> je niz znakova (0 ili više) okružen navodnicima.</p>
		<ul>
		<li>Navodnici mogu biti jednostruki ili dvostruki.</li>
		<li>Brojanje pozicije znaka u string-u počinje od <strong>nule</strong>!</li>
		</ul>
		<pre><code class="lang-JS">var myString = <span class="hljs-string">""</span><span class="hljs-comment">;          // prazan string</span>
		<span class="hljs-attribute">myString</span> = <span class="hljs-string">"Lorem ipsum"</span><span class="hljs-comment">;</span>
		<span class="hljs-attribute">myString</span> = <span class="hljs-string">" Lorem ipsum"</span><span class="hljs-comment">;  // string sa prazninama na početku</span>
		</code></pre>
		</li>
		<li><p>Svojstva i metode</p>
		<ul>
		<li><code>length</code> &mdash; Duljina stringa</li>
		<li><code>charAt()</code> &mdash; Vraća znak na poziciji</li>
		<li><code>trim()</code> &mdash; Miče praznine na početku i kraju string-a</li>
		<li><code>indexOf()</code> &mdash; Vraća poziciju string-a unutar string-a</li>
		<li><code>search()</code> &mdash; Traži da li se izraz nalazi unutar znakovnog niza – vraća poziciju podudaranja</li>
		<li><code>replace()</code> &mdash; Vraća novi string sa zamijenjenim izrazom</li>
		<li><code>toUpperCase()</code> &mdash; Pretvara string-u u sva velika slova</li>
		<li><code>substring()</code> &mdash; Vraća dio znakovnog niza između dvaju indeksa</li>
		<li><code>concat()</code> &mdash; Povezuje više nizova u jedan</li>
		</ul>
		</li>
		</ul>
		<h3 id="tipovi-operatora">Tipovi operatora</h3>
		<ul>
		<li>Po tipu operacije<ul>
		<li>Logički &mdash; <code>&amp;&amp; || !</code></li>
		<li>Artimetički &mdash; <code>+ - * / % ** ++ --</code></li>
		<li>Operatori dodjeljivanja &mdash; <code>= += -= *= /= %= **=</code></li>
		<li>Relacijski &mdash; <code>== === != !== &gt; &lt; &gt;= &lt;= ?</code></li>
		<li>Bitovni (bitwise) &mdash; <code>&amp; | ~ ^ &lt;&lt; &gt;&gt; &gt;&gt;&gt;</code></li>
		<li>Operator konkatenacije &mdash; <code>+</code></li>
		<li>Ostali &mdash; <code>delete</code>, <code>typeof</code>, <code>void</code>, <code>instanceof</code>, <code>in</code>, <code>?.</code>, <code>??</code>, <code>??=</code></li>
		</ul>
		</li>
		</ul>
		<h3 id="vrste-izjava-kontrolne-strukture-">Vrste izjava (kontrolne strukture)</h3>
		<ul>
		<li><strong>Uvjetno grananje:</strong><ul>
		<li>izvršava se ili preskače blok naredbi ovisno o istinitosti zadanog uvjeta &rarr; kod se grana na više dijelova od kojih će se samo jedan izvršiti.</li>
		</ul>
		</li>
		<li><strong>Petlje (iteracije):</strong><ul>
		<li>blok naredbi se izvršava više puta.</li>
		</ul>
		</li>
		<li><strong>Skokovi</strong> (poput break, return, throw):<ul>
		<li>naređuju interpreteru da skoči na neki drugi dio programa.</li>
		</ul>
		</li>
		</ul>
		<h3 id="uvjetno-grananje">Uvjetno grananje</h3>
		<ul>
		<li><p><strong><code>If</code></strong></p>
		<pre><code class="lang-JS"><span class="hljs-keyword">if</span> (izraz) {
			<span class="hljs-regexp">//</span> Izvrši kod u bloku <span class="hljs-comment">#1</span>
		}
		</code></pre>
		</li>
		<li><p><strong><code>if - else if</code></strong></p>
		<pre><code class="lang-JS"><span class="hljs-keyword">if</span> (izraz) {
			<span class="hljs-regexp">//</span> Izvrši kod u bloku <span class="hljs-comment">#1</span>
		} <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (izraz2) {
			<span class="hljs-regexp">//</span> Izvrši kod u bloku <span class="hljs-comment">#2</span>
		}
		</code></pre>
		</li>
		<li><p><strong><code>switch</code></strong></p>
		<ul>
		<li>Switch izjava je bolja alternativa kompliciranim if izjavama.</li>
		</ul>
		<pre><code class="lang-JS"><span class="hljs-keyword">switch</span>(n) {
			<span class="hljs-keyword">case</span> <span class="hljs-number">1</span>:
				// <span class="hljs-built_in">Execute</span> code block <span class="hljs-meta">#1.</span>
				<span class="hljs-built_in">break</span><span class="hljs-comment">;</span>
			<span class="hljs-keyword">case</span> <span class="hljs-number">2</span>:
				// <span class="hljs-built_in">Execute</span> code block <span class="hljs-meta">#2.</span>
				<span class="hljs-built_in">break</span><span class="hljs-comment">;</span>
			<span class="hljs-keyword">default</span>:
				// <span class="hljs-built_in">Execute</span> code block <span class="hljs-meta">#3.</span>
		}
		</code></pre>
		</li>
		</ul>
		<h3 id="petlje">Petlje</h3>
		<ul>
		<li><p><strong><code>while</code></strong></p>
		<pre><code class="lang-JS">var <span class="hljs-built_in">count</span> = <span class="hljs-number">0</span><span class="hljs-comment">;</span>
		while (<span class="hljs-built_in">count</span> &lt; <span class="hljs-number">10</span>) {
			console.log(<span class="hljs-built_in">count</span>)<span class="hljs-comment">;</span>
			<span class="hljs-built_in">count</span>++<span class="hljs-comment">;</span>
		}
		</code></pre>
		</li>
		<li><p><strong><code>do ... while</code></strong></p>
		<pre><code class="lang-JS">var <span class="hljs-built_in">count</span> = <span class="hljs-number">0</span><span class="hljs-comment">;</span>
		do {
			console.log(<span class="hljs-built_in">count</span>)<span class="hljs-comment">;</span>
			<span class="hljs-built_in">count</span>++<span class="hljs-comment">;</span>
		} while (<span class="hljs-built_in">count</span> &lt; <span class="hljs-number">10</span>)<span class="hljs-comment">;</span>
		</code></pre>
		</li>
		<li><p><strong><code>for</code></strong></p>
		<pre><code class="lang-JS"><span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> <span class="hljs-keyword">count</span> = 0; <span class="hljs-keyword">count</span> &lt; 10; <span class="hljs-keyword">count</span>++) {
			console.<span class="hljs-built_in">log</span>(<span class="hljs-keyword">count</span>);
		}
		</code></pre>
		</li>
		<li><p><strong><code>for ... in</code></strong></p>
		<pre><code class="lang-JS"><span class="hljs-keyword">for</span> (<span class="hljs-selector-tag">var</span> <span class="hljs-selector-tag">i</span> <span class="hljs-keyword">in</span> nazivObjekta) {
			<span class="hljs-comment">/* ... */</span>
		}
		</code></pre>
		</li>
		<li><p><code>continue</code> - izjava preskače obradu trenutnog člana petlje i nastavlja sa sljedećim</p>
		<pre><code class="lang-JS"><span class="hljs-keyword">for</span> (i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
			<span class="hljs-keyword">if</span> (i === <span class="hljs-number">3</span>) { <span class="hljs-keyword">continue</span>; }
			<span class="hljs-built_in">text</span> += <span class="hljs-string">"The number is "</span> + i + <span class="hljs-string">"&lt;br&gt;"</span>;
		}
		</code></pre>
		</li>
		<li><p><code>break</code> - izjava prekida petlju i izlazi iz nje</p>
		<pre><code class="lang-JS"><span class="hljs-built_in">for</span> (i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
			<span class="hljs-built_in">if</span> (i === <span class="hljs-number">3</span>) { <span class="hljs-built_in">break</span>; }
			<span class="hljs-built_in">text</span> += <span class="hljs-string">"The number is "</span> + i + <span class="hljs-string">"&lt;br&gt;"</span>;
		}
		</code></pre>
		</li>
		</ul>
		<h3 id="niz-array-">Niz (array)</h3>
		<ul>
		<li><p><strong><em>Niz je sortirana zbirka vrijednosti.</em></strong></p>
		<ul>
		<li>Svaka pojedina vrijednost u nizu se naziva elementom niza. Može biti bilo kojeg JS tipa podatka, a sam niz je tipa objekt. Niz prepoznajemo po uglatim zagradama ( <code>[]</code> )</li>
		</ul>
		<pre><code class="lang-JS"><span class="hljs-keyword">var</span> name1 = <span class="hljs-string">'John'</span>;
		<span class="hljs-keyword">var</span> name2 = <span class="hljs-string">'Jane'</span>;
		<span class="hljs-keyword">var</span> name3 = <span class="hljs-string">'Mike'</span>;

		<span class="hljs-keyword">var</span> names = [<span class="hljs-string">'John'</span>, <span class="hljs-string">'Jane'</span>, <span class="hljs-string">'Mike'</span>];

		<span class="hljs-built_in">console</span>.log(names);
		<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span>(names));
		</code></pre>
		</li>
		</ul>
		<h4 id="elementi-niza-postavljanje-i-dohva-anje">Elementi niza - Postavljanje i dohvaćanje</h4>
		<ul>
		<li>Za razliku od klasičnih objekata, elementi u nizu se dohvaćaju brojkom (ne-negativnim interger-om), tj. <strong>index</strong>-om elementa.</li>
		<li>Index-i elemenata počinju od <strong>nule</strong>.</li>
		<li><p>Nizovi se mogu proširivati i smanjivati po volji.</p>
		<pre><code class="lang-JS">var names = [<span class="hljs-string">'John'</span>, <span class="hljs-string">'Jane'</span>, <span class="hljs-string">'Mike'</span>];
		var name1 = names[<span class="hljs-number">0</span>];

		names[<span class="hljs-number">3</span>] = <span class="hljs-string">'Holly'</span>;
		</code></pre>
		</li>
		<li><p>iteriranje unutar niza</p>
		<pre><code class="lang-JS">for (<span class="hljs-name">var</span> i = <span class="hljs-number">0</span><span class="hljs-comment">; i &lt; names.length; i++) {</span>
			console.log(<span class="hljs-name">names</span>[i])<span class="hljs-comment">;</span>
		}

		names.forEach(<span class="hljs-name">function</span>(<span class="hljs-name">value</span>){
			console.log(<span class="hljs-name">value</span>)<span class="hljs-comment">;</span>
		})<span class="hljs-comment">;</span>
		</code></pre>
		</li>
		</ul>
		<h4 id="svojstva-i-metode-nad-nizom">Svojstva i metode nad nizom</h4>
		<ul>
		<li><code>length</code> &mdash; Vraća duljinu niza</li>
		<li><code>push()</code> &mdash; Dodaje element na kraj niza</li>
		<li><code>pop()</code> &mdash; Miče zadnji element niza</li>
		<li><code>splice()</code> &mdash; Na zadanoj poziciji dodaje ili briše željeni broj elemenata</li>
		<li><code>filter()</code> &mdash; Vraća novi niz popunjen s elementima početnog niza koji zadovoljavaju zadani uvjet</li>
		<li><code>reverse()</code> &mdash; Obrne redoslijed elemenata u nizu</li>
		<li><code>sort()</code> &mdash; Sortira elemente niza (default: po abecedi)</li>
		<li><code>forEach()</code> (ES5)Iterira kroz niz, pozivajući funkciju koju odredite za svaki element</li>
		<li><code>map()</code> (ES5)Prosljeđuje svaki element niza funkciji i vraća niz koji sadrži vrijednosti vraćene tom funkcijom</li>
		</ul>
		<h3 id="funkcija">Funkcija</h3>
		<ul>
		<li><strong>Funkcija</strong> &mdash; je blok JavaScript koda koji izvršava neki zadatak.</li>
		<li>U drugim jezicima funkcija se naziva procedura ili subrutina.</li>
		<li>Funkcije koristimo jer njezin kod možete <strong>ponovo upotrijebiti</strong>: definirajte ga jednom i koristite ga više puta.</li>
		<li>Možete koristiti isti kod <strong>više puta s različitim argumentima</strong> za dobivanje različitih rezultata.</li>
		</ul>
		<h4 id="definicija-i-pozivanje-funkcije">Definicija i pozivanje funkcije</h4>
		<ul>
		<li><p>definicija</p>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">nazivFunkcije</span><span class="hljs-params">()</span> </span>{
			<span class="hljs-comment">// nesto napravi</span>
		}
		</code></pre>
		</li>
		<li><p>pozivanje</p>
		<pre><code class="lang-JS">nazivFunkcije()<span class="hljs-comment">;</span>
		</code></pre>
		</li>
		</ul>
		<h4 id="-return-klju-na-rije-">&quot;Return&quot; - ključna riječ</h4>
		<ul>
		<li>Svaka funkcija vraća vrijednost undefined, osim ako upotrijebimo ključnu riječ <code>return</code></li>
		<li>Vraća izračunatu vrijednost iz funkcije</li>
		<li><p>U slučaju izjave return prije kraja funkcije, ostatak funkcije je ignoriran (izvršavanje funkcije se prekida)</p>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span></span> nazivFunkcije() {
			var <span class="hljs-keyword">value</span> = <span class="hljs-number">1</span>;
			<span class="hljs-keyword">return</span> <span class="hljs-keyword">value</span>;
		}
		console.<span class="hljs-built_in">log</span>(nazivFunkcije());

		<span class="hljs-function"><span class="hljs-keyword">function</span></span> nazivFunkcije() {
			var <span class="hljs-keyword">value</span> = <span class="hljs-number">1</span>;
			<span class="hljs-keyword">return</span> <span class="hljs-keyword">value</span>;
			<span class="hljs-keyword">value</span> += <span class="hljs-number">1</span>;
		}
		console.<span class="hljs-built_in">log</span>(nazivFunkcije());
		</code></pre>
		</li>
		</ul>
		<h4 id="parametri-i-argumenti">Parametri i argumenti</h4>
		<ul>
		<li><p>Definicija funkcije može (ali ne mora) sadržavati popis identifikatora, poznatih kao <strong>parametri</strong>, koji djeluju kao lokalne varijable za tijelo funkcije</p>
		<ul>
		<li>parametri - kod definicije funkcije</li>
		<li><strong>argumenti</strong> - kod poziva funkcije</li>
		</ul>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">udaljenostKoordinata</span>(<span class="hljs-params">x1, y1, x2, y2</span>) // <span class="hljs-title">PARAMETRI</span>
		</span>{
			<span class="hljs-keyword">var</span> dx = x2 - x1;
			<span class="hljs-keyword">var</span> dy = y2 - y1;
			<span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">Math</span>.sqrt(dx*dx + dy*dy));
		}

		udaljenostKoordinata(<span class="hljs-number">1</span>,<span class="hljs-number">1</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>);  <span class="hljs-comment">// ARGUMENTI</span>
		</code></pre>
		</li>
		</ul>
		<h3 id="javascript-oop">JavaScript OOP</h3>
		<ul>
		<li>JavaScript je dizajniran da bude objektno-orijentiran jezik.</li>
		<li><strong>Objektno-orijentirano programiranje</strong>:<ul>
		<li>metoda programiranja koja se temelji na upotrebi objekata u izradi računalnih programa</li>
		<li><strong>objekt</strong> &rarr; programska struktura koja se sastoji od<ul>
		<li><strong>svojstva</strong> (podatkovne vrijednosti) koja ga opisuju</li>
		<li><strong>metoda</strong> (radnje), čijim izvršavanjem se njime upravlja</li>
		</ul>
		</li>
		<li>primjena objekata program čini razumljivijim, lakšim za održavanje, u pravilu ga skraćuje te omogućuje njegovo brže izvršavanje</li>
		</ul>
		</li>
		</ul>
		<h4 id="kreiranje-objekta">Kreiranje objekta</h4>
		<p>Možemo kreirati objekt pomoću:</p>
		<ul>
		<li><p><strong>literala</strong></p>
		<ul>
		<li>kreira se jedan primjerak objekta, zajedno s pripadajućim podacima</li>
		<li>za dohvaćanje svojstva unutar definicije objekta koristimo ključnu riječ <strong><code>this</code></strong></li>
		</ul>
		<pre><code class="lang-JS"><span class="hljs-keyword">var</span> dog = {
			breed: <span class="hljs-string">'Golden retriever'</span>,
			bark: <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{
				<span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.breed + <span class="hljs-string">' says Wuf Wuf'</span>;
			}
		};

		<span class="hljs-keyword">var</span> firstBreed = dog.breed;
		<span class="hljs-keyword">var</span> whatDogSays = dog.bark();
		</code></pre>
		</li>
		<li><p>operatora <strong>new</strong></p>
		</li>
		<li><strong><code>Object.create()</code></strong> metode</li>
		<li><p>funkcije <strong>konstruktora</strong></p>
		<ul>
		<li>kreira se predložak, putem kojeg je moguće kreirati neograničen broj objekata istog tipa, ali drugačijih podataka</li>
		<li>objekt &rarr; primjerak (instanca) predloška, kreiran u vremenu izvršavanja programa<ul>
		<li><em>NAPOMENA</em>: kako bi se približio drugim objektno orijentiranim programskim jezicima, JavaScript omogućuje upotrebu klasa umjesto funkcija konstruktora</li>
		</ul>
		</li>
		<li>konstruktor &mdash; funkcija dizajnirana za inicijalizaciju novostvorenih objekata.</li>
		<li>Riječ <strong>new</strong> ispred bilo koje funkcije pretvara poziv funkcije u poziv konstruktora.</li>
		</ul>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Dog</span><span class="hljs-params">()</span> </span>{
			<span class="hljs-keyword">this</span>.hasSit = <span class="hljs-literal">false</span>;
			<span class="hljs-keyword">this</span>.bark = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{
				<span class="hljs-keyword">return</span> <span class="hljs-string">'Wuf Wuf'</span>;
			}
			<span class="hljs-keyword">this</span>.doSit = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{
				<span class="hljs-keyword">this</span>.hasSit = <span class="hljs-literal">true</span>;
			}
		}

		<span class="hljs-keyword">var</span> dog = <span class="hljs-keyword">new</span> Dog();
		dog.bark();
		</code></pre>
		</li>
		</ul>
		<h4 id="oop-naslje-ivanje">OOP - Nasljeđivanje</h4>
		<ul>
		<li>Nasljeđivanje &mdash; dijeljenje zajedničkih svojstva i metoda između objekata različitih tipova (kreiranih iz različitih funkcija konstruktora)</li>
		<li><p>u JavaScript jeziku nasljeđivanje se realizira pomoću <strong>prototip objekta</strong>:</p>
		<ul>
		<li>objekt koji je povezan sa svakom funkcijom i objektom</li>
		<li>omogućuje:<ul>
		<li>implementaciju nasljeđivanja</li>
		<li>dodjeljivanje svojstva i metoda svim postojećim objektima određenog tipa (kreiranima iz iste funkcije konstruktora)</li>
		</ul>
		</li>
		</ul>
		</li>
		<li><p>Upotreba prototip objekta:</p>
		<ul>
		<li>definicija nasljeđivanja</li>
		</ul>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Konstruktor1</span>(<span class="hljs-params"></span>)</span>{
			<span class="hljs-comment">// ...</span>
		}

		<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Konstruktor2</span>(<span class="hljs-params"></span>)</span>{
			Konstruktor1().call();
			<span class="hljs-comment">// ...</span>
		}

		Konstruktor2.prototype = <span class="hljs-built_in">Object</span>.create(Konstruktor1.prototype);
		</code></pre>
		</li>
		</ul>
		<h3 id="tipovi-objekata-po-podrijetlu">Tipovi objekata po podrijetlu</h3>
		<ol>
		<li><strong>Nativni</strong> objekt je objekt ili klasa objekata definirana u ECMAScript specifikaciji (<code>Array</code>, <code>Function</code>, <code>Date</code> ...)</li>
		<li><strong>Host</strong> objekt je objekt definiran okruženjem domaćina, u našem slučaju web preglednika (npr. <code>HTMLElement</code> objekt)</li>
		<li><strong>Korisnički definiran</strong> objekt je svaki objekt kreiran izvršenjem JavaScript koda</li>
		</ol>
		<h3 id="-date-objekt"><code>Date</code> objekt</h3>
		<ul>
		<li>Core JavaScript uključuje konstruktor <code>Date()</code> za kreiranje objekata koji predstavljaju datume i vremena</li>
		<li>Ovi objekti Date imaju metode koje pružaju API za jednostavno
		izračunavanje datuma</li>
		<li><p>Objekti datuma nisu osnovna vrsta kao što su brojevi.</p>
		<pre><code class="lang-JS"><span class="hljs-keyword">var</span> d = <span class="hljs-keyword">new</span> <span class="hljs-type">Date</span>();
		<span class="hljs-keyword">var</span> d = <span class="hljs-keyword">new</span> <span class="hljs-type">Date</span>(<span class="hljs-number">2018</span>, <span class="hljs-number">11</span>, <span class="hljs-number">24</span>, <span class="hljs-number">10</span>, <span class="hljs-number">33</span>, <span class="hljs-number">30</span>, <span class="hljs-number">0</span>);
		<span class="hljs-keyword">var</span> d = <span class="hljs-keyword">new</span> <span class="hljs-type">Date</span>(<span class="hljs-string">"October 13, 2014 11:13:00"</span>);
		<span class="hljs-keyword">var</span> d = <span class="hljs-keyword">new</span> <span class="hljs-type">Date</span>(<span class="hljs-number">-100000000000</span>);
		</code></pre>
		</li>
		</ul>
		<h4 id="metode-date-objekta">metode Date objekta</h4>
		<ul>
		<li><code>getDate()</code> &mdash; Vraća redni broj dana u mjesecu</li>
		<li><code>getHours()</code> &mdash; Vraća sat iz trenutnog vremena</li>
		<li><code>getFullYear()</code> &mdash; Vraća godinu iz trenutnog datuma</li>
		<li><code>setDate()</code> &mdash; Postavlja redni broj dana u mjesecu</li>
		<li><code>setHours()</code> &mdash; Postavlja vrijednost sata</li>
		<li><code>setFullYear()</code> &mdash; Postavlja vrijednost godine</li>
		<li><code>now()</code> &mdash; Vraća broj milisekunda od 01.01.1970 00:00:00</li>
		<li><code>toLocaleString()</code> Vraća vrijednost datuma i vremena u lokalnom formatu korisnika</li>
		<li>...</li>
		</ul>
		<h3 id="-math-objekt"><code>Math</code> objekt</h3>
		<ul>
		<li>Pored osnovnih aritmetičkih operatora, JavaScript podržava složenije matematičke operacije kroz skup funkcija i konstanti definiranih kao svojstva objekta Math:</li>
		<li>objekt Math nije potrebno kreirati (instancirati)<ul>
		<li>postoji samo jedan primjerak objekta tog tipa</li>
		<li>sve metode i svojstva su statička</li>
		</ul>
		</li>
		</ul>
		<h4 id="-math-objekt-primjeri-svojstva-i-metoda"><code>Math</code> objekt - primjeri svojstva i metoda</h4>
		<ul>
		<li>svojstva<ul>
		<li><code>PI</code> &mdash; Sadrži vrijednost konstante PI</li>
		<li><code>SQRT2</code> &mdash; Sadrži vrijednost drugog korijena broja 2</li>
		<li><code>LN10</code> &mdash; Sadrži vrijednost prirodnog logaritma broja 10</li>
		<li>...</li>
		</ul>
		</li>
		<li>metode<ul>
		<li><code>pow()</code> &mdash; Vraća vrijednost x potenciranu s y &rarr; <code>Math.pow(x,y)</code></li>
		<li><code>sqrt()</code> &mdash; Vraća drugi korijen broja</li>
		<li><code>random()</code> &mdash; Vraća slučajno generiran broj između 0 i 1 (isključujući 1)</li>
		<li><code>floor()</code> &mdash; Vraća niži cijeli broj</li>
		<li><code>round()</code> &mdash; Zaokružuje vrijednost na najbliži cijeli broj<ul>
		<li>Za zaokruživanje na decimale: <code>broj.toPrecision()</code> ili <code>broj.toFixed()</code></li>
		</ul>
		</li>
		<li>...</li>
		</ul>
		</li>
		</ul>
		<h3 id="regexp">Regexp</h3>
		<ul>
		<li>Regular expressions<ul>
		<li>U JavaScript-u su i regularni izrazi objekti.</li>
		</ul>
		</li>
		<li>Opisuje uzorak znakovnog niza<ul>
		<li>omogućuje pretragu traženog uzorka unutar znakovnog niza</li>
		</ul>
		</li>
		<li><p>Redovni izrazi obrasci su koji se koriste za podudaranje kombinacija znakova u tekstu.</p>
		<pre><code class="lang-JS"><span class="hljs-keyword">var</span> re = <span class="hljs-keyword">new</span> <span class="hljs-built_in">RegExp</span>(<span class="hljs-string">'[žšđćč]'</span>, <span class="hljs-string">'ig'</span>);
		<span class="hljs-keyword">var</span> re = <span class="hljs-regexp">/[žšđćč]/ig</span>;
		</code></pre>
		</li>
		<li><p>Regexp – metode</p>
		<ul>
		<li><code>exec()</code> &mdash; Provjerava da li znakovni niz sadrži uzorak znakova - vraća zajedničku vrijednost</li>
		<li><code>test()</code> &mdash; Provjerava da li znakovni niz sadrži uzorak znakova - vraća istina ili laž</li>
		</ul>
		</li>
		<li><p>Za pretragu, moguća upotreba string metoda:</p>
		<ul>
		<li><code>znakovniNiz.search(uzorak)</code></li>
		<li><code>znakovniNiz.match(uzorak)</code></li>
		</ul>
		</li>
		</ul>
		<h3 id="browser-object-model-bom-">Browser Object Model (BOM)</h3>
		<ul>
		<li>skupina unaprijed definiranih objekata koji stranici (JavaScript-u) omogućuju interakciju s web preglednikom</li>
		<li>omogućava JavaScript-u &quot;razgovor&quot; s web preglednikom<ul>
		<li>objekt preko kojeg to ostvarujemo je globalni objekt window</li>
		</ul>
		</li>
		<li>ne postoji službeni standard<ul>
		<li>većina web preglednika ipak ima implementirano identično sučelje za komunikaciju s JavaScript jezikom</li>
		</ul>
		</li>
		<li>hijerarhijska struktura BOM objekata:<ul>
		<li>window (BOM)<ul>
		<li>navigator</li>
		<li>location</li>
		<li>history</li>
		<li>screen</li>
		<li>document (DOM)<ul>
		<li>html</li>
		<li>head<ul>
		<li>title<ul>
		<li>naslov</li>
		</ul>
		</li>
		</ul>
		</li>
		<li>body<ul>
		<li>p<ul>
		<li>&quot;text&quot;</li>
		</ul>
		</li>
		<li>a<ul>
		<li>href<ul>
		<li>&quot;link&quot;</li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>
		<h3 id="html-dom">HTML DOM</h3>
		<ul>
		<li><p>Platforma i jezično neutralno sučelje koje omogućuje programima i skriptama dinamički pristup i ažuriranje sadržaja, strukture i stila dokumenta.</p>
		</li>
		<li><p>definira:</p>
		<ul>
		<li>HTML elemente kao objekte</li>
		<li>svojstva svih HTML elemenata</li>
		<li>metode pristupa svim HTML elementima</li>
		<li>događaje za sve HTML elemente</li>
		</ul>
		</li>
		</ul>
		<h4 id="-document-objekt"><code>Document</code> objekt</h4>
		<ul>
		<li>Objekt <code>document</code> predstavlja našu web stranicu.</li>
		<li><p>Ako želite pristupiti bilo kojem elementu HTML stranice, uvijek započinjemo s pristupom objektu dokumenta.</p>
		<p><img src="./media/dom.png" alt="DOM drvo" style="width:300px;"></p>
		</li>
		</ul>
		<h4 id="selektiranje-dom-elementa">Selektiranje DOM elementa</h4>
		<ul>
		<li>Za mijenjanje DOMa ili elementa u DOMu prvo ga moramo ‘pronaći’ u dokument strukturi i selektirati.</li>
		<li><p>DOM definira brojne <strong>načine odabira elemenata</strong>, koristeći:</p>
		<ul>
		<li><strong>id</strong> elementa</li>
		<li><strong>tag</strong> elementa (tip)</li>
		<li>CSS <strong>klasu</strong> ili drugi CSS <strong>selektor</strong></li>
		<li><strong>atribut</strong> name</li>
		</ul>
		<pre><code class="lang-JS"><span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"header-title"</span>);
		<span class="hljs-built_in">document</span>.getElementsByTagName(<span class="hljs-string">"li"</span>);
		<span class="hljs-built_in">document</span>.getElementsByClassName(<span class="hljs-string">"description"</span>);
		<span class="hljs-built_in">document</span>.getElementsByName(<span class="hljs-string">"gender"</span>);
		<span class="hljs-built_in">document</span>.<span class="hljs-built_in">querySelector</span>(<span class="hljs-string">"#header-title"</span>);
		<span class="hljs-built_in">document</span>.<span class="hljs-built_in">querySelectorAll</span>(<span class="hljs-string">".description"</span>);
		</code></pre>
		</li>
		</ul>
		<h4 id="kreiranje-i-brisanje-elemenata">Kreiranje i brisanje elemenata</h4>
		<ul>
		<li><p>kreiranje</p>
		<pre><code class="lang-JS"><span class="hljs-keyword">var</span> f = <span class="hljs-built_in">document</span>.<span class="hljs-built_in">querySelector</span>(<span class="hljs-string">"#footer"</span>);
		<span class="hljs-keyword">var</span> d = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">"div"</span>);
		f.appendChild(d);
		</code></pre>
		</li>
		<li><p>brisanje</p>
		<pre><code class="lang-JS"><span class="hljs-keyword">var</span> f = <span class="hljs-built_in">document</span>.<span class="hljs-built_in">querySelector</span>(<span class="hljs-string">"#footer"</span>);
		f.remove();
		<span class="hljs-comment">/* ili */</span>
		f.parentNode.removeChild(f);
		</code></pre>
		</li>
		</ul>
		<h4 id="dom-svojstva-za-navigaciju-kroz-dom-stablo">DOM - Svojstva za navigaciju kroz DOM stablo</h4>
		<ul>
		<li><code>parentNode</code> &mdash; Vraća roditelja zadanog člana</li>
		<li><code>children</code> &mdash; Vraća kolekciju (HTMLCollection) HTML elemenata kojima je zadani element roditelj</li>
		<li><code>childNodes</code> &mdash; Vraća kolekciju (NodeList) čvorova kojima je zadani čvor roditelj</li>
		<li><code>firstChild</code> / <code>firstElementChild</code> &mdash; Vraća prvi čvor / HTML element kojemu je zadani čvor / element roditelj</li>
		<li><code>lastChild</code> / <code>lastElementChild</code> &mdash; Vraća zadnji čvor / HTML element kojemu je zadani čvor / element roditelj</li>
		<li><code>nextSibling</code> / <code>nextElementSibling</code> &mdash; Vraća prvi čvor / HTML element nakon zadanog, na istoj razini DOM stabla</li>
		<li><code>previousSibling</code> / <code>previousElementSibling</code>  &mdash; Vraća prvi čvor / HTML element prije zadanog, na istoj razini DOM stabla</li>
		</ul>
		<h4 id="dom-dodatne-metode">DOM - Dodatne metode</h4>
		<ul>
		<li><code>createTextNode()</code> &mdash; Kreira tekstualni član DOM stabla</li>
		<li><code>insertBefore()</code> &mdash; Roditelju dodaje element prije odabranog pod-elementa</li>
		<li><code>insertAdjacentHTML()</code> &mdash; Ubacuje HTML kod na zadanu poziciju (<code>afterbegin</code>, <code>afterend</code>, <code>beforebegin</code>, <code>beforeend</code>)</li>
		<li><code>replaceChild()</code> &mdash; Roditelju zamjenjuje pod-element</li>
		<li><code>remove()</code> &mdash; Uklanja odabrani element iz DOM stabla</li>
		</ul>
		<h4 id="dom-dohva-anje-ili-postavljanje-sadr-aja">DOM - Dohvaćanje ili postavljanje sadržaja</h4>
		<ul>
		<li><p>Tekstualni sadržaj:</p>
		<pre><code class="lang-JS">var content = el.textContent<span class="hljs-comment">;</span>
		var content = el.innerText<span class="hljs-comment">;</span>

		el.textContent = <span class="hljs-string">"Ima 4 rijeke"</span><span class="hljs-comment">;</span>
		el.innerText = <span class="hljs-string">"Ima 4 rijeke"</span><span class="hljs-comment">;</span>
		</code></pre>
		</li>
		<li><p>HTML sadržaj:</p>
		<pre><code class="lang-JS">var content = el.innerHTML<span class="hljs-comment">;</span>
		el.innerHTML = <span class="hljs-string">"Ima &lt;span&gt;4 rijeke&lt;/span&gt;"</span><span class="hljs-comment">;</span>
		</code></pre>
		</li>
		</ul>
		<h4 id="dom-dohva-anje-ili-postavljanje-vrijednosti-atributa">DOM - Dohvaćanje ili postavljanje vrijednosti atributa</h4>
		<ul>
		<li><p>Vrijednosti atributa HTML elemenata dostupne su kao <strong>svojstva</strong>
		<code>HTMLElement</code> objekata koji predstavljaju te elemente.</p>
		<pre><code class="lang-JS">var img = document.querySelector(<span class="hljs-string">"img"</span>)<span class="hljs-comment">;</span>
		img.src = <span class="hljs-string">"ipsum.png"</span><span class="hljs-comment">;</span>

		img.getAttribute(<span class="hljs-string">"width"</span>)<span class="hljs-comment">;</span>
		img.setAttribute(<span class="hljs-string">"height"</span>, <span class="hljs-string">"40"</span>)<span class="hljs-comment">;</span>
		img.removeAttribute(<span class="hljs-string">"height"</span>)<span class="hljs-comment">;</span>
		</code></pre>
		</li>
		</ul>
		<h3 id="dom-dinami-ka-promjena-stilova-inline-stilovi">DOM - Dinamička promjena stilova - inline stilovi</h3>
		<ul>
		<li><p>Atribut <code>style</code> HTML elementa je njegov inline stil i poništava sve specifikacije stila u prije definiranom stylesheet-u - ima <strong>najviši prioritet</strong> u CSS kaskadi kao inline deklaracija stila.</p>
		<pre><code class="lang-JS">document.getElementById(id).<span class="hljs-built_in">style</span>.property = <span class="hljs-built_in">new</span> <span class="hljs-built_in">style</span>;
		</code></pre>
		</li>
		<li><p>camelCase:</p>
		<pre><code class="lang-JS"><span class="hljs-keyword">element</span>.style.font-family = <span class="hljs-string">"Arial"</span>;<span class="hljs-comment"> // KRIVO!!!</span>
		<span class="hljs-keyword">element</span>.style.fontFamily = <span class="hljs-string">"Arial"</span>;<span class="hljs-comment"> // DOBRO</span>

		<span class="hljs-keyword">element</span>.style.float = <span class="hljs-string">"left"</span> <span class="hljs-comment"> // KRIVO</span>
		<span class="hljs-keyword">element</span>.style.cssFloat = <span class="hljs-string">"left"</span>; <span class="hljs-comment"> // DOBRO</span>
		</code></pre>
		</li>
		</ul>
		<h3 id="dinami-ka-promjena-stilova-mijenjanje-klasa">Dinamička promjena stilova - mijenjanje klasa</h3>
		<ul>
		<li><p>Ponekad želimo umjesto inline stila promijeniti CSS klasu elementa.
		Za to koristimo <strong>className</strong> i <strong>classList</strong> svojstva elemenata.</p>
		<pre><code class="lang-JS">var element = document.getElementById(<span class="hljs-string">"id"</span>)<span class="hljs-comment">;</span>
		element.className = <span class="hljs-string">"containerElement containerElement-left"</span><span class="hljs-comment">;</span>

		console.log(element.classList)<span class="hljs-comment">;</span>
		element.classList.<span class="hljs-keyword">add("containerElement", </span><span class="hljs-string">"containerElement-left"</span>)<span class="hljs-comment">;</span>
		element.classList.remove(<span class="hljs-string">"hide"</span>)<span class="hljs-comment">;</span>
		element.classList.toggle(<span class="hljs-string">"hide"</span>)<span class="hljs-comment">;</span>
		</code></pre>
		</li>
		</ul>
		<h3 id="animiranje-css-a">Animiranje CSS-a</h3>
		<ul>
		<li><p>Zbog svoje dinamičke i interaktivne prirode, JavaScript se često koristi za animiranje CSS svojstava.</p>
		<pre><code class="lang-JS">  <span class="hljs-keyword">var</span> elem = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"cube"</span>);
			<span class="hljs-keyword">var</span> pos = <span class="hljs-number">0</span>;
			<span class="hljs-keyword">var</span> id = setInterval(frame, <span class="hljs-number">10</span>);

			<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">frame</span>(<span class="hljs-params"></span>) </span>{
				pos++;
				elem.style.left = pos + <span class="hljs-string">'px'</span>;
			}
		</code></pre>
		</li>
		</ul>
		<h3 id="doga-aj">Događaj</h3>
		<ul>
		<li>Kad god se nešto dogodi na našoj web stranici, možemo koristiti JavaScript u reakciji na taj događaj.</li>
		<li>Događaji:<ul>
		<li>aktivnosti unutar HTML dokumenta koje web preglednik može prepoznati</li>
		<li>mogu pokrenuti izvršavanje određene operacije definirane JavaScript jezikom</li>
		<li>radnja izvršena od strane web preglednika ili korisnika web stranice:<ul>
		<li>završi učitavanje HTML dokumenta</li>
		<li>promijeni se vrijednost input elementa</li>
		<li>klik na gumbić unutar web stranice</li>
		<li>...</li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>
		<h4 id="tipovi-doga-aja">Tipovi događaja</h4>
		<ul>
		<li>window &mdash; load, popstate, resize, ...</li>
		<li>document &mdash; DOMContentLoaded</li>
		<li>body, img, link, style, script &mdash; load</li>
		<li>form &mdash; blur, change, focus, input, invalid, reset, submit, ...</li>
		<li>Mouse &mdash; click, mouseenter, mouseleave, wheel, ...</li>
		<li>Key &mdash; keydown, keypress, keyup</li>
		<li>HTML5 &mdash; drag, dragstart, scroll, play, pause, progress, ...</li>
		<li>Mobile &mdash; touchstart, touchend</li>
		</ul>
		<h4 id="postavljanje-doga-aja">Postavljanje događaja</h4>
		<p>3 su načina:</p>
		<ol>
		<li><p><strong>inline</strong></p>
		<pre><code class="lang-HTML"> &lt;input <span class="hljs-built_in">type</span>=<span class="hljs-string">"button"</span> onblur=<span class="hljs-string">"blur();"</span> <span class="hljs-built_in">value</span>=<span class="hljs-string">"Click"</span> /&gt;
		</code></pre>
		</li>
		<li><p>kao svojstvo na elementu</p>
		<pre><code class="lang-HTML"> &lt;input <span class="hljs-built_in">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-built_in">value</span>=<span class="hljs-string">"Click"</span> /&gt;
		</code></pre>
		<pre><code class="lang-JS"> <span class="hljs-keyword">var</span> button = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">"input"</span>);
		 button.onblur = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
			 ...
		 }
		</code></pre>
		</li>
		<li><p><strong><code>addEventListener</code></strong> metoda</p>
		<pre><code class="lang-HTML"> &lt;input <span class="hljs-built_in">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-built_in">value</span>=<span class="hljs-string">"Click"</span> /&gt;
		</code></pre>
		<pre><code class="lang-JS"> <span class="hljs-keyword">var</span> button = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">"input"</span>);
		 <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleBlur</span>(<span class="hljs-params"></span>) </span>{ ... }
		 button.addEventListener(<span class="hljs-string">"blur"</span>, handleBlur);
		 button.removeEventListener(<span class="hljs-string">"blur"</span>, handleBlur);
		</code></pre>
		</li>
		</ol>
		<h3 id="es6-ecmascript-6-novosti">ES6 (ECMAScript 6) novosti</h3>
		<ol>
		<li>Nove definicije varijabli (let, const)</li>
		<li>Template literali</li>
		<li>&quot;Spread&quot; operator</li>
		<li>&quot;Arrow&quot; funkcije</li>
		<li>Klase i moduli</li>
		<li>Promises</li>
		<li><p>...</p>
		</li>
		<li><p><strong><code>let</code></strong> deklaracija</p>
		<ul>
		<li><p>Prednosti let deklaracije (naspram var):</p>
		<ul>
		<li>Označuje da planiramo mijenjati tu varijablu</li>
		<li>Opseg varijable je ograničen unutar bloka, ne funkcije</li>
		</ul>
		<pre><code class="lang-JS">var <span class="hljs-attr">x</span> = <span class="hljs-number">10</span>;
		{
			<span class="hljs-keyword">let</span> <span class="hljs-attr">x</span> = <span class="hljs-number">2</span>;
		}
		</code></pre>
		</li>
		</ul>
		</li>
		<li><p><strong><code>const</code></strong> deklaracija</p>
		<ul>
		<li>Ima slično ponašanje kao let deklaracija (block scope), osim što se vrijednost varijable <strong>ne može mijenjati</strong>.</li>
		<li><strong>Funkcionalno programiranje izbjegava promjenu stanja i mijenjanje varijabli, tako da je const deklaracija puno bolja od let ili var u 99% slučajeva</strong>.</li>
		</ul>
		</li>
		<li><p>Template literali</p>
		<ul>
		<li><p>Umjesto konkatenacije stringova pomoću + operatora, koristimo backtickove.</p>
		<pre><code class="lang-JS"><span class="hljs-keyword">const</span> ime = <span class="hljs-string">'Ivan'</span>;
		<span class="hljs-keyword">const</span> pozdrav = <span class="hljs-string">'Moje ime je <span class="hljs-subst">\${ime}</span>'</span>;
		<span class="hljs-built_in">console</span>.log(pozdrav);
		</code></pre>
		</li>
		</ul>
		</li>
		<li><p>&quot;<strong>Spread</strong>&quot; operator (<strong><code>...</code></strong>)</p>
		<ul>
		<li><p>Omogućava nam dekonstrukciju struktura kao što su nizovi ili objekti na njihove elemente.</p>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ispisiImena</span>(<span class="hljs-params">prvo, drugo, trece</span>) </span>{
			<span class="hljs-built_in">console</span>.log(prvo);
		}
		<span class="hljs-keyword">const</span> x = [<span class="hljs-string">'Ivan'</span>, <span class="hljs-string">'Marija'</span>, <span class="hljs-string">'David'</span>];
		ispisiImena(...x);
		</code></pre>
		</li>
		</ul>
		</li>
		<li><p>&quot;<strong>Rest</strong>&quot; operator (<strong><code>...</code></strong>)</p>
		<ul>
		<li><p>Omogućava nam definiciju funkcije sa nepoznatim brojem argumenata.</p>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">vratiZbroj</span><span class="hljs-params">(<span class="hljs-rest_arg">...args</span>)</span> </span>{<span class="hljs-comment">// args -&gt; niz</span>
			let suma = <span class="hljs-number">0</span>;
			<span class="hljs-keyword">for</span> (let arg of args) suma += arg;
			<span class="hljs-keyword">return</span> suma;
		}
		console.log(vratiZbroj(<span class="hljs-number">1</span>)); <span class="hljs-comment">// 1</span>
		console.log(vratiZbroj(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>)); <span class="hljs-comment">// 6</span>
		</code></pre>
		</li>
		</ul>
		</li>
		<li><p>&quot;<strong>Arrow</strong>&quot; funkcije (<code>=&gt;</code>)</p>
		<ul>
		<li><p>Omogućuju kraću sintaksu za definiranje funkcija</p>
		<ul>
		<li>bez zagrada, ključnih riječi function i return, ili kombinaciji</li>
		</ul>
		<pre><code class="lang-JS"><span class="hljs-keyword">const</span> bark = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-string">"Wuf wuf"</span>;
		myArray.forEach(<span class="hljs-function"><span class="hljs-params">element</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(element));
		myArray.forEach(<span class="hljs-function"><span class="hljs-params">element</span> =&gt;</span> {
			<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>);
			<span class="hljs-keyword">return</span> element;
		);
		</code></pre>
		</li>
		</ul>
		</li>
		<li><p>Klase</p>
		<ul>
		<li>ES6 je dodao ključnu riječ <strong>class</strong>, kako bi jezik približili klasičnoj sintaksi OOP jezika (Java, C++), ali ništa se u pozadini nije promijenilo.</li>
		<li><p>Također, imamo par novih izraza koje nam pomožu u radu sa &quot;klasama&quot;.</p>
		<ul>
		<li><strong>constructor</strong> &mdash; metoda koja se zove prilikom kreiranja objekta</li>
		<li><strong>extends</strong> &mdash; za nasljeđivanje, kao u klasičnom OOPu</li>
		</ul>
		<pre><code class="lang-JS"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Golden</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Dog</span> </span>{
			constructor(breed) {
				<span class="hljs-keyword">this</span>.breed = breed;
			}
		}
		</code></pre>
		</li>
		</ul>
		</li>
		</ol>
		<h3 id="obe-anja-promises-">Obećanja (Promises)</h3>
		<ul>
		<li><p>Obećanje (<strong>promise</strong>) je objekt koji predstavlja eventualni uspješni završetak ili neuspjeh asinkrone operacije</p>
		<ul>
		<li><p>rezultirati će jednom vrijednosti koja može biti ili riješena ili neriješena (odbačena)</p>
		<pre><code class="lang-JS"><span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
		<span class="hljs-comment">// ...</span>
		<span class="hljs-keyword">if</span> ( <span class="hljs-comment">/*...*/</span> ) {
			<span class="hljs-keyword">return</span> resolve;
		}
		<span class="hljs-keyword">return</span> reject;
		})
		.then()
		.catch();
		</code></pre>
		</li>
		<li><p><strong>Egzekutor funkcija</strong> - mora vratiti ili resolve ili reject callback funkciju.</p>
		</li>
		<li><strong>then</strong> metoda reagira na stanje fulfilled Promise objekta &rarr; može primiti dva argumenta: callback funkcije za slučaj uspjeha ili neuspjeha</li>
		</ul>
		</li>
		</ul>
		<h3 id="api-application-programming-interface">API - Application Programming Interface</h3>
		<ul>
		<li><p>Sučelje aplikacijskog programa koje se može definirati kao skup metoda komunikacije između različitih softverskih komponenti.</p>
		<p><img src="./media/API.png" alt="API image" style="width:300px;"></p>
		</li>
		</ul>
		<h3 id="ajax-asynchronous-javascript-and-xml-">AJAX (Asynchronous JavaScript And XML)</h3>
		<ul>
		<li>predstavlja standard u web razvoju</li>
		<li>omogućuje asinkronu komunikaciju klijenta i poslužitelja<ul>
		<li>razmjena podataka s web poslužiteljem odvija se u pozadini (bez prekidanja rada skripte u web pregledniku)</li>
		<li>moguće je <strong>slati podatke</strong> na poslužitelj i <strong>primati ih</strong> s njega, nakon što je stranica već učitana, bez da se prekida njen rad u pregledniku klijenta</li>
		<li>omogućuje asinkrono ažuriranje web stranica<ul>
		<li>moguće je ažurirati dio web stranice, bez ponovnog učitavanja cijele stranice</li>
		</ul>
		</li>
		</ul>
		</li>
		<li>izrađuje se više interaktivna web aplikacija</li>
		</ul>
		<h4 id="ajax-skripta">AJAX skripta</h4>
		<ul>
		<li><p>primjer skripte koja šalje zahtjev poslužitelju te rukuje dobivenim odgovorom:</p>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">loadData</span>(<span class="hljs-params"></span>) </span>{
			<span class="hljs-keyword">var</span> xhttp = <span class="hljs-keyword">new</span> XMLHttpRequest();
			xhttp.onreadystatechange = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
				<span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.readyState == <span class="hljs-number">4</span> &amp;&amp; <span class="hljs-keyword">this</span>.status == <span class="hljs-number">200</span>) {
					<span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"content"</span>).innerHTML = <span class="hljs-keyword">this</span>.responseText;
				}
			};
			xhttp.open(<span class="hljs-string">"GET"</span>, <span class="hljs-string">"data.php"</span>, <span class="hljs-literal">true</span>);
			xhttp.send();
		}
		</code></pre>
		</li>
		</ul>
		<h3 id="implementacija-asinkronih-operacija-putem-metode-fetch-">Implementacija asinkronih operacija putem metode <code>fetch</code></h3>
		<ul>
		<li>Kao alternativu objektu tipa XMLHttpRequest za realizaciju
		asinkronih operacija možemo koristiti metodu <code>fetch()</code><ul>
		<li>rad joj se temelji na objektu tipa Promise (obećanje)</li>
		<li>daje nam veću fleksibilnost te pojednostavljuje definiciju skripte</li>
		</ul>
		</li>
		</ul>
		<p>Rad pomoću <code>fetch()</code>:</p>
		<ol>
		<li>dohvaćanje JSON sadržaja iz odgovora</li>
		<li>prosljeđivanje dohvaćenih podataka funkciji koja će s njima rukovati</li>
		<li>ako Promise rezultira s neuspješnom obradom zahtjeva, opis greške šaljemo funkciji koja će s njime rukovati</li>
		</ol>
		<pre><code class="lang-JS">fetch(<span class="hljs-string">"URI"</span>)
		.then(<span class="hljs-function"><span class="hljs-params">odgovor</span> =&gt;</span> odgovor.json()) <span class="hljs-comment">// 1.</span>
		.then(<span class="hljs-function"><span class="hljs-params">podaci</span> =&gt;</span> rukujPodacima(podaci)) <span class="hljs-comment">// 2.</span>
		.catch(<span class="hljs-function"><span class="hljs-params">greska</span> =&gt;</span> rukujGreskom(greska.toString())); <span class="hljs-comment">// 3.</span>
		</code></pre>
		<h3 id="minifikacija-js-a">Minifikacija JS-a</h3>
		<ul>
		<li><p>Load-anje JavaScript koda (kao i HTML-a i CSS-a) se može smanjiti <strong>minifikacijom skripti</strong>, što smanjuje veličinu datoteke.</p>
		</li>
		<li><p>prije:</p>
		<pre><code class="lang-JS"><span class="hljs-comment">// return random number between 1 and 6</span>
		<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">dieToss</span>(<span class="hljs-params"></span>) </span>{
			<span class="hljs-keyword">return</span> <span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">6</span>) + <span class="hljs-number">1</span>;
		}
		<span class="hljs-comment">// function returns a promise that succeeds if a 6 is tossed</span>
		<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">tossASix</span>(<span class="hljs-params"></span>) </span>{
			<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> RSVP.Promise(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">fulfill, reject</span>) </span>{
				<span class="hljs-keyword">var</span> number = <span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">6</span>) + <span class="hljs-number">1</span>;
				<span class="hljs-keyword">if</span> (number === <span class="hljs-number">6</span>) {
					fulfill(number);
				} <span class="hljs-keyword">else</span> {
					reject(number);
				}
			});
		}
		<span class="hljs-comment">// display toss result and launch another toss</span>
		<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">logAndTossAgain</span>(<span class="hljs-params">toss</span>) </span>{
			<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Tossed a "</span> + toss + <span class="hljs-string">", need to try again."</span>);
			<span class="hljs-keyword">return</span> tossASix();
		}
		<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">logSuccess</span>(<span class="hljs-params">toss</span>) </span>{}
		</code></pre>
		</li>
		<li><p>poslije:</p>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">dieToss</span>(<span class="hljs-params"></span>)</span>{<span class="hljs-keyword">return</span> <span class="hljs-built_in">Math</span>.floor(<span class="hljs-number">6</span>*<span class="hljs-built_in">Math</span>.random())+<span class="hljs-number">1</span>}<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">tossASix</span>(<span class="hljs-params"></span>)</span>{<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> RSVP.Promise(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">a,b</span>)</span>{<span class="hljs-keyword">var</span> c=<span class="hljs-built_in">Math</span>.floor(<span class="hljs-number">6</span>*<span class="hljs-built_in">Math</span>.random())+<span class="hljs-number">1</span>;<span class="hljs-number">6</span>===c?a(c):b(c)})}<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">logAndTossAgain</span>(<span class="hljs-params">a</span>)</span>{<span class="hljs-keyword">return</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Tossed a "</span>+a+<span class="hljs-string">", need to try again."</span>),tossASix()}<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">logSuccess</span>(<span class="hljs-params">a</span>)</span>{}
		</code></pre>
		</li>
		</ul>
		<h2 id="javascript-zadaci">JavaScript - Zadaci</h2>
		<h3 id="zadatak">Zadatak</h3>
		<p>Je li JavaScript jezik predviđen za objektno-orijentirano ili funkcijsko programiranje?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>JavaScript je skriptni programski jezik visoke razine, dobar i za <strong>objektno-orijentirano</strong> i za <strong>funkcijsko programiranje</strong>.</p>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što je ECMAScript?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>JavaScript jezik se razvija prema ECMAScript specifikaciji:</p>
		<ul>
		<li>opisuje sintaksu i ponašanje programskog jezika</li>
		<li>definira standard za implementaciju JavaScript jezika.</li>
		</ul>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što od navedenog nije ispravan identifikator varijable?</p>
		<ol>
		<li>1userData</li>
		<li>$userData</li>
		<li>user_data</li>
		<li>user1Data</li>
		</ol>
		<h4 id="rje-enje">Rješenje</h4>
		<ol>
		<li>1userData</li>
		</ol>
		<h3 id="zadatak">Zadatak</h3>
		<p>Koji izraz koristimo u definiciji spremnika za podatke ako želimo onemogućiti promjenu primitivne vrijednosti?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>const</p>
		<h3 id="zadatak">Zadatak</h3>
		<p>Opišite pojedine djelokruge varijabli.</p>
		<ul>
		<li>globalni djelokrug (globalne varijable)
		stranice brišu se</li>
		<li>djelokrug funkcije (lokalne varijable)</li>
		<li>djelokrug bloka</li>
		</ul>
		<h4 id="rje-enje">Rješenje</h4>
		<ul>
		<li>globalni djelokrug (globalne varijable)<ul>
		<li>definiraju se izvan funkcija</li>
		<li>mogu se koristiti u čitavom programu, zatvaranjem stranice brišu se</li>
		</ul>
		</li>
		<li>djelokrug funkcije (lokalne varijable)<ul>
		<li>definiraju se unutar funkcije te se mogu koristiti samo unutar nje</li>
		<li>izlaskom iz funkcije brišu se</li>
		</ul>
		</li>
		<li>djelokrug bloka<ul>
		<li>definiraju se unutar bloka {} pomoću ključne riječi let</li>
		<li>dostupne su samo unutar bloka u kojemu su definirane</li>
		<li>moraju se deklarirati prije upotrebe te se ne mogu ponovo deklarirati</li>
		</ul>
		</li>
		</ul>
		<h3 id="zadatak">Zadatak</h3>
		<p>Deklarirajte i inicijalizirajte varijable <code>firstName</code> i <code>lastName</code> i spojite ih u varijablu <code>fullName</code>, ali s razmakom (<code>&quot; &quot;</code>) između imena i prezimena.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-JS"><span class="hljs-built_in">var</span> firstName = <span class="hljs-string">"John"</span>;
		<span class="hljs-built_in">var</span> lastName = <span class="hljs-string">"Doe"</span>;
		<span class="hljs-built_in">var</span> fullName = firstName + <span class="hljs-string">" "</span> + lastName;
		<span class="hljs-comment">/* ili */</span>
		<span class="hljs-built_in">var</span> fullName = firstName.<span class="hljs-built_in">concat</span>(<span class="hljs-string">" "</span>, lastName);
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Deklarirajte varijable <code>y</code> i <code>z</code> te im dodijelite proizvoljne vrijednosti. Nakon toga razlomite ovu ternarnu operaciju na 3 različite operacije (upotrebom grananja). Ispišite dobivenu vrijednost varijable <code>x</code>.</p>
		<pre><code class="lang-JS"><span class="hljs-attribute">var x</span> = z === 2 ? y : 5;
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-JS">var x;
		var <span class="hljs-attr">y</span> = <span class="hljs-number">10</span>, <span class="hljs-attr">z</span> = <span class="hljs-number">2</span>;
		<span class="hljs-keyword">if</span> (<span class="hljs-attr">z</span> === <span class="hljs-number">2</span>) {
			<span class="hljs-attr">x</span> = y;
		} <span class="hljs-keyword">else</span> {
			<span class="hljs-attr">x</span> = <span class="hljs-number">5</span>;
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Koji izraz možemo koristiti kao alternativu &quot;<code>if</code>&quot; izraza za postavljanje višestrukog grananja?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Izraz &quot;<code>switch</code>&quot;.</p>
		<h3 id="zadatak">Zadatak</h3>
		<p>Koliko puta će se izvršiti sljedeći blok naredbi?</p>
		<pre><code class="lang-JS"><span class="hljs-keyword">for</span> (let <span class="hljs-built_in">count</span> = <span class="hljs-number">0</span>; <span class="hljs-built_in">count</span> &lt;= <span class="hljs-number">10</span>; <span class="hljs-built_in">count</span>+=<span class="hljs-number">2</span>) {
			console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">count</span>);
		}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<p>6 puta.</p>
		<h3 id="zadatak">Zadatak</h3>
		<p>S obzirom da je uvjet petlje lažan blok naredbi se neće niti jedanput izvršiti. Promijenite definiciju uvjetne petlje tako se da blok naredbi uvijek izvrši barem jedanput, bez obzira o istinitosti uvjeta. Vrijednost varijable &quot;<code>count</code>&quot;, kao i izraz uvjeta ne smijete promijeniti.</p>
		<pre><code class="lang-JS">var <span class="hljs-built_in">count</span> = <span class="hljs-number">10</span><span class="hljs-comment">;</span>
		while (<span class="hljs-built_in">count</span> &lt; <span class="hljs-number">10</span>) {
			console.log(<span class="hljs-built_in">count</span>)<span class="hljs-comment">;</span>
			<span class="hljs-built_in">count</span>++<span class="hljs-comment">;</span>
		}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-JS">var <span class="hljs-built_in">count</span> = <span class="hljs-number">10</span><span class="hljs-comment">;</span>
		do {
			console.log(<span class="hljs-built_in">count</span>)<span class="hljs-comment">;</span>
			<span class="hljs-built_in">count</span>++<span class="hljs-comment">;</span>
		} while (<span class="hljs-built_in">count</span> &lt; <span class="hljs-number">10</span>)<span class="hljs-comment">;</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Unutar petlji možemo koristiti izraze <code>continue</code> i <code>break</code>. Koja je razlika između njih?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Izraz <code>continue</code> prekida trenutnu iteraciju (odnosno trenutno izvršavanje bloka naredbi) te nastavlja s idućom. Izraz <code>break</code> prekida izvršavanje petlje te izlazi iz nje.</p>
		<h3 id="zadatak">Zadatak</h3>
		<p>Napišite JavaScript funkciju koja prihvaća cjelobrojnu vrijednost kao argument te vraća poruku da li se radi o parnom ili neparnom broju. Pretpostavite da će argument uvijek biti cjelobrojna vrijednost.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">parniIliNeparni</span><span class="hljs-params">(a)</span></span>{
			<span class="hljs-keyword">if</span>(a % <span class="hljs-number">2</span> == <span class="hljs-number">0</span>){
				<span class="hljs-keyword">return</span> <span class="hljs-string">"Broj "</span> + a + <span class="hljs-string">" je paran."</span>;
			} <span class="hljs-keyword">else</span> {
				<span class="hljs-keyword">return</span> <span class="hljs-string">"Broj "</span> + a + <span class="hljs-string">" je neparan."</span>;
			}
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Napišite JavaScript funkciju koja prihvaća zadani niz kao argument i pronalazi najdužu riječ unutar niza. Vratite tu riječ iz funkcije i spremite u varijablu čiju ćete vrijednost ispisati u konzoli.</p>
		<pre><code class="lang-JS"><span class="hljs-attribute">var rijeci</span> = [<span class="hljs-string">'quickest'</span>, <span class="hljs-string">'brown'</span>, <span class="hljs-string">'fox'</span>, <span class="hljs-string">'jumps'</span>, <span class="hljs-string">'over'</span>, <span class="hljs-string">'the'</span>, <span class="hljs-string">'lazy'</span>, <span class="hljs-string">'dog'</span>];
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-JS"><span class="hljs-keyword">var</span> rijeci = [<span class="hljs-string">'quickest'</span>, <span class="hljs-string">'brown'</span>, <span class="hljs-string">'fox'</span>, <span class="hljs-string">'jumps'</span>, <span class="hljs-string">'over'</span>, <span class="hljs-string">'the'</span>, <span class="hljs-string">'lazy'</span>, <span class="hljs-string">'dog'</span>];
		<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">pronadiNajduljuRijec</span>(<span class="hljs-params">niz</span>) </span>{
			<span class="hljs-keyword">var</span> rijec = <span class="hljs-string">""</span>;
			<span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; niz.length; i++) {
				<span class="hljs-keyword">if</span> (rijec.length &lt; niz[i].length) {
					rijec = niz[i];
				}
			}
		<span class="hljs-keyword">return</span> rijec;
		}
		<span class="hljs-keyword">var</span> najduljaRijec = pronadiNajduljuRijec(rijeci);
		<span class="hljs-built_in">console</span>.log(najduljaRijec);
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što predstavlja BOM (Browser Object Model)?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Skupina unaprijed definiranih objekata koji stranici (JavaScript-u) omogućuju interakciju s web preglednikom. Iako ne postoji službeni standard, većina web preglednika ipak ima implementirano identično sučelje za komunikaciju s JavaScript jezikom.</p>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što predstavlja DOM (Document Object Model)?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Platforma i jezično neutralno sučelje koje omogućuje programima i skriptama dinamički pristup i ažuriranje sadržaja, strukture i stila dokumenta.</p>
		<p>Definira:</p>
		<ul>
		<li>HTML elemente kao objekte</li>
		<li>svojstva svih HTML elemenata</li>
		<li>metode pristupa svim HTML elementima</li>
		<li>događaje za sve HTML elemente.</li>
		</ul>
		<h3 id="zadatak">Zadatak</h3>
		<p>Navedite barem tri metode objekta &quot;document&quot; za dohvaćanje HTML elemenata.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-JS"><span class="hljs-built_in">document</span>.getElementById()
		<span class="hljs-built_in">document</span>.getElementsByTagName()
		<span class="hljs-built_in">document</span>.getElementsByClassName()
		<span class="hljs-built_in">document</span>.getElementsByName()
		<span class="hljs-built_in">document</span>.<span class="hljs-built_in">querySelector</span>()
		<span class="hljs-built_in">document</span>.<span class="hljs-built_in">querySelectorAll</span>()
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Koristeći JavaScript dohvatite HTML element preko njegova ID-a &quot;zaglavlje&quot; te mu dodajte novi podelement tipa <code>&lt;h1&gt;</code> s tekstom &quot;Naslov&quot; (novi element biti će posljednji podelement svog roditelja).</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-JS"><span class="hljs-keyword">var</span> roditelj = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"zaglavlje"</span>);
		roditelj.innerHTML += <span class="hljs-string">"&lt;h1&gt;Naslov&lt;/h1&gt;"</span>;
		<span class="hljs-comment">/* ili */</span>
		<span class="hljs-keyword">var</span> roditelj = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"zaglavlje"</span>);
		<span class="hljs-keyword">var</span> naslov = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">"h1"</span>);
		naslov.textContent = <span class="hljs-string">"Naslov"</span>;
		roditelj.appendChild(naslov);
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Koristeći JavaScript dohvatite HTML element preko njegova ID-a &quot;zaglavlje&quot; te ga uklonite iz HTML stabla.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-JS"><span class="hljs-keyword">var</span> element = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"zaglavlje"</span>);
		element.remove();
		<span class="hljs-comment">/* ili */</span>
		<span class="hljs-keyword">var</span> element = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"zaglavlje"</span>);
		element.parentNode.removeChild(element);
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Koristeći JavaScript dohvatite HTML element preko njegova ID-a &quot;zaglavlje&quot; te mu postavite sljedeću pozadinsku boju: &quot;<code>#ddd</code>&quot;.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-JS"><span class="hljs-keyword">var</span> element = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"zaglavlje"</span>);
		element.style.backgroundColor = <span class="hljs-string">"<span class="hljs-subst">#ddd</span>"</span>;
		<span class="hljs-comment">/* ili */</span>
		<span class="hljs-keyword">var</span> element = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"zaglavlje"</span>);
		element.style.cssText = <span class="hljs-string">"background-color: <span class="hljs-subst">#ddd</span>;"</span>;
		</code></pre>
		<h2 id="razvojna-okolina">Razvojna okolina</h2>
		<h3 id="verzioniranje-koda">Verzioniranje koda</h3>
		<ul>
		<li>Verzioniranje koda služi za čuvanje i praćenje promjena u
		datoteci ili skupu datoteka</li>
		<li>Tijekom vremena, bilježe se promjene koje su se dogodile u
		datotekama</li>
		<li>Moguće je pozvati se na bilo koju prethodnu verziju<ul>
		<li>kronološki pregled promjena (tko je uveo promjene i kada )</li>
		</ul>
		</li>
		</ul>
		<h3 id="version-control-system-vcs-">Version Control System (VCS)</h3>
		<p>Korištenje sustava za kontrolu verzije donosi dvije velike
		prednosti:</p>
		<ul>
		<li>omogućuje lak oporavak u slučaju da je nešto pošlo po krivu</li>
		<li>uvelike olakšava suradnju više od jedne osobe na istom
		projektu</li>
		</ul>
		<h3 id="vrste-sustava-za-verzioniranje-koda">Vrste sustava za verzioniranje koda</h3>
		<ol>
		<li>Lokalni sustav za verzioniranje koda</li>
		<li>Centralizirani sustav za verzioniranje k0da</li>
		<li>Distribuirani sustav za verzioniranje k0da</li>
		</ol>
		<h3 id="distribuirani-sustav-za-verzioniranje-koda">Distribuirani sustav za verzioniranje koda</h3>
		<ul>
		<li>Kod distribuiranog sustava za upravljanje verzijama (<strong>Git</strong>, <strong>Mercurial</strong>, <strong>Bazaar</strong>, <strong>Darcs</strong>) klijenti na svom računalu imaju kopiju cijele baze podataka poslužitelja</li>
		<li>Ukoliko dođe do oštećenja podataka kod poslužitelja, podaci klijenata mogu se smo kopirati na novi (popravljeni) poslužitelj</li>
		<li>Jedna od glavnih prednosti DVCS-a je što klijent ne treba stalno biti spojen na poslužitelj</li>
		</ul>
		<h3 id="repozitorij">Repozitorij</h3>
		<ul>
		<li>Repozitorij (repository - repo) je mjesto na kojem se pohranjuju sve datoteke jednog projekta</li>
		<li>Repozitoriji mogu biti lokalni ili na nekom poslužitelju (ovisno o sustavu za verzioniranje koji koristimo)</li>
		<li>Na jednom repozitoriju može raditi jedna ili više osoba</li>
		<li>Neki od popularnih repozitorija: GitHub, GitLab, Bitbucket</li>
		</ul>
		<h3 id="git">Git</h3>
		<ul>
		<li><strong>Git</strong> je distribuirani sustav za verzioniranje koda (DVCS)</li>
		<li>Omogućuje praćenje promjena u izvornom kodu tijekom razvoja softvera te koordiniranje rada među programerima</li>
		<li>Git ne nudi mehanizme kontrole pristupa, ali je dizajniran za rad s drugim alatima koji su specijalizirani za kontrolu pristupa (git repozitoriji - GitHub, GitLab, Bitbucket, ..)</li>
		</ul>
		<h3 id="git-naredbe">Git naredbe</h3>
		<ul>
		<li><code>git init</code> &mdash; inicijalizacija git repozitorija</li>
		<li><code>git clone</code> &mdash; povlačenje (kloniranje) postojećeg repozitorija na lokalno računalo</li>
		<li><code>git add</code> &mdash; dodavanje datoteka na Git repozitorij (ovom naredbom označavamo datoteke čije promjene želimo sačuvati i spremiti na udaljeni repozitorij)</li>
		<li><code>git rm</code> &mdash; micanje datoteka s Git repozitorija</li>
		<li><code>git commit -m &quot;message&quot;</code> &mdash; lokalno spremanje trenutne verzije repozitorija (message - poruka, opis promjena koje želite spremiti)</li>
		<li><code>git checkout</code> &mdash; promjena grane ili vraćanje na prijašnje stanje unutar trenutne grane</li>
		<li><code>git push</code> &mdash; zapisivanje svih lokalnih commitova na udaljeni repozitorij (npr. GitHub)</li>
		<li><code>git pull</code> &mdash; povlačenje promjena s udaljenog na lokalni repozitorij</li>
		</ul>
		<h4 id="grananje">grananje</h4>
		<ul>
		<li><code>git branch</code> &mdash; kreiranje vlastite grane Git repozitorija</li>
		<li><code>git checkout &lt;ime-branch-a&gt;</code> &mdash; naredba koja služi za promjenu branch-a (ime-branch-a označava granu na koju se želimo preseliti)<ul>
		<li>uz parametar <code>-b</code> omogućuje kreiranje nove grane i postavljanje u nju</li>
		</ul>
		</li>
		<li><code>git merge</code> &mdash; spajanje dvije Git grane<ul>
		<li>git merge se najčešće koristi kako bi se promjene iz nekog branch-a zapisale u glavni (master) branch</li>
		</ul>
		</li>
		</ul>
		<h3 id="biblioteke-i-razvojni-okviri">Biblioteke i razvojni okviri</h3>
		<ul>
		<li>programska rješenja čija primjena olakšava razvoj aplikacije<ul>
		<li>osiguravaju unaprijed definirane resurse: podatkovne strukture, tipove objekata, metode, ...</li>
		</ul>
		</li>
		<li>definiraju vlastite konvencije i standarde pisanja programskog koda</li>
		<li>razlika:<ul>
		<li>biblioteke su jednostavnije, pružaju fleksibilnost u smislu da programeri sami biraju koje će resurse i kako primijeniti</li>
		<li>razvojni okvir je kompleksniji, daje zadanu arhitekturu prema kojoj se razvija aplikacija &rarr; pruža veću pomoć u radu, ali je teže naučiti njegovu primjenu</li>
		</ul>
		</li>
		<li>primjeri:<ul>
		<li>jQuery</li>
		<li>Handlebars</li>
		<li>Bootstrap</li>
		</ul>
		</li>
		</ul>
		<h3 id="babel">Babel</h3>
		<ul>
		<li>JavaScript compiler</li>
		<li>Babel se uglavnom koristi za pretvaranje ECMAScript 2015+ koda u unazad kompatibilnu verziju JavaScript-a u trenutnim i starijim preglednicima ili okruženjima.</li>
		<li><p>pr.:</p>
		<pre><code class="lang-JS">[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map((n) =&gt; n + <span class="hljs-number">1</span>);

		<span class="hljs-comment">// pretvara u</span>

		[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>].map(function(n) {
			return n + <span class="hljs-number">1</span>;
		});
		</code></pre>
		</li>
		</ul>
		<h3 id="node-js">Node.js</h3>
		<ul>
		<li>Node.js je JavaScript runtime environment - razvojna okolina koja omogućuje pokretanje JavaScript programa izvan web preglednika.</li>
		<li>Uz Node.js instalaciju dolazi i snažan upravitelj programskim paketima - npm (node package manager):<ul>
		<li>softverski alat koji automatizira proces instaliranja, nadogradnje, konfiguriranja i brisanja računalnih programa ili biblioteka (paketa).</li>
		</ul>
		</li>
		<li>naredbe:<ul>
		<li><code>npm version</code> - trenutna verzija npm-a</li>
		<li><code>npm run</code> - lista raspoloživih skripti</li>
		<li><code>npm run &lt;nazivSkripte&gt;</code> - pokretanje odabrane skripte</li>
		<li><code>npm search &lt;nazivPaketa&gt;</code> - pretraživanje npm baze paketa</li>
		<li><code>npm init</code> - inicijalizira node paket – kreira package.json datoteku</li>
		<li><code>npm install --save &lt;nazivPaketa&gt;</code> - lokalna instalacija paketa i editiranje package.json datoteke (parametar --save se podrazumijeva)</li>
		<li><code>npm install &lt;nazivPaketa&gt;@&lt;verzija&gt;</code> - instaliranje točno određene verzije paketa</li>
		<li><code>npm install --save-dev &lt;nazivPaketa&gt;</code> - instaliranje paketa koji se koriste samo prilikom razvoja aplikacije i editiranje package.json datoteke</li>
		<li><code>npm install -g &lt;nazivPaketa&gt;</code> - globalna instalacija paketa</li>
		<li><code>npm install &lt;lokacija paketa na disku&gt;</code> - instaliranje paketa s računala</li>
		<li><code>npm uninstall --save &lt;nazivPaketa&gt;</code> - brisanje paketa i brisanje iz package.json datoteke (parametar <code>--save</code> se podrazumijeva)</li>
		<li><code>npm uninstall --no-save &lt;nazivPaketa&gt;</code> - brisanje paketa (neće se brisati iz datoteke package.json)</li>
		<li><code>npm uninstall -g &lt;nazivPaketa&gt;</code> - brisanje globalnog paketa</li>
		<li><code>npm ls</code> - lista paketa instaliranih u trenutnom direktoriju</li>
		<li><code>npm ls -g</code> - lista globalno instaliranih paketa</li>
		</ul>
		</li>
		</ul>
		<h3 id="task-runner-i">Task runner-i</h3>
		<ul>
		<li>Task runner je alat koji omogućuje automatizaciju ponavljajućih zadataka koji se tipično rade ručno tijekom razvoja projekta.</li>
		<li><p>grunt, gulp, broccoli, brunch, ...</p>
		</li>
		<li><p>CSS:</p>
		<ul>
		<li>Kompiliraj SCSS u CSS</li>
		<li>Pokreni Autoprefixer na novom CSS-u</li>
		<li>Minificiraj CSS</li>
		</ul>
		</li>
		<li>JavaScript<ul>
		<li>Provjeri JavaScript error-e</li>
		<li>Konkateniraj sve JS file-ove</li>
		<li>Minificiraj skripte</li>
		</ul>
		</li>
		<li>Ostalo<ul>
		<li>Optimiziraj sve JPG, GIF, or PNG slike</li>
		<li>Prati datoteke i pokreni task-ove ako je potrebno</li>
		<li>Pokreni BrowserSync radi testiranja u više preglednika i uređaja odjednom</li>
		</ul>
		</li>
		</ul>
		<h3 id="bundler-i">Bundler-i</h3>
		<ul>
		<li><strong>Module bundler</strong> je alat koji se koristi prilikom izgradnje aplikacije za produkciju</li>
		<li><strong>Bundling</strong> je proces kombiniranja i optimizacije više modula u jedan ili više proizvodno spremnih paketa</li>
		<li><p>pr.: webpack, rollup, browserify, fusebox ...</p>
		<p><img src="./media/bundler.jpg" alt="Bundler graph" style="width:50%;"></p>
		</li>
		</ul>
		<h2 id="razvojna-okolina-zadaci">Razvojna okolina - Zadaci</h2>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što je sustav za verzioniranje koda te zašto se koristi u web razvoju?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Alat koji omogućuje čuvanje i praćenje promjena u datoteci ili skupu datoteka tijekom vremena (tko je napravio promjenu i kada). Omogućuje lak oporavak u slučaju da je nešto pošlo po krivu (vraćanje datoteka u prethodno stanje) te olakšava suradnju više od jedne osobe koje rade na istom projektu.</p>
		<h3 id="zadatak">Zadatak</h3>
		<p>Koji tipovi sustava za verzioniranje koda postoje?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<ul>
		<li>Lokalni sustav za verzioniranje koda</li>
		<li>Centralizirani sustav za verzioniranje koda</li>
		<li>Distribuirani sustav za verzioniranje koda</li>
		</ul>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što je Git?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Git je distribuirani sustav za verzioniranje koda (DVCS). Omogućuje praćenje promjena u izvornom kodu tijekom razvoja softvera te koordiniranje rada među programerima.</p>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što je repozitorij?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Repozitorij je mjesto na kojem se pohranjuju sve datoteke jednog projekta. Može biti lokalni ili na nekom poslužitelju, dok na jednom repozitoriju može raditi jedna ili više osoba.</p>
		<h3 id="zadatak">Zadatak</h3>
		<p>Napišite Git naredbu s kojom se inicijalizira Git repozitorij.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-git"><span class="hljs-attribute">git init</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Napišite Git naredbu s kojom se lokalno sprema trenutna verzija repozitorija.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-git"><span class="hljs-attribute">git</span> commit -m <span class="hljs-string">"message"</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Napišite Git naredbu za zapisivanje svih lokalnih commit-ova na udaljeni repozitorij (npr. GitHub).</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-git">git <span class="hljs-keyword">push</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Napišite Git naredbu za povlačenje promjena s udaljenog na lokalni repozitorij.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-git"><span class="hljs-attribute">git pull</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Napišite Git naredbu za spajanje dvije Git grane kako bi se promjene iz jedne zapisale u drugu (u glavnu granu repozitorija – master).</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-git">git <span class="hljs-keyword">merge</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što predstavlja jQuery?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Brzu JavaScript biblioteku bogatu mnogim mogućnostima.
		Značajno pojednostavljuje izvršavanje sljedećih radnji:</p>
		<ul>
		<li>upravljanje HTML stablom (DOM)</li>
		<li>upravljanje CSS stilovima</li>
		<li>primjenu efekata i animacija u radu web stranica</li>
		<li>upotrebu događaja za pokretanje definiranih operacija</li>
		<li>asinkronu komunikacija klijenta i poslužitelja (AJAX).</li>
		</ul>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što je npm (node package manager)?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Snažan upravitelj programskim paketima:</p>
		<ul>
		<li>softverski alat koji automatizira proces instaliranja, nadogradnje, konfiguriranja i brisanja računalnih programa ili biblioteka (paketa)</li>
		<li>dolazi s instalacijom Node.js okruženja.</li>
		</ul>
		<h3 id="zadatak">Zadatak</h3>
		<p>Napišite Git naredbu s kojom se lokalno sprema trenutna verzija repozitorija.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-sh">npm <span class="hljs-keyword">install</span> --save lodash
		<span class="hljs-comment"># ili</span>
		npm <span class="hljs-keyword">install</span> lodash
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Napišite npm naredbu za instalaciju paketa &quot;jest&quot; koji se koristi samo prilikom razvoja aplikacije. Ovisnost se zapisuje u datoteku package.json (naredba editira package.json datoteku).</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-sh">npm install --<span class="hljs-built_in">save</span>-<span class="hljs-built_in">dev</span> jest
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što su task runner-i?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<ul>
		<li>Task runner je alat koji omogućuje automatizaciju ponavljajućih zadataka koji se tipično rade ručno tijekom razvoja projekta.</li>
		<li>Primjeri: gulp, grunt, broccoli, brunch, ...</li>
		</ul>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što je module bundler?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<ul>
		<li>Alat koji se koristi prilikom izgradnje aplikacije za produkciju.</li>
		<li>Omogućuje povezivanje i optimizaciju više modula (datoteka) u jedan proizvodno spreman paket.</li>
		<li>Primjeri: webpack, rollup, browserify, ...</li>
		</ul>
		<h2 id="reactjs">ReactJS</h2>
		<h3 id="-to-je-reactjs">Što je ReactJS</h3>
		<ul>
		<li>vrlo popularna JavaScript biblioteka</li>
		<li>služi za izradu korisničkih sučelja (eng. user interface - UI)</li>
		<li>pomoću malih izoliranih dijelova koda (komponenti) stvaramo
		kompleksan, efikasan i fleksibilan UI</li>
		<li>razvio: Facebook Inc. 2013. godine</li>
		<li>React aplikacije su single page aplikacije</li>
		</ul>
		<h3 id="za-to-reactjs">Zašto ReactJS</h3>
		<ul>
		<li>U čistom JavaScript-u teško je reflektirati promjene u stanju aplikacije (promjene nastale korisničkom interakcijom)</li>
		<li>Jednostavnija izrada i održavanje aplikacije</li>
		<li>Bolje performanse &mdash; virtualni DOM</li>
		<li>Velika i aktivna zajednica</li>
		</ul>
		<p>&rarr; Rezultirajući kôd ima bolje performanse jer se u pozadini koristi zrela i optimizirana biblioteka</p>
		<h3 id="create-react-app-vite-">Create React App (Vite)</h3>
		<ul>
		<li><p>Create React App je biblioteka koja omogućuje kreiranje React aplikacije samo jednom naredbom u CLI-ju:</p>
		<pre><code class="lang-sh"><span class="hljs-string">npx </span><span class="hljs-built_in">create-react-app</span> <span class="hljs-string">my-app</span>
		</code></pre>
		</li>
		<li><p>rezultat ove naredbe je direktorij my-app unutar kojeg je organizirana cijela React aplikacija</p>
		</li>
		<li>nije potrebno instalirati niti postavljati Webpack i Babel, ti alati su već konfigurirani i aplikacija je spremna za pokretanje</li>
		<li><p>moderna alternativa analogne funkcionalnosti: Vite</p>
		<pre><code class="lang-sh"><span class="hljs-built_in">npm</span> create vite@latest
		</code></pre>
		</li>
		</ul>
		<h3 id="export-import">Export/import</h3>
		<ul>
		<li>Kako bi se programski kôd napisan u jednoj datoteci mogao koristiti u drugoj datoteci, potrebno ga je:<ul>
		<li><strong>export</strong>-ati iz izvorne datoteke i</li>
		<li><strong>import</strong>-ati u datoteci u kojoj ga želimo iskoristiti</li>
		</ul>
		</li>
		</ul>
		<h4 id="export">Export</h4>
		<p>Dva su načina za napraviti export:</p>
		<ol>
		<li><strong>default export</strong> &mdash; možemo imati samo jedan default export po datoteci, kod importa moramo specificirati ime import modula</li>
		<li><strong>named export</strong> &mdash; možemo imati više named exporta po datoteci, ali kod importa moramo znati ime svakog modula</li>
		</ol>
		<h3 id="jsx">JSX</h3>
		<ul>
		<li>predstavlja proširenje JavaScript jezika<ul>
		<li>prije izvršavanja prevodi se u standardni JavaScript kod</li>
		</ul>
		</li>
		<li>koristi se za opisivanje izgleda korisničkog sučelja u React aplikaciji<ul>
		<li>olakšava dodavanje HTML-a unutar React komponenata (JavaScript koda)</li>
		</ul>
		</li>
		<li>ima sintaksu vrlo sličnu HTML-u te ga, uz znanje HTML-a vrlo lako rabe i početnici</li>
		</ul>
		<h3 id="reactjs-komponente">ReactJS komponente</h3>
		<ul>
		<li>osnovni koncept React-a &mdash; React je u svojoj jezgri biblioteka za stvaranje komponenata</li>
		<li>komponente su neovisni, ponovno iskoristivi dijelovi koda</li>
		<li>tipična React web-aplikacija može biti prikazana kao stablo komponenti i to tako da postoji jedna korijenska (<code>root</code>) komponenta (&quot;<code>App</code>&quot;), i potencijalno beskonačna količina ugniježđenih komponenti</li>
		<li>Razlikujemo:<ul>
		<li>komponente definirane funkcijom i komponente definirane klasom</li>
		<li>složene (pametne, stateful) i jednostavne (prezentacijske, stateless) komponente</li>
		</ul>
		</li>
		</ul>
		<h3 id="props">Props</h3>
		<ul>
		<li>props (&quot;property-ji&quot;) su način na koji komponente međusobno komuniciraju</li>
		<li>props-i se koriste kako bi se informacije prenijele iz parent komponente u child komponentu</li>
		<li>protok podataka kroz props-e je uvijek jednosmjeran - iz parent komponente u child komponentu</li>
		<li>child komponenta ne može i ne smije mijenjati props objekt koji je primila od parent-a</li>
		</ul>
		<h4 id="props-funkcije">Props - funkcije</h4>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ChildComponent</span>(<span class="hljs-params">props</span>) </span>{
			<span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Ja sam {props.name}<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></span>;
		}
		<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ParentComponent</span>(<span class="hljs-params"></span>) </span>{
			<span class="hljs-keyword">return</span> (
				<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Ja sam ParentComponent<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">ChildComponent</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Child"</span> /&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
			);
		}</span>
		</code></pre>
		<h4 id="props-klase">Props - klase</h4>
		<pre><code class="lang-JS"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">ChildComponent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
			render() {
				<span class="hljs-keyword">return</span> &lt;h1&gt;<span class="hljs-type">Ja</span> sam {<span class="hljs-keyword">this</span>.props.name}&lt;/h1&gt;;
			}
		}
		<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">ParentComponent</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
			render() {
				<span class="hljs-keyword">return</span> (
					&lt;div&gt;
						&lt;h1&gt;<span class="hljs-type">Ja</span> sam <span class="hljs-type">ParentComponent</span>&lt;/h1&gt;
						&lt;<span class="hljs-type">ChildComponent</span> name=<span class="hljs-string">"Child"</span> /&gt;
					&lt;/div&gt;
				);
			}
		}
		</code></pre>
		<h4 id="children-props">Children props</h4>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Component1</span>(<span class="hljs-params">props</span>) </span>{
			<span class="hljs-keyword">return</span> (
				<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{props.children}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
			);
		}
		<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Component2</span>(<span class="hljs-params"></span>) </span>{
			<span class="hljs-keyword">return</span> (
				<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Component1</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Naslov<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Paragraf<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">Component1</span>&gt;</span></span>
			);
		}
		</code></pre>
		<h3 id="stanje-komponente-state-">Stanje komponente (state)</h3>
		<ul>
		<li><strong>state</strong> - lokalno stanje komponente<ul>
		<li>komponenta ima kontrolu nad svojim stanjem i može ga mijenjati pomoću metode <strong>setState</strong> &mdash; komponenta definirana klasom</li>
		<li><strong>useState</strong> hook omogućuje korištenje stanja u komponentama definiranima funkcijom</li>
		</ul>
		</li>
		<li>kod promjene stanja komponenta se ponovno iscrtava (renderira) kako bi prikazala promjene u stanju<ul>
		<li>renderiraju se i sve njezine child komponente</li>
		</ul>
		</li>
		</ul>
		<pre><code class="lang-JS">class MyComponent extends React.Component {
			<span class="hljs-keyword">state</span> = {
				city: <span class="hljs-string">"Zagreb"</span>,
				<span class="hljs-keyword">state</span>: <span class="hljs-string">"Hrvatska"</span>
			};
			changeState = () =&gt; {
				const newCity = this.<span class="hljs-keyword">state</span>.city === <span class="hljs-string">"Zagreb"</span> ? <span class="hljs-string">"Osijek"</span> : <span class="hljs-string">"Zagreb"</span>;
				this.<span class="hljs-built_in">set</span>State({ city: newCity });
			};
		}
		render() {
			return (
				<span class="hljs-variable">&lt;div&gt;</span>
					<span class="hljs-variable">&lt;h1&gt;</span>Grad: {this.<span class="hljs-keyword">state</span>.city}&lt;/h1&gt;
					<span class="hljs-variable">&lt;h1&gt;</span>Država: {this.<span class="hljs-keyword">state</span>.<span class="hljs-keyword">state</span>}&lt;/h1&gt;
					<span class="hljs-variable">&lt;button onClick={this.changeState}&gt;</span>Drugi grad&lt;/button&gt;
				&lt;/div&gt;
			);
		}
		</code></pre>
		<h3 id="hooks">Hooks</h3>
		<ul>
		<li>hooks predstavljaju novi dodatak koji se pojavio s React 16.8 verzijom biblioteke<ul>
		<li>omogućuju upotrebu stanja (state) i drugih mogućnosti unutar komponenata definiranih funkcijom (npr. simulacija životnog ciklusa komponente)</li>
		</ul>
		</li>
		<li><strong>useState</strong> hook funkcija omogućuje korištenje stanja u komponentama definiranima funkcijom</li>
		<li><strong>useEffect</strong> hook funkcija omogućuje simulacija životnog ciklusa komponente</li>
		</ul>
		<h3 id="usestate-hook">useState hook</h3>
		<ul>
		<li><p>pr.:</p>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Example</span>(<span class="hljs-params"></span>) </span>{
			<span class="hljs-comment">// Deklaracija state varijable (count) i metode za njeno ažuriranje (setCount)</span>
			<span class="hljs-keyword">const</span> [count, setCount] = useState(<span class="hljs-number">0</span>);
			<span class="hljs-keyword">var</span> changeCount = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
				setCount(count + <span class="hljs-number">1</span>);
			}
			<span class="hljs-keyword">return</span> (<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>You clicked {count} times<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{changeCount}</span>&gt;</span> Change count <span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>);
		}
		</code></pre>
		</li>
		</ul>
		<h3 id="doga-aji-events-">Događaji (events)</h3>
		<p><a name="pookie"></a></p>
		<ul>
		<li>ao i u HTML-u, postoji definirana lista događaja na koje React komponente mogu reagirati, npr: onClick, onChange, ...</li>
		<li>aktiviranjem događaja izvršava se funkcija dodijeljena tom događaju - vrlo često ta funkcija mijenja stanje neke komponente ili cijele aplikacije</li>
		<li>camelCase imena:<ul>
		<li><code>onclick</code> &rarr; <code>onClick</code></li>
		<li><code>onchange</code> &rarr; <code>onChange</code></li>
		<li><code>onmouseover</code> &rarr; <code>onMouseOver</code></li>
		<li><code>onload</code> &rarr; <code>onLoad</code></li>
		</ul>
		</li>
		</ul>
		<h4 id="primjer-kori-tenja-event-a-">Primjer korištenja event-a:</h4>
		<pre><code class="lang-JS">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ReactComponent</span>(<span class="hljs-params"></span>) </span>{
				<span class="hljs-keyword">const</span> handleButtonClick = <span class="hljs-function">(<span class="hljs-params">event</span>) =&gt;</span> {
					<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Button click!"</span>);
				};
				<span class="hljs-keyword">return</span> (
					<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleButtonClick}</span>&gt;</span>
						Klikni me!
					<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
				);
			}
		</code></pre>
		<h3 id="metode-ivotnog-ciklusa">Metode životnog ciklusa</h3>
		<ul>
		<li>životni ciklus komponente može se definirati kao niz metoda koje se pozivaju u različitim fazama postojanja komponente<ul>
		<li>možemo definirati kod koji će se izvršiti u točno određenom trenutku procesa</li>
		</ul>
		</li>
		<li><p>te metode nazivamo lifecycle methods, a pozivaju se u sljedećim fazama:</p>
		<ul>
		<li>inicijalizacija komponente (<strong>initialization</strong>)</li>
		<li>postavljanje na DOM (<strong>mounting</strong>)</li>
		<li>ažuriranje (<strong>updating</strong>)</li>
		<li>brisanje iz DOM-a (<strong>unmounting</strong>)</li>
		</ul>
		<p><img src="./media/lifeCycle.jpg" alt="components lifecycle" style="width:300px;"></img></p>
		</li>
		<li><p>pr.:</p>
		<pre><code class="lang-JS"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">LifeCycle</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
			<span class="hljs-keyword">constructor</span>(props) {
				<span class="hljs-keyword">super</span>(props);
				<span class="hljs-keyword">this</span>.state = { <span class="hljs-attr">data</span>: <span class="hljs-literal">null</span> };
			}
			componentDidMount() {
				<span class="hljs-keyword">this</span>.getList();
			}
			getList = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
				<span class="hljs-comment">// method to make api call</span>
			};
			render() {
				<span class="hljs-keyword">return</span> (<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Hello mounting methods!<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"container"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>);
			}
		}
		</code></pre>
		</li>
		</ul>
		<h3 id="useeffect-hook">useEffect hook</h3>
		<ul>
		<li>useEffect hook koristimo kada želimo uzrokovati neke nuspojave (eng. side effects) prije ili poslije iscrtavanja (renderiranja) komponente definirane funkcijom</li>
		<li>useEffect hook može zamijeniti glavne lifecycle metode: <strong><code>componentDidMount()</code></strong>, <strong><code>componentDidUpdate()</code></strong> te <strong><code>componentWillUnmount()</code></strong><ul>
		<li>različitom implementacijom useEffect hook-a možemo ga pokrenuti u istim životnim fazama (funkcijske) komponente u kojima su se pokretale lifecycle metode u komponentama definiranima klasom</li>
		</ul>
		</li>
		<li><p>pr.:</p>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Component</span>(<span class="hljs-params"></span>) </span>{
			useEffect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
			<span class="hljs-comment">/* ... */</span>
			}, [stateVariable]); <span class="hljs-comment">// Pokreni efekt samo ako se promijenila vrijednost stateVariable</span>
			<span class="hljs-keyword">return</span> (<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>Hello useEffect hook!<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>);
		}
		</code></pre>
		</li>
		</ul>
		<h3 id="liste-u-react-u">Liste u React-u</h3>
		<ul>
		<li><p>liste olakšavaju definiciju sadržaja koji vraća određena komponenta te omogućuju veću fleksibilnost u upravljanju njime:</p>
		<pre><code class="lang-JS"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">NumberList</span>(<span class="hljs-params"></span>) </span>{
			<span class="hljs-keyword">const</span> numbers = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];
			<span class="hljs-keyword">return</span> (
				<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span>
					{numbers.map(number =&gt; <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>{number}<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>)}
				<span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></span>
			);
		}
		</code></pre>
		</li>
		</ul>
		<h3 id="obrasci">Obrasci</h3>
		<ul>
		<li><p>Primjer React obrasca s funkcijama koje reagiraju na događaje promjene imena (onChange) i predavanja obrasca (onSubmit):</p>
		<ul>
		<li>podaci obrasca se pohranjuju u stanje komponente</li>
		</ul>
		<pre><code class="lang-JSX"><span class="hljs-tag">&lt;<span class="hljs-name">form</span> <span class="hljs-attr">onSubmit</span>=<span class="hljs-string">{this.handleSubmit}</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>Ime:<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"name"</span> <span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.handleChange}</span> <span class="hljs-attr">value</span>=<span class="hljs-string">{this.state.name}/</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"Potvrdi"</span> /&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
		</code></pre>
		</li>
		</ul>
		<h3 id="css-u-react-u">CSS u React-u</h3>
		<p>Najčešći načini za stilizaciju sadržaja komponenti u React-u:</p>
		<ol>
		<li>CSS Stylesheet</li>
		<li>Inline stilovi</li>
		<li><p>CSS Modules</p>
		</li>
		<li><p><strong>pr 1.</strong> CSS Stylesheet: <code>ShadowCard.js</code> &amp; <code>ShadowCard.css</code></p>
		<pre><code class="lang-JS"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">"react"</span>;
		<span class="hljs-keyword">import</span> <span class="hljs-string">"./ShadowCard.css"</span>;
		<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Card</span>(<span class="hljs-params"></span>) </span>{
			<span class="hljs-keyword">return</span> (
				<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"shadow-card "</span>&gt;</span>
					Dobar dan!
				<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
			);
		}
		</code></pre>
		<pre><code class="lang-CSS"><span class="hljs-selector-class">.shadow-card</span> {
			<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">8px</span>;
			<span class="hljs-attribute">box-sizing</span>: border-box;
			<span class="hljs-attribute">margin</span>: <span class="hljs-number">24px</span>;
			<span class="hljs-attribute">padding</span>: <span class="hljs-number">24px</span>;
			<span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">8px</span> <span class="hljs-number">0</span> darkgreen;
			<span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
			<span class="hljs-attribute">color</span>: darkgreen;
			<span class="hljs-attribute">font-weight</span>: bold;
		}
		</code></pre>
		</li>
		<li><p><strong>pr.2.</strong> inline: <code>ShadowCard.js</code></p>
		<pre><code class="lang-JS"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">"react"</span>;
		<span class="hljs-keyword">const</span> cardStyle = {
			<span class="hljs-attr">borderRadius</span>: <span class="hljs-number">8</span>,
			<span class="hljs-attr">boxSizing</span>: <span class="hljs-string">"border-box"</span>,
			<span class="hljs-attr">margin</span>: <span class="hljs-number">24</span>,
			<span class="hljs-attr">padding</span>: <span class="hljs-number">24</span>,
			<span class="hljs-attr">boxShadow</span>: <span class="hljs-string">"0 0 8px 0 darkred"</span>,
			<span class="hljs-attr">width</span>: <span class="hljs-number">200</span>,
			<span class="hljs-attr">color</span>: <span class="hljs-string">"darkred"</span>,
			<span class="hljs-attr">fontWeight</span>: <span class="hljs-string">"bold"</span>
		};
		<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Card</span>(<span class="hljs-params"></span>) </span>{
			<span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{cardStyle}</span>&gt;</span>Dobar dan!<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>;
		}
		</code></pre>
		</li>
		<li><p><strong>pr.3.</strong> SCC Modules: <code>ShadowCard.js</code> &amp; <code>ShadowCard.module.css</code></p>
		<pre><code class="lang-JS"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">"react"</span>;
		<span class="hljs-keyword">import</span> styles <span class="hljs-keyword">from</span> <span class="hljs-string">"./ShadowCard.module.css"</span>;

		<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Card</span>(<span class="hljs-params"></span>) </span>{
			<span class="hljs-keyword">return</span>
				(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">{styles.shadow-card}</span>&gt;</span>
					Dobar dan!
				<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>);
		}
		</code></pre>
		<pre><code class="lang-CSS"><span class="hljs-selector-class">.shadow-card</span> {
			<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">8px</span>;
			<span class="hljs-attribute">box-sizing</span>: border-box;
			<span class="hljs-attribute">margin</span>: <span class="hljs-number">24px</span>;
			<span class="hljs-attribute">padding</span>: <span class="hljs-number">24px</span>;
			<span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">8px</span> <span class="hljs-number">0</span> darkgreen;
			<span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
			<span class="hljs-attribute">color</span>: darkgreen;
			<span class="hljs-attribute">font-weight</span>: bold;
		}
		</code></pre>
		</li>
		</ol>
		<h3 id="dodatne-mogu-nosti">Dodatne mogućnosti</h3>
		<ul>
		<li><strong>React Context</strong></li>
		<li><strong>Higher Order Components</strong> (HOC) - komponente višeg reda</li>
		<li><strong>React Router</strong></li>
		<li><strong>GraphQL</strong> = Graph Query Language, jezik upita baze graf</li>
		</ul>
		<h3 id="api">API</h3>
		<ul>
		<li><strong>API</strong> = <strong>A</strong>pplication <strong>P</strong>rogramming <strong>I</strong>nterface</li>
		<li>API-ji omogućavaju aplikacijama da komuniciraju jedna s drugom</li>
		<li><p>nas zanimaju mrežni API-ji koji služe za komunikaciju web- aplikacija (React aplikacija) s poslužiteljem na kojem se nalaze podaci</p>
		<p><img src="./media/ReactAPI.jpg" alt="React API image" style="width:400px;" /></p>
		</li>
		</ul>
		<h4 id="implementacija-asinkronih-operacija-putem-metode-fetch-">implementacija asinkronih operacija putem metode <code>fetch()</code></h4>
		<ul>
		<li><p>primjer poziva metode <code>fetch()</code></p>
		<pre><code class="lang-JS">fetch(<span class="hljs-string">"https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"</span>)
			.then(<span class="hljs-function"><span class="hljs-params">response</span> =&gt;</span> response.json())
			.then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> handleData(data))
			.catch(<span class="hljs-function"><span class="hljs-params">error</span> =&gt;</span> handleError(error.toString()));
		</code></pre>
		</li>
		</ul>
		<h3 id="skladi-ta-stanja-engl-stores-">Skladišta stanja (engl. stores)</h3>
		<ul>
		<li>u većim React aplikacijama često se pojavljuje potreba da više komponenti dijeli isto stanje aplikacije</li>
		<li>koristimo napredne biblioteke za upravljanje stanjima koje za spremanje podataka koriste skladišta stanja (state store)</li>
		<li>najpopularnije biblioteke:<ul>
		<li><strong>Redux</strong> i <strong>MobX</strong></li>
		</ul>
		</li>
		</ul>
		<h2 id="reactjs-zadaci">ReactJS Zadaci</h2>
		<h3 id="zadatak">Zadatak</h3>
		<p>Objasnite što je React.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>React je popularna JavaScript biblioteka koja služi za izradu korisničkih
		sučelja. Pomoću malih izoliranih dijelova koda (komponenti) stvaramo
		kompleksno, efikasno i fleksibilno korisničko sučelje.</p>
		<h3 id="zadatak">Zadatak</h3>
		<p>Napišite naredbu za kreiranje React aplikacije preko CLI-a (Command-line interface). Naziv aplikacije glasi &quot;react-app&quot;.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-sh"><span class="hljs-string">npx </span><span class="hljs-built_in">create-react-app</span> <span class="hljs-string">react-app</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što je potrebno napraviti kako bi se programski kôd napisan u jednoj datoteci mogao koristiti u drugoj datoteci?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Kod je potrebno:</p>
		<ul>
		<li>export-ati (napraviti izvoz) iz izvorne datoteke i</li>
		<li>import-ati (napraviti uvoz) u datoteci u kojoj ga želimo iskoristiti</li>
		</ul>
		<h3 id="zadatak">Zadatak</h3>
		<p>Prikazana je definicija React komponente koja sadrži grešku u JSX sintaksi. Objasnite u čemu je greška.</p>
		<pre><code class="lang-JS">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MyComponent</span>(<span class="hljs-params"></span>) </span>{
				<span class="hljs-keyword">return</span> (
					<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span></span>
					&lt;p&gt;How are you?<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
				);
			}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Ako komponenta vraća više JSX elemenata, svaki mora biti ugniježđen u jednom vršnom elementu, najčešće elementu <code>&lt;div&gt;</code>.</p>
		<pre><code class="lang-JS">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MyComponent</span>(<span class="hljs-params"></span>) </span>{
				<span class="hljs-keyword">return</span> (
					<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>How are you?<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
				);
			}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što je potrebno upisati na prazno mjesto kako bi uključili JavaScript izraz unutar JSX te u sadržaj koji generira ugradili zbroj konstanti <code>x</code> i <code>y</code>?</p>
		<pre><code class="lang-JS">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MyComponent</span>(<span class="hljs-params"></span>) </span>{
				<span class="hljs-keyword">const</span> x = <span class="hljs-number">5</span>, y = <span class="hljs-number">7</span>;
				<span class="hljs-keyword">return</span> (
					<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Zbroj: x + y<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
				);
			}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Unutar JSX-a JavaScript kod je potrebno postaviti unutar vitičastih zagrada: <code>{JavaScript code}</code></p>
		<pre><code class="lang-JS">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MyComponent</span>(<span class="hljs-params"></span>) </span>{
				<span class="hljs-keyword">const</span> x = <span class="hljs-number">5</span>, y = <span class="hljs-number">7</span>;
				<span class="hljs-keyword">return</span> (
					<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Hello!<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Zbroj: {x + y}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
				);
			}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Ako je vrijednost konstante &quot;user&quot; jednaka &quot;administrator&quot; komponenta vraća poruku &quot;Hello Friend&quot;, u suprotnom vraća poruku &quot;Hello Stranger&quot;. Što je potrebno upisati na prazna mjesta kako bi se postiglo zadano uvjetno iscrtavanje?</p>
		<pre><code class="lang-JS">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MyComponent</span>(<span class="hljs-params"></span>) </span>{
				<span class="hljs-keyword">const</span> user = <span class="hljs-string">"administrator"</span>;
				<span class="hljs-keyword">const</span> greetings = user === <span class="hljs-string">"administrator"</span> __ &lt;p&gt;Hello Friend&lt;<span class="hljs-regexp">/p&gt; __ &lt;p&gt;Hello Stranger&lt;/</span>p&gt;;
				<span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{greetings}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>;
		}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Koristi se ternarni operator. Fale upitnik i dvotočka.</p>
		<pre><code class="lang-JS">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MyComponent</span>(<span class="hljs-params"></span>) </span>{
			<span class="hljs-keyword">const</span> user = <span class="hljs-string">"administrator"</span>;
			<span class="hljs-keyword">const</span> greetings = user === <span class="hljs-string">"administrator"</span> ? <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hello Friend<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span> : <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Hello Stranger<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>;
			<span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{greetings}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>;
		}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Na koja dva načina je moguće kreirati komponente unutar React biblioteke?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Komponente je moguće kreirati pomoću funkcije ili klase.</p>
		<h3 id="zadatak">Zadatak</h3>
		<p>Objasnite što su propsi (&quot;property-i&quot;).</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Propsi su način na koji komponente međusobno komuniciraju:</p>
		<ul>
		<li>omogućuju prijenos informacija iz komponente roditelj (parent) u komponentu dijete (child). Protok podataka kroz propse je uvijek jednosmjeran - iz komponente roditelj u komponentu dijete:</li>
		<li>komponenta dijete ne može i ne smije mijenjati props objekt koji je primila od roditelja.</li>
		</ul>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što je potrebno upisati na prazno mjesto kako bi komponenti &quot;ChildComponent&quot; proslijedili props &quot;name&quot; s proizvoljnom vrijednošću (npr. &quot;Child&quot;)?</p>
		<pre><code class="lang-JS">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ParentComponent</span>(<span class="hljs-params"></span>) </span>{
				<span class="hljs-keyword">return</span> (
					<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Ja sam ParentComponent<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">ChildComponent</span> <span class="hljs-attr">___________</span> /&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				);
			}

			function ChildComponent(props) {
				return <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Ja sam {props.name}<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>;
			}</span>
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Potrebno je upisati <code>name=&quot;Child&quot;</code>.</p>
		<pre><code class="lang-JS">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">ParentComponent</span>(<span class="hljs-params"></span>) </span>{
				<span class="hljs-keyword">return</span> (
					<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Ja sam ParentComponent<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">ChildComponent</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"Child"</span> /&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				);
			}

			function ChildComponent(props) {
				return <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>Ja sam {props.name}<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>;
			}</span>
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što predstavlja stanje komponente te što se dogodi s komponentom ako se ono promijeni?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<ul>
		<li>Stanje komponente predstavlja built-in objekt koji sadrži podatke o komponenti.</li>
		<li>Ako se stanje komponente promijeni ona se ponovno iscrtava (renderira) kako bi prikazala promjene u stanju.</li>
		<li>Ponovnim renderiranjem komponente, renderiraju se i sve njezine child komponente.</li>
		</ul>
		<h3 id="zadatak">Zadatak</h3>
		<p>Putem koje metode je jedino ispravno mijenjati stanje komponente definirane klasom, kako bi osigurali da se ona ponovno iscrta (renderira)?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Metoda setState.</p>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što omogućuju hook funkcije? Navedite nekoliko primjera hook funkcija.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Hook funkcije omogućuju upotrebu stanja (state) i drugih mogućnosti unutar komponenata definiranih funkcijom (npr. simulacija životnog ciklusa komponente).
		Primjeri:</p>
		<ul>
		<li><strong>useState</strong> hook funkcija omogućuje korištenje stanja u komponentama definiranima funkcijom</li>
		<li><strong>useEffect</strong> hook funkcija omogućuje oponašanje rada metoda životnog ciklusa.</li>
		</ul>
		<h3 id="zadatak">Zadatak</h3>
		<p>Nadopunite definiciju komponente tako da se klikom na gumbić poziva funkcija &quot;<code>handleButtonClick</code>&quot;.</p>
		<pre><code class="lang-JS">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MyComponent</span>(<span class="hljs-params"></span>) </span>{
				<span class="hljs-keyword">const</span> handleButtonClick = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
					<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Button click!"</span>);
				};
				<span class="hljs-keyword">return</span> (
					<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">_____________________</span>&gt;</span>Klikni me!<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
				);
			}
		</code></pre>
		<h4 id="rje-enje">Rješenje</h4>
		<pre><code class="lang-JS">  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">MyComponent</span>(<span class="hljs-params"></span>) </span>{
				<span class="hljs-keyword">const</span> handleButtonClick = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
					<span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Button click!"</span>);
				};
				<span class="hljs-keyword">return</span> (
					<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleButtonClick}</span>&gt;</span>Klikni me!<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span></span>
				);
			}
		</code></pre>
		<h3 id="zadatak">Zadatak</h3>
		<p>Navedite faze životnog ciklusa React komponente.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<ol>
		<li>Inicijalizacija komponente (initialization)</li>
		<li>Postavljanje na DOM (mounting)</li>
		<li>Ažuriranje (updating)</li>
		<li>Brisanje iz DOM-a (unmounting)</li>
		</ol>
		<h3 id="zadatak">Zadatak</h3>
		<p>Što omogućuje primjena lista unutar React komponenti? Zašto elementima liste dajemo svojstvo <code>key</code> s jedinstvenom vrijednošću?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>Liste olakšavaju definiciju sadržaja (elemenata istog tipa) koji vraća
		određena komponenta te omogućuju veću fleksibilnost u upravljanju njime.</p>
		<p>Svojstvo <code>key</code> pomaže React-u da prepozna elemente liste koji su se
		promijenili, dodali ili uklonili - osigurava bolje performanse.</p>
		<h3 id="zadatak">Zadatak</h3>
		<p>Navedite tri načina za stilizaciju sadržaja komponenti u React-u.</p>
		<h4 id="rje-enje">Rješenje</h4>
		<ol>
		<li>CSS Stylesheet</li>
		<li>Inline stilovi</li>
		<li>CSS Modules</li>
		</ol>
		<h3 id="zadatak">Zadatak</h3>
		<p>Koji tip aplikacija gradimo s React-om?</p>
		<h4 id="rje-enje">Rješenje</h4>
		<p>S React-om gradimo Single-page aplikacije:</p>
		<ul>
		<li>web-aplikacije koje se sastoje od samo jedne stranice</li>
		<li>stranica u interakciji s korisnikom vrši dinamičko prepisivanje trenutnog sadržaja umjesto učitavanja nove stranice.</li>
		</ul>

	</body>
</html>
`;
}
