const S3Uploader =() => {

  
    const handleFileUpload = (event) => {
    const file=(event.target.files[0]);
    console.log(file);
    }
    return (
        <div>
            <input type="file" onChange={handleFileUpload}/>
        </div>
    )
}
export default S3Uploader