// FUTURE DEVELOPMENT FEATURES
document.addEventListener('DOMContentLoaded', function() {
  // Setup the 'more' button event listeners
  document.querySelectorAll('.moreBtn').forEach(item => {
      item.addEventListener('click', function() {
          const featureId = this.getAttribute('data-feature');
      const featureContent = {
          'feature1': {
              title: 'Support around 6 eCommerce platforms and 7 marketplaces',
              text: 'Extensive support for a broad range of eCommerce platforms and marketplaces, accommodating around 6 major eCommerce platforms and 7 key marketplaces. This feature will allow businesses to efficiently manage and synchronize their product listings across diverse online selling spaces such as Amazon, eBay, Shopify, and Walmart, among others. By integrating multiple sales channels into one dashboard, businesses can streamline operations, reduce the complexity of managing separate platforms, and ensure consistent product information across all channels. This comprehensive support enhances market reach and operational efficiency, making it easier for businesses to scale and adapt in the competitive eCommerce landscape.'
          },
          'feature2': {
            title: 'Connect multiple channels at once - all in 1 dashboard',
            text: 'Simplifies the management of eCommerce operations by enabling businesses to connect multiple sales channels to a single, unified dashboard. This pivotal feature will allow users to seamlessly manage listings, track inventory, and process orders from various marketplaces like Amazon, eBay, and Shopify all in one place. By consolidating these channels into one intuitive interface, businesses can save significant time and reduce the hassle associated with switching between different platforms. This integration will foster a more efficient workflow, enhances oversight, and improves the accuracy of cross-channel operations, ultimately boosting productivity and ensuring a more cohesive eCommerce strategy.'
          },
          'feature3': {
            title: 'Use a spreadsheet-style interface to quickly edit listings in bulk',
            text: 'This feature will be designed to facilitate quick and efficient bulk edits, allowing users to update multiple listings simultaneously with just a few clicks. Ideal for handling large volumes of product data, the interface enables sellers to adjust prices, update descriptions, change inventory counts, and more across all connected channels. This streamlined approach will significantly reduce the time and effort required for listing management, enhances accuracy, and allows for rapid deployment of updates, ensuring that product information remains current and competitive across all sales platforms.'
          },
          'feature4': {
            title: 'Make use of templates & recipes to create listings quicker than ever before',
            text: 'Will enable users to generate new listings swiftly and efficiently, surpassing previous speeds. By leveraging templates and recipes, businesses will be able to predefine listing attributes, descriptions, and specifications, streamlining the creation process for products with similar characteristics. This innovative approach not only accelerates listing creation but also ensures consistency and accuracy across all listings. With Clara`s Multichannel Listing Software, businesses will create listings quicker than ever before, saving time and resources while maintaining high standards of quality and professionalism.'
          },
          'feature5': {
            title: 'Sync data in real-time across sales channels',
            text: 'This feature will ensure that product information, inventory levels, pricing, and other critical data are continuously updated and harmonized across multiple platforms. By synchronizing data in real-time, businesses can maintain consistency and accuracy across all sales channels, providing customers with up-to-date information and minimizing the risk of errors or discrepancies. This seamless synchronization enhances operational efficiency, improves customer satisfaction, and enables businesses to respond promptly to market changes, ensuring a competitive edge in the dynamic eCommerce landscape.'
          },
          'feature6': {
            title: 'Import orders from other sales channels into software’s main dashboard for better order management',
            text: 'Will streamline operations by consolidating orders from platforms like Amazon, eBay, and Shopify, providing users with a unified view for efficient processing. With orders conveniently aggregated in one location, businesses can easily track, manage, and fulfill customer orders without the need to switch between multiple platforms. This will improve accuracy, reduces processing time, and enhance overall order management efficiency, empowering businesses to deliver exceptional customer service and optimize their eCommerce operations.'
          },
          'feature7': {
            title: 'Allow integration via Facebook & Google Ads',
            text: 'Will enable businesses to extend their reach and drive targeted traffic to their listings across multiple channels. By integrating with Facebook and Google Ads, businesses can create highly targeted ad campaigns, reaching potential customers based on their interests, demographics, and online behavior. This integration will streamline advertising efforts, allowing businesses to maximize their marketing ROI and increase visibility across key platforms. With Clara`s Multichannel Listing Software, businesses will be able to effectively leverage social media and search engine advertising to drive sales and grow their online presence.'  
          },
          'feature8': {
            title: 'Effectively manage large quantities of listings and revise existing product information in bulk in just a couple of clicks by grouping similar listing templates together',
            text: 'Will allow users to group similar listing templates together and make bulk revisions with just a few clicks, streamlining the entire process. By categorizing listings based on common attributes or characteristics, businesses can expedite updates and ensure consistency across their product catalog. This capability not only saves time and effort but also enhances accuracy and ensures that product information remains up-to-date across all sales channels. With Clara`s Multichannel Listing Software, managing large volumes of listings will become a seamless and hassle-free task.'
          },
          'feature9': {
            title: 'Manage prices for all of your listings across key sales channels like Amazon, eBay, Shopify, Walmart and others seamlessly with automatic price revision',
            text: 'This feature will enable users to seamlessly adjust prices for all listings with automatic price revision, ensuring consistency and competitiveness across platforms. With just a few clicks, businesses can set pricing strategies, implement changes, and optimize pricing to maximize profitability and sales performance. This streamlined process will eliminate manual updates and reduce the risk of pricing discrepancies, empowering businesses to stay agile and responsive in dynamic market conditions. With Clara`s Multichannel Listing Software, price management will become a seamless and efficient aspect of eCommerce operations.'   
          },
          'feature10': {
            title: 'Match products to eBay and Amazon catalogues',
            text: 'This innovative feature will simplify the listing creation process by automatically associating products with existing catalogues on these popular platforms. By leveraging product matching capabilities, businesses can ensure accurate and optimized listings, improving visibility and discoverability. This functionality will not only save time but also enhance listing accuracy and reduces the risk of errors. Businesses will be able to effortlessly align their products with eBay and Amazon catalogues, maximizing exposure and driving sales across multiple channels.'
          },
          'feature11': {
            title: 'Keep track of all listings status and resolve errors that are surfaced in the platform with recommended actions.',
            text: 'This essential feature will ensure that businesses can easily monitor the status of all listings across various sales channels from a centralized dashboard. In the event of errors or discrepancies, the platform surfaces these issues and offers actionable recommendations to resolve them promptly. By providing clear guidance on how to address errors, businesses can quickly rectify issues and maintain listing accuracy and integrity. Businesses will be able effectively manage their listings, streamline operations, and uphold a professional online presence across multiple channels.'
          },
          'feature12': {
            title: 'AI-Powered Pricing Optimization',
            text: 'Designed to help Amazon sellers dynamically adjust product prices based on an array of real-time market factors including competitor pricing, market demand, and desired profit margins. This feature leverages advanced machine learning algorithms to analyze historical pricing data and sales performance to recommend optimal pricing strategies. Sellers can set pricing rules based on their business objectives, such as maximizing turnover or profit margins, and the system automatically adjusts prices in response to market changes. This capability ensures that sellers remain competitive and profitable without the constant need for manual oversight. By integrating this tool, sellers can expect increased sales volumes by staying price-competitive and maximizing profit margins through intelligent, data-driven pricing decisions. This enhancement not only saves time but also significantly improves the financial outcomes of promotions and regular sales activities.'
          },
          'feature13': {
            title: 'Sustainability Tracking',
            text: 'Designed to assist Amazon sellers in monitoring and managing the environmental impact of their operations. This feature compiles data on packaging materials, shipping methods, and product life cycles to calculate the carbon footprint of each aspect of the seller’s business. It provides detailed reports on emissions and waste, offering actionable insights and recommendations for reducing environmental impact, such as opting for biodegradable packaging or efficient logistics options. This tool not only helps sellers align with increasing consumer demand for eco-friendly products but also supports compliance with environmental regulations and standards. By facilitating a shift towards sustainability, Clara Technologies enhances brand reputation and customer loyalty, providing a competitive edge in a market that values corporate responsibility. This tool could also potentially qualify sellers for sustainability certifications and badges on their Amazon listings, further boosting visibility and appeal to eco-conscious consumers.' 
          },
          'feature14': {
            title: 'Predictive Analytics for Inventory and Sales',
            text: 'A tool that uses historical sales data and advanced algorithms to forecast future market trends and consumer demands. This predictive insight helps Amazon sellers optimize their inventory levels, avoiding overstocking or understocking situations, and prepare their marketing strategies to align with anticipated sales peaks and troughs. The tool also offers scenario planning features, allowing sellers to simulate different business conditions and see potential outcomes, helping them make informed decisions. By anticipating market trends, sellers can proactively adjust their strategies, ensuring they are always one step ahead in the competitive Amazon marketplace. This feature not only improves operational efficiency but also enhances profitability by aligning product availability with customer demand.'
          },                  
      };



      const content = featureContent[featureId];
            if (content) {
                document.getElementById('featureTitleModal').innerText = content.title;
                document.getElementById('featureTextModal').innerText = content.text;
                document.getElementById('featureModal').style.display = 'block';
            }
        });
    });

    // Handle closing the modal when the close button is clicked
    document.querySelector('.closeBtn').addEventListener('click', function() {
        document.getElementById('featureModal').style.display = 'none';
    });

    // Handle closing the modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        const featureModal = document.getElementById('featureModal');
        // Check if the modal is open and the click is outside the modal content
        if (featureModal.style.display === 'block' && event.target === featureModal) {
            featureModal.style.display = 'none';
        }
    });
});




// REGISTRATION

window.onload = function() {
  // Get the modals
  var registerModal = document.getElementById("registerModal");
  var loginModal = document.getElementById("loginModal");
  var forgotPasswordModal = document.getElementById("forgotPasswordModal");

  // Get the buttons that open the modals
  var registerBtn = document.getElementById("registerBtn");
  var loginBtn = document.getElementById("loginBtn");
  var forgotPasswordLink = document.getElementById("forgotPasswordLink");

  // Get the placeholders for dynamic messages
  var registerMessage = document.getElementById("registerMessage"); // Ensure you have this in your HTML

  // Get the form elements
  var registerForm = document.getElementById("registerForm");
  var loginForm = document.getElementById("loginForm");

  // When the user clicks the link, close the "Login" modal and open the "Forgot Password" modal
  forgotPasswordLink.onclick = function(event) {
    event.preventDefault();
    loginModal.style.display = "none";
    forgotPasswordModal.style.display = "block";
  }

  // Get the <span> elements that close the modals
  var registerSpan = document.getElementsByClassName("close")[0];
  var loginSpan = document.getElementsByClassName("close")[1];
  var forgotPasswordSpan = document.getElementsByClassName("close")[2];

  // When the user clicks the button, open the modal 
  registerBtn.onclick = function() {
    registerModal.style.display = "block";
  }

  loginBtn.onclick = function() {
    loginModal.style.display = "block";
  }

  // When the user clicks the link, close the "Login" modal and open the "Forgot Password" modal
  forgotPasswordLink.onclick = function(event) {
    event.preventDefault();
    loginModal.style.display = "none";
    forgotPasswordModal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  registerSpan.onclick = function() {
    registerModal.style.display = "none";
  }

  loginSpan.onclick = function() {
    loginModal.style.display = "none";
  }

  forgotPasswordSpan.onclick = function() {
    forgotPasswordModal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == registerModal) {
      registerModal.style.display = "none";
    } else if (event.target == loginModal) {
      loginModal.style.display = "none";
    } else if (event.target == forgotPasswordModal) {
      forgotPasswordModal.style.display = "none";
    }
  }

  function checkUserState() {
    let isAuthenticated = localStorage.getItem("userToken") !== null;
    
    if (isAuthenticated) {
      document.getElementById("software").classList.remove("blurred");
      // Update UI to reflect user is logged in...
    } else {
      document.getElementById("software").classList.add("blurred");
      // Update UI to reflect user is not logged in...
    }
  }

  registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Create an object to hold the form data
    var formData = {
      username: username,
      email: email,
      password: password
    };

    // Send a POST request to the server
    fetch('http://localhost:3000/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
.then(response => {
  // Check if the response's content type is JSON before parsing
  const contentType = response.headers.get("content-type");
  if(contentType && contentType.indexOf("application/json") !== -1) {
    return response.json().then(data => ({ success: true, data }));
  } else {
    // If not JSON, read the text and throw an error to be caught later
    return response.text().then(text => { throw new Error(text) });
  }
})
.then(result => {
  if (result.success) {
    var modalContent = document.querySelector('.modal-content');
    var registerForm = document.getElementById("registerForm");
    // Clear the form and other content in the modal
    registerForm.style.display = "none";
    // You could have other elements to hide as well inside the modal-content so make sure to handle those as well if needed
    
    // Display success message within the modal content
    // Create a new paragraph or div for the success message
    var successMessage = document.createElement('p');
    successMessage.innerText = "Register successful. Now log in to see the feature.";
    // Append the success message to the modal content
    modalContent.appendChild(successMessage);
    
    // Close the modal after 5 seconds
    setTimeout(function() {
        var registerModal = document.getElementById("registerModal");
        registerModal.style.display = "none";
        // Reset the modal content for the next open
        successMessage.remove(); // Remove the success message
        registerForm.style.display = "block"; // Show the form again if the modal is reopened
     }, 5000);
  } else {
    console.error('Failed to register:', result.data.message);
  }
})
.catch(err => {
  // An error occurred
  console.error('Failed to register:', err.message);
});

});

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Create an object to hold the form data
    var formData = {
      username: username,
      password: password
    };

    // Send a POST request to the server
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        // Login was successful
        localStorage.setItem("userToken", data.token); // Just an example, adjust according to your actual data structure
        loginModal.style.display = "none";
        registerBtn.style.display = "none";
        loginBtn.style.display = "none";
        checkUserState(); // Re-check user state to update UI
      } else {
        // Login failed
        console.error('Failed to login:', data.message);
      }
    })
    .catch(err => {
      // An error occurred
      console.error('Failed to login:', err);
    });
  }); 
}




window.addEventListener('scroll', function() {
  // Select the entire navbar
  const navbar = document.querySelector('.navbar');
  
  // Calculate the opacity based on the scroll position
  const scroll = window.pageYOffset || document.documentElement.scrollTop;
  let opacity = 1 - scroll / 400; // Adjust the denominator for sensitivity
  opacity = opacity < 0.5 ? 0.5 : opacity; // Ensures a minimum opacity
  
  // Applying the calculated opacity to the navbar
  navbar.style.opacity = opacity;
});











// BLURRING WITH TEXT
document.addEventListener('DOMContentLoaded', (event) => {
  // Check if the .blurred element exists
  const blurredElement = document.querySelector('.blurred');
  if (blurredElement) {
    // Create the overlay container if it does not exist
    const overlayContainer = document.createElement('div');
    overlayContainer.style.position = 'absolute';
    overlayContainer.style.top = '0';
    overlayContainer.style.left = '0';
    overlayContainer.style.width = '100%';
    overlayContainer.style.height = '100%';
    overlayContainer.style.display = 'flex';
    overlayContainer.style.justifyContent = 'center';
    overlayContainer.style.alignItems = 'center';
    overlayContainer.style.pointerEvents = 'none'; // Allow click events to pass through

    // Create a new DIV element for the overlay message and allow pointer events for it
    const overlayMessage = document.createElement('div');
    overlayMessage.textContent = 'Join us to unlock amazing features!'; // Set the text content
    overlayMessage.style.pointerEvents = 'initial'; // Reactivate pointer events for interaction
    overlayMessage.style.color = '#fff';
    overlayMessage.style.fontSize = '24px';
    overlayMessage.style.textAlign = 'center';
    overlayMessage.style.padding = '20px';
    overlayMessage.style.backgroundColor = 'rgba(0,0,0,0.6)';
    overlayMessage.style.borderRadius = '10px';
    overlayMessage.style.boxShadow = '0 4px 8px rgba(164, 149, 196, 0.3)';
    overlayMessage.style.maxWidth = '90%';
    overlayMessage.style.boxSizing = 'border-box';

    // Append the overlay message to the overlay container
    overlayContainer.appendChild(overlayMessage);

    // Insert the overlay container right after the blurred element in the DOM
    blurredElement.parentNode.insertBefore(overlayContainer, blurredElement.nextSibling);
    
    // Update the overlayContainer's position to match the .blurred element if it's not positioned
    const blurredPosition = window.getComputedStyle(blurredElement).position;
    if (blurredPosition !== 'absolute' && blurredPosition !== 'relative' && blurredPosition !== 'fixed') {
      blurredElement.style.position = 'relative';
    }
    overlayContainer.style.position = 'absolute';
  }
});





// ARROWS SCROLLING
document.addEventListener('DOMContentLoaded', () => {
  const topIndicator = document.querySelector('.scroll-indicator'); 
  const bottomIndicator = document.querySelector('.scroll-indicator-development'); 
  const featureContainer = document.querySelector('.feature-container'); 
  const scrollContainer = document.querySelector('.scroll-container'); 

  if (topIndicator && featureContainer) {
      topIndicator.addEventListener('click', () => {
          featureContainer.scrollBy({
              top: 70,
              behavior: 'smooth'
          });
      });
  }

  if (bottomIndicator && scrollContainer) {
      bottomIndicator.addEventListener('click', () => {
          scrollContainer.scrollBy({
              left: 70, 
              behavior: 'smooth'
          });
      });
  }
});




  









