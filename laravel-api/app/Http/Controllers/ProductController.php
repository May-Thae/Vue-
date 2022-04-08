<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\ProductStoreRequest;
use App\Http\Requests\ProductUpdateRequest;

class ProductController extends Controller
{
    public function index()
    {
        return Product::OrderBy('id','desc')->get();
    }

    public function store(ProductStoreRequest $request)
    {
        $product = Product::create($request->only('name','description','price'));
        return $product;
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function update(ProductUpdateRequest $request, Product $product)
    {
        $product->update($request->only('name','description','price'));
        return $product;
    }

    public function destroy(Product $product)
    {
        return $product->delete();
    }
}
