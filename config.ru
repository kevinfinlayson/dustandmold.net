use Rack::Static,
  :urls => ["/css", "/graphics", "/files", "/images", "/js"],
  :root => "public"

run lamba { |env|
  [
    200,
    {
      'Content-Type' => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
