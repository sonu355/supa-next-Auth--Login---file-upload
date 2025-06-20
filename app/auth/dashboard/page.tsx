"use client";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import { useState } from "react"

export default function Dashboard(){

    const [previewImage, setPreviewImage] = useState<null>(null)
    const [products, setProducts] = useState<null>(null)
  
    return <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <h3>Add Product</h3>
            <form>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" />
                <small className="text-danger"></small>
              </div>
              <div className="mb-3">
                <label className="form-label">Content</label>
                <textarea className="form-control"></textarea>
                <small className="text-danger"></small>
              </div>
              <div className="mb-3">
                <label className="form-label">Cost</label>
                <input type="number" className="form-control" />
                <small className="text-danger"></small>
              </div>
              <div className="mb-3">
                <label className="form-label">Banner Image</label>
                <div className="mb-2">
                  {previewImage ? (<Image src="" alt="Preview" id="bannerPreview" width="100" height="100" />) : ""
                  }
                </div>
                <input type="file" className="form-control" />
                <small className="text-danger"></small>
              </div>
              <button type="submit" className="btn btn-success w-100">
                Add Product
              </button>
            </form>
          </div>
          <div className="col-md-7">
            <h3>Product List</h3>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Cost</th>
                  <th>Banner Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  products ? (
                    <tr>
                      <td>Sample Product</td>
                      <td>Sample Content</td>
                      <td>$100</td>
                      <td>
                        {/* <Image src="" alt="Sample Product" width="50" /> */}
                      </td>
                      <td>
                        <button className="btn btn-primary btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm" style={{marginLeft: "10px"}}>Delete</button>
                      </td>
                  </tr>
                  ) : (
                    <tr>
                      <td colSpan={5} className="text-center">No products found.</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
}