Rails.application.config.middleware.use OmniAuth::Builder do
  provider :twitter, 	"lbF8j2sr62zqk2MsyaNfOsYwc", 	"JRicGQaidP6RnRJv5Nw83Nz9P2S8lMPLJtNtT7WGJhc7sG8rNu",
  {
      secure_image_url: 'true',
      image_size: 'bigger',
      authorize_params: {
        force_login: 'true',
        lang: 'en'
      }
    }
end
