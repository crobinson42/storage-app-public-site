
export function adminWebsite(){
        window.open(
            process.env.REACT_APP_ADMIN_SITE_URL
        )
    };
export function scrollToTop(){
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
export function emailButton(){
        <a href="mailto:name@email.com">Link text</a>
      };

