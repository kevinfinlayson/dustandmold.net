use Rack::Static,
  :urls => ["/css", "/graphics", "/files", "/images", "/js"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type' => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ],
    404,
    {
      'Content-Type' => 'text/html',
    },
    File.open('public/404.html')
}
