#!/bin/bash
rm -rf home_page.tar.gz
echo "Under Deploy..."
CE_USERNAME=mhdolatabadia
tar -czvf home_page.tar.gz ./*
sudo scp -F ~/.ssh/config home_page.tar.gz $CE_USERNAME@ce.sharif.edu:public_html/ -F
rm -rf ./*.tar.gz
