    -  antd formik node-sass owl.carousel query-string fire-base fire-baseui react-redux redux react-router-dom react-toastify

-  non-serializable value error
   fix : middleware: getDefaultMiddleware({
   serializableCheck: false,
   })

   add in store

## fire base

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAq1IRE3z679IXnG_oUExle-7p8GXBQA00",
    authDomain: "demostudio-9c144.firebaseapp.com",
    projectId: "demostudio-9c144",
    storageBucket: "demostudio-9c144.appspot.com",
    messagingSenderId: "383758264742",
    appId: "1:383758264742:web:6a7e1995c0d171f7a3c767",
    measurementId: "G-G61QVDXZET"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

<!--  -->

service firebase.storage {
match /b/{bucket}/o {
match /{allPaths=\*\*} {
allow read, write: if request.auth != null;
}
}
}

## test case album

    // useEffect(() => {
    // 	const fetchAlbum = async () => {
    // 		try {
    // 			const response = await dispatch(albumData());

    // 			const res = unwrapResult(response);

    // 			setState(res);
    // 		} catch (error) {
    // 			throw error;
    // 		} finally {
    // 			setLoadingTable(false);
    // 		}
    // 	};
    // 	setLoadingTable(true);
    // 	fetchAlbum();
    // }, [])

<!-- <Row gutter={[16, 16]}>
						<Col md={24} xl={12} className="gutter-row">
							<Form.Item name="editor" label="Nội dung">
								<JoditEditor
									ref={ckeditorRef}
									config={config}
									value={content}
									tabIndex={1} // tabIndex of textarea
									onBlur={handleOnBlurEditor}
									onChange={() => {}}
								/>
							</Form.Item>
						</Col>
						<Col md={24} xl={12} className="demo gutter-row">
							<Form.Item name="demo" label="Xem trước">
								<div className="demo-block">
									<div className="demo-item">
										{ReactHtmlParser(content)}
									</div>
								</div>
							</Form.Item>
						</Col>
					</Row> -->
