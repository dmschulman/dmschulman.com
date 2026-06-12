import type { APIRoute } from 'astro';
 
export const GET: APIRoute = async ({ site }) => {
  const body = `# robots.txt
# Last updated: ${new Date().toISOString().split('T')[0]}
# https://dmschulman.com/robots.txt

User-agent: *
Allow: /

# CRAWLERS
User-agent: Googlebot
Allow: /
 
User-agent: Bingbot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Slurp
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: ia_archiver
Allow: /

# CRAWLERS - AI
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: ChatGPT Agent
User-agent: OAI-SearchBot
User-agent: OpenAI
User-agent: Operator
Allow: /about
Disallow: /

User-agent: ClaudeBot
User-agent: Claude-Web
User-agent: Claude-User
User-agent: Claude-SearchBot
User-agent: anthropic-ai
Allow: /about
Disallow: /

User-agent: Google-Extended
User-agent: Google-NotebookLM
User-agent: Google-CloudVertexBot
User-agent: GoogleAgent-Mariner
User-agent: GoogleOther
User-agent: GoogleOther-Image
User-agent: GoogleOther-Video
User-agent: Gemini-Deep-Research
User-agent: CloudVertexBot
User-agent: NotebookLM
Allow: /about
Disallow: /

User-agent: FacebookBot
User-agent: facebookexternalhit
User-agent: Meta-ExternalAgent
User-agent: meta-externalagent
User-agent: Meta-ExternalFetcher
User-agent: meta-externalfetcher
User-agent: meta-webindexer
Allow: /about
Disallow: /

User-agent: Applebot-Extended
Allow: /about
Disallow: /

User-agent: Amazonbot
User-agent: AmazonBuyForMe
User-agent: amazon-kendra
User-agent: bedrockbot
Allow: /about
Disallow: /

User-agent: CCBot
Allow: /about
Disallow: /

User-agent: PerplexityBot
User-agent: Perplexity-User
Allow: /about
Disallow: /

User-agent: MistralAI-User
User-agent: MistralAI-User/1.0
Allow: /about
Disallow: /

User-agent: DeepSeekBot
Allow: /about
Disallow: /

User-agent: cohere-ai
User-agent: cohere-training-data-crawler
Allow: /about
Disallow: /

User-agent: Bytespider
User-agent: TikTokSpider
Allow: /about
Disallow: /

User-agent: DuckAssistBot
Allow: /about
Disallow: /

User-agent: Bravebot
Allow: /about
Disallow: /

User-agent: YouBot
Allow: /about
Disallow: /

User-agent: YandexAdditional
User-agent: YandexAdditionalBot
Allow: /about
Disallow: /

User-agent: AI2Bot
User-agent: AI2Bot-DeepResearchEval
User-agent: Ai2Bot-Dolma
Allow: /about
Disallow: /

User-agent: LAIONDownloader
User-agent: laion-huggingface-processor
Allow: /about
Disallow: /

User-agent: Diffbot
Allow: /about
Disallow: /

User-agent: Scrapy
Allow: /about
Disallow: /

User-agent: Crawl4AI
Allow: /about
Disallow: /

User-agent: FirecrawlAgent
Allow: /about
Disallow: /

# SITEMAPS
Sitemap: ${site}sitemap-index.xml
Sitemap: ${site}sitemap-blog.xml
`;
 
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
 