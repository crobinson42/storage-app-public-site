
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

