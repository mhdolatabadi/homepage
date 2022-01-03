#!/bin/bash
rm -rf home_page.tar.gz
echo "Under Deploy..."
CE_USERNAME=mhdolatabadia
tar -czvf home_page.tar.gz * 
sudo scp home_page.tar.gz $CE_USERNAME@ce.sharif.edu:public_html/
rm -rf *.tar.gz
