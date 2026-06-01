import os
import pickle
import time
from selenium import webdriver

def save_cookies(driver, path):
    with open(path, 'wb') as file:
        pickle.dump(driver.get_cookies(), file)
    print(f"Cookies saved to {path}")

def main():
    options = webdriver.ChromeOptions()
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--disable-software-rasterizer')
    options.add_argument('--disable-extensions')
    options.add_argument('--disable-logging')
    options.add_argument('--disable-application-cache')
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--disable-popup-blocking')
    options.add_argument('--window-size=1920,1080')
    options.add_experimental_option('excludeSwitches', ['enable-automation'])
    options.add_experimental_option('useAutomationExtension', False)
    options.page_load_strategy = 'normal'

    driver = webdriver.Chrome(options=options)
    driver.get('https://www.facebook.com')

    print("Please log in to Facebook and then press Enter or Ctrl+C to save cookies...")
    try:
        input()  # Wait for user to log in and press Enter
    except KeyboardInterrupt:
        pass  # Handle Ctrl+C

    cookies_path = os.path.join(os.getcwd(), 'cookies.pkl')
    save_cookies(driver, cookies_path)
    driver.quit()

if __name__ == "__main__":
    main()
